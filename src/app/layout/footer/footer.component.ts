import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../config';

@Component({
	selector: 'app-footer',
	styles: [],
	templateUrl: './footer.component.html'
})
export class AppFooterComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
