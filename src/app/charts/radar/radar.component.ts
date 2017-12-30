import { Component } from '@angular/core';
import { ChartConfig } from '../charts.config';

@Component({
	selector: 'app-chart-radar',
	styles: [],
	templateUrl: './radar.component.html'
})
export class ChartRadarComponent {
	config = ChartConfig;

	radar1 = {
		title: {
			text: 'Budget vs spending'
		},
		tooltip: {},
		legend: {
			orient: 'vertical',
			x: 'right',
			y: 'bottom',
			data: ['Allocated Budget', 'Actual Spending'],
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
		radar: [
			{
				axisLine: {
					show: true,
					lineStyle: {
						// for both indicator and axisLine, bad, better separate them
						color: '#b1b1b1'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(0,0,0,.1)'
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				},
				indicator: [
					{ name: 'Sales', max: 6000 },
					{ name: 'Administration', max: 16000 },
					{ name: 'Information Technology', max: 30000 },
					{ name: 'Customer Support', max: 38000 },
					{ name: 'Development', max: 52000 },
					{ name: 'Marketing', max: 25000 }
				]
			}
		],
		calculable: true,
		series: [
			{
				name: 'Budget vs spending',
				type: 'radar',
				data: [
					{
						value: [4300, 10000, 28000, 35000, 50000, 19000],
						name: 'Allocated Budget'
					},
					{
						value: [5000, 14000, 28000, 31000, 42000, 21000],
						name: 'Actual Spending'
					}
				]
			}
		]
	};
	radar2 = {
		tooltip: {},
		legend: {
			x: 'center',
			data: ['Ronaldo', 'Andriy Shevchenko'],
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
		radar: [
			{
				axisLine: {
					show: true,
					lineStyle: {
						// for both indicator and axisLine, bad, better separate them
						color: '#b1b1b1'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(0,0,0,.1)'
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				},
				indicator: [
					{ name: 'Attack', max: 100 },
					{ name: 'Guard', max: 100 },
					{ name: 'Physical', max: 100 },
					{ name: 'Speed', max: 100 },
					{ name: 'Strength', max: 100 },
					{ name: 'Skill', max: 100 }
				],
				radius: 130
			}
		],
		series: [
			{
				name: 'Full of live data',
				type: 'radar',
				itemStyle: {
					normal: {
						areaStyle: {
							type: 'default'
						}
					}
				},
				data: [
					{
						value: [97, 42, 88, 94, 90, 86],
						name: 'Andriy Shevchenko'
					},
					{
						value: [97, 32, 74, 95, 88, 92],
						name: 'Ronaldo'
					}
				]
			}
		]
	};
	radar3 = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			x: 'center',
			data: [
				'Software',
				'Galaxy Phone',
				'iPhone',
				'Precipitation',
				'Evaporation'
			],
			textStyle: {
				color: this.config.textColor
			}
		},
		radar: [
			{
				axisLine: {
					show: true,
					lineStyle: {
						// for both indicator and axisLine, bad, better separate them
						color: '#b1b1b1'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(0,0,0,.1)'
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				},
				indicator: [
					{ text: 'Brand', max: 100 },
					{ text: 'Content', max: 100 },
					{ text: 'Usability', max: 100 },
					{ text: 'Features', max: 100 }
				],
				center: ['25%', '40%'],
				radius: 80
			},
			{
				axisLine: {
					show: true,
					lineStyle: {
						// for both indicator and axisLine, bad, better separate them
						color: '#b1b1b1'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(0,0,0,.1)'
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				},
				indicator: [
					{ text: 'Look', max: 100 },
					{ text: 'Camera', max: 100 },
					{ text: 'System', max: 100 },
					{ text: 'Performance', max: 100 },
					{ text: 'Display', max: 100 }
				],
				radius: 80,
				center: ['50%', '60%']
			},
			{
				axisLine: {
					show: true,
					lineStyle: {
						// for both indicator and axisLine, bad, better separate them
						color: '#b1b1b1'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(0,0,0,.1)'
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				},
				indicator: (() => {
					const res = [];
					for (let i = 1; i <= 12; i++) {
						res.push({ text: 'Mon. ' + i, max: 100 });
					}
					return res;
				})(),
				center: ['75%', '40%'],
				radius: 80
			}
		],
		series: [
			{
				type: 'radar',
				tooltip: {
					trigger: 'item'
				},
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [
					{
						value: [60, 73, 85, 40],
						name: 'Software'
					}
				]
			},
			{
				type: 'radar',
				radarIndex: 1,
				data: [
					{
						value: [85, 90, 90, 95, 95],
						name: 'Galaxy Phone'
					},
					{
						value: [95, 80, 95, 90, 93],
						name: 'iPhone'
					}
				]
			},
			{
				type: 'radar',
				radarIndex: 2,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [
					{
						name: 'Precipitation',
						value: [
							2.6,
							5.9,
							9.0,
							26.4,
							28.7,
							70.7,
							75.6,
							82.2,
							48.7,
							18.8,
							6.0,
							2.3
						]
					},
					{
						name: 'Evaporation',
						value: [
							2.0,
							4.9,
							7.0,
							23.2,
							25.6,
							76.7,
							35.6,
							62.2,
							32.6,
							20.0,
							6.4,
							3.3
						]
					}
				]
			}
		]
	};
}
