import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../../app/config';

@Component({
	selector: 'app-demo-footer',
	styles: [],
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}
}
