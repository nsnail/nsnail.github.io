"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7990],{9216:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var s=r(5893),i=r(1151);r(4996);const c={id:"deploy-docker",title:"34.2 \u5728 Docker \u90e8\u7f72",sidebar_label:"34.2 \u5728 Docker \u90e8\u7f72"},d=void 0,l={id:"deploy-docker",title:"34.2 \u5728 Docker \u90e8\u7f72",description:"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 .csproj \u5e76\u6dfb\u52a0 en-US\uff0c\u5982\uff1a",source:"@site/docs/deploy-docker.mdx",sourceDirName:".",slug:"/deploy-docker",permalink:"/furion/docs/deploy-docker",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/deploy-docker.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"deploy-docker",title:"34.2 \u5728 Docker \u90e8\u7f72",sidebar_label:"34.2 \u5728 Docker \u90e8\u7f72"},sidebar:"docs",previous:{title:"34.1 \u5728 IIS \u90e8\u7f72",permalink:"/furion/docs/deploy-iis"},next:{title:"34.3 \u5728 Nginx \u90e8\u7f72",permalink:"/furion/docs/deploy-nginx"}},o={},t=[{value:"34.2.1 \u5173\u4e8e <code>Docker</code> \u90e8\u7f72",id:"3421-\u5173\u4e8e-docker-\u90e8\u7f72",level:2},{value:"34.2.2 \u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",id:"3422-\u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",level:2},{value:"34.2.2.1 \u53d1\u5e03\u540e\u6784\u5efa",id:"34221-\u53d1\u5e03\u540e\u6784\u5efa",level:3},{value:"34.2.2.2 \u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03",id:"34222-\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03",level:3},{value:"34.2.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3423-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6",type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",(0,s.jsx)(n.code,{children:".csproj"})," \u5e76\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"}),"\uff0c\u5982\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {3}",children:"<PropertyGroup>\r\n  <TargetFramework>net6.0</TargetFramework>\r\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\r\n</PropertyGroup>\n"})}),(0,s.jsxs)(n.p,{children:["\u82e5\u65e0\u9700\u751f\u6210 ",(0,s.jsx)(n.code,{children:".pdb"})," \u6587\u4ef6\uff0c\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2-3}",children:"<PropertyGroup>\r\n  <DebugType>none</DebugType>\r\n  <DebugSymbols>false</DebugSymbols>\r\n</PropertyGroup>\n"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"3421-\u5173\u4e8e-docker-\u90e8\u7f72",children:["34.2.1 \u5173\u4e8e ",(0,s.jsx)(n.code,{children:"Docker"})," \u90e8\u7f72"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Docker"})," \u4e2d\u90e8\u7f72\u7f51\u7ad9\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\u53d1\u5e03\u540e\u6784\u5efa"}),"\uff1a\u6b64\u65b9\u5f0f\u662f\u5148\u53d1\u5e03\u7f51\u7ad9\u540e\u5728\u518d\u6784\u5efa\u955c\u50cf\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6784\u5efa\u5c42\uff0c\u800c\u4e14\u8fd8\u80fd\u7f29\u51cf\u955c\u50cf\u5927\u5c0f\u3002",(0,s.jsx)(n.strong,{children:"\uff08\u63a8\u8350\uff09"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03"}),"\uff1a\u4e5f\u5c31\u662f\u8bf4\u5728 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u4e2d\u914d\u7f6e\u7f51\u7ad9\u4ece\u6784\u5efa\u5230\u53d1\u5e03\u7684\u5b8c\u6574\u8fc7\u7a0b\uff0c\u6b64\u65b9\u5f0f\u4f1a\u901f\u5ea6\u6162\uff0c\u800c\u4e14\u4f1a\u4ea7\u751f\u5197\u4f59\u5c42\uff0c\u589e\u52a0\u955c\u50cf\u5927\u5c0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3422-\u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",children:"34.2.2 \u4e24\u79cd\u65b9\u5f0f\u6784\u5efa"}),"\n",(0,s.jsx)(n.h3,{id:"34221-\u53d1\u5e03\u540e\u6784\u5efa",children:"34.2.2.1 \u53d1\u5e03\u540e\u6784\u5efa"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83d\udc49 \u53d1\u5e03\u7f51\u7ad9"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\u5728 ",(0,s.jsx)(n.code,{children:"Visual Studio"})," \u6216 ",(0,s.jsx)(n.code,{children:"dotnet cli"})," \u4e2d\u53d1\u5e03\u7f51\u7ad9\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"deploy-iis#3411-%E5%8F%91%E5%B8%83%E7%BD%91%E7%AB%99",children:"\u5728 IIS \u90e8\u7f72-\u53d1\u5e03\u7f51\u7ad9"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u7f16\u5199 ",(0,s.jsx)(n.code,{children:"Dockerfile"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:'FROM mcr.microsoft.com/dotnet/aspnet:7.0\r\nWORKDIR /app\r\nEXPOSE 80\r\nEXPOSE 443\r\n\r\nCOPY . .\r\nENTRYPOINT ["dotnet", "Furion.Web.Entry.dll"]\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u5c06 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u6587\u4ef6\u62f7\u8d1d\u5230\u53d1\u5e03\u6839\u76ee\u5f55"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u7f16\u5199\u597d\u7684 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u6587\u4ef6\uff08\u6ce8\u610f ",(0,s.jsx)(n.code,{children:"D"})," \u5927\u5199\uff09\u62f7\u8d1d\u5230\u53d1\u5e03\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u6784\u5efa ",(0,s.jsx)(n.code,{children:"Docker"})," \u955c\u50cf"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u7f51\u7ad9\u53d1\u5e03\u540e\u7684\u8def\u5f84\u6839\u76ee\u5f55\u4e0b\uff08\u5fc5\u987b\u542b ",(0,s.jsx)(n.code,{children:"Dockerfile"}),"\uff09\u6253\u5f00 ",(0,s.jsx)(n.code,{children:"CMD/PowerShell"})," \u53ea\u9700\u6784\u5efa\u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker build -t \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7 .\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"important",children:(0,s.jsxs)(n.p,{children:["\u540e\u7aef\u7684 ",(0,s.jsx)(n.code,{children:"."})," \u4e0d\u80fd\u7701\u7565"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83d\udc49 \u542f\u52a8\u955c\u50cf"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker run --name \u5bb9\u5668\u540d\u79f0 -p 5000:80 --restart=always -d \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:".NET8"})," \u4e2d ",(0,s.jsx)(n.code,{children:"80"})," \u7aef\u53e3\u95ee\u9898"]}),(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:".NET8"}),"\uff0c\u9ed8\u8ba4\u7684\u7aef\u53e3\u7531\u539f\u6765\u7684 ",(0,s.jsx)(n.code,{children:"80"})," \u7aef\u53e3\u53d8\u6210\u4e86 ",(0,s.jsx)(n.code,{children:"8080"}),"\u3002",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/zh-cn/dotnet/core/compatibility/containers/8.0/aspnet-port",children:"\u67e5\u770b\u76f8\u5173\u8bf4\u660e"})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u53d1\u5e03\u5230 ",(0,s.jsx)(n.code,{children:"hub.docker.com"})]}),(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u5c06\u8be5\u7f51\u7ad9\u7684\u955c\u50cf\u516c\u5f00\u51fa\u53bb\uff0c\u90a3\u4e48\u53ef\u4ee5\u53d1\u5e03\u5230 ",(0,s.jsx)(n.code,{children:"hub.docker.com"})," \u4e2d\u3002\u53d1\u5e03\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u4e3a\u955c\u50cf\u6253 ",(0,s.jsx)(n.code,{children:"tag"})," \u6807\u7b7e"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker tag \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7 docker\u8d26\u53f7\u540d/\u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n"})}),(0,s.jsx)(n.p,{children:"\u5982\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker tag furion:v2.20 monksoul/furion:v2.20\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u767b\u5f55 ",(0,s.jsx)(n.code,{children:"docker"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker login\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u63a8\u9001\u5230 ",(0,s.jsx)(n.code,{children:"hub.docker.com"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker push docker\u8d26\u53f7\u540d/\u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n"})}),(0,s.jsx)(n.p,{children:"\u5982\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker push monksoul/furion:v2.20\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"34222-\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03",children:"34.2.2.2 \u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5077\u61d2\uff0c\u4f46\u662f\u4e0d\u592a\u63a8\u8350\uff0c\u4e0d\u8fc7\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u975e\u5e38\u6709\u7528\uff0c\u5c31\u662f\u96c6\u6210 ",(0,s.jsx)(n.code,{children:"Devops"})," \u5de5\u5177\u94fe\u53ef\u4ee5\u505a\u5230\u4e00\u6b65\u5230\u4f4d\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u7f16\u5199 ",(0,s.jsx)(n.code,{children:"Dockerfile"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u79cd\u65b9\u5f0f\u53ea\u9700\u8981\u628a ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u5185\u5bb9\u66ff\u6362\u6210\u4ee5\u4e0b\u5373\u53ef\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers  {6}",children:'FROM mcr.microsoft.com/dotnet/sdk:5.0.9 AS build\r\nWORKDIR /source\r\n\r\n# Download Source\r\nRUN git init\r\nRUN git remote add -t master -m master origin \u4f60\u7684\u6e90\u7801Git\u5730\u5740\r\nRUN git config core.sparseCheckout true\r\nRUN echo samples >> .git/info/sparse-checkout\r\nRUN git pull --depth 1 origin main\r\n\r\n# Restore And Publish\r\nWORKDIR /source/samples\r\nRUN dotnet restore\r\nRUN dotnet publish -c release -o /app --no-restore\r\n\r\n# Run\r\nFROM mcr.microsoft.com/dotnet/aspnet:5.0.9\r\nWORKDIR /app\r\nCOPY --from=build /app ./\r\nEXPOSE 80\r\nEXPOSE 443\r\nENTRYPOINT ["dotnet", "Furion.Web.Entry.dll"]\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 \u5728 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u6240\u5728\u8def\u5f84\u6784\u5efa"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u548c\u4e0a\u8ff0\u6b65\u9aa4\u4e00\u81f4\uff0c\u4e0d\u518d\u91cd\u590d\u7f16\u5199\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"3423-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"34.2.3 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);