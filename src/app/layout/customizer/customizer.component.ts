import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '../../config';
import { LayoutService } from '../layout.service';

@Component({
	selector: 'app-customizer',
	styles: [],
	templateUrl: './customizer.component.html'
})
export class AppCustomizerComponent implements OnInit {
	constructor(private layoutService: LayoutService) {}
	public AppConfig: any;

	ngOnInit() {
		this.AppConfig = AppConfig;
	}

	onLayoutChange = () => {
		this.layoutService.updateEChartsState(true);
	};
}
