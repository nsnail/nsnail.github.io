const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./save-CwAeB_PR.js","./index-C3Re8InM.js","./@vue-_BCsYqm-.js","./element-plus-CoQd9HEf.js","./lodash-es-DCh--ulG.js","./@vueuse-DKZ1O7gq.js","./@element-plus-DpD46RjY.js","./@sxzz-CpAfbxx4.js","./@ctrl-D2oWfImC.js","./dayjs-Cud5yAXI.js","./async-validator-BTKOuuO-.js","./memoize-one-Ds0C_khL.js","./normalize-wheel-es-Vn5vHDCm.js","./@floating-ui-DT7V1Oc1.js","../css/element-plus-B3lJtvYm.css","./crypto-js-BfYQ37JU.js","./axios-DMXdiZgf.js","./vue-router-CJBOlWwF.js","./nprogress-BX4rmQ7W.js","../css/nprogress-BgDCIyLK.css","./vuex-CNGLPxA3.js","./json-bigint-D0bu8vFr.js","./bignumber.js-iDjSUVmj.js","./vue-i18n-DbMEmpqT.js","./@intlify-CZIS8eQd.js","./vue3-json-viewer-B-aZDOpp.js","../css/vue3-json-viewer-ByH33Jf7.css","./ace-builds-D9YH2WY7.js","./vue3-ace-editor-ubj-WOyx.js","./resize-observer-polyfill-CzGuHLZU.js","./sortablejs-BALiOaUQ.js","./vkbeautify-DEVEMlla.js","../css/index-CllpfDYF.css","./aieditor-D176QHWW.js","../css/aieditor-NVFJ3uh8.css","../css/save-7c-3H3jP.css"])))=>i.map(i=>d[i]);
import{_ as e,n as t,d as s,a as i}from"./index-C3Re8InM.js";import{aj as a,at as l,o,c as r,S as n,K as d,L as c,J as u,a as p,P as h,Q as m,T as y,O as b,R as f,aE as v}from"./@vue-_BCsYqm-.js";import"./element-plus-CoQd9HEf.js";import"./lodash-es-DCh--ulG.js";import"./@vueuse-DKZ1O7gq.js";import"./@element-plus-DpD46RjY.js";import"./@sxzz-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-Cud5yAXI.js";import"./async-validator-BTKOuuO-.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./crypto-js-BfYQ37JU.js";import"./axios-DMXdiZgf.js";import"./vue-router-CJBOlWwF.js";import"./nprogress-BX4rmQ7W.js";import"./vuex-CNGLPxA3.js";import"./json-bigint-D0bu8vFr.js";import"./bignumber.js-iDjSUVmj.js";import"./vue-i18n-DbMEmpqT.js";import"./@intlify-CZIS8eQd.js";import"./vue3-json-viewer-B-aZDOpp.js";import"./ace-builds-D9YH2WY7.js";import"./vue3-ace-editor-ubj-WOyx.js";import"./resize-observer-polyfill-CzGuHLZU.js";import"./sortablejs-BALiOaUQ.js";import"./vkbeautify-DEVEMlla.js";const g=v((()=>i((()=>import("./save-CwAeB_PR.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]),import.meta.url))),w={class:"left-panel"},$={class:"right-panel"};const j=e({components:{saveDialog:g},computed:{naColOperation:()=>t,table:()=>s},created(){},data(){return{statistics:{total:"..."},dialog:{},loading:!1,query:{dynamicFilter:{filters:[]},filter:{},keywords:this.keywords},selection:[]}},inject:["reload"],methods:{async getStatistics(){var e;this.statistics.total=null==(e=this.$refs.table)?void 0:e.total;const t=await Promise.all([this.$API.sys_doc.contentCountBy.post({dynamicFilter:{filters:this.query.dynamicFilter.filters},requiredFields:["Enabled"]}),this.$API.sys_doc.contentCountBy.post({dynamicFilter:{filters:this.query.dynamicFilter.filters},requiredFields:["Visibility"]})]);this.statistics.enabled=t[0].data,this.statistics.visibility=t[1].data},viewClick(e){window.open(window.location.origin+`/guest/view-doc/${e.id}`)},filterChange(e){Object.entries(e).forEach((([e,t])=>{this.$refs.search.form.dy[e]="true"===t||"false"!==t&&t})),this.$refs.search.search()},async changeSwitch(e,t){try{await this.$API.sys_doc.setEnabled.post(t),this.$message.success("操作成功")}catch{}this.$refs.table.refresh()},async setEnabled(e){let t;try{await this.$confirm(`确定${e?"启用":"禁用"}选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}),t=this.$loading();const s=await Promise.all(this.selection.map((t=>this.$API.sys_doc.setEnabled.post(Object.assign(t,{enabled:e})))));this.$message.success(`操作成功 ${s.map((e=>e.data??0)).reduce(((e,t)=>e+t),0)}/${this.selection.length} 条`)}catch{}this.$refs.table.refresh(),null==t||t.close()},onReset(){Object.entries(this.$refs.selectFilter.selected).forEach((([e,t])=>this.$refs.selectFilter.selected[e]=[""]))},async onSearch(e){this.query.dynamicFilter.filters.push({field:"catalogId",value:this.catalogId,operator:"eq"}),Array.isArray(e.dy.createdTime)&&this.query.dynamicFilter.filters.push({field:"createdTime",operator:"dateRange",value:e.dy.createdTime.map((e=>e.replace(/ 00:00:00$/,"")))}),"boolean"==typeof e.dy.enabled&&this.query.dynamicFilter.filters.push({field:"enabled",operator:"eq",value:e.dy.enabled}),"string"==typeof e.dy.visibility&&""!==e.dy.visibility.trim()&&this.query.dynamicFilter.filters.push({field:"visibility",operator:"eq",value:e.dy.visibility}),await this.$refs.table.upData()},async share(e){const t=document.createElement("textarea");t.readOnly=!0,t.style.position="absolute",t.style.left="-9999px",t.value=window.location.origin+`/guest/view-doc/${e.id}`,document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);document.execCommand("Copy")&&this.$message.success(this.$t("文档链接已复制")),document.body.removeChild(t)}},mounted(){this.keywords&&(this.$refs.search.form.root.keywords=this.keywords,this.$refs.search.keeps.push({field:"keywords",value:this.keywords,type:"root"}))},props:{catalogId:Number,keywords:String},watch:{catalogId(){this.$refs.search.reset()}}},[["render",function(e,t,s,i,v,g){const j=a("scStatistic"),C=a("el-card"),_=a("el-col"),k=a("el-row"),F=a("el-header"),I=a("scSelectFilter"),q=a("na-search"),O=a("el-button"),S=a("naButtonBulkDel"),x=a("el-icon-arrow-down"),D=a("el-icon"),A=a("el-dropdown-item"),E=a("el-dropdown-menu"),P=a("el-dropdown"),T=a("el-table-column"),V=a("naColId"),L=a("naColIndicator"),R=a("el-switch"),Y=a("naColOperation"),B=a("scTable"),z=a("el-main"),H=a("el-container"),M=a("save-dialog"),U=l("loading");return o(),r(f,null,[n(H,null,{default:d((()=>[c((o(),u(F,{class:"el-header-statistics"},{default:d((()=>[n(k,{gutter:15},{default:d((()=>[n(_,{lg:24},{default:d((()=>[n(C,{shadow:"never"},{default:d((()=>[n(j,{value:v.statistics.total,"group-separator":"",title:"总数"},null,8,["value"])])),_:1})])),_:1})])),_:1})])),_:1})),[[U,"..."===v.statistics.total]]),n(F,{class:"el-header-select-filter"},{default:d((()=>{var t,s,i,a;return[n(I,{data:[{title:e.$t("启用状态"),key:"enabled",options:[{label:e.$t("全部"),value:""},{label:e.$t("启用"),value:!0,badge:null==(s=null==(t=v.statistics.enabled)?void 0:t.find((e=>"True"===e.key.enabled)))?void 0:s.value},{label:e.$t("禁用"),value:!1,badge:null==(a=null==(i=v.statistics.enabled)?void 0:i.find((e=>"False"===e.key.enabled)))?void 0:a.value}]},{title:e.$t("档案可见性"),key:"visibility",options:[{label:e.$t("全部"),value:""},...Object.entries(this.$GLOBAL.enums.archiveVisibilities).map((e=>{var t,s;return{value:e[0],label:e[1][1],badge:null==(s=null==(t=this.statistics.visibility)?void 0:t.find((t=>t.key.visibility.toLowerCase()===e[0].toLowerCase())))?void 0:s.value}}))]}],"label-width":9,onOnChange:g.filterChange,ref:"selectFilter"},null,8,["data","onOnChange"])]})),_:1}),n(F,null,{default:d((()=>[p("div",w,[n(q,{controls:[{type:"input",field:["root","keywords"],placeholder:e.$t("文档标题"),style:"width:20rem"}],vue:this,onReset:g.onReset,onSearch:g.onSearch,dateFormat:"YYYY-MM-DD HH:mm:ss",dateType:"datetimerange",dateValueFormat:"YYYY-MM-DD HH:mm:ss",ref:"search"},null,8,["controls","onReset","onSearch"])]),p("div",$,[n(O,{onClick:t[0]||(t[0]=e=>this.dialog.save={mode:"add",data:{catalogId:this.catalogId}}),icon:"el-icon-plus",type:"primary"}),n(S,{api:e.$API.sys_doc.bulkDeleteContent,vue:this},null,8,["api"]),c(n(P,null,{dropdown:d((()=>[n(E,null,{default:d((()=>[n(A,{onClick:t[1]||(t[1]=e=>g.setEnabled(!0))},{default:d((()=>[h(m(e.$t("启用")),1)])),_:1}),n(A,{onClick:t[2]||(t[2]=e=>g.setEnabled(!1))},{default:d((()=>[h(m(e.$t("禁用")),1)])),_:1})])),_:1})])),default:d((()=>[n(O,{type:"primary"},{default:d((()=>[h(m(e.$t("批量操作"))+" ",1),n(D,null,{default:d((()=>[n(x)])),_:1})])),_:1})])),_:1},512),[[y,this.selection.length>0]])])])),_:1}),n(z,{class:"nopadding"},{default:d((()=>[n(B,{"before-post":e=>e.dynamicFilter.filters.length>0,"context-menus":["title","enabled","createdTime","id","visibility"],"default-sort":{prop:"id",order:"descending"},"export-api":e.$API.sys_doc.exportContent,params:v.query,"query-api":e.$API.sys_doc.pagedQueryContent,vue:this,onDataChange:g.getStatistics,onSelectionChange:t[3]||(t[3]=e=>{v.selection=e}),ref:"table","remote-sort":"","row-key":"id",stripe:""},{default:d((()=>[n(T,{type:"selection",width:"50"}),n(V,{label:e.$t("唯一编码"),prop:"id",sortable:"custom",width:"170"},null,8,["label"]),n(T,{label:e.$t("文档标题"),"min-width":"200",prop:"title",sortable:"custom"},null,8,["label"]),n(L,{label:e.$t("档案可见性"),options:Object.entries(this.$GLOBAL.enums.archiveVisibilities).map((e=>({value:e[0],text:e[1][1],type:e[1][2],pulse:"true"===e[1][3]}))),align:"center",prop:"visibility",sortable:"custom",width:"150"},null,8,["label","options"]),n(T,{label:e.$t("启用"),align:"center",prop:"enabled",sortable:"custom",width:"100"},{default:d((({row:e})=>[n(R,{modelValue:e.enabled,"onUpdate:modelValue":t=>e.enabled=t,onChange:t=>g.changeSwitch(t,e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1},8,["label"]),n(Y,{buttons:[{icon:"el-icon-view",title:"查看",click:g.viewClick},{icon:"el-icon-edit",title:"编辑",click:async(e,t)=>{t.dialog.save={row:e,mode:"edit"}}},{icon:"el-icon-share",click:g.share,title:"分享文档"},g.naColOperation.delButton("删除文档",e.$API.sys_doc.deleteContent)],vue:this,width:"180"},null,8,["buttons"])])),_:1},8,["before-post","export-api","params","query-api","onDataChange"])])),_:1})])),_:1}),v.dialog.save?(o(),u(M,{key:0,onClosed:t[4]||(t[4]=e=>v.dialog.save=null),onMounted:t[5]||(t[5]=t=>e.$refs.saveDialog.open(v.dialog.save)),onSuccess:t[6]||(t[6]=(t,s)=>g.table.handleUpdate(e.$refs.table,t,s)),ref:"saveDialog"},null,512)):b("",!0)],64)}]]);export{j as default};
