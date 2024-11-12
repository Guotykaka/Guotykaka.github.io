<template>
	<div :id="chartId" class="chart" :style="{ width: width, height: height }"></div>
</template>
<script setup>
	import * as echarts from 'echarts'
	import gtheme from './gtheme'
	import { ref, nextTick, defineProps, watch, onMounted } from 'vue'
	const { width, height, chartData } = defineProps({
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '100%'
		},

		chartData: {
			type: Object,
			default: () => {}
		}
	})
	watch(
		() => chartData,
		val => {
			nextTick(() => {
				setOptions(val.value)
			})
		},
		{ deep: true, immediate: false }
	)
	const randomString = e => {
		e = e || 32
		var t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
			a = t.length,
			n = ''
		for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
		return n
	}
	const chartId = ref('')
	chartId.value = randomString()
	const chart = ref(null)
	const initChart = () => {
		echarts.registerTheme('gtheme', gtheme)
		chart.value = echarts.init(document.getElementById(chartId.value), 'gtheme')
		nextTick(() => {
			setOptions(chartData.value)
		})
	}
	const setOptions = option => {
		if (option) chart.value.setOption(option)
	}
	onMounted(() => {
		initChart()
	})
	defineExpose({})
</script>

<style lang="scss" scoped>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
