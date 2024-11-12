import { defineStore } from 'pinia'
import { ref, toRaw, reactive } from 'vue'
export const userStore = defineStore('user', () => {
	const storePhone = ref('')
	function setLoginPhone(val) {
		storePhone.value = val
	}
	const storeUser = reactive({
		id: 0, //长者
		phone: '', //长者
		name: '', //长者
		curUserId: 0, //登录人
		curName: '', //登录人
		curPhone: '' //登录人
	})
	function setUser(val) {
		Object.assign(storeUser, val)
	}
	return { storePhone, storeUser, setLoginPhone, setUser }
})
