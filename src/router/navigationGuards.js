import router from './index'
import NProgress from 'nprogress'
import { userStore } from '@/stores/user'
router.beforeEach(async (to, from, next) => {
	const store = userStore()
	// NProgress.start()
	// 设置页面title
	document.title = to.meta.title ? `鹤壁竞技FC官方网站-${to.meta.title}` : '鹤壁竞技足球俱乐部'
	if (!store.storeUser.phone && to.path !== '/') {
		//没有手机号并且不是去根页面禁止进入
		next(false)
	} else if (store.storeUser.phone && to.path === '/') {
		//有手机号去根页面直接跳首页
		next(() => {
			router.replace({ name: 'home' })
		})
	} else if (from?.name === 'index') {
		next(() => {
			// 使用replace方法替换当前历史记录，确保不能通过浏览器后退按钮返回上一个页面
			router.replace({ path: to.path })
		})
	} else {
		next()
	}
})
router.afterEach((to, from) => {
	// NProgress.done()
})
