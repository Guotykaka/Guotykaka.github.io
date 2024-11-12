<template>
	<div class="g-content">
		<div>
			<van-form ref="submitForm" input-align="right" error-message-align="right">
				<van-cell-group title="基础信息" class="marginBottom10">
					<van-field readonly required name="deviceNo" v-model="deviceName" label="选择设备" placeholder="" right-icon="arrow" @click="onClickDevice"  :rules="[{ required: true, message: '请选择设备' }]"> </van-field>
					<van-field readonly required clickable v-model="troubleTypeName" label="故障类型" placeholder="" @click="onClickTroubleType" right-icon="arrow" :rules="[{ required: true, message: '请选择故障类型' }]"/>
					<van-field v-model="submitData.reportAddress" label="报障地址" placeholder="请输入" />
					<van-field v-model="submitData.description" label="故障描述" placeholder="请输入" />
					<van-field readonly name="datetimePicker" v-model="submitData.visitTime" label="计划上门时间" placeholder="" @click="onChangeTime" right-icon="arrow" />
				</van-cell-group>
			</van-form>
			<van-popup v-model:show="showDeviceType" position="bottom">
				<van-picker show-toolbar :columns="deviceTypeList" @confirm="onSelectDeviceType" @cancel="showDeviceType = false" />
			</van-popup>
			<van-popup v-model:show="showTroubleType" position="bottom">
				<van-picker show-toolbar :columns="troubleTypeList" @confirm="onSelectTroubleType" @cancel="showTroubleType = false" />
			</van-popup>
			<van-popup v-model:show="timePicker" position="bottom">
				<van-date-picker :value="submitData.visitTime" type="day" :min-date="minDate" @confirm="onSelectVisitTime" @cancel="timePicker = false" />
			</van-popup>
		</div>
		<!-- 选择故障类型-->

		<div class="footer-btn-box">
			<div class="add-btn" @click.stop="onSubmit">确定</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, reactive, onMounted, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
	import NProgress from 'nprogress'
	import { userStore } from '@/stores/user'
	import { storeToRefs } from 'pinia'
	import { fetchDeviceList , saveRepair} from '@/api/repair'
	import { parseTime } from '@/utils/date'
	import { troubleTypeList, FormatFun } from '@/dict/index'
import { showToast } from 'vant'
const router = useRouter()

	// const troubleType = ref(troubleTypeList)
	const deviceName = ref('')
	const deviceList = []
	const deviceTypeList = ref([])
	const showDeviceType = ref(false)
	const datalist = ref([])
	const loading = ref(false)
	const finished = ref(false)
	const troubleTypeName = ref('')
	const showTroubleType = ref(false)
	const timePicker = ref(false)
	const minDate = ref(new Date())

	const store = userStore()
	const { storeUser } = storeToRefs(store)
	const elderId = computed(() => storeUser.value.id)
	const submitData = reactive({
    clientName: storeUser.value.name,
    reportPhone: storeUser.value.curPhone,
		deviceNo: '',
		deviceName: '',
		deviceModel: '',
		phone: null,
		elderId: elderId.value,
		customerType: null,
		reportAddress: null,
		description: null,
		visitTime: null,
    source: '用户',
    recordPerson: storeUser.value.curName,
    createBy: storeUser.value.curName,
    createById: storeUser.value.curUserId,
	})
	const onClickDevice = () => {
		showDeviceType.value = true
	}
	const onSelectDeviceType = obj => {
		deviceName.value = obj.selectedOptions[0].text
		showDeviceType.value = false
		if (obj.selectedValues < 0) return
		let currentDevice = obj.selectedValues[0]
		deviceList.value.map(item => {
			if (item.id == currentDevice) {
				submitData.deviceName = item.deviceName
				submitData.deviceModel = item.deviceModel
				submitData.deviceNo = item.sn
			}
		})
	}
	const onClickTroubleType = () => {
		showTroubleType.value = true
	}
	const onSelectTroubleType = item => {
		troubleTypeName.value = item.selectedOptions[0].text
		submitData.troubleType = item.selectedOptions[0].value
		showTroubleType.value = false
	}
	const onChangeTime = () => {
		timePicker.value = true
	}
	const onSelectVisitTime = obj => {
		submitData.visitTime = obj.selectedValues[0] + '-' + obj.selectedValues[1] + '-' + obj.selectedValues[2]
		timePicker.value = false
	}
	const onSubmit = () => {
    if(!Boolean(deviceName.value)){
      showToast('请选择设备')
      return
    }
    if(!Boolean(troubleTypeName.value)){
      showToast('请选择故障类型')
      return
    }
    console.log(submitData,submitData.value,11111111111111)
    saveRepair({...submitData,reportTime: parseTime(new Date()),}).then(res=>{
      showToast('操作成功')
      router.push('/repair')

    }).catch(err=>{
      showToast(err.msg)
    })
		
  }
	const getDeviceList = () => {
		fetchDeviceList({ elderId: elderId.value }).then(res => {
			console.log('🚀 ~ fetchDeviceList ~ res:', res)
			deviceList.value = res.data ?? []
			let arr = []
			res.data.forEach(item => {
				arr.push({
					text: item.deviceName,
					value: item.id
				})
			})
			arr.unshift({ text: '无设备', value: -1 })
			console.log('🚀 ~ fetchDeviceList ~ arr:', arr)
			deviceTypeList.value = arr
			console.log('🚀 ~ fetchDeviceList ~ deviceTypeList:', deviceTypeList.value)
		})
	}
	onMounted(() => {
		getDeviceList()
	})
</script>

<style lang="scss" scoped>
	.g-content {
		height: var(--viewport-height-mini);
		padding-bottom: 50px;
		position: relative;
		.marginBottom10 {
			margin-bottom: 10px;
		}
		.footer-btn-box {
			width: 100%;
			position: fixed;
			bottom: 50px;
			left: 0;
			background: #fff;
			padding-top: 10px;
			.add-btn {
				margin: 0 20px 20px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				border: 1px solid var(--primary);
				background: var(--primary-bg);
				color: var(--primary);
				border-radius: 8px;
				font-size: 14px;
			}
		}
	}
</style>
