import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '../../config';

@Component({
	selector: 'app-sidenav',
	styles: [],
	templateUrl: './sidenav.component.html'
})
export class AppSidenavComponent implements OnInit {
	AppConfig;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}

	toggleCollapsedNav() {
		this.AppConfig.navCollapsed = !this.AppConfig.navCollapsed;
	}
}
