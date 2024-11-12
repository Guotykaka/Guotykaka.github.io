import request from '@/utils/axios-request'
//获取设备实时定位 参数sn
export function getDeviceCurLocation(params) {
	return request({
		url: '/deviceElder/get/position',
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}
//获取设备历史定位 参数 sn startTime endTime
export function getDeviceHisLocation(params) {
	return request({
		url: 'deviceElder/get/history/position',
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}
//获取设备列表 参数elderId elderType 0 平安通
export function getDeviceList(params) {
	return request({
		url: '/deviceElder/getDeviceByElder',
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}
//获取健康信息 参数sn
export function getDeviceHealthBySn(params) {
	return request({
		url: '/deviceElder/getHealthBySn',
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}