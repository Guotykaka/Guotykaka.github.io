import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	base: './',// 开发或生产环境服务的公共基础路径 配置引入相对路径
	server: {
		host: '0.0.0.0',
		open: true,
		port: 3000,
		proxy: {
			'/dev-api': {
				target: 'http://106.14.144.24:9001',
				changeOrigin: true, //changes the origin of the host header to the target URL
				ws: true, //proxy websockets
				rewrite: path => path.replace(/^\/dev-api/, ''),
				bypass(req, res, options) {
					const proxyURL = options.target + options.rewrite(req.url)
					// console.log('proxyURL : ', proxyURL) //在控制台输出路径
					res.setHeader('x-proxy-url', proxyURL) // 设置响应头显示完整请求路径
				}
			}
		}
	},
// 	vite构建打包后，默认启用ES Module，跨module加载引用涉及跨域，file://…没有跨域的定义
// 需要安装vite插件@vitejs/plugin-legacy 需在node 22.10.0 版本上打包 不然报错
	plugins: [vue(),
		legacy({
			targets:['defaults','not IE 11']
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			nprogressStyles: path.resolve(__dirname, './src/style/nprogress.css')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
})
