import request from '@/utils/axios-request'
export function getCurEldersByPhone(query) {
	return request({
		url: '/bbyl/queryCurElders',
		method: 'get',
		params: query
	})
}