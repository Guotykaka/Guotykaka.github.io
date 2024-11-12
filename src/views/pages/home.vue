<template>
	<div class="g-content">
		<div class="abs">
			<div class="arc-box">
				<div @click="showUsers = true" class="c-white p-l-15 p-t-20 f16">
					{{ elderName }}
					<span class="iconfont icon-arrdown"></span>
				</div>
			</div>
			<div class="map-box">
				<div class="map-tit" @click="showDevices = true">
					<span v-if="currDevice.deviceName">{{ currDevice.deviceName }}</span>
					<span v-else>选择设备</span>
					<span class="iconfont icon-arrdown m-l-5"></span>
				</div>
				<div class="map-list c-white" @click="goTo('locations', { sn: currDevice.sn })">
					定位记录
					<van-icon name="arrow" />
				</div>
				<CurrAmap ref="refAmap" :device="currDevice" />
			</div>
		</div>
		<div class="user-list">
			<div class="tit">健康信息</div>
			<div class="g-active-background">
				<div class="f16">{{ elderName }}</div>
				<div class="g-flex c66 m-t-15">
					<div class="flex1">体温：无字段</div>
					<div class="flex1">睡眠： {{ deviceHealth.sleepValue }}</div>
				</div>
				<div class="g-flex c66 m-t-5">
					<div class="flex1">血压： {{ deviceHealth.bloodPressureValue }}</div>
					<div class="flex1">心率： {{ deviceHealth.heartRateValue }}次/分</div>
				</div>
				<div class="g-flex c66 m-t-5">
					<div class="flex1">血氧： {{ deviceHealth.bloodOxygenValue }}</div>
					<div class="flex1">步数：{{ deviceHealth.stepNumberValue }}步</div>
				</div>
				<div class="g-row-between c66 m-t-5">
					<div class="flex1">检测时间：{{ deviceHealth.time }}</div>
					<div class="fs0 c-green-light" @click="goTo('health', { sn: currDevice.sn })">查看详情<van-icon name="arrow" /></div>
				</div>
			</div>
			<div class="tit m-t-20 g-row-between">
				<div>设备信息</div>
				<div>设备数：{{ deviceListForList.length }}</div>
			</div>
			<div class="shadow-card" v-for="(it, i) in deviceListForList" :key="i">
				<div class="c33 g-row-between">
					<div>设备名称：{{ it.deviceName }}</div>
					<div class="fs0">
						<span class="g-tag b-green" v-if="it.deviceBusiness === '平安通设备'">平安通</span>
						<span class="g-tag b-blue" v-if="it.deviceBusiness === '居家设备'">居家</span>
						<span class="g-tag b-green-light" v-if="it.online === 'true'">在线</span>
						<span class="g-tag b-gray" v-if="it.online === 'false'">下线</span>
					</div>
				</div>
				<div class="c66 m-t-15" @click="copy(it.sn)">设备SN/ID：{{ it.sn }}</div>
				<div class="c66 m-t-5">绑定时间： {{ it.createTime }}</div>
				<div class="c66 m-t-5">绑定人： {{ it.createBy }}</div>
				<div class="g-btn m-t-20" @click="goTo('alert', { sn: it.sn })">告警信息</div>
			</div>
		</div>
	</div>
	<Tabbar />
	<van-popup v-model:show="showDevices" position="bottom" :style="{ height: '60vh' }" closeable close-icon="close" round safe-area-inset-bottom>
		<div class="device-popup">
			<div class="f18 g-flex pop-tit">选择设备</div>
			<div class="pop-scroll">
				<div class="pop-item f16" :class="{ 'c-green': currDevice.id == it.id }" v-for="(it, i) in deviceListForMap" :key="i" @click="chooseDevice(it)">
					{{ it.deviceName }}
					<van-icon class="m-l-10" name="success" color="#239959" />
				</div>
			</div>
		</div>
	</van-popup>
	<van-popup v-model:show="showUsers" position="bottom" :style="{ height: '60vh' }" closeable close-icon="close" round safe-area-inset-bottom>
		<div class="device-popup">
			<div class="f18 g-flex pop-tit">选择长者</div>
			<div class="pop-scroll">
				<div class="pop-item f16" :class="{ 'c-green': elderId == it.id }" v-for="(it, i) in userList" :key="i" @click="chooseUser(it)">
					{{ it.name }}
					<van-icon class="m-l-10" name="success" color="#239959" v-if="elderId == it.id" />
				</div>
			</div>
		</div>
	</van-popup>
</template>
<script setup>
	import { ref, onMounted, watch, computed, nextTick, useTemplateRef } from 'vue'
	import NProgress from 'nprogress'
	import { getCurEldersByPhone } from '@/api/login'
	import { getDeviceList, getDeviceHealthBySn } from '@/api/device'
	import { useRouter } from 'vue-router'
	const router = useRouter()
	import { userStore } from '@/stores/user'
	const store = userStore()
	import { copy } from '@/utils'
	import CurrAmap from '@/components/CurrAmap.vue'
	const { setUser } = store
	import { storeToRefs } from 'pinia'
	const { storePhone, storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const elderName = computed(() => storeUser.value.name)
	const userList = ref([])
	// const Amap = useTemplateRef('refAmap')

	let deviceListForMap = ref([])
	let deviceListForList = ref([])

	let currDevice = ref({}) //当前地图设备
	let deviceHealth = ref({
		bloodOxygenValue: '',
		bloodPressureValue: '',
		heartRateValue: '',
		sleepValue: '',
		stepNumberValue: '',
		time: ''
	}) //健康信息

	let showUsers = ref(false)
	let showDevices = ref(false)

	const getUsers = () => {
		getCurEldersByPhone({ phone: storePhone.value })
			.then(res => {
				userList.value = res.data
			})
			.finally(() => {
				NProgress.done()
			})
	}
	const getDevices = () => {
		getDeviceList({ elderId: elderId.value, elderType: 0 }).then(res => {
			deviceListForMap.value = res.data
			currDevice.value = res.data?.[0] ?? {}
		})
	}
	const getDeviceAll = () => {
		getDeviceList({ elderId: elderId.value }).then(res => {
			deviceListForList.value = res.data
		})
	}
	const getHealthBySn = sn => {
		getDeviceHealthBySn({ sn }).then(res => {
			deviceHealth.value = res.data
		})
	}
	const goTo = (name, params = {}) => {
		router.push({ name: name, params: params })
	}
	const chooseUser = it => {
		showUsers.value = false
		setUser(it)
	}
	const chooseDevice = it => {
		currDevice.value = it
		showDevices.value = false
	}
	const init = () => {
		getUsers()
		getDevices()
		getDeviceAll()
	}
	store.$subscribe((mutation, state) => {
		NProgress.start()
		//监听store修改
		init()
	})
	onMounted(() => {
		NProgress.start()
		init()
	})
	watch(
		currDevice,
		Value => {
			deviceHealth.value = {
				bloodOxygenValue: '',
				bloodPressureValue: '',
				heartRateValue: '',
				sleepValue: '',
				stepNumberValue: '',
				time: ''
			}
			if (Value.id) {
				getHealthBySn(Value.sn)
			}
		},
		{ deep: true, immediate: true }
	)
</script>

<style lang="scss" scoped>
	.g-content {
		position: relative;
		padding-bottom: 70px;
	}
	.abs {
		z-index: 10;
		position: fixed;
		top: 40px;
		left: 0;
		.toggletext {
			color: white;
			font-size: 16px;
		}
		.arc-box {
			width: 100vw;
			background: var(--primary);
			height: 140px;
			border-bottom-left-radius: 26px;
			border-bottom-right-radius: 26px;
			.iconfont {
				font-size: 12px;
				margin-left: 2px;
			}
		}
		.map-box {
			position: absolute;
			top: 60px;
			left: 12px;
			width: calc(100vw - 24px);
			height: 200px;
			background: #dddddd;
			border-radius: 8px;
			overflow: hidden;
			.map-tit {
				border-radius: 6px;
				padding: 5px;
				background: #dddddd;
				z-index: 10000;
				position: absolute;
				right: 15px;
				top: 10px;
				.iconfont {
					font-size: 12px;
					color: #666666;
				}
			}
			.map-list {
				border-radius: 8px;
				padding: 6px 4px 6px 8px;
				background: var(--color-green-light);
				z-index: 10000;
				position: absolute;
				right: 0;
				bottom: 0;
				i {
					vertical-align: middle;
				}
			}
		}
	}
	::v-deep(.van-haptics-feedback) {
		&.van-dropdown-menu__item {
			background: var(--primary);
			justify-content: flex-start;
			.van-dropdown-menu__title {
				color: white !important;
			}
		}
	}
	.user-list {
		margin-top: 280px;
		padding: 0 12px 0;
		.tit {
			color: #6e6e6e;
			margin-bottom: 10px;
		}
		.g-active-background {
			padding: 15px 12px;
		}
		.shadow-card {
			padding: 15px 12px;
			.g-btn {
				width: 60px;
			}
		}
	}
	.device-popup {
		.pop-tit {
			background: white;
			position: sticky;
			top: 0;
			height: 50px;
		}
		.pop-scroll {
			overflow-y: auto;
			height: calc(60vh - 50px);
			.pop-item {
				padding: 15px;
				border-bottom: 1px solid #eeee;
			}
		}
	}
</style>
