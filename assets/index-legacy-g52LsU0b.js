System.register(["./index-legacy-W7Uxj3BW.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.C}],execute:function(){e("g",(function(e,t){var a=new Date(e);a.setDate(a.getDate()+t);var n=a.getFullYear(),r=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,o=a.getDate()<10?"0"+a.getDate():a.getDate();return n+"-"+r+"-"+o})),e("c",(e=>{if(navigator.clipboard?.writeText)navigator.clipboard.writeText(e).then((()=>{a({message:"已复制到手机剪贴板",duration:1500})}),(e=>{a({message:e,duration:1500})}));else{var t=document.createElement("input");t.setAttribute("readonly",""),t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none",a({message:"已复制到手机剪贴板",duration:1500})}}))}}}));
