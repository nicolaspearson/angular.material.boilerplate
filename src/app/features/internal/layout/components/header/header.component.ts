import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { AppConfig } from '@app/config';

import * as Auth from '@app/features/auth/actions/auth.actions';
import * as fromAuth from '@app/features/auth/reducers';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_USER_AUTHED_KEY } from '@app/core/local-storage/keys';

import { ChangePasswordDialogComponent } from '@app/features/auth/dialogs/change-password-dialog/change-password-dialog.component';

@Component({
	selector: 'app-header',
	styles: [],
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	public AppConfig: any;

	constructor(
		private authStore: Store<fromAuth.State>,
		private localStorageService: LocalStorageService,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.AppConfig = AppConfig;
	}

	onLogoutClick() {
		// Dispatch a logout event in order to clear
		// state and storage credentials correctly
		this.authStore.dispatch(new Auth.LoginRedirect());
	}

	onChangePasswordClick() {
		const lsResult = this.localStorageService.getItem(LS_USER_AUTHED_KEY);
		const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
			data: {
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
				token: lsResult.authedUser.token,
				user: lsResult.authedUser.user
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				if (result.state === 1) {
					console.log('Changed Password Success');
				} else {
					console.log('Changed Password Failed');
				}
			}
		});
	}
}
