import { Component } from '@angular/core';
import { ChartConfig } from '../charts.config';

@Component({
	selector: 'app-chart-funnel',
	styles: [],
	templateUrl: './funnel.component.html'
})
export class ChartFunnelComponent {
	config = ChartConfig;

	funnel1 = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c}%'
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: { show: true, title: 'save' }
			}
		},
		legend: {
			data: ['Display', 'Click', 'Visit', 'Question', 'Order'],
			textStyle: {
				color: this.config.textColor
			}
		},
		calculable: true,
		series: [
			{
				name: 'Funnel',
				type: 'funnel',
				x: '10%',
				y: 60,
				// x2: 80,
				y2: 60,
				width: '80%',
				// height: {totalHeight} - y - y2,
				min: 0,
				max: 100,
				minSize: '0%',
				maxSize: '100%',
				sort: 'descending', // 'ascending', 'descending'
				gap: 10,
				itemStyle: {
					normal: {
						borderColor: '#fff',
						borderWidth: 1,
						label: {
							show: true,
							position: 'inside'
						},
						labelLine: {
							show: false,
							length: 10,
							lineStyle: {
								width: 1,
								type: 'solid'
							}
						}
					},
					emphasis: {
						label: {
							show: true,
							formatter: '{b}:{c}%'
						},
						labelLine: {
							show: true
						}
					}
				},
				data: [
					{ value: 60, name: 'Visit' },
					{ value: 40, name: 'Question' },
					{ value: 20, name: 'Order' },
					{ value: 80, name: 'Click' },
					{ value: 100, name: 'Display' }
				]
			}
		]
	};
	funnel2 = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c}%'
		},
		toolbox: {
			feature: {
				saveAsImage: { show: true, title: 'save' }
			}
		},
		legend: {
			data: ['Display', 'Click', 'Visit', 'Question', 'Order'],
			textStyle: {
				color: this.config.textColor
			}
		},
		series: [
			{
				name: 'Forecast',
				type: 'funnel',
				left: '10%',
				width: '80%',
				label: {
					normal: {
						formatter: '{b} Forecast'
					},
					emphasis: {
						position: 'inside',
						formatter: '{b} Forecast: {c}%'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					normal: {
						opacity: 0.7
					}
				},
				data: [
					{ value: 60, name: 'Visit' },
					{ value: 40, name: 'Question' },
					{ value: 20, name: 'Order' },
					{ value: 80, name: 'Click' },
					{ value: 100, name: 'Display' }
				]
			},
			{
				name: 'Reality',
				type: 'funnel',
				left: '10%',
				width: '80%',
				maxSize: '80%',
				label: {
					normal: {
						position: 'inside',
						formatter: '{c}%',
						textStyle: {
							color: '#fff'
						}
					},
					emphasis: {
						position: 'inside',
						formatter: '{b} Reality: {c}%'
					}
				},
				itemStyle: {
					normal: {
						opacity: 0.5,
						borderColor: '#fff',
						borderWidth: 2
					}
				},
				data: [
					{ value: 30, name: 'Visit' },
					{ value: 10, name: 'Ask' },
					{ value: 5, name: 'Order' },
					{ value: 50, name: 'Click' },
					{ value: 80, name: 'Display' }
				]
			}
		]
	};
	funnel3 = {
		title: {
			text: 'Funnel',
			subtext: 'Fake Data'
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c}%'
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: { show: true, title: 'save' }
			}
		},
		legend: {
			data: ['Display', 'Click', 'Visit', 'Question', 'Order'],
			textStyle: {
				color: this.config.textColor
			}
		},
		calculable: true,
		series: [
			{
				name: 'Funnel',
				type: 'funnel',
				width: '40%',
				data: [
					{ value: 60, name: 'Visit' },
					{ value: 40, name: 'Question' },
					{ value: 20, name: 'Order' },
					{ value: 80, name: 'Click' },
					{ value: 100, name: 'Display' }
				]
			},
			{
				name: 'Pyramid',
				type: 'funnel',
				x: '50%',
				sort: 'ascending',
				itemStyle: {
					normal: {
						label: {
							position: 'left'
						}
					}
				},
				data: [
					{ value: 60, name: 'Visit' },
					{ value: 40, name: 'Question' },
					{ value: 20, name: 'Order' },
					{ value: 80, name: 'Click' },
					{ value: 100, name: 'Display' }
				]
			}
		]
	};
}
