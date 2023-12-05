"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7555],{1359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var o=n(5893),r=n(1151);n(4996);const c={slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},s=void 0,l={permalink:"/furion/blog/httpcontext",editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/blog/2021-02-01-httpcontext.mdx",source:"@site/blog/2021-02-01-httpcontext.mdx",title:"1. HttpContext \u5e94\u7528",description:"HttpContext \u91cd\u5927\u8c03\u6574",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"furion",permalink:"/furion/blog/tags/furion"},{label:"furos",permalink:"/furion/blog/tags/furos"},{label:".net",permalink:"/furion/blog/tags/net"},{label:".netcore",permalink:"/furion/blog/tags/netcore"},{label:".net5",permalink:"/furion/blog/tags/net-5"},{label:"httpcontext",permalink:"/furion/blog/tags/httpcontext"}],readingTime:1.545,hasTruncateMarker:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://gitee.com/dotnetchina",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},unlisted:!1,prevItem:{title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/furion/blog/fileupload-download"}},i={authorsImageUrls:[void 0]},d=[{value:"HttpContext \u91cd\u5927\u8c03\u6574",id:"httpcontext-\u91cd\u5927\u8c03\u6574",level:2},{value:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",level:2},{value:"\u5728 <code>ControllerBase</code> \u6d3e\u751f\u7c7b\u4e2d",id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d",level:3},{value:"\u901a\u8fc7\u6ce8\u5165 <code>IHttpContextAccessor</code>",id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor",level:3},{value:"\u901a\u8fc7 <code>App.HttpContext</code>",id:"\u901a\u8fc7-apphttpcontext",level:3},{value:"<code>HttpContext</code> \u62d3\u5c55\u65b9\u6cd5",id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",level:3},{value:"\u8bbe\u7f6e <code>Swagger</code> \u81ea\u52a8\u6388\u6743",id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743",level:3},{value:"\u9000\u51fa <code>Swagger</code> \u6388\u6743",id:"\u9000\u51fa-swagger-\u6388\u6743",level:3},{value:"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740",id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740",level:3},{value:"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740",id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"httpcontext-\u91cd\u5927\u8c03\u6574",children:"HttpContext \u91cd\u5927\u8c03\u6574"}),"\n",(0,o.jsxs)(t.p,{children:["\u5728 ",(0,o.jsx)(t.code,{children:"ASP.NET"})," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"HttpContext"})," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",(0,o.jsx)(t.code,{children:"ASP.NET Core"})," \u4e2d\uff0c",(0,o.jsx)(t.code,{children:"HttpContext"})," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u867d\u7136\u5728 ",(0,o.jsx)(t.code,{children:"ASP.NET Core"})," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",(0,o.jsx)(t.code,{children:"HttpContext"})," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",(0,o.jsx)(t.code,{children:"IHttpContextAccessor"})," \u65b9\u5f0f\u83b7\u53d6\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",children:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"}),"\n",(0,o.jsxs)(t.h3,{id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d",children:["\u5728 ",(0,o.jsx)(t.code,{children:"ControllerBase"})," \u6d3e\u751f\u7c7b\u4e2d"]}),"\n",(0,o.jsxs)(t.p,{children:["\u5728 ",(0,o.jsx)(t.code,{children:"ControllerBase"})," \u6d3e\u751f\u7c7b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"HttpContext"})," \u5c5e\u6027\u83b7\u53d6 ",(0,o.jsx)(t.code,{children:"HttpContext"})," \u5bf9\u8c61\u3002"]}),"\n",(0,o.jsxs)(t.h3,{id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor",children:["\u901a\u8fc7\u6ce8\u5165 ",(0,o.jsx)(t.code,{children:"IHttpContextAccessor"})]}),"\n",(0,o.jsxs)(t.p,{children:["\u5728 ",(0,o.jsx)(t.code,{children:"Furion"})," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6ce8\u518c\u4e86 ",(0,o.jsx)(t.code,{children:"IHttpContextAccessor"})," \u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8be5\u5bf9\u8c61\u83b7\u53d6\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers  {3,5}",children:"public class AppService\r\n{\r\n    public AppService(IHttpContextAccessor httpContextAccessor)\r\n    {\r\n        var httpContext = httpContextAccessor.HttpContext;\r\n    }\r\n}\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"\u901a\u8fc7-apphttpcontext",children:["\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"App.HttpContext"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"App"})," \u9759\u6001\u7c7b\u4e5f\u63d0\u4f9b\u4e86 ",(0,o.jsx)(t.code,{children:"App.HttpContext"})," \u83b7\u53d6 ",(0,o.jsx)(t.code,{children:"HttpContext"})," \u5bf9\u8c61\u3002"]}),"\n",(0,o.jsxs)(t.h2,{id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5",children:[(0,o.jsx)(t.code,{children:"HttpContext"})," \u62d3\u5c55\u65b9\u6cd5"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Furion"})," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,o.jsx)(t.code,{children:"HttpContext"})," \u62d3\u5c55\u65b9\u6cd5"]}),"\n",(0,o.jsx)(t.h3,{id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",children:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:"var attribute = httpContext.GetMetadata<SomeAttribute>();\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743",children:["\u8bbe\u7f6e ",(0,o.jsx)(t.code,{children:"Swagger"})," \u81ea\u52a8\u6388\u6743"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:'httpContext.SigninToSwagger("\u4f60\u7684token");\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"\u9000\u51fa-swagger-\u6388\u6743",children:["\u9000\u51fa ",(0,o.jsx)(t.code,{children:"Swagger"})," \u6388\u6743"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:"httpContext.SignoutToSwagger();\n"})}),"\n",(0,o.jsx)(t.h3,{id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740",children:"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:"var ipv4 = httpContext.GetLocalIpAddressToIPv4();\r\nvar ipv6 = httpContext.GetLocalIpAddressToIPv6();\n"})}),"\n",(0,o.jsx)(t.h3,{id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740",children:"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:"var ipv4 = httpContext.GetRemoteIpAddressToIPv4();\r\nvar ipv6 = httpContext.GetRemoteIpAddressToIPv6();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);