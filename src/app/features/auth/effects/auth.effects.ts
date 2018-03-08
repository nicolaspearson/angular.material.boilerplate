import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';

import { AuthService } from '@app/features/auth/services/auth.service';
import * as Auth from '@app/features/auth/actions/auth.actions';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_USER_AUTHED_KEY } from '@app/core/local-storage/keys';

import { NewPasswordService } from '@app/features/auth/services/new-password.service';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private router: Router,
		private localStorageService: LocalStorageService,
		private newPasswordService: NewPasswordService
	) {}

	// Login
	@Effect()
	login$ = this.actions$
		.ofType(Auth.LOGIN)
		.map((action: Auth.Login) => action.payload)
		.exhaustMap(auth =>
			this.authService
				.login(auth)
				.map(authedUser => {
					this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
						authedUser
					});
					return new Auth.LoginSuccess({ authedUser });
				})
				.catch(error => of(new Auth.LoginFailure(error)))
		);

	@Effect({ dispatch: false })
	loginSuccess$ = this.actions$
		.ofType(Auth.LOGIN_SUCCESS)
		.do(() => this.router.navigate(['/internal']));

	@Effect({ dispatch: false })
	loginRedirect$ = this.actions$
		.ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
		.do(authed => {
			this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
				authedUser: null
			});
			this.router.navigate(['/login']);
		});

	// Sign Up
	@Effect()
	signUp$ = this.actions$
		.ofType(Auth.SIGN_UP)
		.map((action: Auth.NewSignUp) => action.payload)
		.exhaustMap(newUser =>
			this.authService
				.signUp(newUser)
				.map(result => {
					return new Auth.SignUpSuccess(result);
				})
				.catch(error => of(new Auth.SignUpFailure(error)))
		);

	@Effect({ dispatch: false })
	signUpSuccess$ = this.actions$
		.ofType(Auth.SIGN_UP_SUCCESS)
		.do(() => this.router.navigate(['/internal']));

	@Effect({ dispatch: false })
	signUpRedirect$ = this.actions$.ofType(Auth.SIGN_UP_REDIRECT).do(authed => {
		this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
			authedUser: null
		});
		this.router.navigate(['/sign-up']);
	});

	// Forgot Password
	@Effect()
	forgotPassword$ = this.actions$
		.ofType(Auth.FORGOT_PASSWORD)
		.map((action: Auth.SubmitForgotPassword) => action.payload)
		.exhaustMap(newUser =>
			this.authService
				.forgotPassword(newUser)
				.map(authedUser => {
					this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
						authedUser
					});
					return new Auth.ForgotPasswordSuccess({ authedUser });
				})
				.catch(error => of(new Auth.ForgotPasswordFailure(error)))
		);

	@Effect({ dispatch: false })
	forgotPasswordSuccess$ = this.actions$
		.ofType(Auth.FORGOT_PASSWORD_SUCCESS)
		.do(result => {});

	@Effect({ dispatch: false })
	forgotPasswordFailure$ = this.actions$
		.ofType(Auth.FORGOT_PASSWORD_FAILURE)
		.do(error => {});

	@Effect({ dispatch: false })
	forgotPasswordRedirect$ = this.actions$
		.ofType(Auth.FORGOT_PASSWORD_REDIRECT)
		.do(authed => {
			this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
				authedUser: null
			});
			this.router.navigate(['/forgot-password']);
		});

	// Change Password
	@Effect()
	changePassword$: Observable<Action> = this.actions$
		.ofType(Auth.CHANGE_PASSWORD)
		.map((action: Auth.SubmitChangePassword) => action.payload)
		.exhaustMap(changePasswordAuth =>
			this.authService
				.changePassword(changePasswordAuth)
				.map(authedUser => {
					this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
						authedUser
					});
					return new Auth.ChangePasswordSuccess({ authedUser });
				})
				.catch(error => of(new Auth.ChangePasswordFailure(error)))
		);

	@Effect({ dispatch: false })
	changePasswordSuccess$ = this.actions$
		.ofType(Auth.CHANGE_PASSWORD_SUCCESS)
		.do(user => {});

	@Effect({ dispatch: false })
	changePasswordFailure$ = this.actions$
		.ofType(Auth.CHANGE_PASSWORD_FAILURE)
		.do(error => {});

	// Reset Password
	@Effect()
	resetPassword$ = this.actions$
		.ofType(Auth.RESET_PASSWORD)
		.map((action: Auth.SubmitResetPassword) => action.payload)
		.exhaustMap(resetPassword =>
			this.authService
				.resetPassword(resetPassword)
				.map(resetUser => {
					this.newPasswordService.setData({
						resetToken: resetPassword.resetToken,
						newPassword: undefined,
						user: resetUser
					});
					this.router.navigateByUrl('/new-password');
					return new Auth.ResetPasswordSuccess({ user: resetUser });
				})
				.catch(error => of(new Auth.ResetPasswordFailure(error)))
		);

	@Effect({ dispatch: false })
	resetPasswordSuccess$ = this.actions$
		.ofType(Auth.RESET_PASSWORD_SUCCESS)
		.do(user => {});

	@Effect({ dispatch: false })
	resetPasswordFailure$ = this.actions$
		.ofType(Auth.RESET_PASSWORD_FAILURE)
		.do(error => {});

	// New Password
	@Effect()
	newPassword$ = this.actions$
		.ofType(Auth.NEW_PASSWORD)
		.map((action: Auth.SubmitNewPassword) => action.payload)
		.exhaustMap(newPassword =>
			this.authService
				.newPassword(newPassword)
				.map(authedUser => {
					this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
						authedUser
					});
					return new Auth.NewPasswordSuccess({ authedUser });
				})
				.catch(error => of(new Auth.NewPasswordFailure(error)))
		);

	@Effect({ dispatch: false })
	newPasswordSuccess$ = this.actions$
		.ofType(Auth.NEW_PASSWORD_SUCCESS)
		.do(() => this.router.navigate(['/internal']));

	@Effect({ dispatch: false })
	newPasswordFailure$ = this.actions$
		.ofType(Auth.NEW_PASSWORD_FAILURE)
		.do(error => {});

	@Effect({ dispatch: false })
	newPasswordRedirect$ = this.actions$
		.ofType(Auth.NEW_PASSWORD_REDIRECT)
		.do(authed => {
			this.localStorageService.setItem(LS_USER_AUTHED_KEY, {
				authedUser: null
			});
			this.router.navigate(['/new-password']);
		});

	// Verify Account
	@Effect()
	verifyAccount$ = this.actions$
		.ofType(Auth.VERIFY_ACCOUNT)
		.map((action: Auth.SubmitVerifyAccount) => action.payload)
		.exhaustMap(verifyAccount =>
			this.authService
				.verifyAccount(verifyAccount)
				.map(verifiedUser => {
					return new Auth.VerifyAccountSuccess({
						user: verifiedUser
					});
				})
				.catch(error => of(new Auth.VerifyAccountFailure(error)))
		);

	@Effect({ dispatch: false })
	verifyAccountSuccess$ = this.actions$
		.ofType(Auth.VERIFY_ACCOUNT_SUCCESS)
		.do(user => {});

	@Effect({ dispatch: false })
	verifyAccountFailure$ = this.actions$
		.ofType(Auth.VERIFY_ACCOUNT_FAILURE)
		.do(error => {});
}
