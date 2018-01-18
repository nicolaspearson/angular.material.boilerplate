import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '@app/config';
import { LayoutService } from '@app/internal/layout/services/layout.service';

@Component({
	selector: 'app-customizer',
	styles: [],
	templateUrl: './customizer.component.html'
})
export class CustomizerComponent implements OnInit {
	public AppConfig: any;

	constructor(private layoutService: LayoutService) {}

	ngOnInit() {
		this.AppConfig = AppConfig;
	}

	onLayoutChange = () => {
		this.layoutService.updateEChartsState(true);
	};
}
