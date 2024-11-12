import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
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
	plugins: [vue()],
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
