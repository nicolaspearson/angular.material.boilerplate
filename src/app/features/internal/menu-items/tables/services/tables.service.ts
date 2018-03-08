import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Headers, Http, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { StockItem } from '@app/models/stock-item';

import * as Auth from '@app/features/auth/actions/auth.actions';
import * as fromAuth from '@app/features/auth/reducers';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_USER_AUTHED_KEY } from '@app/core/local-storage/keys';
import { AuthedUser } from '@app/models/auth';

import { environment } from '@env/environment';

@Injectable()
export class TablesService {
	constructor(
		private http: Http,
		private localStorageService: LocalStorageService,
		private authStore: Store<fromAuth.State>
	) {}

	fetchStockItems(): Observable<StockItem[]> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_AUTHED_KEY);
		if (result && result.user && result.user.token) {
			const authedUser: AuthedUser = result.authedUser;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${authedUser.token}`);
			return (
				this.http
					.get(`${environment.api.endpoint}/stockItems`, options)
					// If successful, dispatch success action with result
					.map(res => {
						if (res && res.status === 200 && res.text()) {
							const jsonResponse = JSON.parse(res.text());
							if (jsonResponse && jsonResponse.data) {
								return jsonResponse.data;
							}
						}
						_throw('Fetching stock items failed');
					})
					// If request fails, dispatch failed action
					.catch(() =>
						_throw(
							'An error occurred connecting to the remote data source'
						)
					)
			);
		} else {
			// Dispatch a logout event in order to clear
			// state and storage credentials correctly
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}

	retrieveStockItem(id: string): Observable<StockItem> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_AUTHED_KEY);
		if (result && result.user && result.user.token) {
			const authedUser: AuthedUser = result.authedUser;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${authedUser.token}`);
			return (
				this.http
					.get(
						`${environment.api.endpoint}/stockItems/${id}`,
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
						_throw('Fetching stock item failed');
					})
					// If request fails, dispatch failed action
					.catch(() =>
						_throw(
							'An error occurred connecting to the remote data source'
						)
					)
			);
		}
		return null;
	}

	addStockItem(stockItem: StockItem): Observable<StockItem> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_AUTHED_KEY);
		if (result && result.user && result.user.token) {
			const authedUser: AuthedUser = result.authedUser;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${authedUser.token}`);
			return (
				this.http
					.post(
						`${environment.api.endpoint}/stockItems`,
						stockItem,
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
						_throw('Adding stock item failed');
					})
					// If request fails, dispatch failed action
					.catch(() =>
						_throw(
							'An error occurred connecting to the remote data source'
						)
					)
			);
		} else {
			// Dispatch a logout event in order to clear
			// state and storage credentials correctly
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}

	updateStockItem(stockItem: StockItem): Observable<StockItem> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_AUTHED_KEY);
		if (result && result.user && result.user.token) {
			const authedUser: AuthedUser = result.authedUser;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${authedUser.token}`);
			return (
				this.http
					.put(
						`${environment.api.endpoint}/stockItems/${
							stockItem.stockItemId
						}`,
						stockItem,
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
						_throw('Updating stock item failed');
					})
					// If request fails, dispatch failed action
					.catch(() =>
						_throw(
							'An error occurred connecting to the remote data source'
						)
					)
			);
		} else {
			// Dispatch a logout event in order to clear
			// state and storage credentials correctly
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}

	removeStockItem(stockItem: StockItem): Observable<StockItem> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_AUTHED_KEY);
		if (result && result.user && result.user.token) {
			const authedUser: AuthedUser = result.authedUser;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${authedUser.token}`);
			return (
				this.http
					.delete(
						`${environment.api.endpoint}/stockItems/${
							stockItem.stockItemId
						}`,
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
						_throw('Removing stock item failed');
					})
					// If request fails, dispatch failed action
					.catch(() =>
						_throw(
							'An error occurred connecting to the remote data source'
						)
					)
			);
		} else {
			// Dispatch a logout event in order to clear
			// state and storage credentials correctly
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}
}
