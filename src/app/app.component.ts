import * as jQuery from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { NgsRevealConfig } from 'ng-scrollreveal';

import { Store } from '@ngrx/store';

import * as Auth from '@app/features/auth/actions/auth.actions';
import * as fromAuth from '@app/features/auth/reducers';

import { AppConfig } from '@app/config';

// Internal
import { LayoutService } from '@app/features/internal/layout/services/layout.service';

// Demo
import { DemoLayoutService } from 'demo/demo-layout/services/demo-layout.service';

// 3rd Party Styles
import 'styles/material2-theme.scss';

// Demo Styles
import 'styles/demo/pages.scss';
import 'styles/demo/layout.scss';
import 'styles/demo/ui.scss';

// Custom Styles
import 'styles/app.scss';
import 'styles/theme.scss';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [LayoutService, DemoLayoutService]
})
export class AppComponent implements OnInit {
	public AppConfig: any;

	isAuthenticated: boolean;

	showToolbar: boolean;

	constructor(
		private router: Router,
		private ngsRevealConfig: NgsRevealConfig,
		private authStore: Store<fromAuth.State>
	) {
		// Customize default values of ng-scrollreveal directives used by this component tree
		ngsRevealConfig.duration = 500;
		ngsRevealConfig.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
	}

	ngOnInit() {
		this.AppConfig = AppConfig;
		this.isAuthenticated = AppConfig.isAuthenticated;

		const currentRoute = this.router.url;

		if (
			currentRoute.startsWith('/demo') ||
			currentRoute.startsWith('/internal')
		) {
			this.showToolbar = false;
		} else {
			this.showToolbar = true;
		}

		if (currentRoute === '/login' || currentRoute === '/') {
			this.AppConfig.isAuthenticated = false;
		} else {
			this.AppConfig.isAuthenticated = true;
		}

		// Scroll to top on route change
		this.router.events.subscribe(event => {
			if (!(event instanceof NavigationEnd)) {
				return;
			} else if (event instanceof NavigationEnd) {
				if (
					event.url.startsWith('/demo') ||
					event.url.startsWith('/internal')
				) {
					this.showToolbar = false;
				} else {
					this.showToolbar = true;
				}

				if (event.url === '/login' || event.url === '/') {
					this.AppConfig.isAuthenticated = false;
				} else {
					this.AppConfig.isAuthenticated = true;
				}
			}
			window.scrollTo(0, 0);
		});
	}

	onDemoClick() {
		this.router.navigateByUrl('/demo/dashboard');
	}

	onLoginClick() {
		this.router.navigateByUrl('/login');
	}

	onLogoutClick() {
		// Dispatch a logout event in order to clear
		// state and storage credentials correctly
		this.authStore.dispatch(new Auth.LoginRedirect());
	}
}
