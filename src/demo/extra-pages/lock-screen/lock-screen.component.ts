import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../app/config';

@Component({
	selector: 'app-page-lock-screen',
	styles: [],
	templateUrl: './lock-screen.component.html'
})
export class PageLockScreenComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
