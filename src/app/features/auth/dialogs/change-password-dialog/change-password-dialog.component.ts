import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {
	Component,
	EventEmitter,
	Inject,
	Input,
	OnInit,
	Output
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';

import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';
import { AuthEffects } from '@app/features/auth/effects/auth.effects';

import { BaseDialogFormComponent } from '@app/components/dialogs/base-dialog-form/base-dialog-form.component';

import User from '@app/models/user';
import { ChangePassword } from '@app/models/auth';

@Component({
	selector: 'app-dialog-change-password',
	templateUrl: './change-password-dialog.component.html',
	styleUrls: []
})
export class ChangePasswordDialogComponent<T> extends BaseDialogFormComponent<
	ChangePassword
> implements OnInit {
	public dialogTitle = 'Change Password';

	@Input()
	set pending(isPending: boolean) {
		if (this.form) {
			if (isPending) {
				this.form.disable();
			} else {
				this.form.enable();
			}
		}
	}

	@Input() errorMessage: string | null;

	pending$ = this.store.select(fromAuth.getChangePasswordPagePending);
	error$ = this.store.select(fromAuth.getChangePasswordPageError);

	constructor(
		public dialogRef: MatDialogRef<
			ChangePasswordDialogComponent<ChangePassword>
		>,
		@Inject(MAT_DIALOG_DATA) public item: ChangePassword,
		private store: Store<fromAuth.State>,
		private authEffects: AuthEffects,
		private toastrService: ToastrService
	) {
		super(dialogRef, item);

		this.subscribeToEffects();
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			oldPassword: [
				this.item.user.password || '',
				[
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(50)
				]
			],
			newPassword: [
				this.item.newPassword || '',
				[
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(50)
				]
			],
			confirmPassword: [
				this.item.confirmPassword || '',
				[
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(50)
				]
			]
		});
		this.setChangeDetectionSubscribers();
	}

	subscribeToEffects() {
		this.authEffects.changePasswordSuccess$.subscribe(
			(action: Auth.ChangePasswordSuccess) => {
				this.toastrService.success('Password Changed', 'Success!');
				this.dialogRef.close({ state: 1, item: action.payload });
			}
		);

		this.authEffects.changePasswordFailure$.subscribe(
			(action: Auth.ChangePasswordFailure) => {
				if (action.payload) {
					this.toastrService.error(action.payload, 'Failed!');
				} else {
					this.toastrService.error('Password NOT Changed', 'Failed!');
				}
				this.dialogRef.close({ state: 0 });
			}
		);
	}

	setChangeDetectionSubscribers() {
		this.form.controls['newPassword'].valueChanges.subscribe(data => {
			const resultConfirmPassword: string = this.form.get(
				'confirmPassword'
			).value;
			if (resultConfirmPassword && resultConfirmPassword.length > 0) {
				if (resultConfirmPassword !== data) {
					this.errorMessage = 'Passwords do not match';
				} else {
					this.errorMessage = null;
				}
			}
		});
		this.form.controls['confirmPassword'].valueChanges.subscribe(data => {
			const resultNewPassword: string = this.form.get('newPassword')
				.value;
			if (resultNewPassword && resultNewPassword.length > 0) {
				if (resultNewPassword !== data) {
					this.errorMessage = 'Passwords do not match';
				} else {
					this.errorMessage = null;
				}
			}
		});
	}

	public onSubmitClick(): void {
		if (this.form.valid) {
			const changePassword: ChangePassword = this.form.value;
			changePassword.user = this.item.user;
			changePassword.user.password = changePassword.oldPassword;
			changePassword.token = this.item.token;
			delete changePassword.oldPassword;
			if (changePassword.newPassword === changePassword.confirmPassword) {
				delete changePassword.confirmPassword;
				this.form.disable();
				this.store.dispatch(
					new Auth.SubmitChangePassword(changePassword)
				);
			}
		}
	}
}
