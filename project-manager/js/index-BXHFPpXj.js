import{_ as e}from"./index-C3Re8InM.js";import{aj as l,o,c as a,S as t,K as s,a as d,J as r,M as m,Q as i,P as n,R as u}from"./@vue-_BCsYqm-.js";import"./element-plus-CoQd9HEf.js";import"./lodash-es-DCh--ulG.js";import"./@vueuse-DKZ1O7gq.js";import"./@element-plus-DpD46RjY.js";import"./@sxzz-CpAfbxx4.js";import"./@ctrl-D2oWfImC.js";import"./dayjs-Cud5yAXI.js";import"./async-validator-BTKOuuO-.js";import"./memoize-one-Ds0C_khL.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./@floating-ui-DT7V1Oc1.js";import"./crypto-js-BfYQ37JU.js";import"./axios-DMXdiZgf.js";import"./vue-router-CJBOlWwF.js";import"./nprogress-BX4rmQ7W.js";import"./vuex-CNGLPxA3.js";import"./json-bigint-D0bu8vFr.js";import"./bignumber.js-iDjSUVmj.js";import"./vue-i18n-DbMEmpqT.js";import"./@intlify-CZIS8eQd.js";import"./vue3-json-viewer-B-aZDOpp.js";import"./ace-builds-D9YH2WY7.js";import"./vue3-ace-editor-ubj-WOyx.js";import"./resize-observer-polyfill-CzGuHLZU.js";import"./sortablejs-BALiOaUQ.js";import"./vkbeautify-DEVEMlla.js";const c={class:"code-item"},p={style:{background:"blue"},class:"img"},f={class:"title"},h={class:"code-item"},g={style:{background:"orange"},class:"img"},y={class:"title"},C={class:"code-item"},j={style:{background:"green"},class:"img"},v={class:"title"},$={class:"code-item"},_={style:{background:"gray"},class:"img"},b={class:"title"};const V=e({data:()=>({form:{svgCode:"",iconName:""},formCs:{moduleName:"",moduleRemark:"",type:"YourSolution.AdmServer"}}),methods:{async generateIconCode(){try{await this.$API.sys_dev.generateIconCode.post(this.form),this.$message.success("生成完毕")}catch{}},async generateTableCode(){for(const e of this.form.summaryInfo.split("\n")){if(!e)continue;let l=e.split(",");this.form.tableCode+=`<el-table-column prop="${l[0].slice(0,1).toLowerCase()}${l[0].slice(1)}" label="${l[1]}" />`,this.form.formCode+=`<el-form-item  prop="${l[0].slice(0,1).toLowerCase()}${l[0].slice(1)}" label="${l[1]}"><el-input v-model="form.${l[0].slice(0,1).toLowerCase()}${l[0].slice(1)}" clearable /></el-form-item>`}},async generateJsCode(){try{await this.$API.sys_dev.generateJsCode.post(),this.$message.success("生成完毕")}catch{}},async generateCsCode(){try{await this.$API.sys_dev.generateCsCode.post(this.formCs),this.$message.success("生成完毕")}catch{}}}},[["render",function(e,V,w,x,k,I){const U=l("router-view"),z=l("el-icon"),N=l("el-button"),A=l("el-card"),J=l("el-col"),P=l("el-input"),R=l("el-link"),S=l("el-row"),L=l("el-main");return o(),a(u,null,[t(U),t(L,null,{default:s((()=>[t(S,{gutter:15},{default:s((()=>[t(J,{lg:6,md:8,sm:12,xl:6,xs:24},{default:s((()=>[t(A,{"body-style":{padding:"0"},shadow:"hover"},{default:s((()=>[d("div",c,[d("div",p,[t(z,null,{default:s((()=>[(o(),r(m("sc-icon-js")))])),_:1})]),d("div",f,[d("h2",null,i(e.$t("生成前端代码")),1),d("p",null,[t(N,{onClick:V[0]||(V[0]=e=>I.generateJsCode())},{default:s((()=>[n(i(e.$t("生成")),1)])),_:1})])])])])),_:1})])),_:1}),t(J,{lg:6,md:8,sm:12,xl:6,xs:24},{default:s((()=>[t(A,{"body-style":{padding:"0"},shadow:"hover"},{default:s((()=>[d("div",h,[d("div",g,[t(z,null,{default:s((()=>[(o(),r(m("sc-icon-csharp")))])),_:1})]),d("div",y,[d("h2",null,i(e.$t("生成后端代码")),1),d("p",null,[t(P,{modelValue:k.formCs.type,"onUpdate:modelValue":V[1]||(V[1]=e=>k.formCs.type=e),placeholder:e.$t("模块类型")},null,8,["modelValue","placeholder"])]),d("p",null,[t(P,{modelValue:k.formCs.moduleName,"onUpdate:modelValue":V[2]||(V[2]=e=>k.formCs.moduleName=e),placeholder:e.$t("模块名称")},null,8,["modelValue","placeholder"])]),d("p",null,[t(P,{modelValue:k.formCs.moduleRemark,"onUpdate:modelValue":V[3]||(V[3]=e=>k.formCs.moduleRemark=e),placeholder:e.$t("模块说明")},null,8,["modelValue","placeholder"])]),d("p",null,[t(N,{onClick:V[4]||(V[4]=e=>I.generateCsCode())},{default:s((()=>[n(i(e.$t("生成")),1)])),_:1})])])])])),_:1})])),_:1}),t(J,{lg:6,md:8,sm:12,xl:6,xs:24},{default:s((()=>[t(A,{"body-style":{padding:"0"},shadow:"hover"},{default:s((()=>[d("div",C,[d("div",j,[t(z,null,{default:s((()=>[(o(),r(m("el-icon-picture")))])),_:1})]),d("div",v,[d("h2",null,i(e.$t("生成图标代码")),1),d("p",null,[t(P,{modelValue:k.form.iconName,"onUpdate:modelValue":V[5]||(V[5]=e=>k.form.iconName=e),placeholder:e.$t("图标名称")},null,8,["modelValue","placeholder"])]),d("p",null,[t(P,{modelValue:k.form.svgCode,"onUpdate:modelValue":V[6]||(V[6]=e=>k.form.svgCode=e),placeholder:e.$t("粘贴SVG代码")},null,8,["modelValue","placeholder"])]),d("p",null,[t(S,{align:"middle"},{default:s((()=>[t(J,{span:12},{default:s((()=>[t(N,{onClick:V[7]||(V[7]=e=>I.generateIconCode())},{default:s((()=>[n(i(e.$t("生成")),1)])),_:1})])),_:1}),t(J,{span:12},{default:s((()=>[t(R,{href:"https://www.iconfont.cn/",target:"_blank"},{default:s((()=>V[12]||(V[12]=[n("Iconfont")]))),_:1})])),_:1})])),_:1})])])])])),_:1})])),_:1}),t(J,{lg:6,md:8,sm:12,xl:6,xs:24},{default:s((()=>[t(A,{"body-style":{padding:"0"},shadow:"hover"},{default:s((()=>[d("div",$,[d("div",_,[t(z,null,{default:s((()=>[(o(),r(m("el-icon-picture")))])),_:1})]),d("div",b,[d("h2",null,i(e.$t("生成表格代码")),1),d("p",null,[t(P,{modelValue:k.form.summaryInfo,"onUpdate:modelValue":V[8]||(V[8]=e=>k.form.summaryInfo=e),placeholder:e.$t("注释信息"),type:"textarea"},null,8,["modelValue","placeholder"])]),d("p",null,[t(P,{modelValue:k.form.tableCode,"onUpdate:modelValue":V[9]||(V[9]=e=>k.form.tableCode=e),placeholder:e.$t("表格代码"),type:"textarea"},null,8,["modelValue","placeholder"])]),d("p",null,[t(P,{modelValue:k.form.formCode,"onUpdate:modelValue":V[10]||(V[10]=e=>k.form.formCode=e),placeholder:e.$t("表单代码"),type:"textarea"},null,8,["modelValue","placeholder"])]),d("p",null,[t(N,{onClick:V[11]||(V[11]=e=>I.generateTableCode())},{default:s((()=>[n(i(e.$t("生成")),1)])),_:1})])])])])),_:1})])),_:1})])),_:1})])),_:1})],64)}],["__scopeId","data-v-899e163f"]]);export{V as default};
