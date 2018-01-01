import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '../../../../app/config';
import { DemoLayoutService } from '../../services/demo-layout.service';

@Component({
	selector: 'app-demo-customizer',
	styles: [],
	templateUrl: './customizer.component.html'
})
export class CustomizerComponent implements OnInit {
	public AppConfig: any;

	constructor(private demoLayoutService: DemoLayoutService) {}

	ngOnInit() {
		this.AppConfig = AppConfig;
	}

	onLayoutChange = () => {
		this.demoLayoutService.updateEChartsState(true);
	};
}
