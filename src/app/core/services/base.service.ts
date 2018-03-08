import { Store } from '@ngrx/store';
import { _throw } from 'rxjs/observable/throw';

import * as Auth from '@app/features/auth/actions/auth.actions';
import * as fromAuth from '@app/features/auth/reducers';

import { HttpError } from '@app/models/http-error';

export abstract class BaseService {
	protected authStore: Store<fromAuth.State>;

	constructor(authStore: Store<fromAuth.State>) {
		this.authStore = authStore;
	}

	public handleError(error: any) {
		let httpError: HttpError;
		if (error && error._body) {
			try {
				httpError = HttpError.newHttpError(JSON.parse(error._body));
			} catch (error) {
				httpError = undefined;
			}
			if (
				error.status === 401 ||
				(httpError && httpError.status === 401)
			) {
				// Dispatch a logout event in order to clear
				// state and storage credentials correctly
				this.authStore.dispatch(new Auth.LoginRedirect());
				return;
			}
		}
		return _throw(
			error._body ||
				'An error occurred connecting to the remote data source'
		);
	}
}
