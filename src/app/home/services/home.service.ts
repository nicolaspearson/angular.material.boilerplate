import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { StockItem } from '../models/stockItem';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import * as Auth from '../../auth/actions/auth.actions';
import * as fromAuth from '../../auth/reducers';

import { LocalStorageService } from '../../core/local-storage/local-storage.service';
import { LS_USER_KEY } from '../../core/local-storage/keys';
import { User } from '../../auth/models/user';

import { environment } from '@env/environment';

@Injectable()
export class HomeService {
	constructor(
		private http: Http,
		private localStorageService: LocalStorageService,
		private authStore: Store<fromAuth.State>
	) {}

	fetchStockItems(): Observable<StockItem[]> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_KEY);
		if (result && result.user && result.user.token) {
			const user: User = result.user;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${user.token}`);
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
						_throw('An error occurred connecting to the remote data source')
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
		const result = this.localStorageService.getItem(LS_USER_KEY);
		if (result && result.user && result.user.token) {
			const user: User = result.user;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${user.token}`);
			return (
				this.http
					.get(`${environment.api.endpoint}/stockItems/${id}`, options)
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
						_throw('An error occurred connecting to the remote data source')
					)
			);
		}
		return null;
	}

	addStockItem(stockItem: StockItem): Observable<StockItem> {
		// Get the current logged in user
		const result = this.localStorageService.getItem(LS_USER_KEY);
		if (result && result.user && result.user.token) {
			const user: User = result.user;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${user.token}`);
			return (
				this.http
					.post(`${environment.api.endpoint}/stockItems`, stockItem, options)
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
						_throw('An error occurred connecting to the remote data source')
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
		const result = this.localStorageService.getItem(LS_USER_KEY);
		if (result && result.user && result.user.token) {
			const user: User = result.user;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${user.token}`);
			return (
				this.http
					.put(
						`${environment.api.endpoint}/stockItems/${stockItem.stockItemId}`,
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
						_throw('An error occurred connecting to the remote data source')
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
		const result = this.localStorageService.getItem(LS_USER_KEY);
		if (result && result.user && result.user.token) {
			const user: User = result.user;
			const options = new RequestOptions({ headers: new Headers() });
			options.headers.set('Content-Type', 'application/json');
			options.headers.set('Authorization', `Bearer ${user.token}`);
			return (
				this.http
					.delete(
						`${environment.api.endpoint}/stockItems/${stockItem.stockItemId}`,
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
						_throw('An error occurred connecting to the remote data source')
					)
			);
		} else {
			// Dispatch a logout event in order to clear
			// state and storage credentials correctly
			this.authStore.dispatch(new Auth.LoginRedirect());
		}
	}
}
