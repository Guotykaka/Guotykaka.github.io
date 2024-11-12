<template>
	<div class="g-tabbar">
		<div class="g-col-center flex1 fs0" :class="{ 'c-green': title === '首页' }" @click="goTo('home', '首页')">
			<span class="iconfont icon-homepage" style="font-size: 18px"></span>
			<span class="tit">首页</span>
		</div>
		<div class="g-col-center flex1 fs0" :class="{ 'c-green': title === '告警信息' }" @click="goTo('alert', '告警信息')">
			<span class="iconfont icon-alert" style="font-size: 22px">
				<span class="g-flex num" v-if="num">{{ num }}</span>
			</span>
			<span class="tit">告警信息</span>
		</div>
		<div class="g-col-center flex1 fs0" :class="{ 'c-green': title === '设备报修' }" @click="goTo('repair', '设备报修')">
			<span class="iconfont icon-baoxiu" style="font-size: 20px"> </span>
			<span class="tit"> 设备报修 </span>
		</div>
		<div class="g-col-center flex1 fs0" :class="{ 'c-green': title === '我的' }" @click="goTo('mine', '我的')">
			<span class="iconfont icon-mine" style="font-size: 24px"></span>
			<span class="tit">我的</span>
		</div>
	</div>
</template>
<script setup>
	import { computed, onMounted, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { getAlertsNum } from '@/api/alert'
	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	const route = useRoute()
	const router = useRouter()
	const title = computed({
		get() {
			return route?.meta?.title ?? ''
		}
	})
	const goTo = (name, tit) => {
		if (tit !== title) router.push({ name: name })
	}
	let num = ref(0)
	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const getNums = () => {
		getAlertsNum(elderId.value).then(res => {
			num.value = res.data > 99 ? 99 : res.data ?? 0
		})
	}
	onMounted(() => {
		getNums()
	})
</script>

<style lang="scss" scoped>
	.g-tabbar {
		height: var(--down-bar-height);
		background: white;
		border-top: 1px solid #e3e3e3;
		font-size: 12px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		color: #999999;
		z-index: 10;

		> div {
			height: var(--down-bar-height);
			.tit {
				margin-top: 2px;
			}
			.iconfont {
				position: relative;
			}
			.num {
				position: absolute;
				right: -10px;
				top: -6px;
				height: 16px;
				width: 16px;
				border-radius: 50%;
				background: red;
				color: white;
				font-size: 8px;
			}
		}
	}
</style>
