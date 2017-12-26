import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth.actions';

import { LocalStorageService } from '../../core/local-storage/local-storage.service';
import { LS_USER_KEY } from '../../core/local-storage/keys';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private router: Router,
		private localStorageService: LocalStorageService
	) {}

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
		.do(() => this.router.navigate(['/']));

	@Effect({ dispatch: false })
	loginRedirect$ = this.actions$
		.ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
		.do(authed => {
			this.localStorageService.setItem(LS_USER_KEY, { user: null });
			this.router.navigate(['/login']);
		});
}
