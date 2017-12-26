import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { environment } from '@env/environment';

@Injectable()
export class AuthService {
	constructor(private http: Http) {}

	login({ username, password }: Authenticate): Observable<User> {
		const options = new RequestOptions({ headers: new Headers() });
		options.headers.set('Content-Type', 'application/json');
		options.headers.set('x-access-token', environment.api.accessToken);
		return (
			this.http
				.post(
					`${environment.api.endpoint}/users/login`,
					{ username, password },
					options
				)
				// If successful, dispatch success action with result
				.map(res => {
					if (res && res.status === 200 && res.text()) {
						const jsonResponse = JSON.parse(res.text());
						if (jsonResponse && jsonResponse.data) {
							return jsonResponse.data;
						}
					}
					_throw('Login failed');
				})
				// If request fails, dispatch failed action
				.catch(() => _throw('Invalid username or password'))
		);
	}

	logout() {
		return of(true);
	}
}
