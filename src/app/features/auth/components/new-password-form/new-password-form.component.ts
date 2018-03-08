import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NewPassword } from '@app/models/auth';

import { routerTransition } from '@app/core';
import { NewPasswordService } from '@app/features/auth/services/new-password.service';

@Component({
	selector: 'app-new-password-form',
	templateUrl: './new-password-form.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class NewPasswordFormComponent implements OnInit {
	@Input()
	set pending(isPending: boolean) {
		if (isPending) {
			this.form.disable();
		} else {
			this.form.enable();
		}
	}

	@Input() errorMessage: string | null;

	@Output() submitted = new EventEmitter<NewPassword>();

	form: FormGroup = new FormGroup({
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.maxLength(50)
		]),
		confirmPassword: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.maxLength(50)
		])
	});

	constructor(private newPasswordService: NewPasswordService) {}

	ngOnInit() {
		this.setChangeDetectionSubscribers();
	}

	setChangeDetectionSubscribers() {
		this.form.controls['password'].valueChanges.subscribe(data => {
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
			const resultPassword: string = this.form.get('password').value;
			if (resultPassword && resultPassword.length > 0) {
				if (resultPassword !== data) {
					this.errorMessage = 'Passwords do not match';
				} else {
					this.errorMessage = null;
				}
			}
		});
	}

	submit() {
		const newPassword: NewPassword = this.newPasswordService.getData();
		if (this.form.valid && newPassword) {
			const password = this.form.get('password').value;
			const confirmPassword = this.form.get('confirmPassword').value;

			if (password === confirmPassword) {
				newPassword.newPassword = password;
				this.submitted.emit(newPassword);
			} else {
				this.errorMessage = 'Passwords do not match';
			}
		} else {
			this.errorMessage = 'The token is not valid or has expired';
		}
	}
}
