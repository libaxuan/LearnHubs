import{a5 as n}from"./app-d7fb3572.js";const r=async()=>{try{const{pageviewCount:t}=await n(()=>import("./app-d7fb3572.js").then(e=>e.a6),[]);return t({serverURL:"https://waline.gpt-vip.top"})}catch{console.error("@waline/client is not installed!");return}};export{r as updatePageview};