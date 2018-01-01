import * as jQuery from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { NgsRevealConfig } from 'ng-scrollreveal';

import { AppConfig } from './config';
import { LayoutService } from './layout/layout.service';

// 3rd Party Styles
import 'styles/material2-theme.scss';
import 'styles/bootstrap.scss';

// Custom Styles
import 'styles/app.scss';
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [LayoutService]
})
export class AppComponent implements OnInit {
	public AppConfig: any;

	constructor(private router: Router, ngsRevealConfig: NgsRevealConfig) {
		// Customize default values of ng-scrollreveal directives used by this component tree
		ngsRevealConfig.duration = 500;
		ngsRevealConfig.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
	}

	ngOnInit() {
		this.AppConfig = AppConfig;

		const currentRoute = this.router.url;

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
				if (event.url === '/login' || event.url === '/') {
					this.AppConfig.isAuthenticated = false;
				} else {
					this.AppConfig.isAuthenticated = true;
				}
			}
			window.scrollTo(0, 0);
		});
	}
}
