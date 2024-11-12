<script setup>
	import { ref, onMounted, getCurrentInstance, toRaw } from 'vue'
	import { getCurEldersByPhone } from '@/api/login'
	import { useRoute, useRouter } from 'vue-router'
	import { userStore } from '@/stores/user'
	const store = userStore()
	const { setLoginPhone, setUser } = store
	const list = ref([])
	const getList = phone => {
		getCurEldersByPhone({ phone }).then(res => {
			// 18538715422
			list.value = res.data
		})
	}
	const goTo = it => {
		setUser(it)
		router.push({ name: 'home' })
	}
	const route = useRoute()
	const router = useRouter()
	const query = route.query
	// 假设你想去除的参数是 'phone'
	const removeParam = param => {
		const query = { ...route.query }
		delete query[param]
		// 使用编程式导航去除参数
		router.push({ path: route.path, query })
	}
	// 调用函数去除参数
	// removeParam('phone')
	// const { proxy } = getCurrentInstance()
	onMounted(() => {
		const phone = (query?.phone ?? '') || (store.storePhone.value ?? '')
		getList(phone)
		setLoginPhone(phone)
		// proxy.$showToast(55555)
	})
</script>

<template>
	<div class="g-content">
		<div v-if="list.length === 0" class="g-flex none-box">没有长者信息</div>
		<div v-else class="box">
			<div class="tit">请选择长者</div>
			<div class="shadow-card m-t-10" v-for="(it, i) in list" :key="i" @click="goTo(it)">
				<div class="name bold">{{ it.name }}</div>
				<div class="m-t-10">{{ it.phone }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.shadow-card {
		padding: 12px;
	}
	.none-box {
		color: #767676;
		height: var(--viewport-height-big);
		font-size: 18px;
	}
	.box {
		padding: 30px;
		.tit {
			color: #767676;
			font-size: 16px;
		}
		.name {
			font-size: 14px;
		}
	}
</style>
