<script setup>
	import { useRouter } from 'vue-router'
	const router = useRouter()
	const goTo = () => {
		router.push({ name: 'home' })
	}
</script>

<template>
	<div class="g-content g-col-center">
		<div class="none-box">404</div>
		<div class="g-btn m-t-20" @click="goTo">回到首页</div>
	</div>
</template>

<style lang="scss" scoped>
	.none-box {
		color: #767676;
		font-size: 68px;
	}
</style>
