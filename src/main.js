import '@/style/variables.css'
import '@/style/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './router/navigationGuards' // 导航守卫
import './assets/iconfont/iconfont.css'
import { showToast } from 'vant'
const app = createApp(App)
import NavigationBar from '@/components/NavigationBar.vue'
// 引入高德地图
app.component('NavigationBar', NavigationBar)
app.config.globalProperties.$showToast = showToast
app.use(createPinia())
app.use(router)
app.mount('#app')
