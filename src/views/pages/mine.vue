<template>
	<div class="g-content b-graypage">
		<div class="name g-row-left shadow-card">
			<!-- <img class="fs0" src="@/assets/images/user.png" /> -->
			<div class="m-l-10">
				<div class="f16 m-b-5">{{ name }}</div>
				<div class="c66">{{ phone }}</div>
			</div>
		</div>
	</div>
	<Tabbar />
</template>
<script setup>
	import { computed } from 'vue'
	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const name = computed(() => storeUser.value.curName)
	const phone = computed(() => storeUser.value.curPhone)
</script>

<style lang="scss" scoped>
	.g-content {
		height: var(--viewport-height-mini);
		.name {
			padding: 20px 25px;
			img {
				width: 40px;
				height: 40px;
				object-fit: contain;
			}
		}
	}
</style>
