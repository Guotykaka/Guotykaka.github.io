System.register(["./index-legacy-W7Uxj3BW.js","./index-legacy-g52LsU0b.js","./index-legacy-CtrOvTYD.js"],(function(e,l){"use strict";var a,o,t,d,n,u,r,i,s,p,v,c,m,b,h,f,g,V,y,x,_,k,U,P;return{setters:[e=>{a=e._,o=e.r,t=e.d,d=e.c,n=e.e,u=e.h,r=e.f,i=e.t,s=e.k,p=e.q,v=e.m,c=e.N,m=e.l,b=e.o,h=e.D,f=e.B,g=e.g,V=e.F,y=e.j},e=>{x=e.c},e=>{_=e.g,k=e.F,U=e.b,P=e.t}],execute:function(){var l=document.createElement("style");l.textContent=".trouble-detail[data-v-70663691]{padding-bottom:50px}.trouble-detail .background[data-v-70663691]{width:100%;height:100px;background-color:var(--primary);font-size:30px;font-weight:700;border-radius:0 0 40px 40px;margin-top:-1px}.trouble-detail .background .trouble-class[data-v-70663691]{font-size:20px;color:#fff;padding-left:20px;padding-bottom:50px;line-height:50px}.trouble-detail .content[data-v-70663691]{width:95%;background:#fff;margin:-45px auto 0;padding-bottom:20px}.trouble-detail[data-v-70663691] .van-cell-group{box-shadow:0 2px 7px rgba(5,34,97,.1)}.trouble-detail .line[data-v-70663691]{height:100px}.trouble-detail .loading[data-v-70663691]{position:fixed!important;top:50%;left:50%;transform:translate(-50%)}\n",document.head.appendChild(l);const N={class:"trouble-detail"},I={class:"background"},T={class:"trouble-class"},j={class:"content",id:"content"};e("default",a({__name:"detail",props:{troubleId:{type:Object,default:()=>{}}},setup(e){const l=o(!1),a=o(""),w=o(""),A=o({status:1}),C=o(0),B=o([]),z=o(0),O=e=>{a.value="",F()},F=()=>{a.value="",w.value="",B.value=[],c.start(),l.value=!0,_({troubleId:e.troubleId}).then((e=>{A.value=e.data,a.value=k(U,e.data.troubleType),w.value=k(P,e.data.status),console.log("🚀 ~ getTroubleInfo ~ troubleStatusName.value:",w.value),B.value=e.data.listTroubleOrderApprove??[],z.value=e.data.listTroubleOrderApprove.length-1})).finally((()=>{c.done(),l.value=!1}))};return t((()=>{e.troubleId&&F()})),(e,o)=>{const t=m("van-icon"),c=m("van-field"),_=m("van-cell-group"),k=m("van-form"),U=m("van-tab"),P=m("van-step"),F=m("van-steps"),S=m("van-tabs"),q=m("van-loading");return b(),d("div",N,[n("div",I,[n("div",T,[u(t,{name:"warning",color:"#fff"}),r(" "+i(w.value),1)])]),n("div",j,[u(S,{active:C.value,"onUpdate:active":o[13]||(o[13]=e=>C.value=e),onClickTab:O},{default:s((()=>[u(U,{title:"基础信息"},{default:s((()=>[u(k,{ref_key:"troubleInfo",ref:A,"input-align":"right","error-message-align":"right"},{default:s((()=>[u(_,{title:"基础信息",class:"marginBottom10 vanCellGroup"},{default:s((()=>[u(c,{readonly:"",name:"misisdn",modelValue:A.value.orderId,"onUpdate:modelValue":o[0]||(o[0]=e=>A.value.orderId=e),label:"故障单编号",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),label:"故障类型",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"clientName",modelValue:A.value.clientName,"onUpdate:modelValue":o[2]||(o[2]=e=>A.value.clientName=e),label:"客户名称",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"reportPhone",modelValue:A.value.reportPhone,"onUpdate:modelValue":o[3]||(o[3]=e=>A.value.reportPhone=e),label:"报障电话",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"reportAddress",modelValue:A.value.reportAddress,"onUpdate:modelValue":o[4]||(o[4]=e=>A.value.reportAddress=e),label:"报障地址",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"visitTime",modelValue:A.value.visitTime,"onUpdate:modelValue":o[5]||(o[5]=e=>A.value.visitTime=e),label:"计划上门时间",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"description",modelValue:A.value.description,"onUpdate:modelValue":o[6]||(o[6]=e=>A.value.description=e),label:"故障描述",placeholder:""},null,8,["modelValue"])])),_:1}),u(_,{title:"设备信息",class:"marginBottom10"},{default:s((()=>[u(c,{readonly:"",name:"deviceName",modelValue:A.value.deviceName,"onUpdate:modelValue":o[7]||(o[7]=e=>A.value.deviceName=e),label:"设备名称",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"deviceNo",modelValue:A.value.deviceNo,"onUpdate:modelValue":o[8]||(o[8]=e=>A.value.deviceNo=e),label:"设备型号",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"phone",modelValue:A.value.phone,"onUpdate:modelValue":o[9]||(o[9]=e=>A.value.phone=e),label:"设备号码",placeholder:""},null,8,["modelValue"])])),_:1}),u(_,{title:"维修人员信息",class:"marginBottom10"},{default:s((()=>[u(c,{readonly:"",name:"disposePerson",modelValue:A.value.disposePerson,"onUpdate:modelValue":o[10]||(o[10]=e=>A.value.disposePerson=e),label:"人员名称",placeholder:""},null,8,["modelValue"]),u(c,{readonly:"",name:"disposePhone",modelValue:A.value.disposePhone,"onUpdate:modelValue":o[12]||(o[12]=e=>A.value.disposePhone=e),label:"联系电话",placeholder:""},h({_:2},[A.value.disposePhone?{name:"button",fn:s((()=>[n("span",{class:"iconfont icon-copy",onClick:o[11]||(o[11]=f((e=>g(x)(A.value.disposePhone)),["stop"]))})])),key:"0"}:void 0]),1032,["modelValue"])])),_:1})])),_:1},512)])),_:1}),u(U,{title:"工单动态"},{default:s((()=>[u(F,{direction:"vertical",active:z.value,"active-icon":"checked","active-color":"#269e3d"},{default:s((()=>[(b(!0),d(V,null,y(B.value,((e,l)=>(b(),p(P,{key:l},{default:s((()=>[n("h3",null,i(e.disposePerson),1),n("p",null,i(e.link),1),n("p",null,i(e.disposeTime),1)])),_:2},1024)))),128))])),_:1},8,["active"])])),_:1})])),_:1},8,["active"])]),l.value?(b(),p(q,{key:0,class:"loading",size:"40px",vertical:""},{default:s((()=>o[14]||(o[14]=[r("加载中...")]))),_:1})):v("",!0)])}}},[["__scopeId","data-v-70663691"]]))}}}));