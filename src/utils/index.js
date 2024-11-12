import { showToast } from 'vant'
// 表单序列化
export const serialize = data => {
	const list = []
	Object.keys(data).forEach(ele => {
		list.push(`${ele}=${data[ele]}`)
	})
	return list.join('&')
}
export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'instant'
	})
}
export const copy = text => {
	if (navigator.clipboard?.writeText) {
		navigator.clipboard.writeText(text).then(
			() => {
				showToast({ message: '已复制到手机剪贴板', duration: 1500 })
			},
			err => {
				showToast({ message: err, duration: 1500 })
			}
		)
		return
	}
	// 创建输入框
	var inputTest = document.createElement('input')
	inputTest.setAttribute('readonly', '')
	inputTest.value = text
	document.body.appendChild(inputTest)
	inputTest.select()
	document.execCommand('Copy')
	inputTest.className = 'oInput'
	inputTest.style.display = 'none'
	showToast({ message: '已复制到手机剪贴板', duration: 1500 })
}

/**
 * 日期
 * @param {Date} date 代表指定的日期，格式：2018-09-27
 * @param {Number} day 传-1表始前一天，传1表始后一天
 */
export function getNextDate(date, day) {
	var dd = new Date(date)
	dd.setDate(dd.getDate() + day)
	var y = dd.getFullYear()
	var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1
	var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
	return y + '-' + m + '-' + d
}
