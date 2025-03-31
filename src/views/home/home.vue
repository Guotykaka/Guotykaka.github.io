<template>
	<div class="g-content b-graypage g-row g-wrap" @click="gohref('https://developer.mozilla.org/zh-CN/')">
		<div class="g-col-center g-pointer">
			<img class="icon m-b-5" src="@/assets/images/logo.jpg" />
			<div>MDN Web Docs</div>
		</div>

		<div class="g-col-center g-pointer" @click="gohref('https://tmsrets.top/zh/#/auth/login')">
			<img class="icon m-b-5" src="@/assets/images/tms.png" />
			<div>TSMeow</div>
		</div>
	</div>
</template>
<script setup>
	const gohref = link => {
		window.open(link, '_blank')
	}
</script>
<style lang="scss" scoped>
	.g-content {
		min-height: calc(100vh - var(--up-bar-height));
		gap: 20px;
		align-content: flex-start;
		padding: 20px;
		// background: var(--primary);
	}
	.logo {
		width: 100vw;
		vertical-align: bottom;
	}
</style>
