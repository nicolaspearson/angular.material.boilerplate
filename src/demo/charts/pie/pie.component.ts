import { Component } from '@angular/core';
import { ChartConfig } from '../charts.config';

@Component({
	selector: 'app-chart-pie',
	styles: [],
	templateUrl: './pie.component.html'
})
export class ChartPieComponent {
	config = ChartConfig;

	pie1 = {
		title: {
			text: 'Traffic Source',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data: ['Direct', 'Email', 'Affiliate', 'Video Ads', 'Search'],
			textStyle: {
				color: this.config.textColor
			}
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: { show: true, title: 'save' }
			}
		},
		calculable: true,
		series: [
			{
				name: 'Visit source',
				type: 'pie',
				radius: '55%',
				center: ['50%', '60%'],
				data: [
					{ value: 335, name: 'Direct' },
					{ value: 310, name: 'Email' },
					{ value: 234, name: 'Affiliate' },
					{ value: 135, name: 'Video Ads' },
					{ value: 1548, name: 'Search' }
				]
			}
		]
	};
	pie2 = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data: ['Direct', 'Email', 'Affiliate', 'Video Ads', 'Search'],
			textStyle: {
				color: this.config.textColor
			}
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: { show: true, title: 'save' }
			}
		},
		calculable: true,
		series: [
			{
				name: 'Traffic source',
				type: 'pie',
				radius: ['50%', '70%'],
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					},
					emphasis: {
						label: {
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					}
				},
				data: [
					{ value: 335, name: 'Direct' },
					{ value: 310, name: 'Email' },
					{ value: 234, name: 'Affiliate' },
					{ value: 135, name: 'Video Ads' },
					{ value: 1548, name: 'Search' }
				]
			}
		]
	};
	pie4 = {
		title: {
			text: 'Nightingale rose diagram',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			x: 'center',
			y: 'bottom',
			data: [
				'rose1',
				'rose2',
				'rose3',
				'rose4',
				'rose5',
				'rose6',
				'rose7',
				'rose8'
			],
			textStyle: {
				color: this.config.textColor
			}
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: { show: true, title: 'save' }
			}
		},
		calculable: true,
		series: [
			{
				name: 'Radius model',
				type: 'pie',
				radius: [20, 110],
				center: ['25%', 200],
				roseType: 'radius',
				width: '40%', // for funnel
				max: 40, // for funnel
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					},
					emphasis: {
						label: {
							show: true
						},
						labelLine: {
							show: true
						}
					}
				},
				data: [
					{ value: 10, name: 'rose1' },
					{ value: 5, name: 'rose2' },
					{ value: 15, name: 'rose3' },
					{ value: 25, name: 'rose4' },
					{ value: 20, name: 'rose5' },
					{ value: 35, name: 'rose6' },
					{ value: 30, name: 'rose7' },
					{ value: 40, name: 'rose8' }
				]
			},
			{
				name: 'Area model',
				type: 'pie',
				radius: [30, 110],
				center: ['75%', 200],
				roseType: 'area',
				x: '50%', // for funnel
				max: 40, // for funnel
				sort: 'ascending', // for funnel
				data: [
					{ value: 10, name: 'rose1' },
					{ value: 5, name: 'rose2' },
					{ value: 15, name: 'rose3' },
					{ value: 25, name: 'rose4' },
					{ value: 20, name: 'rose5' },
					{ value: 35, name: 'rose6' },
					{ value: 30, name: 'rose7' },
					{ value: 40, name: 'rose8' }
				]
			}
		]
	};
}
