import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import * as Auth from '@app/features/auth/actions/auth.actions';
import * as fromAuth from '@app/features/auth/reducers';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_USER_AUTHED_KEY } from '@app/core/local-storage/keys';
import { AuthedUser } from '@app/models/auth';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private store: Store<fromAuth.State>,
		private localStorageService: LocalStorageService
	) {}

	canActivate(): Observable<boolean> {
		return this.store
			.select(fromAuth.getLoggedIn)
			.map(authed => {
				// Check local storage
				const result = this.localStorageService.getItem(
					LS_USER_AUTHED_KEY
				);
				if (!authed || !result || !result.authedUser) {
					if (
						result &&
						result.authedUser &&
						result.authedUser.token
					) {
						return true;
					}
					this.store.dispatch(new Auth.LoginRedirect());
					return false;
				}

				return true;
			})
			.take(1);
	}
}
