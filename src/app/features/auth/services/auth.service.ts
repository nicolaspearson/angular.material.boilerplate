import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import * as Auth from '@app/features/auth/actions/auth.actions';
import * as fromAuth from '@app/features/auth/reducers';

import {
	AuthedUser,
	Authenticate,
	ChangePassword,
	ForgotPassword,
	NewPassword,
	ResetPassword,
	VerifyAccount
} from '@app/models/auth';
import { SignUp } from '@app/models/sign-up';
import User from '@app/models/user';

import { environment } from '@env/environment';
import { HttpError } from '@app/models/http-error';

@Injectable()
export class AuthService {
	constructor(
		private http: Http,
		protected authStore: Store<fromAuth.State>
	) {}

	login({ username, password }: Authenticate): Observable<AuthedUser> {
		const options = new RequestOptions({ headers: new Headers() });
		options.headers.set('Content-Type', 'application/json');
		options.headers.set('x-access-token', environment.api.accessToken);

		let data = { username, password, emailAddress: undefined };
		const emailRegex = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
		if (emailRegex.test(username)) {
			data = { username: undefined, password, emailAddress: username };
		}

		return (
			this.http
				.post(`${environment.api.endpoint}/users/login`, data, options)
				// If successful, dispatch success action with result
				.map(res => {
					if (res && res.status === 200 && res.text()) {
						const jsonResponse = JSON.parse(res.text());
						if (jsonResponse && jsonResponse.data) {
							return jsonResponse.data;
						}
					}
					_throw('Login Failed');
				})
				// If request fails, dispatch failed action
				.catch(() => _throw('Invalid username or password'))
		);
	}

	logout() {
		return of(true);
	}

	signUp({
		username,
		password,
		emailAddress
	}: SignUp): Observable<AuthedUser> {
		const options = new RequestOptions({ headers: new Headers() });
		options.headers.set('Content-Type', 'application/json');
		options.headers.set('x-access-token', environment.api.accessToken);
		return (
			this.http
				.post(
					`${environment.api.endpoint}/users`,
					{ username, password, emailAddress },
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
					_throw('Sign Up Failed');
				})
				// If request fails, dispatch failed action
				.catch(error =>
					this.handleAuthError(error, 'Invalid credentials')
				)
		);
	}

	forgotPassword({ emailAddress }: ForgotPassword): Observable<AuthedUser> {
		if (emailAddress) {
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('x-access-token', environment.api.accessToken);
			return (
				this.http
					.post(
						`${environment.api.endpoint}/users/forgotPassword`,
						{ emailAddress },
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
						_throw('Invalid email address');
					})
					// If request fails, dispatch failed action
					.catch(() => _throw('Invalid email address'))
			);
		} else {
			this.authStore.dispatch(
				new Auth.ForgotPasswordFailure('Invalid email address')
			);
		}
	}

	changePassword({
		newPassword,
		token,
		user
	}: ChangePassword): Observable<AuthedUser> {
		if (token) {
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${token}`);
			return (
				this.http
					.post(
						`${environment.api.endpoint}/users/changePassword`,
						{ newPassword, user },
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
						_throw('Change Password Failed');
					})
					// If request fails, dispatch failed action
					.catch(() => _throw('Invalid credentials'))
			);
		} else {
			// Dispatch a logout event in order to clear
			// state and storage credentials correctly
			this.authStore.dispatch(
				new Auth.ChangePasswordFailure('Invalid Token')
			);
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}

	resetPassword({ resetToken }: ResetPassword): Observable<User> {
		if (resetToken) {
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('x-access-token', environment.api.accessToken);
			return (
				this.http
					.post(
						`${environment.api.endpoint}/users/resetPassword`,
						{ resetToken },
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
						_throw('Token is invalid or has expired');
					})
					// If request fails, dispatch failed action
					.catch(() => _throw('Token is invalid or has expired'))
			);
		} else {
			this.authStore.dispatch(
				new Auth.ResetPasswordFailure('Token is invalid or has expired')
			);
			this.authStore.dispatch(new Auth.ForgotPasswordRedirect());
		}
	}

	newPassword({
		resetToken,
		newPassword,
		user
	}: NewPassword): Observable<AuthedUser> {
		if (resetToken && newPassword && user) {
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('x-access-token', environment.api.accessToken);
			return (
				this.http
					.post(
						`${environment.api.endpoint}/users/newPassword`,
						{ resetToken, newPassword, user },
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
						_throw('Applying New Password Failed');
					})
					// If request fails, dispatch failed action
					.catch(error => _throw(error))
			);
		} else {
			this.authStore.dispatch(
				new Auth.NewPasswordFailure('Invalid Token')
			);
			this.authStore.dispatch(new Auth.NewPasswordRedirect());
		}
	}

	verifyAccount({ verificationToken }: VerifyAccount): Observable<User> {
		if (verificationToken) {
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('x-access-token', environment.api.accessToken);
			return (
				this.http
					.post(
						`${environment.api.endpoint}/users/verifyAccount`,
						{ verificationToken },
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
						_throw('Token is invalid or has expired');
					})
					// If request fails, dispatch failed action
					.catch(() => _throw('Token is invalid or has expired'))
			);
		} else {
			this.authStore.dispatch(
				new Auth.VerifyAccountFailure('Token is invalid or has expired')
			);
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}

	private handleAuthError(error: any, backupDetailMessage?: string) {
		let httpError: HttpError;
		try {
			httpError = HttpError.newHttpError(JSON.parse(error._body));
		} catch (error) {
			httpError = undefined;
		}
		return _throw(
			httpError
				? httpError.detail
				: backupDetailMessage || 'Invalid credentials'
		);
	}
}
