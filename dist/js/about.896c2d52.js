"use strict";(self["webpackChunkcountries"]=self["webpackChunkcountries"]||[]).push([[443],{95:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var o=e(3396),r=e(7139);function c(n,t,e,c,a,u){const s=(0,o.up)("ArrowIconVue");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{onClick:t[0]||(t[0]=(...n)=>c.goBack&&c.goBack(...n))},[(0,o.Wm)(s)]),(0,o.Uk)(" "+(0,r.zw)(c.country),1)])}e(7658);var a=e(2483),u=e(4870);const s=n=>((0,o.dD)("data-v-6ee633fd"),n=n(),(0,o.Cn)(),n),l={xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},i=["fill"],p=s((()=>(0,o._)("p",null,"Back",-1)));function d(n,t,e,r,c,a){return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(),(0,o.iD)("svg",l,[(0,o._)("path",{d:"m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z",fill:e.color},null,8,i)])),p])}var h={name:"ArrowIcon",props:{color:{required:!0,type:String}}},g=e(89);const v=(0,g.Z)(h,[["render",d],["__scopeId","data-v-6ee633fd"]]);var y=v,w={name:"CountryView",components:{ArrowIconVue:y},setup(){const n=new a.yj,t=new a.tv,e=n.params.name,r=(0,u.iH)();function c(){t.push("/")}async function s(){await fetch(`https://restcountries.com/v3.1/name/${e}`).then((n=>n.json())).then((n=>{r.value=n})).catch((n=>console.log(n.status)))}return(0,o.bv)((()=>{s()})),{country:r,goBack:c}}};const m=(0,g.Z)(w,[["render",c],["__scopeId","data-v-19c1d01a"]]);var f=m},8705:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var o=e(3396),r=e(9242);const c=n=>((0,o.dD)("data-v-be559d98"),n=n(),(0,o.Cn)(),n),a={class:"container-search"},u={class:"search"},s={key:0},l=c((()=>(0,o._)("option",{value:""},"Filter by Region",-1))),i=c((()=>(0,o._)("option",null,"Africa",-1))),p=c((()=>(0,o._)("option",null,"America",-1))),d=c((()=>(0,o._)("option",null,"Asia",-1))),h=c((()=>(0,o._)("option",null,"Europe",-1))),g=c((()=>(0,o._)("option",null,"Oceania",-1))),v=[l,i,p,d,h,g],y={class:"container-countries"};function w(n,t,e,c,l,i){const p=(0,o.up)("CardCountryVue");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("section",null,[(0,o._)("div",a,[(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Search for a country...","onUpdate:modelValue":t[0]||(t[0]=n=>c.searchCountry=n)},null,512),[[r.nr,c.searchCountry]]),c.warningMenssage?((0,o.wg)(),(0,o.iD)("small",s,"Please check if you writen the name rightly")):(0,o.kq)("",!0)]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>c.serchByRegion=n)},v,512),[[r.bM,c.serchByRegion]])])]),(0,o._)("section",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.countries,((n,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"country"},[(0,o.Wm)(p,{country:n},null,8,["country"])])))),128))])],64)}var m=e(4870),f=e(7139);const _=n=>((0,o.dD)("data-v-db16e33c"),n=n(),(0,o.Cn)(),n),k=["src"],C=_((()=>(0,o._)("strong",null,"Population:",-1))),b=_((()=>(0,o._)("strong",null,"Region:",-1))),D=_((()=>(0,o._)("strong",null,"Capital:",-1)));function H(n,t,e,r,c,a){return(0,o.wg)(),(0,o.iD)("div",{onClick:t[0]||(t[0]=n=>r.MoreInformation(e.country?.name?.common))},[(0,o._)("img",{src:e.country?.flags?.png,alt:""},null,8,k),(0,o._)("h3",null,(0,f.zw)(e.country?.name?.common),1),(0,o._)("p",null,[C,(0,o.Uk)(" "+(0,f.zw)(e.country?.population),1)]),(0,o._)("p",null,[b,(0,o.Uk)(" "+(0,f.zw)(e.country?.region),1)]),(0,o._)("p",null,[D,(0,o.Uk)(" "+(0,f.zw)(e.country?.capital?.[0]),1)])])}e(7658);var I=e(2483),V={name:"CardCountry",props:{country:{required:!0,type:Object}},setup(){const n=new I.tv;function t(t){n.push({name:"country",params:{name:t}})}return{MoreInformation:t}}},B=e(89);const j=(0,B.Z)(V,[["render",H],["__scopeId","data-v-db16e33c"]]);var A=j,U={name:"HomeView",components:{CardCountryVue:A},setup(){const n=(0,m.iH)([]),t=(0,m.iH)(""),e=(0,m.iH)(""),r=(0,m.iH)(!1);async function c(){await fetch("https://restcountries.com/v3.1/all").then((n=>n.json())).then((t=>{n.value=t,r.value=!1})).catch((n=>console.log(n)))}async function a(t){await fetch(`https://restcountries.com/v3.1/name/${t}`).then((n=>n.json())).then((t=>{404==t.status&&(r.value=!0),n.value=t})).catch((n=>console.log(n.status)))}async function u(t){await fetch(`https://restcountries.com/v3.1/region/${t}`).then((n=>n.json())).then((t=>{n.value=t}))}return(0,o.bv)((()=>{c()})),(0,o.YP)(t,(n=>{console.log(0==n.length),0==n.length?c():0!==n.length&&a(n)})),(0,o.YP)(e,(n=>{u(n)})),{searchCountry:t,warningMenssage:r,serchByRegion:e,countries:n}}};const z=(0,B.Z)(U,[["render",w],["__scopeId","data-v-be559d98"]]);var M=z}}]);
//# sourceMappingURL=about.896c2d52.js.map