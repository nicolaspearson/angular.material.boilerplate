import { Component } from '@angular/core';
import { ChartConfig } from '../charts.config';

@Component({
	selector: 'app-chart-bar',
	styles: [],
	templateUrl: './bar.component.html'
})
export class ChartBarComponent {
	config = ChartConfig;

	bar1 = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Evaporation', 'Precipitation'],
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
				data: [
					'Jan.',
					'Feb.',
					'Mar.',
					'Apr.',
					'May',
					'Jun.',
					'Jul.',
					'Aug.',
					'Sep.',
					'Oct.',
					'Nov.',
					'Dec.'
				],
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
				name: 'Evaporation',
				type: 'bar',
				data: [
					2.0,
					4.9,
					7.0,
					23.2,
					25.6,
					76.7,
					135.6,
					162.2,
					32.6,
					20.0,
					6.4,
					3.3
				],
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
				name: 'Precipitation',
				type: 'bar',
				data: [
					2.6,
					5.9,
					9.0,
					26.4,
					28.7,
					70.7,
					175.6,
					182.2,
					48.7,
					18.8,
					6.0,
					2.3
				],
				markPoint: {
					data: [
						{
							name: 'Highest',
							value: 182.2,
							xAxis: 7,
							yAxis: 183,
							symbolSize: 18
						},
						{ name: 'Lowest', value: 2.3, xAxis: 11, yAxis: 3 }
					]
				},
				markLine: {
					data: [{ type: 'average', name: 'Average' }]
				}
			}
		]
	};
	bar2 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: [
				'Direct',
				'Email',
				'Affiliate',
				'Video Ads',
				'Search',
				'Baidu',
				'Google',
				'Bing',
				'Others'
			],
			textStyle: {
				color: this.config.textColor
			}
		},
		calculable: true,
		xAxis: [
			{
				type: 'category',
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
				name: 'Direct',
				type: 'bar',
				data: [320, 332, 301, 334, 390, 330, 320]
			},
			{
				name: 'Email',
				type: 'bar',
				stack: 'Ads',
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: 'Affiliate',
				type: 'bar',
				stack: 'Ads',
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: 'Video Ads',
				type: 'bar',
				stack: 'Ads',
				data: [150, 232, 201, 154, 190, 330, 410]
			},
			{
				name: 'Search',
				type: 'bar',
				data: [862, 1018, 964, 1026, 1679, 1600, 1570],
				markLine: {
					itemStyle: {
						normal: {
							lineStyle: {
								type: 'dashed'
							}
						}
					},
					data: [[{ type: 'min' }, { type: 'max' }]]
				}
			},
			{
				name: 'Baidu',
				type: 'bar',
				barWidth: 5,
				stack: 'Search',
				data: [620, 732, 701, 734, 1090, 1130, 1120]
			},
			{
				name: 'Google',
				type: 'bar',
				stack: 'Search',
				data: [120, 132, 101, 134, 290, 230, 220]
			},
			{
				name: 'Bing',
				type: 'bar',
				stack: 'Search',
				data: [60, 72, 71, 74, 190, 130, 110]
			},
			{
				name: 'Others',
				type: 'bar',
				stack: 'Search',
				data: [62, 82, 91, 84, 109, 110, 120]
			}
		]
	};
	bar3 = {
		title: {
			text: 'World Population',
			subtext: 'From the Internet'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['2011', '2012'],
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
				type: 'value',
				boundaryGap: [0, 0.01],
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
				type: 'category',
				data: [
					'Brazil',
					'Indonesia',
					'USA',
					'India',
					'China',
					'World Population (10k)'
				],
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
				name: '2011',
				type: 'bar',
				data: [18203, 23489, 29034, 104970, 131744, 630230]
			},
			{
				name: '2012',
				type: 'bar',
				data: [19325, 23438, 31000, 121594, 134141, 681807]
			}
		]
	};
	bar4 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
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
		xAxis: [
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
				}
			}
		],
		yAxis: [
			{
				type: 'category',
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
				name: 'Direct',
				type: 'bar',
				stack: 'Sum',
				itemStyle: {
					normal: { label: { show: true, position: 'insideRight' } }
				},
				data: [320, 302, 301, 334, 390, 330, 320]
			},
			{
				name: 'Email',
				type: 'bar',
				stack: 'Sum',
				itemStyle: {
					normal: { label: { show: true, position: 'insideRight' } }
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: 'Affiliate',
				type: 'bar',
				stack: 'Sum',
				itemStyle: {
					normal: { label: { show: true, position: 'insideRight' } }
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: 'Video Ads',
				type: 'bar',
				stack: 'Sum',
				itemStyle: {
					normal: { label: { show: true, position: 'insideRight' } }
				},
				data: [150, 212, 201, 154, 190, 330, 410]
			},
			{
				name: 'Search',
				type: 'bar',
				stack: 'Sum',
				itemStyle: {
					normal: { label: { show: true, position: 'insideRight' } }
				},
				data: [820, 832, 901, 934, 1290, 1330, 1320]
			}
		]
	};
	bar5 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: ['Profit', 'Cost', 'Income'],
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
				}
			}
		],
		yAxis: [
			{
				type: 'category',
				axisTick: { show: false },
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
				name: 'Profit',
				type: 'bar',
				itemStyle: {
					normal: { label: { show: true, position: 'inside' } }
				},
				data: [200, 170, 240, 244, 200, 220, 210]
			},
			{
				name: 'Income',
				type: 'bar',
				stack: 'Sum',
				barWidth: 5,
				itemStyle: {
					normal: {
						label: { show: true }
					}
				},
				data: [320, 302, 341, 374, 390, 450, 420]
			},
			{
				name: 'Cost',
				type: 'bar',
				stack: 'Sum',
				itemStyle: {
					normal: {
						label: { show: true, position: 'left' }
					}
				},
				data: [-120, -132, -101, -134, -190, -230, -210]
			}
		]
	};
}
