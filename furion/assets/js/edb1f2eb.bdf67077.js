"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[939],{2367:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=l(5893),r=l(1151);const i={id:"dbcontext-sql-template",title:"9.17 Sql \u6a21\u677f",sidebar_label:"9.17 Sql \u6a21\u677f"},d=void 0,c={id:"dbcontext-sql-template",title:"9.17 Sql \u6a21\u677f",description:"9.17.1 Sql \u6a21\u677f",source:"@site/docs/dbcontext-sql-template.mdx",sourceDirName:".",slug:"/dbcontext-sql-template",permalink:"/furion/docs/dbcontext-sql-template",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-sql-template.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"dbcontext-sql-template",title:"9.17 Sql \u6a21\u677f",sidebar_label:"9.17 Sql \u6a21\u677f"},sidebar:"docs",previous:{title:"9.16 Sql \u64cd\u4f5c",permalink:"/furion/docs/dbcontext-sql"},next:{title:"9.18 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/furion/docs/dbcontext-sql-proxy"}},t={},o=[{value:"9.17.1 <code>Sql</code> \u6a21\u677f",id:"9171-sql-\u6a21\u677f",level:2},{value:"9.17.2 <code>Sql</code> \u6a21\u677f\u4f18\u7f3a\u70b9",id:"9172-sql-\u6a21\u677f\u4f18\u7f3a\u70b9",level:2},{value:"9.17.2.1 \u4f18\u70b9",id:"91721-\u4f18\u70b9",level:3},{value:"9.17.2.2 \u7f3a\u70b9",id:"91722-\u7f3a\u70b9",level:3},{value:"9.17.3 \u5982\u4f55\u4f7f\u7528",id:"9173-\u5982\u4f55\u4f7f\u7528",level:2},{value:"9.17.3.1 \u5e38\u89c4\u4f7f\u7528",id:"91731-\u5e38\u89c4\u4f7f\u7528",level:3},{value:"9.17.3.2 \u9ad8\u7ea7\u5d4c\u5957",id:"91732-\u9ad8\u7ea7\u5d4c\u5957",level:3},{value:"9.17.4 <code>Sql</code> \u6a21\u677f\u914d\u7f6e",id:"9174-sql-\u6a21\u677f\u914d\u7f6e",level:2},{value:"9.17.4.1 \u666e\u901a\u6a21\u5f0f",id:"91741-\u666e\u901a\u6a21\u5f0f",level:3},{value:"9.17.4.2 \u66f4\u591a\u914d\u7f6e",id:"91742-\u66f4\u591a\u914d\u7f6e",level:3},{value:"9.17.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9175-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"9171-sql-\u6a21\u677f",children:["9.17.1 ",(0,s.jsx)(n.code,{children:"Sql"})," \u6a21\u677f"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u5e38\u6211\u4eec\u7a0b\u5e8f\u4e2d\u6267\u884c\u6570\u636e\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"sql"})," \u8bed\u53e5\u90fd\u5199\u5728\u4e86\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u968f\u7a0b\u5e8f\u4e00\u8d77\u7f16\u8bd1\uff0c\u540e\u7eed\u9700\u8981\u4fee\u6539\uff0c\u5219\u91cd\u65b0\u7f16\u8bd1\u4ee3\u7801\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c",(0,s.jsx)(n.code,{children:"Furion"})," \u63a8\u51fa\u4e00\u79cd ",(0,s.jsx)(n.code,{children:"Sql"})," \u6a21\u677f\u7684\u65b9\u5f0f\uff0c\u7a0b\u5e8f\u6267\u884c ",(0,s.jsx)(n.code,{children:"Sql"})," \u65f6\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u6807\u8bb0\u5373\u53ef\uff1a",(0,s.jsx)(n.code,{children:"#(\u6a21\u677fKey)"}),"\uff0c\u8fd9\u4e9b\u771f\u5b9e\u7684 ",(0,s.jsx)(n.code,{children:"Sql"})," \u914d\u7f6e\u5728 ",(0,s.jsx)(n.code,{children:".json"})," \u6216 ",(0,s.jsx)(n.code,{children:".xml"})," \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Json"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "Select.User": "select * from User where id > @id"\r\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Xml"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\r\n<configuration>\r\n  <Select.User>select * from User where id > @id</Select.User>\r\n</configuration>\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"9172-sql-\u6a21\u677f\u4f18\u7f3a\u70b9",children:["9.17.2 ",(0,s.jsx)(n.code,{children:"Sql"})," \u6a21\u677f\u4f18\u7f3a\u70b9"]}),"\n",(0,s.jsx)(n.h3,{id:"91721-\u4f18\u70b9",children:"9.17.2.1 \u4f18\u70b9"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Sql"})," \u52a8\u6001\u914d\u7f6e\uff0c\u53ef\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u52a8\u6001\u8c03\u914d ",(0,s.jsx)(n.code,{children:"Sql"})," \u8bed\u53e5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301\u7a0b\u5e8f ",(0,s.jsx)(n.code,{children:"Sql"})," \u8bed\u53e5\u52a0\u5bc6"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"91722-\u7f3a\u70b9",children:"9.17.2.2 \u7f3a\u70b9"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9700\u589e\u52a0\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u5bb9\u6613\u8c03\u8bd5 ",(0,s.jsx)(n.code,{children:"Sql"})," \u4ee3\u7801"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"9173-\u5982\u4f55\u4f7f\u7528",children:"9.17.3 \u5982\u4f55\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6267\u884c ",(0,s.jsx)(n.code,{children:"Sql"})," \u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u586b\u5199\u6307\u5b9a\u6a21\u677f\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"91731-\u5e38\u89c4\u4f7f\u7528",children:"9.17.3.1 \u5e38\u89c4\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u4ed3\u50a8\u65b9\u5f0f\r\nvar users = repository.SqlQuery<User>("#(Select.User)", new { id = 1});\r\n\r\n// \u61d2\u4eba\u65b9\u5f0f\r\nvar users = "#(Select.User)".SqlQuery<User>(new { id = 1});\r\n\r\n// Sql \u4ee3\u7406\u65b9\u5f0f\r\n[SqlExecute("#(Select.User)")]\r\nList<User> GetUser(int id);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"91732-\u9ad8\u7ea7\u5d4c\u5957",children:"9.17.3.2 \u9ad8\u7ea7\u5d4c\u5957"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var users = repository.SqlQuery<User>(\r\n@"select * from user u\r\nleft join #(User.Detail) d on u.Id = d.UserId\r\nwhere id > @id");\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"9174-sql-\u6a21\u677f\u914d\u7f6e",children:["9.17.4 ",(0,s.jsx)(n.code,{children:"Sql"})," \u6a21\u677f\u914d\u7f6e"]}),"\n",(0,s.jsx)(n.h3,{id:"91741-\u666e\u901a\u6a21\u5f0f",children:"9.17.4.1 \u666e\u901a\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "Select.User": "select * from User"\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"91742-\u66f4\u591a\u914d\u7f6e",children:"9.17.4.2 \u66f4\u591a\u914d\u7f6e"}),"\n",(0,s.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,s.jsx)(n.code,{children:"Furion 2.13 +"})," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "Select.User": {\r\n    "Sql": "select * from User where id > @id and Name = @name",\r\n    "Params": [\r\n      {\r\n        "Name": " Id",\r\n        "Value": "1",\r\n        "DbType": "Int16",\r\n        "Size": 10\r\n      },\r\n      {\r\n        "Name": " Name",\r\n        "Value": "\u767e\u5c0f\u50e7",\r\n        "DbType": "String",\r\n        "Size": 10\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"9175-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.17.5 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);