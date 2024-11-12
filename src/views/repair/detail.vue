<template>
	<div class="trouble-detail">
		<!-- <public-title :title="$route.meta.title" :leftArrow="true" :isBackground="false" /> -->
		<div class="background">
			<div class="trouble-class">
				<van-icon name="warning" color="#fff" />
				{{ troubleStatusName }}
			</div>
		</div>
		<div class="content" id="content">
			<van-tabs v-model:active="active" @click-tab="chooseTab">
				<van-tab title="基础信息">
					<van-form ref="troubleInfo" input-align="right" error-message-align="right">
						<van-cell-group title="基础信息" class="marginBottom10 vanCellGroup">
							<van-field readonly name="misisdn" v-model="troubleInfo.orderId" label="故障单编号" placeholder=""> </van-field>
							<van-field readonly v-model="troubleTypeName" label="故障类型" placeholder=""> </van-field>
							<van-field readonly name="clientName" v-model="troubleInfo.clientName" label="客户名称" placeholder="" />
							<van-field readonly name="reportPhone" v-model="troubleInfo.reportPhone" label="报障电话" placeholder="" />
							<van-field readonly name="reportAddress" v-model="troubleInfo.reportAddress" label="报障地址" placeholder="" />
							<van-field readonly name="visitTime" v-model="troubleInfo.visitTime" label="计划上门时间" placeholder="" />
							<van-field readonly name="description" v-model="troubleInfo.description" label="故障描述" placeholder="" />
						</van-cell-group>
						<van-cell-group title="设备信息" class="marginBottom10">
							<van-field readonly name="deviceName" v-model="troubleInfo.deviceName" label="设备名称" placeholder="" />
							<van-field readonly name="deviceNo" v-model="troubleInfo.deviceNo" label="设备型号" placeholder="" />
							<van-field readonly name="phone" v-model="troubleInfo.phone" label="设备号码" placeholder="" />
						</van-cell-group>
						<van-cell-group title="维修人员信息" class="marginBottom10">
							<van-field readonly name="disposePerson" v-model="troubleInfo.disposePerson" label="人员名称" placeholder="" />
							<van-field readonly name="disposePhone" v-model="troubleInfo.disposePhone" label="联系电话" placeholder="">
								<template #button v-if="troubleInfo.disposePhone">
									<span class="iconfont icon-copy" @click.stop="copy(troubleInfo.disposePhone)" />
								</template>
							</van-field>
						</van-cell-group>
					</van-form>
				</van-tab>
				<van-tab title="工单动态">
					<van-steps direction="vertical" :active="activeIndex" active-icon="checked" active-color="#269e3d">
						<van-step v-for="(item, index) in dateList" :key="index">
							<h3>{{ item.disposePerson }}</h3>
							<p>{{ item.link }}</p>
							<p>{{ item.disposeTime }}</p>
						</van-step>
					</van-steps>
				</van-tab>
			</van-tabs>
		</div>
    <van-loading class="loading" v-if="isLoading" size="40px" vertical>加载中...</van-loading>
	</div>
</template>
<script setup>
	import { ref, reactive, onMounted, computed, defineProps } from 'vue'
	import NProgress from 'nprogress'
	import { copy } from '@/utils'
	import { getTroubleDetail } from '@/api/repair'
	import { troubleTypeList, troubleStatus,FormatFun } from '@/dict/index'
  const isLoading = ref(false)
	const { troubleId } = defineProps({
		troubleId: {
			type: Object,
			default: () => {}
		}
	})
	const troubleTypeName = ref('')
  const troubleStatusName = ref('')
	const troubleInfo = ref({
		status: 1
	})
	const active = ref(0)
	const dateList = ref([])
	const activeIndex = ref(0)
	const chooseTab = index => {
    troubleTypeName.value = ''
    getTroubleInfo()
	}
	const getTroubleInfo = () => {
    troubleTypeName.value = ''
    troubleStatusName.value = ''
		dateList.value = []
		NProgress.start()
    isLoading.value = true
		getTroubleDetail({ troubleId: troubleId })
			.then(res => {
				troubleInfo.value = res.data
				troubleTypeName.value = FormatFun(troubleTypeList, res.data.troubleType)
        troubleStatusName.value = FormatFun(troubleStatus, res.data.status)
        console.log("🚀 ~ getTroubleInfo ~ troubleStatusName.value:", troubleStatusName.value)
				dateList.value = res.data.listTroubleOrderApprove ?? []
				activeIndex.value = res.data.listTroubleOrderApprove.length - 1
			})
			.finally(() => {
				NProgress.done()
				isLoading.value = false
			})
	}
	onMounted(() => {
		if (troubleId) {
			getTroubleInfo()
		}
	})
</script>
<style lang="scss" scoped>
	.trouble-detail {
		padding-bottom: 50px;
		.background {
			width: 100%;
			height: 100px;
			background-color: var(--primary);
			// text-align: center;
			font-size: 30px;
			font-weight: 700;
			border-radius: 0 0 40px 40px;
			margin-top: -1px;
			.trouble-class {
				font-size: 20px;
				color: #fff;
				padding-left: 20px;
				padding-bottom: 50px;
				line-height: 50px;
			}
		}

		.content {
			width: 95%;
			// height: 100px;
			background: #fff;

			margin: -45px auto 0;
			padding-bottom: 20px;
			// transform: translateX(-50%);
		}
		::v-deep(.van-cell-group) {
			box-shadow: 0 2px 7px 0 rgba(5, 34, 97, 0.1);
		}
		.line {
			height: 100px;
		}
    .loading{
  position:fixed !important;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
	}
</style>
