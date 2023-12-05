"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6931],{6416:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=s(5893),i=s(1151);const c={id:"signalr",title:"24. \u5373\u65f6\u901a\u8baf",sidebar_label:"24. \u5373\u65f6\u901a\u8baf"},l=void 0,t={id:"signalr",title:"24. \u5373\u65f6\u901a\u8baf",description:"24.1 \u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",source:"@site/docs/signalr.mdx",sourceDirName:".",slug:"/signalr",permalink:"/furion/docs/signalr",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/signalr.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"signalr",title:"24. \u5373\u65f6\u901a\u8baf",sidebar_label:"24. \u5373\u65f6\u901a\u8baf"},sidebar:"docs",previous:{title:"23. JSON \u5e8f\u5217\u5316",permalink:"/furion/docs/json-serialization"},next:{title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1 (Worker Service)",permalink:"/furion/docs/process-service"}},d={},o=[{value:"24.1 \u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",id:"241-\u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",level:2},{value:"24.2 \u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f",id:"242-\u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f",level:2},{value:"24.3 \u5173\u4e8e <code>SignalR</code>",id:"243-\u5173\u4e8e-signalr",level:2},{value:"24.3.1 \u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd",id:"2431-\u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd",level:3},{value:"24.4 \u6ce8\u518c <code>SignalR</code> \u670d\u52a1",id:"244-\u6ce8\u518c-signalr-\u670d\u52a1",level:2},{value:"24.5 <code>SignalR</code> \u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668",id:"245-signalr-\u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668",level:2},{value:"24.5.1 \u6301\u4e45\u6027\u8fde\u63a5",id:"2451-\u6301\u4e45\u6027\u8fde\u63a5",level:3},{value:"24.5.2 \u96c6\u7ebf\u5668",id:"2452-\u96c6\u7ebf\u5668",level:3},{value:"24.6 \u96c6\u7ebf\u5668 <code>Hub</code> \u5b9a\u4e49",id:"246-\u96c6\u7ebf\u5668-hub-\u5b9a\u4e49",level:2},{value:"24.6.1 \u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f",id:"2461-\u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f",level:3},{value:"24.6.2 <code>[MapHub]</code> \u914d\u7f6e\u8fde\u63a5\u5730\u5740",id:"2462-maphub-\u914d\u7f6e\u8fde\u63a5\u5730\u5740",level:3},{value:"24.6.3 <code>Hub</code> \u6ce8\u518c\u66f4\u591a\u914d\u7f6e",id:"2463-hub-\u6ce8\u518c\u66f4\u591a\u914d\u7f6e",level:3},{value:"24.7 \u83b7\u53d6 <code>Hub</code> \u5b9e\u4f8b\u65b9\u5f0f",id:"247-\u83b7\u53d6-hub-\u5b9e\u4f8b\u65b9\u5f0f",level:2},{value:"24.7.1 <code>IHubContext</code> \u6ce8\u5165\u65b9\u5f0f",id:"2471-ihubcontext-\u6ce8\u5165\u65b9\u5f0f",level:3},{value:"24.7.2 <code>HttpContext</code> \u89e3\u6790\u65b9\u5f0f",id:"2472-httpcontext-\u89e3\u6790\u65b9\u5f0f",level:3},{value:"24.7.3 <code>IHost</code> \u4e2d\u89e3\u6790\u65b9\u5f0f",id:"2473-ihost-\u4e2d\u89e3\u6790\u65b9\u5f0f",level:3},{value:"24.7.4 \u5f3a\u7c7b\u578b <code>IHubContext</code> \u6ce8\u5165\u65b9\u5f0f",id:"2474-\u5f3a\u7c7b\u578b-ihubcontext-\u6ce8\u5165\u65b9\u5f0f",level:3},{value:"24.7.5 <code>IHubContext</code> \u6cdb\u578b\u8f6c\u6362",id:"2475-ihubcontext-\u6cdb\u578b\u8f6c\u6362",level:3},{value:"24.8 \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1",id:"248-\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1",level:2},{value:"24.8.1 \u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801",id:"2481-\u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801",level:3},{value:"24.8.2 \u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef",id:"2482-\u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef",level:3},{value:"24.8.3 \u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef",id:"2483-\u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef",level:3},{value:"24.8.4 \u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef",id:"2484-\u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef",level:3},{value:"24.8.5 \u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef",id:"2485-\u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef",level:3},{value:"24.8.6 \u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef",id:"2486-\u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef",level:3},{value:"24.8.7 \u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef",id:"2487-\u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef",level:3},{value:"24.8.8 \u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef",id:"2488-\u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef",level:3},{value:"24.9 \u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6",id:"249-\u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6",level:2},{value:"24.10 \u5206\u7ec4\u7ba1\u7406",id:"2410-\u5206\u7ec4\u7ba1\u7406",level:2},{value:"24.11 \u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5 API",id:"2411-\u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5-api",level:2},{value:"24.11.1 <code>JavaScript</code> \u5ba2\u6237\u7aef",id:"24111-javascript-\u5ba2\u6237\u7aef",level:3},{value:"24.11.2 <code>TypeScript</code> \u5ba2\u6237\u7aef",id:"24112-typescript-\u5ba2\u6237\u7aef",level:3},{value:"\u5728 <code>vue3.2+</code> \u4e2d\u4f7f\u7528",id:"\u5728-vue32-\u4e2d\u4f7f\u7528",level:4},{value:"24.11.3 <code>.NET</code> \u5ba2\u6237\u7aef",id:"24113-net-\u5ba2\u6237\u7aef",level:3},{value:"24.11.4 <code>Java</code> \u5ba2\u6237\u7aef",id:"24114-java-\u5ba2\u6237\u7aef",level:3},{value:"24.12 \u5e38\u89c1\u4f8b\u5b50",id:"2412-\u5e38\u89c1\u4f8b\u5b50",level:2},{value:"24.12.1 \u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u3001\u63a8\u9001",id:"24121-\u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u63a8\u9001",level:3},{value:"24.12.2 \u5b9e\u73b0\u804a\u5929\u529f\u80fd",id:"24122-\u5b9e\u73b0\u804a\u5929\u529f\u80fd",level:3},{value:"24.12.3 \u5b9e\u73b0 <code>\u4f60\u753b\u6211\u6765\u731c</code>",id:"24123-\u5b9e\u73b0-\u4f60\u753b\u6211\u6765\u731c",level:3},{value:"24.13 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2413-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"241-\u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",children:"24.1 \u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf"}),"\n",(0,r.jsx)(n.p,{children:"\u5373\u65f6\u901a\u8baf\uff08Instant messaging\uff0c\u7b80\u79f0 IM\uff09\u901a\u5e38\u662f\u6307\u4e92\u8054\u7f51\u4e0a\u7528\u4ee5\u8fdb\u884c\u5b9e\u65f6\u901a\u8baf\u7684\u7cfb\u7edf\uff0c\u5141\u8bb8\u4e24\u4eba\u6216\u591a\u4eba\u4f7f\u7528\u7f51\u7edc\u5373\u65f6\u7684\u4f20\u9012\u6587\u5b57\u4fe1\u606f\u3001\u6587\u6863\u3001\u8bed\u97f3\u4e0e\u89c6\u9891\u4ea4\u6d41\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5373\u65f6\u901a\u8baf\u4e0d\u540c\u4e8e E-mail \u5728\u4e8e\u5b83\u7684\u4ea4\u8c08\u662f\u5b9e\u65f6\u7684\u3002\u5927\u90e8\u5206\u7684\u5373\u65f6\u901a\u8baf\u670d\u52a1\u63d0\u4f9b\u4e86\u72b6\u6001\u4fe1\u606f\u7684\u7279\u6027 \u2500\u2500 \u663e\u793a\u8054\u7edc\u4eba\u540d\u5355\uff0c\u8054\u7edc\u4eba\u662f\u5426\u5728\u7ebf\u4e0a\u4e0e\u80fd\u5426\u4e0e\u8054\u7edc\u4eba\u4ea4\u8c08\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e92\u8054\u7f51\u4e0a\u76ee\u524d\u4f7f\u7528\u8f83\u5e7f\u7684\u5373\u65f6\u901a\u8baf\u670d\u52a1\u5305\u62ec Windows Live Messenger\u3001AOL Instant Messenger\u3001Skype\u3001Yahoo! Messenger\u3001NET Messenger Service\u3001Jabber\u3001ICQ \u4e0e QQ \u7b49\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"242-\u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f",children:"24.2 \u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsx)(n.p,{children:"\u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f\u975e\u5e38\u5e7f\u6cdb\uff0c\u9700\u8981\u5b9e\u65f6\u4ea4\u4e92\u6d88\u606f\u7684\u90fd\u9700\u8981\u3002\u5982\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u804a\u5929\u5de5\u5177\uff1aQQ\u3001WeChat\u3001\u5728\u7ebf\u5ba2\u670d\u7b49"}),"\n",(0,r.jsx)(n.li,{children:"\u624b\u6e38\u7f51\u6e38\uff1a\u738b\u8005\u8363\u8000\u3001\u9b54\u517d\u7b49"}),"\n",(0,r.jsx)(n.li,{children:"\u7f51\u7edc\u76f4\u64ad\uff1a\u817e\u8baf\u8bfe\u5802\u3001\u6296\u97f3\u76f4\u64ad\u7b49"}),"\n",(0,r.jsx)(n.li,{children:"\u8ba2\u5355\u63a8\u9001\uff1a\u7f8e\u56e2\u3001\u9910\u996e\u4e0b\u5355\u7cfb\u7edf\u7b49"}),"\n",(0,r.jsx)(n.li,{children:"\u534f\u540c\u529e\u516c\uff1a\u516c\u53f8\u5185\u90e8\u6587\u4ef6\u5206\u4eab\u3001\u5de5\u4f5c\u5b89\u6392\u3001\u5728\u7ebf\u4f1a\u8bae\u7b49\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u53ea\u662f\u5217\u4e3e\u4e86\u6bd4\u8f83\u5e38\u7528\u7684\u5e94\u7528\u573a\u666f\uff0c\u4f46\u5373\u65f6\u901a\u8baf\u7684\u4f5c\u7528\u8fdc\u4e0d\u6b62\u4e8e\u6b64\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u5148\u770b\u5b98\u65b9\u6587\u6863\uff1a",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-5.0",children:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-5.0"})]}),"\n",(0,r.jsxs)(n.h2,{id:"243-\u5173\u4e8e-signalr",children:["24.3 \u5173\u4e8e ",(0,r.jsx)(n.code,{children:"SignalR"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5373\u65f6\u901a\u8baf\u6280\u672f\u5b9e\u73b0\u662f\u590d\u6742\u4e14\u8fc7\u4e8e\u5e95\u5c42\u5316\uff0c\u6240\u4ee5\u5fae\u8f6f\u4e3a\u4e86\u7b80\u5316\u5373\u65f6\u901a\u8baf\u5e94\u7528\u7a0b\u5e8f\uff0c\u5f00\u53d1\u51fa\u4e86\u4e00\u4e2a\u5f3a\u5927\u4e14\u7b80\u6613\u4f7f\u7528\u7684\u901a\u4fe1\u5e93\uff1a",(0,r.jsx)(n.code,{children:"SignalR"}),"\uff0c\u901a\u8fc7\u8be5\u5e93\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u7c7b\u4f3c QQ\u3001\u5fae\u4fe1\u8fd9\u7c7b IM \u804a\u5929\u5de5\u5177\uff0c\u4e5f\u80fd\u5feb\u901f\u5b9e\u73b0\u6d88\u606f\u63a8\u9001\u3001\u8ba2\u5355\u63a8\u9001\u8fd9\u6837\u7684\u7cfb\u7edf\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2431-\u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd",children:"24.3.1 \u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"ASP.NET Core SignalR \u662f\u4e00\u79cd\u5f00\u653e\u6e90\u4ee3\u7801\u5e93\uff0c\u53ef\u7b80\u5316\u5c06\u5b9e\u65f6 web \u529f\u80fd\u6dfb\u52a0\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u80fd\u3002 \u5b9e\u65f6 web \u529f\u80fd\u4f7f\u670d\u52a1\u5668\u7aef\u4ee3\u7801\u53ef\u4ee5\u7acb\u5373\u5c06\u5185\u5bb9\u63a8\u9001\u5230\u5ba2\u6237\u7aef\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9002\u7528\u4e8e SignalR \uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9700\u8981\u4ece\u670d\u52a1\u5668\u8fdb\u884c\u9ad8\u9891\u7387\u66f4\u65b0\u7684\u5e94\u7528\u3002 \u793a\u4f8b\u5305\u62ec\u6e38\u620f\u3001\u793e\u4ea4\u7f51\u7edc\u3001\u6295\u7968\u3001\u62cd\u5356\u3001\u5730\u56fe\u548c GPS \u5e94\u7528\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4eea\u8868\u677f\u548c\u76d1\u89c6\u5e94\u7528\u3002 \u793a\u4f8b\u5305\u62ec\u516c\u53f8\u4eea\u8868\u677f\u3001\u5373\u65f6\u9500\u552e\u66f4\u65b0\u6216\u65c5\u884c\u8b66\u62a5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u534f\u4f5c\u5e94\u7528\u3002 \u534f\u4f5c\u5e94\u7528\u7684\u793a\u4f8b\u5305\u62ec\u767d\u677f\u5e94\u7528\u548c\u56e2\u961f\u4f1a\u8bae\u8f6f\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9700\u8981\u901a\u77e5\u7684\u5e94\u7528\u3002 \u793e\u4ea4\u7f51\u7edc\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u804a\u5929\u3001\u6e38\u620f\u3001\u65c5\u884c\u8b66\u62a5\u548c\u5f88\u591a\u5176\u4ed6\u5e94\u7528\u90fd\u9700\u4f7f\u7528\u901a\u77e5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u524d ",(0,r.jsx)(n.code,{children:"SignalR"})," \u5df2\u7ecf\u5185\u7f6e\u5728 ",(0,r.jsx)(n.code,{children:".NET 5 SDK"})," \u4e2d\u3002\u540c\u65f6 ",(0,r.jsx)(n.code,{children:"SignalR"})," \u652f\u6301 ",(0,r.jsx)(n.code,{children:"Web\u3001App\u3001Console\u3001Desktop"})," \u7b49\u591a\u4e2a\u5e94\u7528\u5e73\u53f0\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"244-\u6ce8\u518c-signalr-\u670d\u52a1",children:["24.4 \u6ce8\u518c ",(0,r.jsx)(n.code,{children:"SignalR"})," \u670d\u52a1"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e2d\uff0c\u4efb\u4f55\u670d\u52a1\u529f\u80fd\u90fd\u9700\u8981\u5148\u6ce8\u518c\u540e\u518d\u4f7f\u7528\uff0c",(0,r.jsx)(n.code,{children:"SignalR"})," \u4e5f\u4e0d\u4f8b\u5916\u3002\u53ea\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"Startup.cs"})," \u4e2d\u6dfb\u52a0\u6ce8\u518c\u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1,15,22,25}",children:'using Microsoft.AspNetCore.Builder;\r\nusing Microsoft.AspNetCore.Hosting;\r\nusing Microsoft.Extensions.DependencyInjection;\r\nusing Microsoft.Extensions.Hosting;\r\n\r\nnamespace Furion.Web.Core\r\n{\r\n    public sealed class Startup : AppStartup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n            // \u5176\u4ed6\u4ee3\u7801...\r\n\r\n            // \u6dfb\u52a0\u5373\u65f6\u901a\u8baf\r\n            services.AddSignalR();\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n            // \u5176\u4ed6\u4ee3\u7801...\r\n\r\n            app.UseEndpoints(endpoints =>\r\n            {\r\n                // \u6ce8\u518c\u96c6\u7ebf\u5668\r\n                endpoints.MapHubs();\r\n\r\n                endpoints.MapControllerRoute(\r\n                    name: "default",\r\n                    pattern: "{controller=Home}/{action=Index}/{id?}");\r\n            });\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"245-signalr-\u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668",children:["24.5 ",(0,r.jsx)(n.code,{children:"SignalR"})," \u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SignalR"})," \u5305\u542b\u4e24\u79cd\u7528\u4e8e\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u7684\u6a21\u578b\uff1a",(0,r.jsx)(n.code,{children:"\u6301\u4e45\u6027\u8fde\u63a5"}),"\u548c ",(0,r.jsx)(n.code,{children:"\u96c6\u7ebf\u5668"})," \u4e2d\u5fc3\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2451-\u6301\u4e45\u6027\u8fde\u63a5",children:"24.5.1 \u6301\u4e45\u6027\u8fde\u63a5"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fde\u63a5\u8868\u793a\u7528\u4e8e\u53d1\u9001\u5355\u63a5\u6536\u65b9\u3001\u5206\u7ec4\u6216\u5e7f\u64ad\u6d88\u606f\u7684\u7b80\u5355\u7ec8\u7ed3\u70b9\u3002 ",(0,r.jsx)(n.code,{children:"\u6301\u4e45\u6027\u8fde\u63a5"})," (\u5728 .NET \u4ee3\u7801\u4e2d\u7531 PersistentConnection \u7c7b\u8868\u793a\uff0c\u5728 ASP.NET Core SignalR \u4e2d \uff0cPersistentConnection \u7c7b\u5df2\u88ab\u5220\u9664\u3002) \u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u76f4\u63a5\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"SignalR"})," \u516c\u5f00\u7684\u4f4e\u7ea7\u522b\u901a\u4fe1\u534f\u8bae\u3002 \u4f7f\u7528\u57fa\u4e8e\u8fde\u63a5\u7684 Api \uff08\u5982 Windows Communication Foundation\uff09\u7684\u5f00\u53d1\u4eba\u5458\u5c06\u5bf9\u4f7f\u7528\u8fde\u63a5\u901a\u4fe1\u6a21\u578b\u975e\u5e38\u719f\u6089\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2452-\u96c6\u7ebf\u5668",children:"24.5.2 \u96c6\u7ebf\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u96c6\u7ebf\u5668\u662f\u4e00\u79cd\u57fa\u4e8e\u8fde\u63a5 API \u6784\u5efa\u7684\u66f4\u9ad8\u7ea7\u522b\u7ba1\u9053\uff0c",(0,r.jsx)(n.strong,{children:"\u5b83\u5141\u8bb8\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u76f4\u63a5\u8c03\u7528\u65b9\u6cd5"}),"\u3002 ",(0,r.jsx)(n.code,{children:"SignalR"})," \u5c31\u50cf\u9b54\u672f\u4e00\u6837\u5904\u7406\u8de8\u673a\u5668\u8fb9\u754c\u7684\u8c03\u5ea6\uff0c\u4f7f\u5ba2\u6237\u7aef\u80fd\u591f\u50cf\u672c\u5730\u65b9\u6cd5\u4e00\u6837\u8f7b\u677e\u5730\u8c03\u7528\u670d\u52a1\u5668\u4e0a\u7684\u65b9\u6cd5\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002 \u5982\u679c\u5f00\u53d1\u4eba\u5458\u5df2\u4f7f\u7528\u8fdc\u7a0b\u8c03\u7528 \uff08\u5982 .NET \u8fdc\u7a0b\u5904\u7406\uff09\uff0c\u5219\u5c06\u5bf9\u4f7f\u7528\u4e2d\u5fc3\u901a\u4fe1\u6a21\u578b\u975e\u5e38\u719f\u6089\u3002 \u4f7f\u7528\u96c6\u7ebf\u5668\u8fd8\u53ef\u4ee5\u5c06\u5f3a\u7c7b\u578b\u53c2\u6570\u4f20\u9012\u7ed9\u65b9\u6cd5\uff0c\u4ece\u800c\u542f\u7528\u6a21\u578b\u7ed1\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"note",children:(0,r.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,r.jsx)(n.code,{children:"\u6301\u4e45\u6027\u8fde\u63a5"})," \u548c ",(0,r.jsx)(n.code,{children:"\u96c6\u7ebf\u5668\u4e2d\u5fc3"})," \u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/signalr/overview/getting-started/introduction-to-signalr#connections-and-hubs",children:"SignalR \u5b98\u65b9\u6587\u6863"})]})}),"\n",(0,r.jsxs)(n.h2,{id:"246-\u96c6\u7ebf\u5668-hub-\u5b9a\u4e49",children:["24.6 \u96c6\u7ebf\u5668 ",(0,r.jsx)(n.code,{children:"Hub"})," \u5b9a\u4e49"]}),"\n",(0,r.jsxs)(n.p,{children:["**\u5728\u672c\u7ae0\u8282\u4e2d\u4e3b\u8981\u63a8\u8350\u4f7f\u7528\u96c6\u7ebf\u5668\u901a\u4fe1\u6a21\u578b\u65b9\u5f0f\u3002**\u8fd9\u91cc\u4e3b\u8981\u8bf4\u660e ",(0,r.jsx)(n.code,{children:"Hub"})," \u5b9a\u4e49\uff0c\u5982\u679c\u65e0\u6cd5\u7406\u89e3\u8be5\u901a\u4fe1\u6a21\u578b\u7684\u4f5c\u7528\u4e5f\u6ca1\u5173\u7cfb\uff0c\u63a5\u4e0b\u6765\u7684\u4f8b\u5b50\u4f1a\u5e26\u5927\u5bb6\u6162\u6162\u719f\u6089\u5e76\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2461-\u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f",children:"24.6.1 \u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9a\u4e49\u96c6\u7ebf\u5668\u53ea\u9700\u8981\u7ee7\u627f ",(0,r.jsx)(n.code,{children:"Hub"})," \u6216 ",(0,r.jsx)(n.code,{children:"Hub<TStrongType>"})," \u6cdb\u578b\u57fa\u7c7b\u5373\u53ef\uff0c\u5982\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Hub"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {9}",children:'using Furion.InstantMessaging;\r\nusing Microsoft.AspNetCore.SignalR;\r\n\r\nnamespace Furion.Core\r\n{\r\n    /// <summary>\r\n    /// \u804a\u5929\u96c6\u7ebf\u5668\r\n    /// </summary>\r\n    public class ChatHub : Hub\r\n    {\r\n        // \u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u4f9b\u5ba2\u6237\u7aef\u8c03\u7528\r\n        public Task SendMessage(string user, string message)\r\n        {\r\n            // \u89e6\u53d1\u5ba2\u6237\u7aef\u5b9a\u4e49\u76d1\u542c\u7684\u65b9\u6cd5\r\n            return Clients.All.SendAsync("ReceiveMessage", user, message);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Hub<TStrongType>"})," \u7c7b\u578b\u65b9\u5f0f"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"public interface IChatClient\r\n{\r\n    Task ReceiveMessage(string user, string message);\r\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1}",children:"public class StronglyTypedChatHub : Hub<IChatClient>\r\n{\r\n    // \u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u4f9b\u5ba2\u6237\u7aef\u8c03\u7528\r\n    public async Task SendMessage(string user, string message)\r\n    {\r\n        // \u89e6\u53d1\u5ba2\u6237\u7aef\u5b9a\u4e49\u76d1\u542c\u7684\u65b9\u6cd5\r\n        await Clients.All.ReceiveMessage(user, message);\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Hub<IChatClient>"})," \u53ef\u4ee5\u5bf9\u5ba2\u6237\u7aef\u65b9\u6cd5\u8fdb\u884c\u7f16\u8bd1\u65f6\u68c0\u67e5\u3002 \u8fd9\u53ef\u4ee5\u9632\u6b62\u7531\u4e8e\u4f7f\u7528\u795e\u5947\u5b57\u7b26\u4e32\u800c\u5bfc\u81f4\u7684\u95ee\u9898\uff0c\u56e0\u4e3a ",(0,r.jsx)(n.code,{children:"Hub<T>"})," \u53ea\u80fd\u63d0\u4f9b\u5bf9\u5728\u63a5\u53e3\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u7684\u8bbf\u95ee\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"2462-maphub-\u914d\u7f6e\u8fde\u63a5\u5730\u5740",children:["24.6.2 ",(0,r.jsx)(n.code,{children:"[MapHub]"})," \u914d\u7f6e\u8fde\u63a5\u5730\u5740"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"SignalR"})," \u5e93\u4e2d\u8981\u6c42\u6bcf\u4e00\u4e2a\u516c\u5f00\u7684\u96c6\u7ebf\u5668\u90fd\u9700\u8981\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u5730\u5740\uff0c\u6240\u4ee5\uff0c",(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u66f4\u52a0 ",(0,r.jsx)(n.code,{children:"[MapHub]"})," \u914d\u7f6e\uff0c\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1,11}",children:'using Furion.InstantMessaging;\r\nusing Microsoft.AspNetCore.SignalR;\r\nusing System;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.Core\r\n{\r\n    /// <summary>\r\n    /// \u804a\u5929\u96c6\u7ebf\u5668\r\n    /// </summary>\r\n    [MapHub("/hubs/chathub")]\r\n    public class ChatHub : Hub\r\n    {\r\n        // ...\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.code,{children:"SignalR"})," \u539f\u751f\u914d\u7f6e\u65b9\u5f0f"]}),(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"Furion"})," \u4e2d\u63a8\u8350\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"[MapHub]"})," \u65b9\u5f0f\u914d\u7f6e\u96c6\u7ebf\u5668\u5ba2\u6237\u7aef\u8fde\u63a5\u5730\u5740\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SignalR"})," \u63d0\u4f9b\u7684\u65b9\u5f0f\uff0c\u5982\u5728 ",(0,r.jsx)(n.code,{children:"Startup.cs"})," \u914d\u7f6e\uff1a"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {10}",children:'public sealed class Startup : AppStartup\r\n{\r\n   // \u5176\u4ed6\u4ee3\u7801\r\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n    {\r\n        // \u5176\u4ed6\u4ee3\u7801...\r\n        app.UseEndpoints(endpoints =>\r\n        {\r\n            // \u6ce8\u518c\u96c6\u7ebf\u5668\r\n            endpoints.MapHub<ChatHub>("/hubs/chathub");\r\n        });\r\n    }\r\n}\n'})})]}),"\n",(0,r.jsxs)(n.h3,{id:"2463-hub-\u6ce8\u518c\u66f4\u591a\u914d\u7f6e",children:["24.6.3 ",(0,r.jsx)(n.code,{children:"Hub"})," \u6ce8\u518c\u66f4\u591a\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u518c ",(0,r.jsx)(n.code,{children:"Hub"})," \u65f6\u914d\u7f6e\u66f4\u591a\u53c2\u6570\uff0c\u6bd4\u5982\u6743\u9650\u3001\u8de8\u57df\u7b49\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"Hub"})," \u6d3e\u751f\u7c7b\u4e2d\u7f16\u5199\u4ee5\u4e0b\u9759\u6001\u65b9\u6cd5\u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1,8,13,18}",children:'using Furion.InstantMessaging;\r\nusing Microsoft.AspNetCore.SignalR;\r\nusing System;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.Core\r\n{\r\n    [MapHub("/hubs/chathub")]\r\n    public class ChatHub : Hub\r\n    {\r\n        // \u5176\u4ed6\u4ee3\u7801\r\n\r\n        public static void HttpConnectionDispatcherOptionsSettings(HttpConnectionDispatcherOptions options)\r\n        {\r\n            // \u914d\u7f6e\r\n        }\r\n\r\n        public static void HubEndpointConventionBuilderSettings(HubEndpointConventionBuilder Builder)\r\n        {\r\n            // \u914d\u7f6e\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0a\u914d\u7f6e\u7b49\u4ef7\u4e8e ",(0,r.jsx)(n.code,{children:"SignalR"})," \u5728 ",(0,r.jsx)(n.code,{children:"Startup.cs"})," \u4e2d\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'app.UseEndpoints(endpoints =>\r\n{\r\n    var builder = endpoints.MapHub<ChatHub>("/hubs/chathub", options =>\r\n       {\r\n           // \u914d\u7f6e\r\n       });\r\n});\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"247-\u83b7\u53d6-hub-\u5b9e\u4f8b\u65b9\u5f0f",children:["24.7 \u83b7\u53d6 ",(0,r.jsx)(n.code,{children:"Hub"})," \u5b9e\u4f8b\u65b9\u5f0f"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SignalR"})," \u63d0\u4f9b\u4e86\u51e0\u79cd\u65b9\u5f0f\u8fdb\u884c\u83b7\u53d6 ",(0,r.jsx)(n.code,{children:"Hub"})," \u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"2471-ihubcontext-\u6ce8\u5165\u65b9\u5f0f",children:["24.7.1 ",(0,r.jsx)(n.code,{children:"IHubContext"})," \u6ce8\u5165\u65b9\u5f0f"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"IHubContext"})," \u9ed8\u8ba4\u6ce8\u518c\u4e3a\u5355\u4f8b\u6a21\u5f0f\uff0c\u53ef\u5728\u4efb\u4f55\u5730\u65b9\u76f4\u63a5\u83b7\u53d6\u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {5,12}",children:'public class HomeController : Controller\r\n{\r\n    private readonly IHubContext<NotificationHub> _hubContext;\r\n\r\n    public HomeController(IHubContext<NotificationHub> hubContext)\r\n    {\r\n        _hubContext = hubContext;\r\n    }\r\n\r\n    public async Task<IActionResult> Index()\r\n    {\r\n        await _hubContext.Clients.All.SendAsync("Notify", $"Home page loaded at: {DateTime.Now}");\r\n        return View();\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2472-httpcontext-\u89e3\u6790\u65b9\u5f0f",children:["24.7.2 ",(0,r.jsx)(n.code,{children:"HttpContext"})," \u89e3\u6790\u65b9\u5f0f"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2}",children:" var hubContext = context.RequestServices\r\n                         .GetRequiredService<IHubContext<ChatHub>>();\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2473-ihost-\u4e2d\u89e3\u6790\u65b9\u5f0f",children:["24.7.3 ",(0,r.jsx)(n.code,{children:"IHost"})," \u4e2d\u89e3\u6790\u65b9\u5f0f"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {6}",children:"public class Program\r\n{\r\n    public static void Main(string[] args)\r\n    {\r\n        var host = CreateHostBuilder(args).Build();\r\n        var hubContext = host.Services.GetService(typeof(IHubContext<ChatHub>));\r\n        host.Run();\r\n    }\r\n\r\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\r\n        Host.CreateDefaultBuilder(args)\r\n            .ConfigureWebHostDefaults(webBuilder => {\r\n                webBuilder.UseStartup<Startup>();\r\n            });\r\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2474-\u5f3a\u7c7b\u578b-ihubcontext-\u6ce8\u5165\u65b9\u5f0f",children:["24.7.4 \u5f3a\u7c7b\u578b ",(0,r.jsx)(n.code,{children:"IHubContext"})," \u6ce8\u5165\u65b9\u5f0f"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"IHubContext"})," \u975e\u6cdb\u578b\u5b9e\u4f8b\u8fd4\u56de\u7684\u662f ",(0,r.jsx)(n.code,{children:"dynamic"})," \u52a8\u6001\u7c7b\u578b\u5bf9\u8c61\uff0c\u8be5\u7c7b\u578b\u5bf9\u8c61\u65e0\u6cd5\u83b7\u5f97\u7f16\u8bd1\u671f\u8bed\u6cd5\u68c0\u67e5\u548c ",(0,r.jsx)(n.code,{children:"IDE"})," \u667a\u80fd\u63d0\u793a\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u548c\u81ea\u5b9a\u4e49 ",(0,r.jsx)(n.code,{children:"Hub"})," \u4e00\u6837\u7684\u65b9\u6cd5\u7b7e\u540d\u63a5\u53e3\uff0c\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {5,12}",children:"public class ChatController : Controller\r\n{\r\n    public IHubContext<ChatHub, IChatClient> _strongChatHubContext { get; }\r\n\r\n    public ChatController(IHubContext<ChatHub, IChatClient> chatHubContext)\r\n    {\r\n        _strongChatHubContext = chatHubContext;\r\n    }\r\n\r\n    public async Task SendMessage(string user, string message)\r\n    {\r\n        await _strongChatHubContext.Clients.All.ReceiveMessage(user, message);\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2475-ihubcontext-\u6cdb\u578b\u8f6c\u6362",children:["24.7.5 ",(0,r.jsx)(n.code,{children:"IHubContext"})," \u6cdb\u578b\u8f6c\u6362"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u83b7\u53d6\u7684\u662f ",(0,r.jsx)(n.code,{children:"IHubContext<>"})," \u7684\u5b9e\u4f8b\uff0c\u4f46\u5728\u4e00\u4e9b\u53cd\u5c04\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u5c06 ",(0,r.jsx)(n.code,{children:"IHubContext<>"})," \u5f3a\u5236\u8f6c\u6362\u6210 ",(0,r.jsx)(n.code,{children:"IHubContext"})," \u4ece\u800c\u66f4\u6613\u4e8e\u64cd\u4f5c\uff0c\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2,4,6-7}",children:"var myHubContext = context.RequestServices\r\n                          .GetRequiredService<IHubContext<MyHub>>();\r\nvar myOtherHubContext = context.RequestServices\r\n                               .GetRequiredService<IHubContext<MyOtherHub>>();\r\n\r\nawait CommonHubContextMethod((IHubContext)myHubContext);\r\nawait CommonHubContextMethod((IHubContext)myOtherHubContext);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"248-\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1",children:"24.8 \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1"}),"\n",(0,r.jsx)(n.h3,{id:"2481-\u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801",children:"24.8.1 \u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"Clients.All.\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2482-\u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef",children:"24.8.2 \u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"Clients.Caller.\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2483-\u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef",children:"24.8.3 \u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"Clients.Others.\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2484-\u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef",children:"24.8.4 \u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'Clients.User("\u7528\u6237").\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2485-\u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef",children:"24.8.5 \u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'Clients.Users("\u7528\u6237","\u7528\u62372",...).\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2486-\u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef",children:"24.8.6 \u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'Clients.Group("\u5206\u7ec4").\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2487-\u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef",children:"24.8.7 \u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'Clients.Groups("\u5206\u7ec4","\u5206\u7ec42",...).\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2488-\u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef",children:"24.8.8 \u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'Clients.GroupExcept("\u5206\u7ec4").\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"249-\u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6",children:"24.9 \u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,r.jsx)(n.code,{children:"SignalR"})," \u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u94fe\u63a5\u521b\u5efa ",(0,r.jsx)(n.code,{children:"ConnectionId"}),"\uff0c\u4f46\u662f\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"ConnectionId"})," \u5e76\u6ca1\u6709\u548c\u6211\u4eec\u7cfb\u7edf\u7684\u7528\u6237\u7ed1\u5173\u8054\u8d77\u6765\uff0c\u6240\u4ee5\u9700\u8981\u91c7\u7528\u81ea\u5b9a\u4e49 ",(0,r.jsx)(n.code,{children:"ConnectionId"}),"\uff0c\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,3}",children:"public class YourUserIdProvider : IUserIdProvider\r\n{\r\n    public virtual string GetUserId(HubConnectionContext connection)\r\n    {\r\n        // \u4f60\u5982\u4f55\u83b7\u53d6 UserId\uff0c\u53ef\u4ee5\u901a\u8fc7 connection.User \u83b7\u53d6 JWT \u6388\u6743\u7684\u7528\u6237\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,r.jsx)(n.code,{children:"Startup.cs"})," \u4e2d\u6ce8\u518c\u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"builder.Services.AddSingleton<IUserIdProvider, YourUserIdProvider>();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e4b\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,r.jsx)(n.code,{children:"UserId"})," \u53d1\u9001\u6d88\u606f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"Clients.User(userId).\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b\u66f4\u591a\u6587\u6863 ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/authn-and-authz?view=aspnetcore-6.0#use-claims-to-customize-identity-handling",children:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/authn-and-authz?view=aspnetcore-6.0#use-claims-to-customize-identity-handling"})]}),"\n",(0,r.jsx)(n.h2,{id:"2410-\u5206\u7ec4\u7ba1\u7406",children:"24.10 \u5206\u7ec4\u7ba1\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsx)(n.h2,{id:"2411-\u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5-api",children:"24.11 \u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5 API"}),"\n",(0,r.jsxs)(n.h3,{id:"24111-javascript-\u5ba2\u6237\u7aef",children:["24.11.1 ",(0,r.jsx)(n.code,{children:"JavaScript"})," \u5ba2\u6237\u7aef"]}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsxs)(n.h3,{id:"24112-typescript-\u5ba2\u6237\u7aef",children:["24.11.2 ",(0,r.jsx)(n.code,{children:"TypeScript"})," \u5ba2\u6237\u7aef"]}),"\n",(0,r.jsxs)(n.h4,{id:"\u5728-vue32-\u4e2d\u4f7f\u7528",children:["\u5728 ",(0,r.jsx)(n.code,{children:"vue3.2+"})," \u4e2d\u4f7f\u7528"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b89\u88c5\u5fae\u8f6f\u7684 ",(0,r.jsx)(n.code,{children:"signalr typescript"})," \u5ba2\u6237\u7aef\u5305\uff0c\u4e3b\u8981\u7528\u4e8e\u8c03\u7528\u670d\u52a1\u7aef\u65b9\u6cd5\uff0c\u5982\uff08 ",(0,r.jsx)(n.code,{children:"Hub"})," \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"SendMessage"})," \u65b9\u6cd5\uff09\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"npm i @microsoft/signalr @types/node\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\u4ee3\u7801"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"showLineNumbers",children:'import { HubConnectionBuilder } from "@microsoft/signalr";\r\n\r\n<script setup lang="ts">\r\n    import { HubConnectionBuilder } from "@microsoft/signalr";\r\n    import { ref } from "vue";\r\n\r\n    const messages = ref(\'\');\r\n    const reciveMessage = (msg: string) => {\r\n        console.log("msg", msg);\r\n    }\r\n\r\n    //\u521d\u59cb\u5316signalr HubConnection\u5bf9\u8c61\r\n    const connection = new HubConnectionBuilder()\r\n        .withUrl("<\u4f60\u7684signalr\u8fde\u63a5\u5730\u5740>")//https://localhost:7260/chatHub\r\n        .build();\r\n\r\n    //\u542f\u52a8\u8fde\u63a5\u5e76\u53d1\u9001\u6d88\u606f\u6d4b\u8bd5\r\n    connection.start()\r\n              .then(() => connection.send("SendMessage", "Hello"));\r\n\r\n    //\u6ce8\u518cweb\u7aef\u65b9\u6cd5\u4ee5\u4f9b\u540e\u7aef\u8c03\u7528\r\n    connection.on("ReciveMessage", reciveMessage);\r\n\r\n    const sendMsg = async () => {\r\n        console.log(messages.value);\r\n        await connection.send("SendMessage", messages.value).catch(function (err) {\r\n            console.log(err);\r\n        });\r\n    }\r\n<\/script>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/signalr-typescript-webpack?view=aspnetcore-6.0&tabs=visual-studio",children:"\u53c2\u8003\u6587\u6863"})}),"\n",(0,r.jsxs)(n.h3,{id:"24113-net-\u5ba2\u6237\u7aef",children:["24.11.3 ",(0,r.jsx)(n.code,{children:".NET"})," \u5ba2\u6237\u7aef"]}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsxs)(n.h3,{id:"24114-java-\u5ba2\u6237\u7aef",children:["24.11.4 ",(0,r.jsx)(n.code,{children:"Java"})," \u5ba2\u6237\u7aef"]}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsx)(n.h2,{id:"2412-\u5e38\u89c1\u4f8b\u5b50",children:"24.12 \u5e38\u89c1\u4f8b\u5b50"}),"\n",(0,r.jsx)(n.h3,{id:"24121-\u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u63a8\u9001",children:"24.12.1 \u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u3001\u63a8\u9001"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsx)(n.h3,{id:"24122-\u5b9e\u73b0\u804a\u5929\u529f\u80fd",children:"24.12.2 \u5b9e\u73b0\u804a\u5929\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsxs)(n.h3,{id:"24123-\u5b9e\u73b0-\u4f60\u753b\u6211\u6765\u731c",children:["24.12.3 \u5b9e\u73b0 ",(0,r.jsx)(n.code,{children:"\u4f60\u753b\u6211\u6765\u731c"})]}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u7406\u4e2d..."}),"\n",(0,r.jsx)(n.h2,{id:"2413-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"24.13 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e86\u89e3\u66f4\u591a",type:"note",children:(0,r.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.jsx)(n.code,{children:"SignalR"})," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/signalr/",children:"SignalR \u5b98\u65b9\u6587\u6863"})," \u6216 ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-5.0",children:"ASP.NET Core SignalR"})," \u7ae0\u8282\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);