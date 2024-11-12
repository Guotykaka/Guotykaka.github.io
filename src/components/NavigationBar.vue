<template>
	<div class="g-navigation">
		<div class="icon g-row-center" v-if="ifBack" @click="back"><van-icon name="arrow-left" />返回</div>
		{{ title }}
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
	.icon {
		width: 60px;
		height: var(--up-bar-height);
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
