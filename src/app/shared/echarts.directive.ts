import {
	Directive,
	ElementRef,
	Input,
	HostListener,
	AfterViewInit,
	OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import echarts from 'echarts';
import 'echarts/theme/macarons';

import { LayoutService } from '../layout/layout.service';

@Directive({ selector: '[appECharts]' })
export class EChartsDirective implements AfterViewInit, OnDestroy {
	el: ElementRef;
	subscription: Subscription;
	constructor(el: ElementRef, private layoutService: LayoutService) {
		this.el = el;
		this.subscription = layoutService.echartsState$.subscribe(state => {
			this.resizeChart(state);
		});
	}

	@Input() EChartsOptions: any;
	private myChart;
	private timer;

	ngAfterViewInit() {
		this.myChart = echarts.init(this.el.nativeElement, 'macarons');
		if (!this.EChartsOptions) {
			return;
		}

		this.myChart.setOption(this.EChartsOptions);
	}

	ngOnDestroy() {
		if (this.myChart) {
			this.myChart.dispose();
			this.myChart = null;
		}
	}

	resizeChart = state => {
		setTimeout(() => {
			// Important
			if (this.myChart) {
				this.myChart.resize();
			}
		}, 300);
	};

	@HostListener('window:resize')
	onResize() {
		this.resizeChart(true);
	}
}
