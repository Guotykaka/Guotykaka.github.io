import '@/style/variables.css'
import '@/style/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './router/navigationGuards' // 导航守卫
import './assets/iconfont/iconfont.css'
const app = createApp(App)
import NavigationBar from '@/components/NavigationBar.vue'
app.component('NavigationBar', NavigationBar)
app.use(router)
app.mount('#app')
