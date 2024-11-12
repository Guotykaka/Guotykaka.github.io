import request from '@/utils/axios-request'
// 获取实时心率
export function getCurHeartRate(params) {
	return request({
		url: '/deviceData/get/realtime/heartRate',
		method: 'get',
		params
	})
}
// 获取心率列表
export function getHeartRateList(params) {
	return request({
		url: '/deviceData/get/heartRate',
		method: 'get',
		params
	})
}
// 获取平均步数
export function getAverageStepNumber(params) {
	return request({
		url: '/deviceData/get/avg/stepNumber',
		method: 'get',
		params
	})
}
// 获取步数列表
export function getStepNumberList(params) {
	return request({
		url: '/deviceData/get/stepNumber',
		method: 'get',
		params
	})
}
// 获取血压列表
export function getBloodPressureList(params) {
	return request({
		url: '/deviceData/get/bloodPressure',
		method: 'get',
		params
	})
}
// 获取血氧列表
export function getBloodOxygenList(params) {
	return request({
		url: '/deviceData/get/bloodoxygen',
		method: 'get',
		params
	})
}
// 获取睡眠列表
export function getSleepList(params) {
	return request({
		url: '/deviceData/get/sleep',
		method: 'get',
		params
	})
}