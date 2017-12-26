import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';

import * as Auth from './auth/actions/auth.actions';
import * as fromAuth from './auth/reducers';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Angular Material Boilerplate';
	logo = require('../assets/logo.png');
	isAuthenticated;

	constructor(
		private router: Router,
		private authStore: Store<fromAuth.State>
	) {
		const currentRoute = router.url;
		if (currentRoute === '/login') {
			this.isAuthenticated = false;
		} else {
			this.isAuthenticated = true;
		}

		// Listen for route changes
		router.events.subscribe(val => {
			if (val instanceof NavigationEnd) {
				if (val.url === '/login') {
					this.isAuthenticated = false;
				} else {
					this.isAuthenticated = true;
				}
			}
		});
	}

	onLogoutClick() {
		// Dispatch a logout event in order to clear
		// state and storage credentials correctly
		this.authStore.dispatch(new Auth.LoginRedirect());
	}
}
