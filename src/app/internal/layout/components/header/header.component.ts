import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../../config';

@Component({
	selector: 'app-header',
	styles: [],
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
