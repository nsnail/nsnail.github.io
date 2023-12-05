"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5393],{752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=r(5893),i=r(1151);const t={id:"sqlsugar",title:"10.1 SqlSugar \u96c6\u6210",sidebar_label:"10.1 SqlSugar \u96c6\u6210"},l=void 0,d={id:"sqlsugar",title:"10.1 SqlSugar \u96c6\u6210",description:"\u7531\u4e8e SqlSugar \u9ad8\u901f\u53d1\u5c55\uff0c\u65b0\u7248\u672c\u5e26\u6765\u4e86\u8bf8\u591a\u7279\u6027\uff0c\u800c Furion.Extras.DatabaseAccessor.SqlSugar \u62d3\u5c55\u5305\u66f4\u65b0\u4e0d\u53ca\u65f6\u5bfc\u81f4\u4e0d\u80fd\u7b2c\u4e00\u65f6\u95f4\u4f53\u9a8c\u65b0\u7279\u6027\u3002",source:"@site/docs/sqlsugar.mdx",sourceDirName:".",slug:"/sqlsugar",permalink:"/furion/docs/sqlsugar",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/sqlsugar.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"sqlsugar",title:"10.1 SqlSugar \u96c6\u6210",sidebar_label:"10.1 SqlSugar \u96c6\u6210"},sidebar:"docs",previous:{title:"10. SqlSugar \u6216\u5176\u4ed6 ORM",permalink:"/furion/docs/category/orm"},next:{title:"10.2 Dapper \u96c6\u6210",permalink:"/furion/docs/dapper"}},a={},o=[{value:"10.1.1 SqlSugar ORM",id:"1011-sqlsugar-orm",level:2},{value:"10.1.2 \u529f\u80fd\u4ecb\u7ecd",id:"1012-\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"10.1.3 \u5b98\u7f51\u6587\u6863",id:"1013-\u5b98\u7f51\u6587\u6863",level:2},{value:"10.1.4 Furion \u96c6\u6210",id:"1014-furion-\u96c6\u6210",level:2},{value:"10.1.5 \u7279\u8272\u529f\u80fd",id:"1015-\u7279\u8272\u529f\u80fd",level:2},{value:"10.1.5.1 \u8054\u8868\u67e5\u8be2",id:"10151-\u8054\u8868\u67e5\u8be2",level:3},{value:"10.1.5.2 \u5206\u9875\u67e5\u8be2",id:"10152-\u5206\u9875\u67e5\u8be2",level:3},{value:"10.1.5.3 \u52a8\u6001\u8868\u8fbe\u5f0f",id:"10153-\u52a8\u6001\u8868\u8fbe\u5f0f",level:3},{value:"10.1.5.4 \u4ed3\u50a8\u65b9\u6cd5",id:"10154-\u4ed3\u50a8\u65b9\u6cd5",level:3},{value:"10.1.5.5 \u591a\u5e93\u4e8b\u52a1",id:"10155-\u591a\u5e93\u4e8b\u52a1",level:3},{value:"10.1.5.6 \u5355\u4f8b\u6a21\u5f0f",id:"10156-\u5355\u4f8b\u6a21\u5f0f",level:3},{value:"10.1.5.7 \u5168\u5c40\u8fc7\u6ee4\u5668",id:"10157-\u5168\u5c40\u8fc7\u6ee4\u5668",level:3},{value:"10.1.5.8 \u6dfb\u52a0\u6216\u8005\u66f4\u65b0",id:"10158-\u6dfb\u52a0\u6216\u8005\u66f4\u65b0",level:3},{value:"10.1.5.9 \u81ea\u52a8\u5206\u8868",id:"10159-\u81ea\u52a8\u5206\u8868",level:3},{value:"10.1.5.10 \u5927\u6570\u636e\u63d2\u5165\uff0c\u66f4\u65b0\uff0c\u63d2\u5165\u6216\u8005\u66f4\u65b0",id:"101510-\u5927\u6570\u636e\u63d2\u5165\u66f4\u65b0\u63d2\u5165\u6216\u8005\u66f4\u65b0",level:3},{value:"10.1.5.11 \u66f4\u591a\u529f\u80fd",id:"101511-\u66f4\u591a\u529f\u80fd",level:3},{value:"10.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1016-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"\u5173\u4e8e\u62d3\u5c55\u5305",type:"caution",children:[(0,s.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"SqlSugar"})," \u9ad8\u901f\u53d1\u5c55\uff0c\u65b0\u7248\u672c\u5e26\u6765\u4e86\u8bf8\u591a\u7279\u6027\uff0c\u800c ",(0,s.jsx)(n.code,{children:"Furion.Extras.DatabaseAccessor.SqlSugar"})," \u62d3\u5c55\u5305\u66f4\u65b0\u4e0d\u53ca\u65f6\u5bfc\u81f4\u4e0d\u80fd\u7b2c\u4e00\u65f6\u95f4\u4f53\u9a8c\u65b0\u7279\u6027\u3002"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["\u6240\u4ee5\uff0c\u548c ",(0,s.jsx)(n.code,{children:"SqlSugar"})," \u4f5c\u8005\u5546\u91cf\u540e\uff0c\u51b3\u5b9a\u5168\u9762\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"SqlSugar"})," \u539f\u751f\u5305\u5373\u53ef\u3002\u4ee5\u4e0b\u6587\u6863\u5df2\u66f4\u65b0"]}),"\uff0c",(0,s.jsx)(n.a,{href:"./sqlsugar-old",children:"\u67e5\u770b\u65e7\u6587\u6863"})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6e29\u99a8\u63d0\u9192",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Furion"})," \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,s.jsx)(n.code,{children:"EFCore"}),"\uff0c",(0,s.jsxs)(n.strong,{children:["\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"EFCore"}),"\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 ",(0,s.jsx)(n.code,{children:"Furion.Pure"})," \u4ee3\u66ff ",(0,s.jsx)(n.code,{children:"Furion"})]}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"1011-sqlsugar-orm",children:"10.1.1 SqlSugar ORM"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SqlSugar"})," \u662f ",(0,s.jsx)(n.code,{children:".NET/C#"})," \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",(0,s.jsx)(n.code,{children:"ORM"})," \u6846\u67b6\uff0c\u76ee\u524d ",(0,s.jsx)(n.code,{children:"NuGet"})," \u603b\u4e0b\u8f7d\u7a81\u7834 ",(0,s.jsx)(n.code,{children:"1000K"}),"\uff0c",(0,s.jsx)(n.code,{children:"Github"})," \u5173\u6ce8\u91cf\u4e5f\u9ad8\u8fbe ",(0,s.jsx)(n.code,{children:"3.7K"}),"\uff0c\u662f\u76ee\u524d\u5f53\u4e4b\u65e0\u6127\u7684\u56fd\u4ea7\u4f18\u79c0 ",(0,s.jsx)(n.code,{children:"ORM"})," \u6846\u67b6\u4e4b\u4e00\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SqlSugar"})," \u9ad8\u6027\u80fd\uff0c\u5177\u6709\u767e\u4e07\u7ea7\u63d2\u5165\u3001\u66f4\u65b0\u5927\u6570\u636e\u5206\u8868\u7b49\u7279\u8272\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"1012-\u529f\u80fd\u4ecb\u7ecd",children:"10.1.2 \u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 ",(0,s.jsx)(n.code,{children:"SqlServer\u3001MySql\u3001PgSql\u3001Oracle"})," \u767e\u4e07\u7ea7\u63d2\u5165\u548c\u66f4\u65b0"]}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u5168\u81ea\u52a8\u5206\u8868"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u591a\u5e93\u4e8b\u52a1"}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 ",(0,s.jsx)(n.code,{children:"CodeFirst"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301\u8054\u8868\u67e5\u8be2\u3001\u5d4c\u5957\u67e5\u8be2\u3001\u5bfc\u822a\u67e5\u8be2\u3001\u5b50\u67e5\u8be2\u548c\u52a8\u6001 ",(0,s.jsx)(n.code,{children:"JSON"})," \u67e5\u8be2\u7b49\u67e5\u8be2\u64cd\u4f5c"]}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u914d\u7f6e\u67e5\u8be2"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u5de5\u5177\u751f\u6210\u5b9e\u4f53\u548c\u4ee3\u7801\u751f\u6210\u5b9e\u4f53"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u6570\u636e\u5e93 MySql\u3001SqlServer\u3001Sqlite\u3001Oracle\u3001postgresql\u3001\u8fbe\u68a6\u3001\u4eba\u5927\u91d1\u4ed3\u3001\u795e\u901a\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1013-\u5b98\u7f51\u6587\u6863",children:"10.1.3 \u5b98\u7f51\u6587\u6863"}),"\n",(0,s.jsxs)(n.p,{children:["\u70b9\u51fb\u4ee5\u4e0b\u94fe\u63a5\u53ef\u4ee5\u8df3\u8f6c\u5230 ",(0,s.jsx)(n.code,{children:"SqlSugar"})," \u5b98\u7f51\u67e5\u770b\u8be6\u7ec6 ",(0,s.jsx)(n.code,{children:"API"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5165\u95e8"}),(0,s.jsx)(n.th,{children:"\u67e5\u8be2"}),(0,s.jsx)(n.th,{children:"\u63d2\u5165"}),(0,s.jsx)(n.th,{children:"\u66f4\u65b0"}),(0,s.jsx)(n.th,{children:"\u5220 \u9664"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{href:"https://www.donet5.com/home/Doc?typeId=1226",children:"\u5b89\u88c5"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://www.donet5.com/Home/Doc?typeId=1187",children:"\u7b80\u5355\u67e5\u8be2"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{href:"https://www.donet5.com/Home/Doc?typeId=1193",children:" \u589e "})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{href:"https://www.donet5.com/Home/Doc?typeId=1191",children:"\u6539"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{href:"https://www.donet5.com/Home/Doc?typeId=1195",children:"\u5220"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://www.donet5.com/home/Doc?typeId=1181",children:"\u5165\u95e8"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{target:"_bank",href:"https://www.donet5.com/Home/Doc?typeId=1185",children:"\u8054\u8868 "})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"1014-furion-\u96c6\u6210",children:"10.1.4 Furion \u96c6\u6210"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u62d3\u5c55\u7c7b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {3,23}",children:'public static class SqlsugarSetup\r\n{\r\n    public static void AddSqlsugarSetup(this IServiceCollection services, IConfiguration configuration, string dbName = "db_master")\r\n    {\r\n\t    //\u5982\u679c\u591a\u4e2a\u6570\u6570\u636e\u5e93\u4f20 List<ConnectionConfig>\r\n\t\tvar configConnection=new ConnectionConfig()\r\n        {\r\n            DbType = SqlSugar.DbType.MySql,\r\n            ConnectionString = configuration.GetConnectionString(dbName),\r\n            IsAutoCloseConnection = true,\r\n        };\r\n\r\n        SqlSugarScope sqlSugar = new SqlSugarScope(configConnection,\r\n            db =>\r\n            {\r\n                //\u5355\u4f8b\u53c2\u6570\u914d\u7f6e\uff0c\u6240\u6709\u4e0a\u4e0b\u6587\u751f\u6548\r\n                db.Aop.OnLogExecuting = (sql, pars) =>\r\n                {\r\n                    //Console.WriteLine(sql);//\u8f93\u51fasql\r\n                };\r\n            });\r\n\r\n        services.AddSingleton<ISqlSugarClient>(sqlSugar);//\u8fd9\u8fb9\u662fSqlSugarScope\u7528AddSingleton\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u6ce8\u5165"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"//1.\u6784\u9020\u51fd\u6570\u6ce8\u5165\r\nSqlSugar.ISqlSugarClient db;\r\npublic WeatherForecastController(ISqlSugarClient db)\r\n{\r\n\r\n    this.db = db;\r\n}\r\n\r\n//2.\u624b\u52a8\u83b7\u53d6\r\nApp.GetService<ISqlSugarClient>();\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Startup.cs"})," \u4e2d\u6ce8\u518c\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"services.AddSqlsugarSetup(App.Configuration);\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u591a\u5e93\u914d\u7f6e\uff0c\u53ef\u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://www.donet5.com/home/Doc?typeId=2246",children:"https://www.donet5.com/home/Doc?typeId=2246"})]})}),"\n",(0,s.jsx)(n.h2,{id:"1015-\u7279\u8272\u529f\u80fd",children:"10.1.5 \u7279\u8272\u529f\u80fd"}),"\n",(0,s.jsx)(n.h3,{id:"10151-\u8054\u8868\u67e5\u8be2",children:"10.1.5.1 \u8054\u8868\u67e5\u8be2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Linq/Lambda"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var query5 = db.Queryable<Order>()\r\n            .LeftJoin<Custom>    ((o, cus) => o.CustomId == cus.Id)\r\n            .LeftJoin<OrderItem> ((o, cus, oritem ) => o.Id == oritem.OrderId)\r\n            .Where(o => o.Id == 1)\r\n            .Select((o, cus) => new ViewOrder { Id = o.Id, CustomName = cus.Name })\r\n            .ToList();\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u751f\u6210 ",(0,s.jsx)(n.code,{children:"SQL"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:"showLineNumbers",children:"SELECT\r\n  [o].[Id] AS [Id],\r\n  [cus].[Name] AS [CustomName]\r\nFROM\r\n  [Order] o\r\n  Left JOIN [Custom] cus ON ([o].[CustomId] = [cus].[Id])\r\n  Left JOIN [OrderDetail] oritem ON ([o].[Id] = [oritem].[OrderId])\r\nWHERE\r\n  ([o].[Id] = @Id0)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"10152-\u5206\u9875\u67e5\u8be2",children:"10.1.5.2 \u5206\u9875\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"int pageIndex = 1;\r\nint pageSize = 20;\r\nint totalCount=0;\r\nvar page = db.Queryable<Student>().ToPageList(pageIndex, pageSize, ref totalCount);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"10153-\u52a8\u6001\u8868\u8fbe\u5f0f",children:"10.1.5.3 \u52a8\u6001\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Linq/Lambda"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var names= new string [] { "a","b"};\r\nExpressionable<Order> exp = new Expressionable<Order>();\r\n\r\nforeach (var item in names)\r\n{\r\n    exp.Or(it => it.Name.Contains(item.ToString()));\r\n}\r\n\r\nvar list= db.Queryable<Order>().Where(exp.ToExpression()).ToList();\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u751f\u6210 ",(0,s.jsx)(n.code,{children:"SQL"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:"showLineNumbers",children:"SELECT [Id],[Name],[Price],[CreateTime],[CustomId]\r\n        FROM [Order]  WHERE (\r\n                      ([Name] like '%'+ CAST(@MethodConst0 AS NVARCHAR(MAX))+'%') OR\r\n                      ([Name] like '%'+ CAST(@MethodConst1 AS NVARCHAR(MAX))+'%')\r\n                     )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"10154-\u4ed3\u50a8\u65b9\u6cd5",children:"10.1.5.4 \u4ed3\u50a8\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"\u65b0\u5efa\u4e00\u4e2a\u4ed3\u50a8\u7c7b\uff0c\u5982\u679c\u60f3\u6269\u5c55\u65b9\u6cd5\u5199\u5230\u4ed3\u50a8\u7c7b\u4e2d"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"public class Repository<T> : SimpleClient<T> where T : class, new()\r\n{\r\n    public Repository(ISqlSugarClient context = null) : base(context)//\u9ed8\u8ba4\u503c\u7b49\u4e8enull\u4e0d\u80fd\u5c11\r\n    {\r\n        base.Context = App.GetService<ISqlSugarClient>();//\u7528\u624b\u52a8\u83b7\u53d6\u65b9\u5f0f\u652f\u6301\u5207\u6362\u4ed3\u50a8\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ee7\u627f\u4ed3\u50a8\u7c7b\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ed3\u50a8API\u4e86"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'//\u67e5\u8be2\r\nvar data1 = base.GetById(1);//\u6839\u636eid\u67e5\u8be2\r\nvar data4 = base.GetSingle(it => it.Id == 1);//\u67e5\u8be2\u5355\u6761\u8bb0\u5f55\uff0c\u7ed3\u679c\u96c6\u4e0d\u80fd\u8d85\u8fc71\uff0c\u4e0d\u7136\u4f1a\u63d0\u793a\u9519\u8bef\r\nvar data = base.GetFirst(it => it.Id == 1);//\u67e5\u8be2\u7b2c\u4e00\u6761\u8bb0\u5f55\r\n\r\nvar data2 = base.GetList();//\u67e5\u8be2\u6240\u6709\r\nvar data3 = base.GetList(it => it.Id == 1); //\u6839\u636e\u6761\u4ef6\u67e5\u8be2\r\n\r\nvar p = new PageModel() { PageIndex = 1, PageSize = 2 };\r\nvar data5 = base.GetPageList(it => it.Name == "xx", p);\r\nConsole.Write(p.PageCount);\r\n\r\nvar data6 = base.GetPageList(it => it.Name == "xx", p, it => it.Name, OrderByType.Asc);\r\nConsole.Write(p.PageCount);\r\n\r\nList<IConditionalModel> conModels = new List<IConditionalModel>();\r\nconModels.Add(new ConditionalModel(){FieldName="id",ConditionalType=ConditionalType.Equal,FieldValue="1"});//id=1\r\nvar data7 = base.GetPageList(conModels, p, it => it.Name, OrderByType.Asc);\r\nbase.AsQueryable().Where(x => x.Id == 1).ToList();\r\n\r\n//\u63d2\u5165\r\nbase.Insert(insertObj);\r\nbase.InsertRange(InsertObjs);\r\nvar id = base.InsertReturnIdentity(insertObj);\r\nbase.AsInsertable(insertObj).ExecuteCommand();\r\n\r\n//\u5220\u9664\r\nbase.Delete(insertObj);\r\nbase.DeleteById(1);\r\nbase.DeleteByIds(new object [] { 1, 2 }); //\u6570\u7ec4\u5e26\u662f ids\u65b9\u6cd5 \uff0c\u5c01\u88c5\u4f20 object [] \u7c7b\u578b\r\nbase.Delete(it => it.Id == 1);\r\nbase.AsDeleteable().Where(it => it.Id == 1).ExecuteCommand();\r\n\r\n//\u66f4\u65b0\r\nbase.Update(insertObj);\r\nbase.UpdateRange(InsertObjs);\r\nbase.Update(it => new Order() { Name = "a", }, it => it.Id == 1);\r\nbase.AsUpdateable(insertObj).UpdateColumns(it=>new { it.Name }).ExecuteCommand();\r\n\r\n//\u9ad8\u7ea7\u64cd\u4f5c\r\nbase.AsSugarClient // \u83b7\u53d6\u5b8c\u6574\u7684db\u5bf9\u8c61\r\nbase.AsTenant  // \u83b7\u53d6\u591a\u5e93\u76f8\u5173\u64cd\u4f5c\r\n\r\n//\u5207\u6362\u4ed3\u50a8\r\nbase.ChangeRepository<Repository<OrderItem>>() //\u652f\u6301\u591a\u79df\u6237\u548c\u6269\u5c55\u65b9\u6cd5\uff0c\u4f7f\u7528SqlSugarScope\u5355\u4f8b\uff08\u6216\u8005SqlSugarClient Scope\u6ce8\u5165\uff09\r\nbase.Change<OrderItem>()//\u53ea\u652f\u6301\u81ea\u5e26\u65b9\u6cd5\u548c\u5355\u5e93\n'})}),"\n",(0,s.jsx)(n.h3,{id:"10155-\u591a\u5e93\u4e8b\u52a1",children:"10.1.5.5 \u591a\u5e93\u4e8b\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'SqlSugarClient db = new SqlSugarClient(new List<ConnectionConfig>()\r\n{\r\n    new ConnectionConfig(){ ConfigId="0", DbType=DbType.SqlServer,  ConnectionString=Config.ConnectionString, IsAutoCloseConnection=true },\r\n    new ConnectionConfig(){ ConfigId="1", DbType=DbType.MySql, ConnectionString=Config.ConnectionString4 ,IsAutoCloseConnection=true}\r\n});\r\n\r\nvar mysqldb = db.GetConnection("1"); // mysql db\r\nvar sqlServerdb = db.GetConnection("0"); // sqlserver db\r\n\r\ndb.BeginTran();\r\n\r\nmysqldb.Insertable(new Order()\r\n{\r\n    CreateTime = DateTime.Now,\r\n    CustomId = 1,\r\n    Name = "a",\r\n    Price = 1\r\n}).ExecuteCommand();\r\nmysqldb.Queryable<Order>().ToList();\r\nsqlServerdb.Queryable<Order>().ToList();\r\n\r\ndb.CommitTran();\n'})}),"\n",(0,s.jsx)(n.h3,{id:"10156-\u5355\u4f8b\u6a21\u5f0f",children:"10.1.5.6 \u5355\u4f8b\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"public static SqlSugarScope Db = new SqlSugarScope(new ConnectionConfig()\r\n    {\r\n        DbType = SqlSugar.DbType.SqlServer,\r\n        ConnectionString = Config.ConnectionString,\r\n        IsAutoCloseConnection = true\r\n    },\r\n    db=> {\r\n            db.Aop.OnLogExecuting = (s, p) =>\r\n            {\r\n                Console.WriteLine(s);\r\n            };\r\n    });\r\n\r\nusing (var tran = Db.UseTran())\r\n{\r\n    new Test2().Insert(XX);\r\n    new Test1().Insert(XX);\r\n    .....\r\n\r\n    tran.CommitTran();\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"10157-\u5168\u5c40\u8fc7\u6ee4\u5668",children:"10.1.5.7 \u5168\u5c40\u8fc7\u6ee4\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"db.QueryFilter.Add(new TableFilterItem<Order>(it => it.Name.Contains(\"a\")));\r\n\r\ndb.Queryable<Order>().ToList();\r\n// SELECT [Id],[Name],[Price],[CreateTime],[CustomId] FROM [Order]  WHERE  ([Name] like '%'+@MethodConst0+'%')\r\n\r\ndb.Queryable<OrderItem, Order>((i, o) => i.OrderId == o.Id)\r\n        .Where(i => i.OrderId != 0)\r\n        .Select(\"i.*\").ToList();\r\n// SELECT i.* FROM [OrderDetail] i  ,[Order]  o  WHERE ( [i].[OrderId] = [o].[Id] )  AND\r\n// ( [i].[OrderId] <> @OrderId0 )  AND  ([o].[Name] like '%'+@MethodConst1+'%')\n"})}),"\n",(0,s.jsx)(n.h3,{id:"10158-\u6dfb\u52a0\u6216\u8005\u66f4\u65b0",children:"10.1.5.8 \u6dfb\u52a0\u6216\u8005\u66f4\u65b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var x = Db.Storageable(list2).ToStorage();\r\nx.AsInsertable.ExecuteCommand();\r\nx.AsUpdateable.ExecuteCommand();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var x = Db.Storageable(list).SplitInsert(it => !it.Any()).ToStorage()\r\nx.AsInsertable.ExecuteCommand();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"10159-\u81ea\u52a8\u5206\u8868",children:"10.1.5.9 \u81ea\u52a8\u5206\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'[SplitTable(SplitType.Year)] // Table by year (the table supports year, quarter, month, week and day)\r\n[SugarTable("SplitTestTable_{year}{month}{day}")]\r\npublic class SplitTestTable\r\n{\r\n    [SugarColumn(IsPrimaryKey =true)]\r\n    public long Id { get; set; }\r\n\r\n    public string Name { get; set; }\r\n\r\n    //When the sub-table field is inserted, which table will be inserted according to this field.\r\n    //When it is updated and deleted, it can also be convenient to use this field to\r\n    //find out the related table\r\n    [SplitField]\r\n    public DateTime CreateTime { get; set; }\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var lis2t = db.Queryable<OrderSpliteTest>()\r\n.SplitTable(DateTime.Now.Date.AddYears(-1), DateTime.Now)\r\n.ToPageList(1,2);\u3000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"101510-\u5927\u6570\u636e\u63d2\u5165\u66f4\u65b0\u63d2\u5165\u6216\u8005\u66f4\u65b0",children:"10.1.5.10 \u5927\u6570\u636e\u63d2\u5165\uff0c\u66f4\u65b0\uff0c\u63d2\u5165\u6216\u8005\u66f4\u65b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'//Insert A million only takes a few seconds\r\ndb.Fastest<RealmAuctionDatum>().BulkCopy(GetList());\r\n\r\n//update A million only takes a few seconds\r\ndb.Fastest<RealmAuctionDatum>().BulkUpdate(GetList());//A million only takes a few seconds\u5b8c\r\ndb.Fastest<RealmAuctionDatum>().BulkUpdate(GetList(),new string[]{"id"},new string[]{"name","time"})//no primary key\r\n\r\n//if exists update, else  insert\r\n var x= db.Storageable<Order>(data).ToStorage();\r\n     x.BulkCopy();\r\n     x.BulkUpdate();\r\n\r\n//set table name\r\ndb.Fastest<RealmAuctionDatum>().AS("tableName").BulkCopy(GetList())\r\n\r\n//set page\r\ndb.Fastest<Order>().PageSize(300000).BulkCopy(insertObjs);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"101511-\u66f4\u591a\u529f\u80fd",children:"10.1.5.11 \u66f4\u591a\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u67e5\u9605 ",(0,s.jsx)(n.a,{href:"https://www.donet5.com/Home/Doc",children:"SqlSugar \u5b98\u7f51"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"1016-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"10.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e86\u89e3\u66f4\u591a",type:"note",children:(0,s.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a ",(0,s.jsx)(n.code,{children:"SqlSugar"})," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,s.jsx)(n.a,{href:"https://www.donet5.com/Home/Doc",children:"SqlSugar \u5b98\u7f51"}),"\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);