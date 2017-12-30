import { Component } from '@angular/core';
import { ChartConfig } from '../charts.config';

@Component({
	selector: 'app-chart-line',
	styles: [],
	templateUrl: './line.component.html'
})
export class ChartLineComponent {
	config = ChartConfig;

	line1 = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Highest temperature', 'Lowest temperature'],
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
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
				axisLabel: {
					formatter: '{value} °C',
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					formatter: '{value} °C',
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				}
			}
		],
		series: [
			{
				name: 'Highest temperature',
				type: 'line',
				data: [11, 11, 15, 13, 12, 13, 10],
				markPoint: {
					data: [
						{ type: 'max', name: 'Max' },
						{ type: 'min', name: 'Min' }
					]
				},
				markLine: {
					data: [{ type: 'average', name: 'Average' }]
				}
			},
			{
				name: 'Lowest temperature',
				type: 'line',
				data: [1, -2, 2, 5, 3, 2, 0],
				markPoint: {
					data: [
						{
							name: 'Lowest temperature',
							value: -2,
							xAxis: 1,
							yAxis: -1.5
						}
					]
				},
				markLine: {
					data: [{ type: 'average', name: 'Average' }]
				}
			}
		]
	};

	line2 = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Email', 'Affiliate', 'Video Ads', 'Direct', 'Search'],
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
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
				axisLabel: {
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				}
			}
		],
		series: [
			{
				name: 'Email',
				type: 'line',
				stack: 'Sum',
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: 'Affiliate',
				type: 'line',
				stack: 'Sum',
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: 'Video Ads',
				type: 'line',
				stack: 'Sum',
				data: [150, 232, 201, 154, 190, 330, 410]
			},
			{
				name: 'Direct',
				type: 'line',
				stack: 'Sum',
				data: [320, 332, 301, 334, 390, 330, 320]
			},
			{
				name: 'Search',
				type: 'line',
				stack: 'Sum',
				data: [820, 932, 901, 934, 1290, 1330, 1320]
			}
		]
	};

	line3 = {
		title: {
			text: 'Sales'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Intention', 'Pre-order', 'Deal closed'],
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
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
				axisLabel: {
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				}
			}
		],
		series: [
			{
				name: 'Deal closed',
				type: 'line',
				smooth: true,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [10, 12, 21, 54, 260, 830, 710]
			},
			{
				name: 'Pre-order',
				type: 'line',
				smooth: true,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [30, 182, 434, 791, 390, 30, 10]
			},
			{
				name: 'Intention',
				type: 'line',
				smooth: true,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [1320, 1132, 601, 234, 120, 90, 20]
			}
		]
	};

	line4 = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Email', 'Affiliate', 'Video Ads', 'Direct', 'Search'],
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
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
				axisLabel: {
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: this.config.textColor
					}
				},
				splitLine: {
					lineStyle: {
						color: this.config.splitLineColor
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: this.config.splitAreaColor
					}
				}
			}
		],
		series: [
			{
				name: 'Email',
				type: 'line',
				stack: 'Sum',
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: 'Affiliate',
				type: 'line',
				stack: 'Sum',
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: 'Video Ads',
				type: 'line',
				stack: 'Sum',
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [150, 232, 201, 154, 190, 330, 410]
			},
			{
				name: 'Direct',
				type: 'line',
				stack: 'Sum',
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [320, 332, 301, 334, 390, 330, 320]
			},
			{
				name: 'Search',
				type: 'line',
				stack: 'Sum',
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [820, 932, 901, 934, 1290, 1330, 1320]
			}
		]
	};
}
