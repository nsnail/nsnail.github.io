import{_ as e}from"./index-C3Re8InM.js";import{aj as o,o as t,J as s,H as r}from"./@vue-_BCsYqm-.js";import"./element-plus-CoQd9HEf.js";import"./lodash-es-DCh--ulG.js";import"./@vueuse-DKZ1O7gq.js";import"./@element-plus-DpD46RjY.js";import"./@sxzz-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-Cud5yAXI.js";import"./async-validator-BTKOuuO-.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./crypto-js-BfYQ37JU.js";import"./axios-DMXdiZgf.js";import"./vue-router-CJBOlWwF.js";import"./nprogress-BX4rmQ7W.js";import"./vuex-CNGLPxA3.js";import"./json-bigint-D0bu8vFr.js";import"./bignumber.js-iDjSUVmj.js";import"./vue-i18n-DbMEmpqT.js";import"./@intlify-CZIS8eQd.js";import"./vue3-json-viewer-B-aZDOpp.js";import"./ace-builds-D9YH2WY7.js";import"./vue3-ace-editor-ubj-WOyx.js";import"./resize-observer-polyfill-CzGuHLZU.js";import"./sortablejs-BALiOaUQ.js";import"./vkbeautify-DEVEMlla.js";const a=e({props:{modelValue:{type:Object},placeholder:{type:String}},data:()=>({loaded:!1,data:null,options:[]}),watch:{data(e){this.$emit("update:modelValue",e)},modelValue:{immediate:!0,deep:!0,handler(e){this.data=e??null}}},mounted(){},async created(){const e=await this.$API.sys_doc.queryCatalog.post();this.options=e.data},components:{},computed:{},methods:{}},[["render",function(e,a,i,p,l,m){const d=o("el-cascader");return t(),s(d,r(e.$attrs,{modelValue:l.data,"onUpdate:modelValue":a[0]||(a[0]=e=>l.data=e),options:l.options,placeholder:i.placeholder,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0,expandTrigger:"hover"},clearable:""}),null,16,["modelValue","options","placeholder"])}]]);export{a as default};
