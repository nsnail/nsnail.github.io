"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5809],{9447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(5893),s=n(1151);const i={id:"dbcontext-batch",title:"9.10 \u6279\u91cf\u64cd\u4f5c",sidebar_label:"9.10 \u6279\u91cf\u64cd\u4f5c"},d=void 0,c={id:"dbcontext-batch",title:"9.10 \u6279\u91cf\u64cd\u4f5c",description:"9.10.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",source:"@site/docs/dbcontext-batch.mdx",sourceDirName:".",slug:"/dbcontext-batch",permalink:"/furion/docs/dbcontext-batch",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-batch.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"dbcontext-batch",title:"9.10 \u6279\u91cf\u64cd\u4f5c",sidebar_label:"9.10 \u6279\u91cf\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.9 \u5220\u9664\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-delete"},next:{title:"9.11 \u67e5\u8be2\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-query"}},o={},l=[{value:"9.10.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",id:"9101-\u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",level:2},{value:"9.10.2 <code>Zack.EFCore.Batch</code> \u4f7f\u7528",id:"9102-zackefcorebatch-\u4f7f\u7528",level:2},{value:"9.10.2.1 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93 <code>NuGet</code> \u5305",id:"91021-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93-nuget-\u5305",level:3},{value:"9.10.2.2 \u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",id:"91022-\u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",level:3},{value:"9.10.2.3 \u57fa\u672c\u4f7f\u7528",id:"91023-\u57fa\u672c\u4f7f\u7528",level:3},{value:"9.10.3 <code>EFCore.BulkExtensions</code> \u4f7f\u7528",id:"9103-efcorebulkextensions-\u4f7f\u7528",level:2},{value:"9.10.3.1 \u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",id:"91031-\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",level:3},{value:"9.10.3.2 \u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",id:"91032-\u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",level:3},{value:"9.10.3.3 \u6279\u91cf\u64cd\u4f5c\u6027\u80fd",id:"91033-\u6279\u91cf\u64cd\u4f5c\u6027\u80fd",level:3},{value:"9.10.4 <code>EFCore 7</code> \u5185\u7f6e\u6279\u91cf\u64cd\u4f5c",id:"9104-efcore-7-\u5185\u7f6e\u6279\u91cf\u64cd\u4f5c",level:2},{value:"9.10.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9105-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"9101-\u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",children:"9.10.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Furion"})," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u53ea\u63d0\u4f9b\u5c0f\u6570\u636e\uff08100 \u6761 \u4ee5\u5185\uff09\u6279\u91cf\u6570\u636e\u64cd\u4f5c\uff0c\u5982\u679c\u9700\u8981\u66f4\u5927\u7684\u6570\u636e\u6279\u91cf\u5904\u7406\uff0c\u63a8\u8350\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305 ",(0,r.jsx)(t.a,{href:"https://github.com/yangzhongke/Zack.EFCore.Batch",children:"Zack.EFCore.Batch"}),"\uff0c\u652f\u6301\u548c ",(0,r.jsx)(t.code,{children:"Furion"})," \u65e0\u7f1d\u8854\u63a5\u3002"]}),"\n",(0,r.jsxs)(t.h2,{id:"9102-zackefcorebatch-\u4f7f\u7528",children:["9.10.2 ",(0,r.jsx)(t.code,{children:"Zack.EFCore.Batch"})," \u4f7f\u7528"]}),"\n",(0,r.jsxs)(t.admonition,{type:"important",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:[(0,r.jsx)(t.code,{children:"EFCore"})," \u62e6\u622a\u5668\u8bf4\u660e"]}),(0,r.jsxs)(t.p,{children:["\u4f7f\u7528\u8be5\u7b2c\u4e09\u65b9\u62d3\u5c55\u5e93\u53ef\u80fd\u4e0d\u4f1a\u89e6\u53d1 ",(0,r.jsx)(t.code,{children:"EFCore"})," \u7684\u62e6\u622a\u5668\uff0c\u5982 ",(0,r.jsx)(t.code,{children:"DbCommandInterceptor"}),"\uff0c",(0,r.jsx)(t.code,{children:"SaveChangesInterceptor"}),"\u3002"]})]}),"\n",(0,r.jsxs)(t.h3,{id:"91021-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93-nuget-\u5305",children:["9.10.2.1 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93 ",(0,r.jsx)(t.code,{children:"NuGet"})," \u5305"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"MSSQL"}),"\uff1a",(0,r.jsx)(t.code,{children:"Zack.EFCore.Batch.MSSQL"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"MySql"}),"\uff1a",(0,r.jsx)(t.code,{children:"Zack.EFCore.Batch.MySQL.Pomelo"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Npgsql"}),"\uff1a",(0,r.jsx)(t.code,{children:"Zack.EFCore.Batch.Npgsql"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Oracle"}),"\uff1a",(0,r.jsx)(t.code,{children:"Zack.EFCore.Batch.Oracle"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Sqlite"}),"\uff1a",(0,r.jsx)(t.code,{children:"Zack.EFCore.Batch.Sqlite"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"91022-\u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",children:"9.10.2.2 \u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers  {3,5}",children:"services.AddDatabaseAccessor(options =>\r\n{\r\n    options.AddDbPool<DefaultDbContext>(providerName: default, optionBuilder: (services, opt) => // \u5982\u679c\u662f v3.7.11 \u4e4b\u524d\uff0c\u4f7f\u7528 opt =>\r\n    {\r\n        opt.UseBatchEF_Sqlite();    // SQlite \u6570\u636e\u5e93\u5305\r\n    });\r\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"91023-\u57fa\u672c\u4f7f\u7528",children:"9.10.2.3 \u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6279\u91cf\u66f4\u65b0\r\nawait repository.Context.BatchUpdate<Book>()\r\n    .Set(b => b.Price, b => b.Price + 3)\r\n    .Set(b => b.Title, b => s)\r\n    .Set(b => b.AuthorName,b=>b.Title.Substring(3,2)+b.AuthorName.ToUpper())\r\n    .Set(b => b.PubTime, b => DateTime.Now)\r\n    .Where(b => b.Id > n || b.AuthorName.StartsWith("Zack"))\r\n    .ExecuteAsync();\r\n\r\n// \u6279\u91cf\u5220\u9664\r\nawait repository.Context.DeleteRangeAsync<Book>(b => b.Price > n || b.AuthorName == "zack yang");\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"9103-efcorebulkextensions-\u4f7f\u7528",children:["9.10.3 ",(0,r.jsx)(t.code,{children:"EFCore.BulkExtensions"})," \u4f7f\u7528"]}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"NuGet"})," \u5b89\u88c5 ",(0,r.jsx)(t.code,{children:"EFCore.BulkExtensions"})," \u5305\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"91031-\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",children:"9.10.3.1 \u5e38\u89c1\u6279\u91cf\u64cd\u4f5c"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u6279\u91cf\u63d2\u5165\r\nrepository.Context.BulkInsert(entitiesList);\r\nrepository.Context.BulkInsertAsync(entitiesList);\r\n\r\n// \u6279\u91cf\u66f4\u65b0\r\nrepository.Context.BulkUpdate(entitiesList);\r\nrepository.Context.BulkUpdateAsync(entitiesList);\r\n\r\n// \u6279\u91cf\u5220\u9664\r\nrepository.Context.BulkDelete(entitiesList);\r\nrepository.Context.BulkDeleteAsync(entitiesList);\r\n\r\n// \u6279\u91cf\u63d2\u5165\u6216\u66f4\u65b0\r\nrepository.Context.BulkInsertOrUpdate(entitiesList);\r\nrepository.Context.BulkInsertOrUpdateAsync(entitiesList);\r\n\r\n// \u6279\u91cf\u63d2\u5165\u6216\u66f4\u65b0\u6216\u5220\u9664\r\nrepository.Context.BulkInsertOrUpdateOrDelete(entitiesList);\r\nrepository.Context.BulkInsertOrUpdateOrDeleteAsync(entitiesList);\r\n\r\n// \u6279\u91cf\u8bfb\u53d6\u591a\u4e2a\u5b9e\u4f53\r\nrepository.Context.BulkRead(entitiesList);\r\nrepository.Context.BulkReadAsync(entitiesList);\r\n\r\n// \u6279\u91cf\u6e05\u7a7a\u8868\uff08\u614e\u7528\uff01\uff01\uff01\uff01\uff01\uff09\r\nrepository.Context.Truncate<Entity>();\r\nrepository.Context.TruncateAsync<Entity>();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"91032-\u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",children:"9.10.3.2 \u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6839\u636e\u6761\u4ef6\u6279\u91cf\u5220\u9664\r\nrepository.Where(a => a.ItemId >  500).BatchDelete();\r\nawait repository.Where(a => a.ItemId >  500).BatchDeleteAsync();\r\n\r\n// \u6839\u636e\u6761\u4ef6\u6279\u91cf\u66f4\u65b0\r\nrepository.Where(a => a.ItemId <= 500).BatchUpdate(a => new Item { Quantity = a.Quantity + 100 });\r\nrepository.Where(a => a.ItemId <= 500).BatchUpdate(new Item { Description = "Updated" });\r\nawait repository.Where(a => a.ItemId <= 500).BatchUpdateAsync(new Item { Description = "Updated" });\r\n\r\n// \u6279\u91cf\u66f4\u65b0\u6307\u5b9a\u5217\r\nvar updateColumns = new List<string> { nameof(Item.Quantity) };\r\nvar q = repository.Where(a => a.ItemId <= 500);\r\nint affected = q.BatchUpdate(new Item { Description = "Updated" }, updateColumns);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"91033-\u6279\u91cf\u64cd\u4f5c\u6027\u80fd",children:"9.10.3.3 \u6279\u91cf\u64cd\u4f5c\u6027\u80fd"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operations\\Rows"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"100,000 EF"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"100,000 EFBulk"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"1,000,000 EFBulk"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Insert"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"38.98 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"2.10 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"17.99 s"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Update"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"109.25 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"3.96 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"31.45 s"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Delete"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"7.26 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"2.04 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"12.18 s"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-----------------"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"------------"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"----------------"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"------------------"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Together"})}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"70.70 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"5.88 s"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"56.84 s"})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"9104-efcore-7-\u5185\u7f6e\u6279\u91cf\u64cd\u4f5c",children:["9.10.4 ",(0,r.jsx)(t.code,{children:"EFCore 7"})," \u5185\u7f6e\u6279\u91cf\u64cd\u4f5c"]}),"\n",(0,r.jsx)(t.admonition,{title:"\u975e\u5fae\u8f6f\u652f\u6301\u6570\u636e\u5e93\u9002\u914d\u95ee\u9898",type:"caution",children:(0,r.jsxs)(t.p,{children:["\u5982\u679c\u4f7f\u7528\u7684\u662f\u975e\u5fae\u8f6f\u652f\u6301\u7684\u6570\u636e\u5e93\uff0c\u5982 ",(0,r.jsx)(t.code,{children:"Oracle"}),"\uff0c",(0,r.jsx)(t.code,{children:"MySQL"}),"\uff0c",(0,r.jsx)(t.code,{children:"PostgreSQL"})," \u7b49\uff0c\u53ef\u80fd\u9002\u914d ",(0,r.jsx)(t.code,{children:"EFCore 7"})," \u4e0d\u53ca\u65f6\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230\u65b9\u6cd5\u5f02\u5e38\u3002"]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/zh-cn/ef/core/what-is-new/ef-core-7.0/whatsnew#executeupdate-and-executedelete-bulk-updates",children:"https://docs.microsoft.com/zh-cn/ef/core/what-is-new/ef-core-7.0/whatsnew#executeupdate-and-executedelete-bulk-updates"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers {2,7}",children:'// \u6279\u91cf\u5220\u9664\r\nawait repository.Entities.ExecuteDeleteAsync();\r\nawait repository.Entities.Where(t => t.Text.Contains(".NET")).ExecuteDeleteAsync();\r\nawait repository.Entities.Where(t => t.Posts.All(e => e.PublishedOn.Year < 2022)).ExecuteDeleteAsync();\r\n\r\n// \u6279\u91cf\u66f4\u65b0\r\nawait repository.Entities.ExecuteUpdateAsync(\r\n    s => s.SetProperty(b => b.Name, b => b.Name + " *Featured!*"));\r\n\r\nawait repository.Entities\r\n    .Where(p => p.PublishedOn.Year < 2022)\r\n    .ExecuteUpdateAsync(s => s\r\n        .SetProperty(b => b.Title, b => b.Title + " (" + b.PublishedOn.Year + ")")\r\n        .SetProperty(b => b.Content, b => b.Content + " ( This content was published in " + b.PublishedOn.Year + ")"));\r\n\r\nawait repository.Entities\r\n    .Where(t => t.Posts.All(e => e.PublishedOn.Year < 2022))\r\n    .ExecuteUpdateAsync(s => s.SetProperty(t => t.Text, t => t.Text + " (old)"));\n'})}),"\n",(0,r.jsx)(t.h2,{id:"9105-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.10.5 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(t.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(t.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(t.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.admonition,{title:"\u4e86\u89e3\u66f4\u591a",type:"note",children:(0,r.jsxs)(t.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.jsx)(t.code,{children:"EFCore.BulkExtensions"})," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.jsx)(t.a,{href:"https://github.com/borisdj/EFCore.BulkExtensions",children:"EFCore.BulkExtensions \u5f00\u6e90\u4ed3\u5e93"}),"\u3002"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);