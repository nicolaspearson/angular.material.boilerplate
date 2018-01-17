import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppConfig } from '@app/config';

import * as Auth from '@app/auth/actions/auth.actions';
import * as fromAuth from '@app/auth/reducers';

@Component({
	selector: 'app-header',
	styles: [],
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	public AppConfig: any;

	constructor(private authStore: Store<fromAuth.State>) {}

	ngOnInit() {
		this.AppConfig = AppConfig;
	}

	onLogoutClick() {
		// Dispatch a logout event in order to clear
		// state and storage credentials correctly
		this.authStore.dispatch(new Auth.LoginRedirect());
	}
}
