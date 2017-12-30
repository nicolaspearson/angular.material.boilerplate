import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../config';

@Component({
	selector: 'app-page-careers',
	styles: [],
	templateUrl: './careers.component.html'
})
export class PageCareersComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
