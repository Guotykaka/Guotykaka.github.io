import router from './index'
router.beforeEach(async (to, from, next) => {
	// 设置页面title
	document.title = '二狗导航'
	next()
})
router.afterEach((to, from) => {})
