import request from '@/utils/axios-request'
//获取告警未读数量 参数elderId
export function getAlertsNum(params) {
	return request({
		url: `/client/queryEventCountsByElderId/${params}`,
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
	})
}
//获取告警list 参数 deviceNo deviceName elderId startTime endTime pageNum pageSize
export function getAlertList(params) {
	return request({
		url: `/client/getAlarmList`,
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}