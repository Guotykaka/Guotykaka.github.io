import request from '@/utils/axios-request'
//报障
export function saveRepair(data) {
	return request({
		url: `/bbyl/save`,
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
    },
    data
	})
}
//根据用户获取设备
export function fetchDeviceList(params) {
	return request({
		url: `/bbyl/getDeviceByElder`,
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}

//根据用户获取设备
export function getTroubleDetail(params) {
	return request({
		url: `/bbyl/selectTroubleOrderById`,
		method: 'get',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}

//根据id查询故障单
export function fetchTroubleList(data) {
	return request({
		url: `/bbyl/selectTroubleOrderListByPageH5`,
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
    },
    data
	})
}