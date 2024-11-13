<template>
	<div class="g-navigation g-row-between">
		<div class="g-flex g-default">
			<div class="logos m-r-15"><img class="logo" src="@/assets/images/logo.jpg" /></div>
			<text class="f14 bold">鹤壁竞技足球俱乐部</text>
		</div>
		<div class="g-flex f14 bold">
			<div class="g-pointer m-r-20">历史</div>
			<div class="g-pointer m-r-20">阵容</div>
			<div class="g-pointer m-r-20">照片</div>
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

<style lang="scss" scoped></style>
