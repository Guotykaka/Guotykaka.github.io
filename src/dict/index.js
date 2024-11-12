// 故障类型
export const troubleTypeList = [
  {
		value: 0,
		text: '设备回收'
	},
	{
		value: 1,
		text: '电源故障'
	},
	{
		value: 2,
		text: '设备故障'
	},
	{
		value: 3,
		text: '设备更换'
	},
	{
		value: 4,
		text: '电话卡更换'
	},
	{
		value: 5,
		text: '上门教学'
	},
	{
		value: 6,
		text: '其他'
	}
]

// 故障状态
export const troubleStatus = [
	{
		value: 0,
		text: '待分配'
	},
	{
		value: 1,
		text: '正在维修'
	},
	{
		value: 2,
		text: '继续跟进'
	},
	{
		value: 3,
		text: '已归档'
	}
]

export const customerTypeList = [
	{
		value: 1,
		text: '平安通'
	},
	{
		value: 2,
		text: '测试'
	},
	{
		value: 3,
		text: '联系人'
	},
	{
		value: 4,
		text: '机构用户'
	},
	{
		value: 5,
		text: '拓展人员'
	},
	{
		value: 6,
		text: 'mini包销售'
	},
	{
		value: 7,
		text: '广电'
	},
	{
		value: 8,
		text: '保险'
	},
	{
		value: 9,
		text: '四川省份'
	},
	{
		value: 10,
		text: '居家客户'
	}
]

export function FormatFun(list, value) {
  const target = list.find(item => item.value == value)
  if (target) {
    return target.text
  }
}