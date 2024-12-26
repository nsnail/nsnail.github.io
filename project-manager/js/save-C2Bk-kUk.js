const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./catalog-select-DPqW-H6f.js","./index-C3Re8InM.js","./@vue-_BCsYqm-.js","./element-plus-CoQd9HEf.js","./lodash-es-DCh--ulG.js","./@vueuse-DKZ1O7gq.js","./@element-plus-DpD46RjY.js","./@sxzz-CpAfbxx4.js","./@ctrl-D2oWfImC.js","./dayjs-Cud5yAXI.js","./async-validator-BTKOuuO-.js","./memoize-one-Ds0C_khL.js","./normalize-wheel-es-Vn5vHDCm.js","./@floating-ui-DT7V1Oc1.js","../css/element-plus-B3lJtvYm.css","./crypto-js-BfYQ37JU.js","./axios-DMXdiZgf.js","./vue-router-CJBOlWwF.js","./nprogress-BX4rmQ7W.js","../css/nprogress-BgDCIyLK.css","./vuex-CNGLPxA3.js","./json-bigint-D0bu8vFr.js","./bignumber.js-iDjSUVmj.js","./vue-i18n-DbMEmpqT.js","./@intlify-CZIS8eQd.js","./vue3-json-viewer-B-aZDOpp.js","../css/vue3-json-viewer-ByH33Jf7.css","./ace-builds-D9YH2WY7.js","./vue3-ace-editor-ubj-WOyx.js","./resize-observer-polyfill-CzGuHLZU.js","./sortablejs-BALiOaUQ.js","./vkbeautify-DEVEMlla.js","../css/index-CllpfDYF.css"])))=>i.map(i=>d[i]);
import{_ as e,a as t}from"./index-C3Re8InM.js";import{aj as l,at as a,o,J as s,K as i,S as d,P as r,Q as m,O as u,L as n,c as p,aE as c}from"./@vue-_BCsYqm-.js";import"./element-plus-CoQd9HEf.js";import"./lodash-es-DCh--ulG.js";import"./@vueuse-DKZ1O7gq.js";import"./@element-plus-DpD46RjY.js";import"./@sxzz-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-Cud5yAXI.js";import"./async-validator-BTKOuuO-.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./crypto-js-BfYQ37JU.js";import"./axios-DMXdiZgf.js";import"./vue-router-CJBOlWwF.js";import"./nprogress-BX4rmQ7W.js";import"./vuex-CNGLPxA3.js";import"./json-bigint-D0bu8vFr.js";import"./bignumber.js-iDjSUVmj.js";import"./vue-i18n-DbMEmpqT.js";import"./@intlify-CZIS8eQd.js";import"./vue3-json-viewer-B-aZDOpp.js";import"./ace-builds-D9YH2WY7.js";import"./vue3-ace-editor-ubj-WOyx.js";import"./resize-observer-polyfill-CzGuHLZU.js";import"./sortablejs-BALiOaUQ.js";import"./vkbeautify-DEVEMlla.js";const b=e({components:{catalogSelect:c((()=>t((()=>import("./catalog-select-DPqW-H6f.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]),import.meta.url)))},data(){return{form:{},loading:!0,mode:"add",rules:{catalogId:[{required:!0,message:"请选择所属字典目录"}],key:[{required:!0,message:"请输入项名"}],value:[{required:!0,message:"请输入项值"}]},titleMap:{add:this.$t("新增字典项"),edit:this.$t("编辑字典项"),view:this.$t("查看字典项")},visible:!1}},emits:["success","closed","mounted"],methods:{async open(e){var t,l;if(this.visible=!0,this.loading=!0,this.mode=e.mode,this.form.catalogId=null==(t=e.data)?void 0:t.catalogId,null==(l=e.row)?void 0:l.id){const t=await this.$API.sys_dic.getContent.post({id:e.row.id});Object.assign(this.form,t.data)}return this.loading=!1,this},async submit(){if(!(await this.$refs.dialogForm.validate().catch((()=>{}))))return!1;this.loading=!0;const e="add"===this.mode?this.$API.sys_dic.createContent:this.$API.sys_dic.editContent;try{const t=await e.post(this.form);this.$emit("success",t.data,this.mode),this.visible=!1,this.$message.success(this.$t("操作成功"))}catch{}this.loading=!1}},mounted(){this.$emit("mounted")}},[["render",function(e,t,c,b,f,j){var h;const g=l("catalog-select"),v=l("el-form-item"),y=l("el-input"),$=l("el-form"),_=l("el-tab-pane"),V=l("JsonViewer"),w=l("el-tabs"),k=l("el-button"),I=l("scDialog"),C=a("loading");return o(),s(I,{modelValue:f.visible,"onUpdate:modelValue":t[5]||(t[5]=e=>f.visible=e),title:`${f.titleMap[f.mode]}：${(null==(h=f.form)?void 0:h.id)??"..."}`,onClosed:t[6]||(t[6]=t=>e.$emit("closed")),"destroy-on-close":""},{footer:i((()=>[d(k,{onClick:t[4]||(t[4]=e=>f.visible=!1)},{default:i((()=>[r(m(e.$t("取消")),1)])),_:1}),"view"!==f.mode?(o(),s(k,{key:0,disabled:f.loading,loading:f.loading,onClick:j.submit,type:"primary"},{default:i((()=>[r(m(e.$t("保存")),1)])),_:1},8,["disabled","loading","onClick"])):u("",!0)])),default:i((()=>[n((o(),p("div",null,[d(w,{"tab-position":"top"},{default:i((()=>[d(_,{label:e.$t("基本信息")},{default:i((()=>[d($,{disabled:"view"===f.mode,model:f.form,rules:f.rules,"label-width":"10rem",ref:"dialogForm"},{default:i((()=>[d(v,{label:e.$t("所属字典目录"),prop:"catalogId"},{default:i((()=>[d(g,{modelValue:f.form.catalogId,"onUpdate:modelValue":t[0]||(t[0]=e=>f.form.catalogId=e),class:"w100p"},null,8,["modelValue"])])),_:1},8,["label"]),d(v,{label:e.$t("项名"),prop:"key"},{default:i((()=>[d(y,{modelValue:f.form.key,"onUpdate:modelValue":t[1]||(t[1]=e=>f.form.key=e),clearable:""},null,8,["modelValue"])])),_:1},8,["label"]),d(v,{label:e.$t("项值"),prop:"value"},{default:i((()=>[d(y,{modelValue:f.form.value,"onUpdate:modelValue":t[2]||(t[2]=e=>f.form.value=e),clearable:""},null,8,["modelValue"])])),_:1},8,["label"]),d(v,{label:e.$t("备注"),prop:"summary"},{default:i((()=>[d(y,{modelValue:f.form.summary,"onUpdate:modelValue":t[3]||(t[3]=e=>f.form.summary=e),clearable:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["disabled","model","rules"])])),_:1},8,["label"]),"view"===f.mode?(o(),s(_,{key:0,label:e.$t("原始数据")},{default:i((()=>[d(V,{"expand-depth":5,theme:this.$TOOL.data.get("APP_SET_DARK")||this.$CONFIG.APP_SET_DARK?"dark":"light",value:f.form,copyable:"",expanded:"",sort:""},null,8,["theme","value"])])),_:1},8,["label"])):u("",!0)])),_:1})])),[[C,f.loading]])])),_:1},8,["modelValue","title"])}]]);export{b as default};
