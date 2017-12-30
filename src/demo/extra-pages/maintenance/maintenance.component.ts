import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../app/config';

@Component({
	selector: 'app-page-maintenance',
	styles: [],
	templateUrl: './maintenance.component.html'
})
export class PageMaintenanceComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
