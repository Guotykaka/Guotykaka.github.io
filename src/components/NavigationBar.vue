<template>
	<div class="g-navigation g-row-between">
		<div class="g-flex g-default phone">
			<div class="logos m-r-15 fs0">
				<img class="logo logolight" src="@/assets/images/logo.jpg" />
				<img class="logo logodark" src="@/assets/images/logo.png" />
			</div>
			<text class="f14 bold fs0">二狗导航</text>
		</div>
		<div class="g-flex f14 bold fs0">
			<div class="g-pointer m-r-20">足球</div>
			<div class="g-pointer m-r-20">墙外</div>
			<div class="g-pointer m-r-20">资讯</div>
		</div>
	</div>
</template>
<script setup>
	import { computed } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	const route = useRoute()
	const router = useRouter()
	const title = computed({
		get() {
			return route?.meta?.title ?? ''
		}
	})
	const ifBack = computed({
		get() {
			return route?.meta?.back ?? ''
		}
	})
	const back = () => {
		router.back()
	}
</script>

<style lang="scss" scoped>
	.logolight {
		display: block;
	}
	.logodark {
		display: none;
	}
	@media (prefers-color-scheme: dark) {
		/* 系统为黑夜模式 */
		.logolight {
			display: none;
		}
		.logodark {
			display: block;
		}
	}
</style>
