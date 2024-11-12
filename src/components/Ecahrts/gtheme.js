export default {
	color: ['#239959', '#CF7D32', '#ff2a21'],
	backgroundColor: 'rgba(0,0,0,0)',
	textStyle: {},
	title: {
		textStyle: {
			color: '#333333',
			fontWeight: 'normal',
			fontSize: 14,
			lineHeight: 14
		},
		subtextStyle: {
			color: '#aaaaaa'
		}
	},
	line: {
		itemStyle: {
			borderWidth: 1
		},
		lineStyle: {
			width: 2
		},
		symbolSize: 4,
		symbol: 'emptyCircle',
		smooth: false,
		emphasis: {
			disabled: false,
			scale: true,
			focus: 'series',
			blurScope: 'coordinateSystem'
		}
	},
	radar: {
		itemStyle: {
			borderWidth: 1
		},
		lineStyle: {
			width: 2
		},
		symbolSize: 4,
		symbol: 'emptyCircle',
		smooth: false
	},
	bar: {
		barMinHeight: 1,
		barMaxWidth: 40,
		itemStyle: {
			borderRadius: [2, 2, 0, 0], //圆角半径（顺时针左上，右上，右下，左下）
			barBorderWidth: '0',
			barBorderColor: '#ccc' //柱条的描边宽度，默认不描边。
		},
		emphasis: {
			disabled: false,
			focus: 'series',
			blurScope: 'coordinateSystem'
		}
	},
	pie: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	scatter: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	boxplot: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	parallel: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	sankey: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	funnel: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	gauge: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		}
	},
	candlestick: {
		itemStyle: {
			color: '#c12e34',
			color0: '#2b821d',
			borderColor: '#c12e34',
			borderColor0: '#2b821d',
			borderWidth: 1
		}
	},
	graph: {
		itemStyle: {
			borderWidth: '0',
			borderColor: '#ccc'
		},
		lineStyle: {
			width: 1,
			color: '#aaaaaa'
		},
		symbolSize: 4,
		symbol: 'emptyCircle',
		smooth: false,
		color: ['#239959', '#ff8100', '#2fc25b', '#fa5e5f', '#e84cdd', '#ff5827', '#2ed8d8'],
		label: {
			color: '#ffffff'
		}
	},
	map: {
		itemStyle: {
			areaColor: '#ddd',
			borderColor: '#eee',
			borderWidth: 0.5
		},
		label: {
			color: '#c12e34'
		},
		emphasis: {
			itemStyle: {
				areaColor: '#e6b600',
				borderColor: '#ddd',
				borderWidth: 1
			},
			label: {
				color: '#c12e34'
			}
		}
	},
	geo: {
		itemStyle: {
			areaColor: '#ddd',
			borderColor: '#eee',
			borderWidth: 0.5
		},
		label: {
			color: '#c12e34'
		},
		emphasis: {
			itemStyle: {
				areaColor: '#e6b600',
				borderColor: '#ddd',
				borderWidth: 1
			},
			label: {
				color: '#c12e34'
			}
		}
	},
	categoryAxis: {
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisTick: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisLabel: {
			show: true,
			color: '#999'
		},
		splitLine: {
			show: false,
			lineStyle: {
				color: ['#ccc']
			}
		},
		splitArea: {
			show: false,
			areaStyle: {
				color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
			}
		}
	},
	valueAxis: {
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisTick: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisLabel: {
			show: true,
			color: '#999'
		},
		splitLine: {
			show: false,
			lineStyle: {
				color: ['#ccc']
			}
		},
		splitArea: {
			show: false,
			areaStyle: {
				color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
			}
		}
	},
	logAxis: {
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisTick: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisLabel: {
			show: true,
			color: '#ddd'
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: ['#ccc']
			}
		},
		splitArea: {
			show: false,
			areaStyle: {
				color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
			}
		}
	},
	timeAxis: {
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisTick: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisLabel: {
			show: true,
			color: '#ddd'
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: ['#ccc']
			}
		},
		splitArea: {
			show: false,
			areaStyle: {
				color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
			}
		}
	},
	toolbox: {
		iconStyle: {
			borderColor: '#06467c'
		},
		emphasis: {
			iconStyle: {
				borderColor: '#4187c2'
			}
		}
	},
	legend: {
		textStyle: {
			color: '#333333'
		},
		icon: 'circle',
		padding: [0, 0, 0, 0],
		itemGap: 30,
		itemWidth: 10, // 图例标记的图形宽度
		itemHeight: 10 // 图例标记的图形高度
	},
	tooltip: {
		axisPointer: {
			lineStyle: {
				color: '#333333',
				width: 1
			},
			crossStyle: {
				color: '#333333',
				width: 1
			}
		}
	},
	grid: {
		left: '10',
		right: '10',
		bottom: '0%',
		top: '40',
		containLabel: true
	},
	timeline: {
		lineStyle: {
			color: '#239959',
			width: 1
		},
		itemStyle: {
			color: '#239959',
			borderWidth: 1
		},
		controlStyle: {
			color: '#239959',
			borderColor: '#239959',
			borderWidth: 0.5
		},
		checkpointStyle: {
			color: '#239959',
			borderColor: '#239959'
		},
		label: {
			color: '#239959'
		},
		emphasis: {
			itemStyle: {
				color: '#239959'
			},
			controlStyle: {
				color: '#239959',
				borderColor: '#239959',
				borderWidth: 0.5
			},
			label: {
				color: '#239959'
			}
		}
	},
	visualMap: {
		color: ['#239959', '#a2d4e6']
	},
	dataZoom: {},
	markPoint: {
		label: {
			color: '#ffffff'
		},
		emphasis: {
			label: {
				color: '#ffffff'
			}
		}
	}
}
