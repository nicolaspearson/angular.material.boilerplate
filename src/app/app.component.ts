import * as jQuery from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';

import * as Auth from './auth/actions/auth.actions';
import * as fromAuth from './auth/reducers';

import { AppConfig } from './config';
import { LayoutService } from './layout/layout.service';

// 3rd Party Styles
import 'styles/material2-theme.scss';
import 'styles/bootstrap.scss';

// Custom Styles
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [LayoutService]
})
export class AppComponent implements OnInit {
	public AppConfig: any;
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
	}

	ngOnInit() {
		this.AppConfig = AppConfig;

		// Scroll to top on route change
		this.router.events.subscribe(evt => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			} else if (evt instanceof NavigationEnd) {
				if (evt.url === '/login') {
					this.isAuthenticated = false;
				} else {
					this.isAuthenticated = true;
				}
			}
			window.scrollTo(0, 0);
		});
	}

	onLogoutClick() {
		// Dispatch a logout event in order to clear
		// state and storage credentials correctly
		this.authStore.dispatch(new Auth.LoginRedirect());
	}
}
