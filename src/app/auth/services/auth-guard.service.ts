import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Auth from '@app/auth/actions/auth.actions';
import * as fromAuth from '@app/auth/reducers';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_USER_KEY } from '@app/core/local-storage/keys';
import { User } from '@app/auth/models/user';

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
				const result = this.localStorageService.getItem(LS_USER_KEY);
				if (!authed || !result || !result.user) {
					if (result && result.user && result.user.token) {
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
