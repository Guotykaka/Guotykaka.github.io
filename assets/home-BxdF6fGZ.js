import{a as W,_ as F,r as m,w as z,o as l,c as i,n as X,u as Y,s as ee,b as R,N as T,d as se,e,i as D,f as x,t as n,g as a,h as f,F as M,j as I,k as O,l as P,m as C,p as j,q as te,v as oe}from"./index-Cjm7IUtJ.js";import{g as ae,a as E,b as ne}from"./device-YL3MxchV.js";import{c as le}from"./index-CEJ9UQZg.js";function ie(g){return W({url:"/bbyl/queryCurElders",method:"get",params:g})}const ce=["id"],de={__name:"CurrAmap",props:{device:{type:Object,default:()=>{}}},setup(g,{expose:B}){const c=m(null),b=m("");z(()=>g.device.sn,p=>{V()});const V=()=>{b.value="AMap".concat(new Date().getTime()),X(()=>{g.device.sn?N():c.value&&c.value.clearMap()})},N=()=>{ae({sn:g.device.sn}).then(p=>{var d,r,u,v;const k=(d=p==null?void 0:p.data)!=null?d:"",y=(v=(u=(r=JSON.parse(k))==null?void 0:r.point)==null?void 0:u.coordinates)!=null?v:[],A='<div class="custom-content-marker"><img src="https://mhjy-public.obs.cn-south-1.myhuaweicloud.com:443/position.png"></div>';let _=new AMap.Marker({position:new AMap.LngLat(...y),content:A,offset:new AMap.Pixel(-15,-15)});_.on("click",()=>{c.value.setZoomAndCenter(18,location)}),c.value?(c.value.add(_),c.value.setZoomAndCenter(18,location)):(c.value=new AMap.Map(b.value,{resizeEnable:!0,center:y,zoom:18,mapStyle:"amap://styles/light"}),c.value.on("complete",function(){c.value.add(_)}))})};return B({initMap:V}),(p,k)=>(l(),i("div",{id:b.value,class:"map"},null,8,ce))}},re=F(de,[["__scopeId","data-v-2ead57cb"]]),ue={class:"g-content"},ve={class:"abs"},pe={class:"arc-box"},me={class:"map-box"},_e={key:0},he={key:1},fe={class:"user-list"},ge={class:"g-active-background"},be={class:"f16"},ke={class:"g-flex c66 m-t-15"},ye={class:"flex1"},we={class:"g-flex c66 m-t-5"},xe={class:"flex1"},Ce={class:"flex1"},Ve={class:"g-flex c66 m-t-5"},Ne={class:"flex1"},Ae={class:"flex1"},De={class:"g-row-between c66 m-t-5"},Me={class:"flex1"},Be={class:"tit m-t-20 g-row-between"},$e={class:"c33 g-row-between"},Le={class:"fs0"},Te={key:0,class:"g-tag b-green"},Ie={key:1,class:"g-tag b-blue"},Pe={key:2,class:"g-tag b-green-light"},Se={key:3,class:"g-tag b-gray"},Ue=["onClick"],Re={class:"c66 m-t-5"},Oe={class:"c66 m-t-5"},je=["onClick"],Ee={class:"device-popup"},Fe={class:"pop-scroll"},ze=["onClick"],He={class:"device-popup"},qe={class:"pop-scroll"},Ze=["onClick"],Je={__name:"home",setup(g){const B=oe(),c=Y(),{setUser:b}=c,{storePhone:V,storeUser:N}=ee(c),p=R(()=>N.value.id),k=R(()=>N.value.name),y=m([]);let A=m([]),_=m([]),d=m({}),r=m({bloodOxygenValue:"",bloodPressureValue:"",heartRateValue:"",sleepValue:"",stepNumberValue:"",time:""}),u=m(!1),v=m(!1);const H=()=>{ie({phone:V.value}).then(o=>{y.value=o.data}).finally(()=>{T.done()})},q=()=>{E({elderId:p.value,elderType:0}).then(o=>{var s,h;A.value=o.data,d.value=(h=(s=o.data)==null?void 0:s[0])!=null?h:{}})},Z=()=>{E({elderId:p.value}).then(o=>{_.value=o.data})},J=o=>{ne({sn:o}).then(s=>{r.value=s.data})},$=(o,s={})=>{B.push({name:o,params:s})},G=o=>{u.value=!1,b(o)},K=o=>{d.value=o,v.value=!1},S=()=>{H(),q(),Z()};return c.$subscribe((o,s)=>{T.start(),S()}),se(()=>{T.start(),S()}),z(d,o=>{r.value={bloodOxygenValue:"",bloodPressureValue:"",heartRateValue:"",sleepValue:"",stepNumberValue:"",time:""},o.id&&J(o.sn)},{deep:!0,immediate:!0}),(o,s)=>{const h=P("van-icon"),Q=P("Tabbar"),U=P("van-popup");return l(),i(M,null,[e("div",ue,[e("div",ve,[e("div",pe,[e("div",{onClick:s[0]||(s[0]=t=>D(u)?u.value=!0:u=!0),class:"c-white p-l-15 p-t-20 f16"},[x(n(k.value)+" ",1),s[6]||(s[6]=e("span",{class:"iconfont icon-arrdown"},null,-1))])]),e("div",me,[e("div",{class:"map-tit",onClick:s[1]||(s[1]=t=>D(v)?v.value=!0:v=!0)},[a(d).deviceName?(l(),i("span",_e,n(a(d).deviceName),1)):(l(),i("span",he,"选择设备")),s[7]||(s[7]=e("span",{class:"iconfont icon-arrdown m-l-5"},null,-1))]),e("div",{class:"map-list c-white",onClick:s[2]||(s[2]=t=>$("locations",{sn:a(d).sn}))},[s[8]||(s[8]=x(" 定位记录 ")),f(h,{name:"arrow"})]),f(re,{ref:"refAmap",device:a(d)},null,8,["device"])])]),e("div",fe,[s[12]||(s[12]=e("div",{class:"tit"},"健康信息",-1)),e("div",ge,[e("div",be,n(k.value),1),e("div",ke,[s[9]||(s[9]=e("div",{class:"flex1"},"体温：无字段",-1)),e("div",ye,"睡眠： "+n(a(r).sleepValue),1)]),e("div",we,[e("div",xe,"血压： "+n(a(r).bloodPressureValue),1),e("div",Ce,"心率： "+n(a(r).heartRateValue)+"次/分",1)]),e("div",Ve,[e("div",Ne,"血氧： "+n(a(r).bloodOxygenValue),1),e("div",Ae,"步数："+n(a(r).stepNumberValue)+"步",1)]),e("div",De,[e("div",Me,"检测时间："+n(a(r).time),1),e("div",{class:"fs0 c-green-light",onClick:s[3]||(s[3]=t=>$("health",{sn:a(d).sn}))},[s[10]||(s[10]=x("查看详情")),f(h,{name:"arrow"})])])]),e("div",Be,[s[11]||(s[11]=e("div",null,"设备信息",-1)),e("div",null,"设备数："+n(a(_).length),1)]),(l(!0),i(M,null,I(a(_),(t,w)=>(l(),i("div",{class:"shadow-card",key:w},[e("div",$e,[e("div",null,"设备名称："+n(t.deviceName),1),e("div",Le,[t.deviceBusiness==="平安通设备"?(l(),i("span",Te,"平安通")):C("",!0),t.deviceBusiness==="居家设备"?(l(),i("span",Ie,"居家")):C("",!0),t.online==="true"?(l(),i("span",Pe,"在线")):C("",!0),t.online==="false"?(l(),i("span",Se,"下线")):C("",!0)])]),e("div",{class:"c66 m-t-15",onClick:L=>a(le)(t.sn)},"设备SN/ID："+n(t.sn),9,Ue),e("div",Re,"绑定时间： "+n(t.createTime),1),e("div",Oe,"绑定人： "+n(t.createBy),1),e("div",{class:"g-btn m-t-20",onClick:L=>$("alert",{sn:t.sn})},"告警信息",8,je)]))),128))])]),f(Q),f(U,{show:a(v),"onUpdate:show":s[4]||(s[4]=t=>D(v)?v.value=t:v=t),position:"bottom",style:{height:"60vh"},closeable:"","close-icon":"close",round:"","safe-area-inset-bottom":""},{default:O(()=>[e("div",Ee,[s[13]||(s[13]=e("div",{class:"f18 g-flex pop-tit"},"选择设备",-1)),e("div",Fe,[(l(!0),i(M,null,I(a(A),(t,w)=>(l(),i("div",{class:j(["pop-item f16",{"c-green":a(d).id==t.id}]),key:w,onClick:L=>K(t)},[x(n(t.deviceName)+" ",1),f(h,{class:"m-l-10",name:"success",color:"#239959"})],10,ze))),128))])])]),_:1},8,["show"]),f(U,{show:a(u),"onUpdate:show":s[5]||(s[5]=t=>D(u)?u.value=t:u=t),position:"bottom",style:{height:"60vh"},closeable:"","close-icon":"close",round:"","safe-area-inset-bottom":""},{default:O(()=>[e("div",He,[s[14]||(s[14]=e("div",{class:"f18 g-flex pop-tit"},"选择长者",-1)),e("div",qe,[(l(!0),i(M,null,I(y.value,(t,w)=>(l(),i("div",{class:j(["pop-item f16",{"c-green":p.value==t.id}]),key:w,onClick:L=>G(t)},[x(n(t.name)+" ",1),p.value==t.id?(l(),te(h,{key:0,class:"m-l-10",name:"success",color:"#239959"})):C("",!0)],10,Ze))),128))])])]),_:1},8,["show"])],64)}}},We=F(Je,[["__scopeId","data-v-be341ef6"]]);export{We as default};