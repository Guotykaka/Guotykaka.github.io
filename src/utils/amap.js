// 引入高德地图
import AMapLoader from '@amap/amap-jsapi-loader'

export function initMap() {
	return new Promise(function (resolve, reject) {
		window._AMapSecurityConfig = {
			securityJsCode: '21bb36d7e29a3a0b26db27075db5e9a7'
		}
		AMapLoader.load({
			key: '16213498f1d9a42ce0a2ff5ba5163d71', // https://console.amap.com/dev/key/app
			version: '2.0',
			plugins: [
				'AMap.ToolBar', //工具条，控制地图的缩放、平移
				'AMap.Scale', //比例尺，显示当前地图中心的比例尺
				'AMap.HawkEye', //鹰眼，用于显示缩略地图
				'AMap.Geolocation' //浏览器定位
			] //需要使用的的插件列表
		})
			.then(Amap => {
				resolve(Amap)
			})
			.catch(err => {
				reject(err)
			})
	})
}
