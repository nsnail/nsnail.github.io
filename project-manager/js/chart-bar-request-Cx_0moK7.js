import e from"./chart-bar-CBcvcnsx.js";import{_ as a,t}from"./index-C3Re8InM.js";import{aj as o,o as r,J as s,K as d,S as l}from"./@vue-_BCsYqm-.js";const i=a({computed:{tool:()=>t},title:"流量趋势(Today)",icon:"el-icon-data-line",description:"流量趋势(Today)",components:{ChartBar:e},data:()=>({}),async created(){},mounted(){}},[["render",function(e,a,t,i,n,m){const c=o("chart-bar"),u=o("el-card");return r(),s(u,{header:e.$t("流量趋势(Today)"),shadow:"never",style:{height:"25rem"}},{default:d((()=>[l(c,{api:[{file:"sys_requestlog",name:"getBarChart",label:"今日",value:["DateTime.Now.Date","DateTime.Now.Date.AddDays(1)"]},{file:"sys_requestlog",name:"getBarChart",label:"昨日",value:["DateTime.Now.Date.AddDays(-1)","DateTime.Now.Date"]}],height:"20rem"})])),_:1},8,["header"])}]]),n=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));export{n as _};
