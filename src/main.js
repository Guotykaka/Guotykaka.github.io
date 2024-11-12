import '@/style/variables.css'
import '@/style/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './router/navigationGuards' // 导航守卫
import { Toast, Dialog, DropdownMenu, DropdownItem, Icon, Popup, List, Calendar, Field,Button,Cell,Form,Picker, DatePicker,CellGroup,Tabs,Tab,Steps,Step,Search,Loading,Tag } from 'vant'
import 'vant/lib/index.css'

import './assets/iconfont/iconfont.css'

import { showToast } from 'vant'
const app = createApp(App)
import NavigationBar from '@/components/NavigationBar.vue'
import Tabbar from '@/components/Tabbar.vue'
// 引入高德地图
import { initMap } from './utils/amap.js'
app.component('NavigationBar', NavigationBar)
app.component('Tabbar', Tabbar)
app.config.globalProperties.$showToast = showToast
app.use(createPinia())
app.use(Toast)
app.use(Dialog)
app.use(DropdownMenu) //下拉菜单
app.use(DropdownItem) //下拉菜单
app.use(Icon)
app.use(Popup) //弹出层
app.use(List) //瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项
app.use(Calendar)
app.use(Field)
app.use(Cell)
app.use(CellGroup)
app.use(Button)
app.use(Form)
app.use(Picker)
app.use(DatePicker)
app.use(Tabs)
app.use(Tab)
app.use(Steps)
app.use(Step)
app.use(Search)
app.use(Loading)
app.use(Tag)
app.use(router)
initMap().finally(() => {
	app.mount('#app')
})
