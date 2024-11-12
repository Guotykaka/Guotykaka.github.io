<template>
	<div class="g-content">
		<div class="search b-white">
			<van-search v-model="params.keyword" placeholder="故障单编号、设备名称、设备编号" show-action @search="serachFun" @cancel="serachFun" clearable>
				<template #action>
					<div @click="serachFun">搜索</div>
				</template>
			</van-search>
		</div>
		<div class="scroll">
			<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getList" :immediate-check="false">
				<van-cell class="click-cell" center v-for="(item, key) in datalist" :key="key" @click="handleDetail(item)">
					<template #title>
						<div class="fontWeight cell-item-info">故障单: {{ item.orderId }}</div>
					</template>
					<template #label>
						<div class="cell-item-info">设备名称 : {{ item.deviceName }}</div>
						<div class="cell-item-info">设备编号 : {{ item.deviceNo }}</div>
						<div class="cell-item-info">故障描述 : {{ item.reportAddress }}</div>
						<div class="cell-item-info">报障时间 : {{ item.reportTime }}</div>
						<div>
							<div class="line"></div>
							<div class="btns">
								<div class="btn" @click="onHandle(item, 2)">详情</div>
							</div>
						</div>
						<div class="tag-box">
							<van-tag :type="item.clientType == 1 ? 'success' : 'primary'"> {{ FormatFun(customerTypeList, item.clientType) }} </van-tag>
							<span></span>
							<van-tag :type="item.status == 0 ? 'warning ' : item.status == 1 || item.status == 2 ? 'success ' : item.status == 3 ? 'primary ' : ''">
								{{ FormatFun(troubleStatus, item.status) }}
							</van-tag>
						</div>
					</template>
				</van-cell>
			</van-list>
		</div>
		<div class="footer-btn-box">
			<div class="add-btn" @click="addItem">我要报修</div>
		</div>
	</div>
	<Tabbar />
</template>
<script setup>
	import { ref, reactive, onMounted, computed } from 'vue'
	import NProgress from 'nprogress'
	import { useRoute, useRouter } from 'vue-router'

	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	import { fetchTroubleList } from '@/api/repair'
	import { troubleTypeList, customerTypeList, troubleStatus, FormatFun } from '@/dict/index'

	const datalist = ref([])
	const loading = ref(false)
	const finished = ref(false)
	const route = useRoute()
	const router = useRouter()
	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const params = reactive({
		keyword: '',
		elderId: elderId.value,
		pageNum: 1,
		pageSize: 10
	})
	const getList = (first = false) => {
		NProgress.start()
		if (first) {
			params.pageNum = 1
			datalist.value = []
		} else {
			params.pageNum++
		}
		fetchTroubleList(params)
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
	const handleDetail = item => {}
	const onHandle = item => {
		router.push({ name: 'repairDetail', params: { troubleId: item.troubleId } })
	}
	const addItem = () => {
		router.push('/repair-add')
	}
	const serachFun = () => {
		getList(true)
	}
	onMounted(() => {
		getList(true)
	})
</script>

<style lang="scss" scoped>
	.g-content {
		height: var(--viewport-height-mini);
		padding-bottom: 50px;
		position: relative;
		.search {
			width: 100%;
			height: 60px;
			position: sticky;
			top: 0;
			left: 0;
      z-index:100
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
		.click-cell {
			margin-bottom: 10px;
			box-shadow: 0 2px 7px 0 rgba(5, 34, 97, 0.1);
			.fontWeight {
				font-weight: bold;
			}
			.cell-item-info {
				margin-bottom: 10px;
				font-size: 14px;
				box-sizing: border-box;
				color: #333333;
			}
			.line {
				border: 1px dashed #f5f5f5;
			}
			.btns {
				padding-top: 10px;
				.btn {
					display: inline-block;
					padding: 0 10px;
					line-height: 28px;
					border-radius: 4px;
					border: 1px solid var(--primary);
					color: var(--primary);
					background: var(--primary-bg);
				}
			}
			.tag-box {
				position: absolute;
				right: 10px;
				top: 10px;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.van-tag {
					margin-left: 5px;
				}
			}
		}
		.footer-btn-box {
			width: 100%;
			position: fixed;
			bottom: 50px;
			left: 0;
			background: #fff;
			padding-top: 10px;
			.add-btn {
				margin: 0 20px 20px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				border: 1px solid var(--primary);
				background: var(--primary-bg);
				color: var(--primary);
				border-radius: 8px;
				font-size: 14px;
			}
		}
	}
</style>
