<template>
	<div class="g-content">
		<div class="search g-row-left b-white">
			<div class="g-row-left">
				<div class="fs0 g-row-left dates" @click="showCalendar = true">
					<span v-if="params.endTime" class="g-col-center">
						<span>
							{{ params.startTime }}
						</span>
						<span> {{ params.endTime }} </span>
					</span>
					<span v-else> 查询时间 </span>
					<span class="iconfont icon-arrdown m-l-5"></span>
				</div>
				<van-field class="fs0 field" v-model="params.keyword" placeholder="搜索设备编号或名称" :border="false" label-width="0" clearable>
					<template #button>
						<van-icon name="search" color="#aaaaaa" size="20" @click="getList(true)" />
					</template>
				</van-field>
			</div>
			<van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirmCalendar" allow-same-day />
		</div>
		<div class="scroll">
			<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getList" :immediate-check="false">
				<div class="shadow-card" v-for="(it, i) in datalist" :key="i">
					<div class="g-row-left">
						<!-- <img src="@/assets/images/alert.png" /> -->
						<div class="m-l-5">
							<div @click="copy(it.deviceName)">{{ it.deviceName || '未知设备' }}</div>
							<div class="m-t-5" @click="copy(it.deviceId)">{{ it.deviceId || '-' }}</div>
						</div>
					</div>
					<div class="m-t-5">
						事件：<span class="c-red">{{ it.content || '-' }}</span>
					</div>
					<div class="m-t-5">时间：{{ it.createTime || '-' }}</div>
				</div>
			</van-list>
		</div>
	</div>
	<Tabbar />
</template>
<script setup>
	import { ref, reactive, onMounted, computed, defineProps } from 'vue'
	import NProgress from 'nprogress'
	import { copy } from '@/utils'
	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	import { getAlertList } from '@/api/alert'
	const datalist = ref([])
	const loading = ref(false)
	const finished = ref(false)
	const showCalendar = ref(false)

	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const { sn } = defineProps({
		sn: {
			type: String,
			default: ''
		}
	})
	const params = reactive({
		keyword: '',
		deviceNo: '',
		deviceName: '',
		elderId: elderId.value,
		startTime: '',
		endTime: '',
		pageNum: 1,
		pageSize: 10
	})
	if (sn) params.keyword = sn
	const getList = (first = false) => {
		NProgress.start()
		if (first) {
			params.pageNum = 1
			datalist.value = []
		} else {
			params.pageNum++
		}
		getAlertList(params)
			.then(res => {
				if (first) finished.value = false
				datalist.value = datalist.value.concat(res.data)
				if (params.pageNum * params.pageSize >= res.total) finished.value = true
			})
			.finally(() => {
				loading.value = false
				NProgress.done()
			})
	}
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
	onMounted(() => {
		getList(true)
	})
</script>

<style lang="scss" scoped>
	.g-content {
		height: var(--viewport-height-mini);
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
				width: 40px;
				height: 40px;
				object-fit: contain;
			}
		}
	}
	::v-deep(.van-popup--bottom) {
		bottom: var(--down-bar-height);
	}
	.dates {
		width: 100px;
		.iconfont {
			font-size: 12px;
			color: #666666;
		}
	}
	::v-deep(.field) {
		&.van-cell {
			box-sizing: border-box;
			width: calc(100vw - 120px);
		}
		i {
			vertical-align: middle;
		}
	}
</style>
