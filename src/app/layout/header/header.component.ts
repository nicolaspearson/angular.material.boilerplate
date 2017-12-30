import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../app/config';

@Component({
	selector: 'app-header',
	styles: [],
	templateUrl: './header.component.html'
})
export class AppHeaderComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
