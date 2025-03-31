import { createRouter, createWebHistory,createWebHashHistory  } from 'vue-router'
import HomeView from '../views/home/home.vue'
const router = createRouter({
	history: createWebHashHistory (import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			alias: '/index',
			name: 'index',
			component: HomeView,
			meta: { title: '首页', back: false }
			// title 为页面顶部标题栏标题，back为是否展示返回按钮
		},
		{
			path: '/404',
			name: '404',
			component: () => import('@/views/error/404.vue'),
			meta: { title: '404', back: false }
		},
		{
			path: '/:catchAll(.*)', // 不识别的path自动匹配404
			redirect: '/404'
		}
	]
})
export default router
