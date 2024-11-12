import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/elder/elders.vue'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
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
			path: '/home',
			name: 'home',
			component: () => import('../views/pages/home.vue'),
			meta: { title: '首页', back: false }
		},
		{
			path: '/alert/:sn?',
			name: 'alert',
			component: () => import('../views/pages/alert.vue'),
			meta: { title: '告警信息', back: false },
			props: true
		},
		{
			path: '/mine',
			name: 'mine',
			component: () => import('../views/pages/mine.vue'),
			meta: { title: '我的', back: false },
		},
		{
			path: '/locations/:sn',
			name: 'locations',
			component: () => import('../views/device/locations.vue'),
			meta: { title: '定位记录', back: true },
			props: true
		},
		{
			path: '/health/:sn',
			name: 'health',
			component: () => import('../views/device/health.vue'),
			meta: { title: '健康详情', back: true },
			props: true
		},
		{
			path: '/repair',
			name: 'repair',
			component: () => import('../views/pages/repair.vue'),
			meta: { title: '设备报修' }
		},
		{
			path: '/repair-add',
			name: 'repairAdd',
			component: () => import('../views/repair/add.vue'),
			meta: { title: '我要报修', back: true }
		},
		{
			path: '/repair-detail/:troubleId',
			name: 'repairDetail',
			component: () => import('../views/repair/detail.vue'),
			meta: { title: '故障单详情', back: true },
			props: true
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
