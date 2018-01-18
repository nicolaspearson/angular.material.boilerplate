import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '@app/auth/services/auth.service';
import * as Auth from '@app/auth/actions/auth.actions';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_USER_KEY } from '@app/core/local-storage/keys';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private router: Router,
		private localStorageService: LocalStorageService
	) {}

	// Login
	@Effect()
	login$ = this.actions$
		.ofType(Auth.LOGIN)
		.map((action: Auth.Login) => action.payload)
		.exhaustMap(auth =>
			this.authService
				.login(auth)
				.map(user => {
					this.localStorageService.setItem(LS_USER_KEY, {
						user
					});
					return new Auth.LoginSuccess({ user });
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
			this.localStorageService.setItem(LS_USER_KEY, { user: null });
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
				.map(user => {
					this.localStorageService.setItem(LS_USER_KEY, {
						user
					});
					return new Auth.SignUpSuccess({ user });
				})
				.catch(error => of(new Auth.SignUpFailure(error)))
		);

	@Effect({ dispatch: false })
	signUpSuccess$ = this.actions$
		.ofType(Auth.SIGN_UP_SUCCESS)
		.do(() => this.router.navigate(['/internal']));

	@Effect({ dispatch: false })
	signUpRedirect$ = this.actions$.ofType(Auth.SIGN_UP_REDIRECT).do(authed => {
		this.localStorageService.setItem(LS_USER_KEY, { user: null });
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
				.map(user => {
					this.localStorageService.setItem(LS_USER_KEY, {
						user
					});
					return new Auth.ForgotPasswordSuccess({ user });
				})
				.catch(error => of(new Auth.ForgotPasswordFailure(error)))
		);

	@Effect({ dispatch: false })
	forgotPasswordSuccess$ = this.actions$
		.ofType(Auth.FORGOT_PASSWORD_SUCCESS)
		.do(() => this.router.navigate(['/login']));

	@Effect({ dispatch: false })
	forgotPasswordRedirect$ = this.actions$
		.ofType(Auth.FORGOT_PASSWORD_REDIRECT)
		.do(authed => {
			this.localStorageService.setItem(LS_USER_KEY, { user: null });
			this.router.navigate(['/forgot-password']);
		});
}
