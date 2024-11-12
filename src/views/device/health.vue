<template>
	<div class="g-content">
		<div class="c66 m-b-10">健康信息</div>
		<div class="shadow-card">
			<Echarts height="200px" width="100%" :chart-data="heartRateData" />
		</div>
		<div class="shadow-card">
			<Echarts height="200px" width="100%" :chart-data="bloodPressureData" />
		</div>
		<div class="shadow-card">
			<Echarts height="200px" width="100%" :chart-data="stepNumberData" />
		</div>
		<div class="shadow-card">
			<Echarts height="200px" width="100%" :chart-data="bloodOxygenData" />
		</div>
		<div class="shadow-card">
			<Echarts height="200px" width="100%" :chart-data="sleepData" />
		</div>
	</div>
</template>
<script setup>
	import { ref, reactive, onMounted, computed, defineProps } from 'vue'
	import NProgress from 'nprogress'
	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	import { getCurHeartRate, getHeartRateList, getAverageStepNumber, getStepNumberList, getBloodPressureList, getBloodOxygenList, getSleepList } from '@/api/health'
	import { getNextDate } from '@/utils'
	import Echarts from '@/components/Ecahrts/Ecahrts.vue'
	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const { sn } = defineProps({
		sn: {
			type: Number,
			default: 0
		}
	})
	const averageStep = ref(0)
	const heartRateData = reactive({})
	const bloodPressureData = reactive({})
	const stepNumberData = reactive({})
	const bloodOxygenData = reactive({})
	const sleepData = reactive({})
	const heartRate = reactive({
		elderId: elderId.value,
		sn: sn,
		startTime: '',
		endTime: ''
	})
	const bloodPressure = reactive({
		elderId: elderId.value,
		sn: sn,
		startTime: '',
		endTime: ''
	})
	const stepNumber = reactive({
		elderId: elderId.value,
		sn: sn,
		startTime: '',
		endTime: ''
	})
	const bloodOxygen = reactive({
		elderId: elderId.value,
		sn: sn,
		startTime: '',
		endTime: ''
	})
	const sleep = reactive({
		elderId: elderId.value,
		sn: sn,
		startTime: '',
		endTime: ''
	})
	const getHeartRateListFuc = () => {
		getHeartRateList({
			sn: sn,
			startTime: heartRate.startTime,
			endTime: heartRate.endTime
		}).then(res => {
			handleHeartRate(res.data)
		})
	}
	const getBloodPressureListFuc = () => {
		getBloodPressureList({
			sn: sn,
			startTime: bloodPressure.startTime,
			endTime: bloodPressure.endTime
		}).then(res => {
			handleBloodPressure(res.data)
		})
	}
	const getAverageStepNumberFuc = () => {
		getAverageStepNumber({
			sn: sn,
			startTime: stepNumber.startTime,
			endTime: stepNumber.endTime
		}).then(res => {
			averageStep.value = res?.data ?? 0
		})
	}
	const getStepNumberListFuc = () => {
		getStepNumberList({
			sn: sn,
			startTime: stepNumber.startTime,
			endTime: stepNumber.endTime
		}).then(res => {
			handleStepNumber(res.data)
		})
	}
	const getBloodOxygenListFuc = () => {
		getBloodOxygenList({
			sn: sn,
			startTime: bloodOxygen.startTime,
			endTime: bloodOxygen.endTime
		}).then(res => {
			handleBloodOxygen(res.data)
		})
	}
	const getSleepListFuc = () => {
		getSleepList({
			sn: sn,
			startTime: sleep.startTime,
			endTime: sleep.endTime
		}).then(res => {
			handleSleep(res.data)
		})
	}
	const handleHeartRate = data => {
		const copy = Object.assign({}, data)
		const xData = data.map(i => i.timeBegin)
		const yData = Object.values(copy).map(i => {
			i.value = i.heartrate
			return i
		})
		heartRateData.value = {
			title: {
				show: true,
				text: '设备心率信息(次/分)'
			},
			tooltip: {
				trigger: 'item',
				axisPointer: {
					type: 'line'
				},
				padding: [10, 16]
			},
			xAxis: {
				type: 'category',
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				data: xData,
				trigger: 'axis',
				boundaryGap: false
			},
			yAxis: {
				type: 'value',
				axisLine: {
					show: true
				},
				axisTick: {
					// y轴刻度线
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				splitArea: {
					show: false
				}
			},
			legend: {
				// 图例组件
				show: false
			},
			series: [
				{
					name: '设备心率信息(次/分)',
					type: 'line',
					data: yData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				}
			]
		}
	}
	const handleBloodPressure = data => {
		const xData = data.map(i => i.timeBegin)
		const dbpData = data.map(i => i.dbp)
		const sbpData = data.map(i => i.sbp)
		bloodPressureData.value = {
			title: {
				show: true,
				text: '设备血压信息'
			},
			tooltip: {
				trigger: 'item',
				axisPointer: {
					type: 'line'
				},
				padding: [10, 16]
			},
			xAxis: {
				type: 'category',
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				data: xData,
				trigger: 'axis',
				boundaryGap: false
			},
			yAxis: {
				type: 'value',
				axisLine: {
					show: true
				},
				axisTick: {
					// y轴刻度线
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				splitArea: {
					show: false
				}
			},
			legend: {
				// 图例组件
				show: false
			},
			series: [
				{
					name: '舒张压',
					type: 'line',
					data: dbpData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				},
				{
					name: '收缩压',
					type: 'line',
					data: sbpData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				}
			]
		}
	}
	const handleStepNumber = data => {
		const xData = data.map(i => i.timeBegin.substring(0, 10))
		const yData = data.map(i => i.value)
		stepNumberData.value = {
			title: {
				show: true,
				text: '设备步数信息'
			},
			tooltip: {
				trigger: 'item',
				axisPointer: {
					type: 'line'
				},
				padding: [10, 16]
			},
			xAxis: {
				type: 'category',
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					interval: 1,
					rotate: 45
				},
				data: xData,
				trigger: 'axis'
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} 步'
				},
				axisLine: {
					show: true
				},
				axisTick: {
					// y轴刻度线
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				splitArea: {
					show: false
				}
			},
			legend: {
				// 图例组件
				show: false
			},
			series: [
				{
					name: '设备步数信息',
					type: 'bar',
					data: yData
				}
			]
		}
	}
	const handleBloodOxygen = data => {
		const xData = data.map(i => i.timeBegin)
		const yData = data.map(i => i.bloodoxygen)
		bloodOxygenData.value = {
			title: {
				show: true,
				text: '设备血氧信息'
			},
			tooltip: {
				trigger: 'item',
				axisPointer: {
					type: 'line'
				},
				padding: [10, 16]
			},
			xAxis: {
				type: 'category',
				splitLine: {
					show: false
				},
				data: xData,
				trigger: 'axis',
				boundaryGap: false
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} %'
				},
				axisLine: {
					show: true
				},
				axisTick: {
					// y轴刻度线
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				splitArea: {
					show: false
				},
				max: 100
			},
			legend: {
				// 图例组件
				show: false
			},
			series: [
				{
					name: '设备血氧信息',
					type: 'line',
					data: yData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				}
			]
		}
	}
	const handleSleep = data => {
		const xData = data.map(i => i.timeBegin)
		const totalSleepData = data.map(i => i.totalSleep)
		const deepSleepData = data.map(i => i.deepSleep)
		const lightSleepData = data.map(i => i.lightSleep)
		const awakeTimeData = data.map(i => i.awakeTime)
		sleepData.value = {
			title: {
				show: true,
				text: '睡眠数据信息'
			},
			tooltip: {
				trigger: 'item',
				axisPointer: {
					type: 'line'
				},
				padding: [10, 16],
				formatter: function (parmas) {
					const ind = parmas[0].dataIndex
					return `总睡眠时长：${totalSleepData[ind]}h</br>
					深睡时长：${deepSleepData[ind]}h</br>
					浅睡时长：${lightSleepData[ind]}h</br>
					清醒时长：${awakeTimeData[ind]}h</br>
					`
				}
			},
			xAxis: {
				type: 'category',
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				data: xData,
				trigger: 'axis',
				boundaryGap: false
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} h'
				},
				axisLine: {
					show: true
				},
				axisTick: {
					// y轴刻度线
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['#E2E2E2'],
						type: 'dashed'
					}
				},
				splitArea: {
					show: false
				}
			},
			legend: {
				// 图例组件
				show: false
			},
			series: [
				{
					name: '深睡时长',
					type: 'line',
					data: deepSleepData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				},
				{
					name: '浅睡时长',
					type: 'line',
					data: lightSleepData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				},
				{
					name: '清醒时长',
					type: 'line',
					data: awakeTimeData,
					smooth: false,
					symbol: 'circle',
					emphasis: {
						itemStyle: {
							borderColor: '#fff' // 拐点边框颜色
						}
					}
				}
			]
		}
	}
	onMounted(() => {
		heartRate.startTime = getNextDate(new Date(), -29)
		heartRate.endTime = getNextDate(new Date(), 0)
		bloodPressure.startTime = getNextDate(new Date(), -29)
		bloodPressure.endTime = getNextDate(new Date(), 0)
		stepNumber.startTime = getNextDate(new Date(), -29)
		stepNumber.endTime = getNextDate(new Date(), 0)
		bloodOxygen.startTime = getNextDate(new Date(), -29)
		bloodOxygen.endTime = getNextDate(new Date(), 0)
		sleep.startTime = getNextDate(new Date(), -29)
		sleep.endTime = getNextDate(new Date(), 0)
		getHeartRateListFuc()
		getBloodPressureListFuc()
		getAverageStepNumberFuc()
		getStepNumberListFuc()
		getBloodOxygenListFuc()
		getSleepListFuc()
	})
</script>

<style lang="scss" scoped>
	.g-content {
		height: var(--viewport-height-big);
		position: relative;
		overflow-x: hidden;
		padding: 20px;
		.shadow-card {
			&:not(:first-of-type) {
				margin-top: 10px;
			}
			padding: 15px 0;
		}
	}
	::v-deep(.van-popup--bottom) {
		bottom: var(--down-bar-height);
	}
</style>
