<template>
	<div :id="mapId" class="map"></div>
</template>
<script setup>
	import { ref, nextTick, defineProps, watch, watchEffect } from 'vue'
	import { getDeviceCurLocation } from '@/api/device'
	const amap = ref(null)
	const mapId = ref('')
	const { device } = defineProps({
		device: {
			type: Object,
			default: () => {}
		}
	})
	watch(
		() => device.sn,
		sn => {
			initMap()
		}
	)
	const initMap = () => {
		mapId.value = `AMap${new Date().getTime()}`
		nextTick(() => {
			if (!device.sn) {
				if (amap.value) {
					amap.value.clearMap()
				}
			} else {
				init()
			}
		})
	}
	const init = () => {
		getDeviceCurLocation({ sn: device.sn }).then(res => {
			const jsonstr = res?.data ?? ''
			const makers = JSON.parse(jsonstr)?.point?.coordinates ?? []
			const markerContent = `<div class="custom-content-marker"><img src="https://mhjy-public.obs.cn-south-1.myhuaweicloud.com:443/position.png"></div>`
			let marker = new AMap.Marker({
				position: new AMap.LngLat(...makers),
				content: markerContent,
				offset: new AMap.Pixel(-15, -15)
			})
			marker.on('click', () => {
				amap.value.setZoomAndCenter(18, location)
			})
			if (!amap.value) {
				amap.value = new AMap.Map(mapId.value, {
					resizeEnable: true,
					center: makers, //地图中心点
					zoom: 18,
					mapStyle: 'amap://styles/light'
					// normal grey whitesmoke dark light graffiti
				})
				amap.value.on('complete', function () {
					amap.value.add(marker)
					// amap.value.setFitView()
				})
			} else {
				amap.value.add(marker)
				amap.value.setZoomAndCenter(18, location)
			}
		})
	}
	defineExpose({
		initMap
	})
</script>

<style lang="scss" scoped>
	.map {
		width: 100%;
		height: 100%;
	}
	::v-deep(.custom-content-marker) {
		position: relative;
		img {
			width: 25px;
			height: 25px;
		}
	}
</style>
