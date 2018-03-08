import { Component, OnInit } from '@angular/core';

import { AppConfig } from '@app/config';

import { environment as env } from '@env/environment';

@Component({
	selector: 'app-footer',
	styles: [],
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
	public AppConfig: any;

	version = env.versions.app;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
