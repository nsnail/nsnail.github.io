const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C3Re8InM.js","./@vue-_BCsYqm-.js","./element-plus-CoQd9HEf.js","./lodash-es-DCh--ulG.js","./@vueuse-DKZ1O7gq.js","./@element-plus-DpD46RjY.js","./@sxzz-CpAfbxx4.js","./@ctrl-D2oWfImC.js","./dayjs-Cud5yAXI.js","./async-validator-BTKOuuO-.js","./memoize-one-Ds0C_khL.js","./normalize-wheel-es-Vn5vHDCm.js","./@floating-ui-DT7V1Oc1.js","../css/element-plus-B3lJtvYm.css","./crypto-js-BfYQ37JU.js","./axios-DMXdiZgf.js","./vue-router-CJBOlWwF.js","./nprogress-BX4rmQ7W.js","../css/nprogress-BgDCIyLK.css","./vuex-CNGLPxA3.js","./json-bigint-D0bu8vFr.js","./bignumber.js-iDjSUVmj.js","./vue-i18n-DbMEmpqT.js","./@intlify-CZIS8eQd.js","./vue3-json-viewer-B-aZDOpp.js","../css/vue3-json-viewer-ByH33Jf7.css","./ace-builds-D9YH2WY7.js","./vue3-ace-editor-ubj-WOyx.js","./resize-observer-polyfill-CzGuHLZU.js","./sortablejs-BALiOaUQ.js","./vkbeautify-DEVEMlla.js","../css/index-CllpfDYF.css"])))=>i.map(i=>d[i]);
import{_ as e,h as t,a}from"./index-C3Re8InM.js";import{n as i}from"./index-BXaSDRPy.js";import{aj as r,at as s,o as l,c as o,S as d,K as n,L as p,J as u,a as h,P as c,Q as y,G as m,O as f,R as v,aE as w}from"./@vue-_BCsYqm-.js";import"./element-plus-CoQd9HEf.js";import"./lodash-es-DCh--ulG.js";import"./@vueuse-DKZ1O7gq.js";import"./@element-plus-DpD46RjY.js";import"./@sxzz-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-Cud5yAXI.js";import"./async-validator-BTKOuuO-.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./crypto-js-BfYQ37JU.js";import"./axios-DMXdiZgf.js";import"./vue-router-CJBOlWwF.js";import"./nprogress-BX4rmQ7W.js";import"./vuex-CNGLPxA3.js";import"./json-bigint-D0bu8vFr.js";import"./bignumber.js-iDjSUVmj.js";import"./vue-i18n-DbMEmpqT.js";import"./@intlify-CZIS8eQd.js";import"./vue3-json-viewer-B-aZDOpp.js";import"./ace-builds-D9YH2WY7.js";import"./vue3-ace-editor-ubj-WOyx.js";import"./resize-observer-polyfill-CzGuHLZU.js";import"./sortablejs-BALiOaUQ.js";import"./vkbeautify-DEVEMlla.js";const C=w((()=>a((()=>import("./index-C3Re8InM.js").then((e=>e.s))),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url))),g={class:"left-panel"},b=["onClick"];const $=e({components:{naInfo:i,saveDialog:C},computed:{},async created(){this.ownerId&&this.query.dynamicFilter.filters.push({field:"ownerId",operator:"eq",value:this.ownerId}),this.excludeApiPathCrc32&&this.query.dynamicFilter.filters.push({field:"apiPathCrc32",operator:"notEqual",value:this.excludeApiPathCrc32});const e=await this.$API.sys_api.plainQuery.post({count:1e3});this.apis=e.data},data(){return{statistics:{total:"..."},dialog:{info:!1},owners:[],apis:[],ips:[],loading:!1,query:{dynamicFilter:{filters:[{field:"createdTime",operator:"dateRange",value:[this.$TOOL.dateFormat(new Date(new Date-36e5),"yyyy-MM-dd hh:mm:ss"),this.$TOOL.dateFormat(new Date,"yyyy-MM-dd hh:mm:ss")]}]},filter:{},keywords:this.keywords},selection:[]}},inject:["reload"],methods:{userClick(e){this.dialog.save={mode:"view",row:{id:e}}},async dataChange(e){var a,i,r;this.owners=[];const s=null==(a=e.data.rows)?void 0:a.filter((e=>e.ownerId)).map((e=>e.ownerId));null==(i=e.data.rows)||i.map((e=>e.apiPathCrc32));const l=(null==(r=e.data.rows)?void 0:r.map((e=>e.createdClientIp)))??[],o=await Promise.all([s&&s.length>0&&this.$GLOBAL.permissions.some((e=>"*/*/*"===e||"sys/log/operation/user"===e))?this.$API.sys_user.query.post({dynamicFilter:{field:"id",operator:"any",value:s}}):new Promise((e=>e({data:[]}))),l&&l.length>0?t.get(`https://ip.tools92.top/?ip=${l.join("&ip=")}`):new Promise((e=>e({data:[]})))]);this.owners=o[0].data,this.ips=o[1],await this.getStatistics()},async getStatistics(){var e;this.statistics.total=null==(e=this.$refs.table)?void 0:e.total;const t=await Promise.all([this.$API.sys_requestlog.countBy.post({dynamicFilter:{filters:this.query.dynamicFilter.filters},requiredFields:["HttpStatusCode"]}),this.$API.sys_requestlog.countBy.post({dynamicFilter:{filters:this.query.dynamicFilter.filters},requiredFields:["ApiPathCrc32"]})]);this.statistics.httpStatusCode=t[0].data,this.statistics.apiPathCrc32=t[1].data},filterChange(e){Object.entries(e).forEach((([e,t])=>{this.$refs.search.form.dy[e]="true"===t||"false"!==t&&t})),this.$refs.search.search()},async onSearch(e){Array.isArray(e.dy.createdTime)&&this.query.dynamicFilter.filters.push({field:"createdTime",operator:"dateRange",value:e.dy.createdTime.map((e=>e.replace(/ 00:00:00$/,"")))}),Array.isArray(e.dy.httpStatusCode)&&0!==e.dy.httpStatusCode.length&&this.query.dynamicFilter.filters.push({logic:"or",filters:e.dy.httpStatusCode.map((e=>({field:"httpStatusCode",operator:"range",value:e})))}),"number"==typeof e.dy.excludeApiPathCrc32&&0!==e.dy.excludeApiPathCrc32&&this.query.dynamicFilter.filters.push({field:"apiPathCrc32",operator:"notEqual",value:e.dy.excludeApiPathCrc32}),"number"==typeof e.dy.apiPathCrc32&&0!==e.dy.apiPathCrc32&&this.query.dynamicFilter.filters.push({field:"apiPathCrc32",operator:"eq",value:e.dy.apiPathCrc32}),"number"==typeof e.dy.ownerId&&0!==e.dy.ownerId&&this.query.dynamicFilter.filters.push({field:"ownerId",operator:"eq",value:e.dy.ownerId}),"string"==typeof e.dy.ownerId&&""!==e.dy.ownerId.trim()&&this.query.dynamicFilter.filters.push({field:"ownerId",operator:"eq",value:e.dy.ownerId}),"string"==typeof e.dy.httpStatusCode&&""!==e.dy.httpStatusCode.trim()&&this.query.dynamicFilter.filters.push({field:"httpStatusCode",operator:"eq",value:e.dy.httpStatusCode}),"string"==typeof e.dy.apiPathCrc32&&""!==e.dy.apiPathCrc32.trim()&&this.query.dynamicFilter.filters.push({field:"apiPathCrc32",operator:"eq",value:e.dy.apiPathCrc32}),"string"==typeof e.dy.id&&""!==e.dy.id.trim()&&this.query.dynamicFilter.filters.push({field:"id",operator:"eq",value:e.dy.id}),"string"==typeof e.dy.createdClientIp&&""!==e.dy.createdClientIp.trim()&&this.query.dynamicFilter.filters.push({field:"createdClientIp",operator:"eq",value:e.dy.createdClientIp}),"boolean"==typeof e.dy.operationResult&&this.query.dynamicFilter.filters.push(e.dy.operationResult?{field:"httpStatusCode",operator:"range",value:"200,299"}:{field:"httpStatusCode",operator:"range",value:"300,999"}),await this.$refs.table.upData()},async rowClick(e){this.dialog.info=!0,await this.$nextTick(),await this.$refs.info.open((()=>this.$t("日志详情：{id}",{id:e.id})),(()=>this.$API.sys_requestlog.get.post({id:e.id,createdTime:e.createdTime})),{query:{bool:{must:[{range:{"@timestamp":{gt:new Date(e.createdTime).getTime()-36e5,lt:new Date(e.createdTime).getTime()+36e5}}},{match_phrase:{log_message:e.traceId}}]}},size:1e3,sort:[{"@timestamp":"desc"}]})}},async mounted(){this.keywords&&(this.$refs.search.form.root.keywords=this.keywords,this.$refs.search.keeps.push({field:"keywords",value:this.keywords,type:"root"})),this.ownerId&&(this.$refs.search.keeps.push({field:"ownerId",value:this.ownerId,type:"dy"}),this.$refs.search.form.dy.ownerId=this.ownerId),this.excludeApiPathCrc32&&(this.$refs.search.keeps.push({field:"excludeApiPathCrc32",value:this.excludeApiPathCrc32,type:"dy"}),this.$refs.search.form.dy.excludeApiPathCrc32=this.excludeApiPathCrc32),this.$refs.search.form.dy.createdTime=[this.$TOOL.dateFormat(new Date(new Date-36e5),"yyyy-MM-dd hh:mm:ss"),this.$TOOL.dateFormat(new Date,"yyyy-MM-dd hh:mm:ss")],this.$refs.search.keeps.push({field:"createdTime",value:this.$refs.search.form.dy.createdTime,type:"dy"})},props:["keywords","ownerId","excludeApiPathCrc32"],watch:{}},[["render",function(e,t,a,i,w,C){const $=r("scStatistic"),I=r("el-card"),P=r("el-col"),j=r("el-row"),k=r("el-header"),q=r("scSelectFilter"),S=r("na-search"),F=r("naColId"),x=r("scStatusIndicator"),_=r("el-table-column"),A=r("el-avatar"),T=r("naColOperation"),O=r("scTable"),D=r("el-main"),M=r("el-container"),L=r("na-info"),E=r("save-dialog"),R=s("loading"),z=s("auth");return l(),o(v,null,[d(M,null,{default:n((()=>[p((l(),u(k,{class:"el-header-statistics"},{default:n((()=>[d(j,{gutter:15},{default:n((()=>[d(P,{lg:24},{default:n((()=>[d(I,{shadow:"never"},{default:n((()=>[d($,{value:w.statistics.total,"group-separator":"",title:"总数"},null,8,["value"])])),_:1})])),_:1})])),_:1})])),_:1})),[[R,"..."===w.statistics.total]]),d(k,{class:"el-header-select-filter"},{default:n((()=>{var t,a;return[d(q,{data:[{title:e.$t("操作结果"),key:"operationResult",options:[{label:e.$t("全部"),value:""},{label:e.$t("成功"),value:!0},{label:e.$t("失败"),value:!1}]},{title:e.$t("响应状态码"),key:"httpStatusCode",options:[{label:e.$t("全部"),value:""},...(null==(t=this.statistics.httpStatusCode)?void 0:t.map((e=>({value:e.key.httpStatusCode,label:e.key.httpStatusCode,badge:e.value}))))??[]]},{title:e.$t("请求服务"),key:"apiPathCrc32",options:[{label:e.$t("全部"),value:""},...(null==(a=this.statistics.apiPathCrc32)?void 0:a.map((e=>{var t;let a=null==(t=this.apis)?void 0:t.find((t=>t.pathCrc32.toString()===e.key.apiPathCrc32));return{value:e.key.apiPathCrc32,label:null==a?void 0:a.summary,title:null==a?void 0:a.id,badge:e.value}})))??[]]}],"label-width":10,onOnChange:C.filterChange,ref:"selectFilter"},null,8,["data","onOnChange"])]})),_:1}),d(k,null,{default:n((()=>[h("div",g,[d(S,{controls:[{type:"remote-select",field:["dy","ownerId"],api:e.$API.sys_user.query,config:{props:{label:"userName",value:"id"}},placeholder:"用户",style:"width:15rem",condition:()=>e.$GLOBAL.hasPermission("sys/log/operation/user")},{multiple:!0,type:"select",field:["dy","httpStatusCode"],options:[{label:"20x",value:"200,299"},{label:"30x",value:"300,399"},{label:"40x",value:"400,499"},{label:"50x",value:"500,599"},{label:"90x",value:"900,999"}],placeholder:e.$t("状态码"),style:"width:15rem"},{type:"cascader",field:["dy","apiPathCrc32"],api:e.$API.sys_api.query,props:{label:"summary",value:"pathCrc32",checkStrictly:!0,expandTrigger:"hover",emitPath:!1},placeholder:e.$t("请求服务"),style:"width:20rem"},{type:"select-input",field:["dy",[{label:"日志编号",key:"id"},{label:"用户编号",key:"ownerId"},{label:"客户端IP",key:"createdClientIp"}]],placeholder:"匹配内容",style:"width:25rem",selectStyle:"width:8rem"}],vue:this,onReset:t[0]||(t[0]=e=>Object.entries(this.$refs.selectFilter.selected).forEach((([e,t])=>this.$refs.selectFilter.selected[e]=[""]))),onSearch:C.onSearch,dateFormat:"YYYY-MM-DD HH:mm:ss",dateType:"datetimerange",dateValueFormat:"YYYY-MM-DD HH:mm:ss",ref:"search"},null,8,["controls","onSearch"])]),t[4]||(t[4]=h("div",{class:"right-panel"},null,-1))])),_:1}),d(D,{class:"nopadding"},{default:n((()=>[d(O,{"context-menus":["id","httpStatusCode","apiPathCrc32","ownerId","httpMethod","duration","createdClientIp","createdTime"],"context-opers":[],"default-sort":{prop:"createdTime",order:"descending"},"export-api":e.$API.sys_requestlog.export,params:w.query,"query-api":e.$API.sys_requestlog.pagedQuery,vue:this,onDataChange:C.dataChange,ref:"table","remote-filter":"","remote-sort":"","row-key":"id",stripe:""},{default:n((()=>[d(F,{label:"日志编号",prop:"id",sortable:"custom",width:"170"}),d(_,{label:e.$t("响应码"),align:"center",prop:"httpStatusCode",sortable:"custom",width:"150"},{default:n((({row:e})=>[d(x,{type:e.httpStatusCode>=200&&e.httpStatusCode<300?"success":"danger"},null,8,["type"]),c(" "+y(e.httpStatusCode),1)])),_:1},8,["label"]),d(_,{label:e.$t("请求服务"),align:"center"},{default:n((()=>[d(_,{label:e.$t("路径"),"min-width":"300",prop:"apiPathCrc32","show-overflow-tooltip":"",sortable:"custom"},{default:n((({row:e})=>{var t,a,i,r;return[h("p",null,y(null==(a=null==(t=w.apis)?void 0:t.find((t=>t.pathCrc32===e.apiPathCrc32)))?void 0:a.id),1),h("p",null,y(null==(r=null==(i=w.apis)?void 0:i.find((t=>t.pathCrc32===e.apiPathCrc32)))?void 0:r.summary),1)]})),_:1},8,["label"]),d(_,{label:e.$t("方法"),align:"center",prop:"httpMethod",sortable:"custom",width:"100"},{default:n((({row:e})=>[d(x,{style:m(`background: #${Math.abs(this.$TOOL.crypto.hashCode(e.httpMethod)).toString(16).substring(0,6)}`)},null,8,["style"]),c(" "+y(e.httpMethod.toUpperCase()),1)])),_:1},8,["label"]),d(_,{formatter:t=>`${e.$TOOL.groupSeparator(t.duration.toFixed(0))} ms`,label:e.$t("耗时"),align:"right",prop:"duration",sortable:"custom",width:"90"},null,8,["formatter","label"])])),_:1},8,["label"]),p((l(),u(_,{label:e.$t("用户"),"header-align":"center",prop:"ownerId",sortable:"custom",width:"170"},{default:n((({row:t})=>{var a,i,r,s,d,n,p,c,m;return[t.ownerId?(l(),o("div",{key:0,style:{display:"flex"},onClick:e=>C.userClick(t.ownerId),class:"el-table-column-avatar"},[(null==(a=w.owners)?void 0:a.find((e=>e.id===t.ownerId)))?(l(),u(A,{key:0,src:(null==(r=null==(i=w.owners)?void 0:i.find((e=>e.id===t.ownerId)))?void 0:r.avatar)??e.$CONFIG.DEFAULT_AVATAR(null==(d=null==(s=w.owners)?void 0:s.find((e=>e.id===t.ownerId)))?void 0:d.userName),size:"small"},null,8,["src"])):f("",!0),h("div",null,[h("p",null,y(null==(p=null==(n=w.owners)?void 0:n.find((e=>e.id===t.ownerId)))?void 0:p.userName),1),h("p",null,y(null==(m=null==(c=w.owners)?void 0:c.find((e=>e.id===t.ownerId)))?void 0:m.id),1)])],8,b)):f("",!0)]})),_:1},8,["label"])),[[z,"sys/log/operation/user"]]),d(_,{label:e.$t("客户端IP"),prop:"createdClientIp","show-overflow-tooltip":"",sortable:"custom",width:"200"},{default:n((({row:e})=>{var t;return[w.ips&&w.ips.length>0&&e.createdClientIp?(l(),o(v,{key:0},[h("p",null,y(e.createdClientIp),1),h("p",null,y((null==(t=w.ips.filter((t=>t.ip===e.createdClientIp))[0])?void 0:t.region)??"..."),1)],64)):f("",!0)]})),_:1},8,["label"]),d(T,{buttons:[{icon:"el-icon-view",title:"查看",click:C.rowClick}],vue:this,width:"70"},null,8,["buttons"])])),_:1},8,["export-api","params","query-api","onDataChange"])])),_:1})])),_:1}),w.dialog.info?(l(),u(L,{key:0,ref:"info"},null,512)):f("",!0),w.dialog.save?(l(),u(E,{key:1,onClosed:t[1]||(t[1]=e=>w.dialog.save=null),onMounted:t[2]||(t[2]=t=>e.$refs.saveDialog.open(w.dialog.save)),onSuccess:t[3]||(t[3]=(t,a)=>e.table.handleUpdate(e.$refs.table,t,a)),ref:"saveDialog"},null,512)):f("",!0)],64)}]]);export{$ as default};
