import axios from 'axios'
// import qs from  'qs'
import { serialize } from '@/utils'
import { showToast } from 'vant'

import NProgress from 'nprogress' // progress bar
import 'nprogressStyles'
// import router from '@/router'
// import { Message } from 'element-ui'
// import store from '@/store'

axios.defaults.timeout = 10000
axios.defaults.baseURL = import.meta.env.VITE_BASEAPI // 根据环境切换域名
// axios.defaults.baseURL = 'http://106.14.144.24:9001' // 根据环境切换域名
// 返回其他状态码
axios.defaults.validateStatus = function (status) {
	return status >= 200 && status <= 500 // 默认的200-300
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// NProgress Configuration
NProgress.configure({
	showSpinner: false,
	trickleSpeed: 500,
	easing: 'cubic-bezier(0.680, -0.050, 0.265, 1.550)'
})

axios.interceptors.request.use(
	config => {
		// NProgress.done()
		// NProgress.start()
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

//  response 响应拦截
axios.interceptors.response.use(
	res => {
		// NProgress.done()
		const status = res?.status
		const message = res?.data?.message ?? '网络错误！'
		if (status === 401) {
			showToast({ message: message || '登录信息过期，请重新登录！', duration: 1500 })
			return Promise.reject(new Error(message))
		}

		if (status !== 200 || res?.data?.error !== 0) {
			showToast({ message: message, duration: 1500 })
			return Promise.reject(new Error(message))
		}
		return res.data
	},
	error => {
		if (axios.isCancel(error)) {
			return Promise.reject(new Error('Axios canceled.'))
		}
		showToast({ message: error, duration: 1500 })
		return Promise.reject(new Error(error))
	}
)

export default axios
