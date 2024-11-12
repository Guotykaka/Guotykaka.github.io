<template>
	<div class="g-content">
		<div class="search g-row-left b-white">
			<div class="g-row-left">
				<div class="fs0 g-row-left dates" @click="showCalendar = true">
					<span v-if="params.endTime"> {{ params.startTime }}至{{ params.endTime }} </span>
					<span v-else> 查询时间 </span>
					<span class="iconfont icon-arrdown m-l-5"></span>
				</div>
			</div>
			<van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirmCalendar" switch-mode="mouth" :default-date="null" />
		</div>
		<div class="scroll">
			<div class="shadow-card" v-for="(it, i) in datalist" :key="i">
				<div class="g-row-left">
					<img class="m-r-5" src="https://mhjy-public.obs.cn-south-1.myhuaweicloud.com:443/position.png" />
					<span>{{ it.address }}</span>
				</div>
				<div class="m-t-5 c66 f12">{{ it.timeBegin }}</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, reactive, onMounted, computed, defineProps } from 'vue'
	import NProgress from 'nprogress'
	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	import { getDeviceHisLocation } from '@/api/device'
	import { getNextDate } from '@/utils'
	const datalist = ref([])
	const showCalendar = ref(false)
	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const { sn } = defineProps({
		sn: {
			type: Number,
			default: 0
		}
	})
	const params = reactive({
		elderId: elderId.value,
		sn: sn,
		startTime: '',
		endTime: ''
	})
	const formatDate = date => {
		var year = date.getFullYear()
		var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
		var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
		return year + '-' + month + '-' + day
	}
	const onConfirmCalendar = values => {
		const [start, end] = values
		const startday = `${formatDate(start)}`
		const endday = `${formatDate(end)}`
		params.startTime = startday
		params.endTime = endday
		showCalendar.value = false
		getList(true)
	}
	const getList = () => {
		NProgress.start()
		getDeviceHisLocation(params)
			.then(res => {
				datalist.value = res.data
			})
			.finally(() => {
				NProgress.done()
			})
	}
	onMounted(() => {
		params.startTime = getNextDate(new Date(), -2)
		params.endTime = getNextDate(new Date(), 0)
		getList()
	})
</script>

<style lang="scss" scoped>
	.g-content {
		height: var(--viewport-height-big);
		position: relative;
		overflow-x: hidden;
		.search {
			padding: 0 10px;
			width: 100%;
			height: 50px;
			position: sticky;
			top: 0;
			left: 0;
			font-size: 12px;
		}
		.scroll {
			padding: 10px;
		}
		.shadow-card {
			&:not(:first-of-type) {
				margin-top: 10px;
			}
			padding: 15px 12px;
			img {
				width: 18px;
				height: 18px;
				object-fit: contain;
			}
		}
	}
	::v-deep(.van-popup--bottom) {
		bottom: var(--down-bar-height);
	}
	.dates {
		.iconfont {
			font-size: 12px;
			color: #666666;
		}
	}
</style>
