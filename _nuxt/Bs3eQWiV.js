import{d as v,aj as _,r as y,G as f,c as e,e as o,H as i,f as t,h as d,F as k,ah as C,t as g,k as h}from"./BW9rzzTm.js";const b={key:0,class:"copied"},x={class:"window"},B={class:"content"},w={key:1,class:"prompt"},T=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(l){const a=l,{copy:p}=_(),n=y("init"),c=f(()=>typeof a.content=="string"?[a.content]:a.content),u=m=>{p(c.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(m,s)=>(e(),o("div",{class:"terminal",onClick:u},[i(n)==="copied"?(e(),o("div",b,s[0]||(s[0]=[t("div",{class:"scrim"},null,-1),t("div",{class:"content"}," Copied! ",-1)]))):d("",!0),s[2]||(s[2]=t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),t("div",x,[(e(!0),o(k,null,C(i(c),r=>(e(),o("span",{key:r,class:"line"},[s[1]||(s[1]=t("span",{class:"sign"},"$",-1)),t("span",B,g(r),1)]))),128))]),i(n)!=="copied"?(e(),o("div",w," Click to copy ")):d("",!0)]))}}),F=h(T,[["__scopeId","data-v-b9e5d1fd"]]);export{F as default};
