import{d as r,Z as l,G as u,L as n,a8 as p,k as m}from"./BW9rzzTm.js";import{_ as f}from"./BElFwDLS.js";import{u as d,f as _}from"./2ETV-d1z.js";const y=()=>({unwrap:d,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:a=>["primary","info","success","warning","danger"].includes(a)}},setup(a){const o=l(),{flatUnwrap:s,unwrap:t}=y(),i=u(()=>a.icon||h[a.type]);return()=>{const c=s((o.default&&o.default())??[],["ul"]).map(e=>t(e,["li"]));return n("ul",c.map(e=>n("li",[n("span",{class:`list-icon ${a.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(f,{use:()=>e}))])))}}}),v=m(w,[["__scopeId","data-v-80263400"]]);export{v as default};
