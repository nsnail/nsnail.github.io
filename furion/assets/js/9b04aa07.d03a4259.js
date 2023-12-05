"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6521],{6861:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(5893),a=r(1151);const s={id:"dbcontext-audit",title:"9.23 \u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"9.23 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},i=void 0,d={id:"dbcontext-audit",title:"9.23 \u5ba1\u8ba1\u65e5\u5fd7",description:"9.23.1 \u5ba1\u8ba1\u65e5\u5fd7",source:"@site/docs/dbcontext-audit.mdx",sourceDirName:".",slug:"/dbcontext-audit",permalink:"/furion/docs/dbcontext-audit",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-audit.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"dbcontext-audit",title:"9.23 \u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"9.23 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},sidebar:"docs",previous:{title:"9.22 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",permalink:"/furion/docs/dbcontext-seed-data"},next:{title:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",permalink:"/furion/docs/dbcontext-filter"}},o={},l=[{value:"9.23.1 \u5ba1\u8ba1\u65e5\u5fd7",id:"9231-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"9.23.2 \u5173\u4e8e <code>SaveChanges</code> \u4e8b\u4ef6",id:"9232-\u5173\u4e8e-savechanges-\u4e8b\u4ef6",level:2},{value:"9.23.3 \u5982\u4f55\u5b9e\u73b0",id:"9233-\u5982\u4f55\u5b9e\u73b0",level:2},{value:"9.23.3.1 \u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",id:"92331-\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"9.23.3.2 \u6267\u884c <code>sql</code> \u5ba1\u8ba1\u65e5\u5fd7",id:"92332-\u6267\u884c-sql-\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"9.23.3.3 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",id:"92333-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"9.23.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9234-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"9231-\u5ba1\u8ba1\u65e5\u5fd7",children:"9.23.1 \u5ba1\u8ba1\u65e5\u5fd7"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e00\u4e2a\u4f01\u4e1a\u5e94\u7528\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u5bf9\u7cfb\u7edf\u6240\u6709\u7684\u64cd\u4f5c\u5305\u62ec\u8bf7\u6c42\u3001\u6570\u636e\u5e93\u64cd\u4f5c\u7b49\u7b49\u90fd\u5e94\u8be5\u8bb0\u5f55\u8d77\u6765\uff0c\u90a3\u4e48\u8fd9\u4e9b\u65e5\u5fd7\u6211\u4eec\u79f0\u4e3a\u64cd\u4f5c\u65e5\u5fd7\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u5ba1\u8ba1\u65e5\u5fd7\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u901a\u5e38\u6765\u8bf4\uff0c\u6211\u4eec\u5ba1\u8ba1\u65e5\u5fd7\u66f4\u591a\u6307\u7684\u662f\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u8bb0\u5f55"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5ba1\u8ba1\u65e5\u5fd7\u4e00\u822c\u4f1a\u8bb0\u5f55\u4ee5\u4e0b\u4e09\u4e2a\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u65b0\u589e\u64cd\u4f5c"}),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u65b0\u589e\u4e86\u4ec0\u4e48\u6570\u636e"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u66f4\u65b0\u64cd\u4f5c"}),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u7684\u54ea\u4e9b\u6570\u636e\u505a\u4e86\u66f4\u6539\uff0c\u8bb0\u5f55\u66f4\u6539\u524d\u7684\u503c\u548c\u66f4\u6539\u540e\u7684\u503c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u5220\u9664\u64cd\u4f5c"}),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u5220\u9664\u4e86\u4ec0\u4e48\u6570\u636e"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"9232-\u5173\u4e8e-savechanges-\u4e8b\u4ef6",children:["9.23.2 \u5173\u4e8e ",(0,t.jsx)(n.code,{children:"SaveChanges"})," \u4e8b\u4ef6"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e2d\u4e3a\u6240\u6709 ",(0,t.jsx)(n.code,{children:"AppDbContext"})," \u5b50\u7c7b\u90fd\u63d0\u4f9b\u4e86\u4e09\u4e2a\u53ef\u91cd\u5199\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5206\u522b\u7531\u4e09\u4e2a\u4e8b\u4ef6\u89e6\u53d1\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u63d0\u4ea4\u66f4\u6539\u4e4b\u524d SavingChanges \u4e8b\u4ef6"}),"\uff1a\u89e6\u53d1 ",(0,t.jsx)(n.code,{children:"void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)"})," \u65b9\u6cd5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u63d0\u4ea4\u66f4\u6539\u4e4b\u540e SavedChanges \u4e8b\u4ef6"}),"\uff1a\u89e6\u53d1 ",(0,t.jsx)(n.code,{children:"void SavedChangesEvent(SaveChangesCompletedEventData eventData, int result)"})," \u65b9\u6cd5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u63d0\u4ea4\u66f4\u6539\u5931\u8d25 SaveChangesFailed \u4e8b\u4ef6"}),"\uff1a\u89e6\u53d1 ",(0,t.jsx)(n.code,{children:"void SaveChangesFailedEvent(DbContextErrorEventData eventData)"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e09\u4e2a\u4e8b\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u6355\u83b7\u6240\u6709\u66f4\u6539\u7684\u5b9e\u4f53\u7136\u540e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"9233-\u5982\u4f55\u5b9e\u73b0",children:"9.23.3 \u5982\u4f55\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.h3,{id:"92331-\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",children:"9.23.3.1 \u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ea\u9700\u8981\u5728 ",(0,t.jsx)(n.code,{children:"AppDbContext"})," \u5b50\u7c7b\u4e2d\u91cd\u5199 ",(0,t.jsx)(n.code,{children:"SavingChanges"})," \u4e8b\u4ef6\u5bf9\u5e94\u65b9\u6cd5\u5373\u53ef\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {23}",children:'using Furion.DatabaseAccessor;\r\nusing Microsoft.AspNetCore.Http;\r\nusing Microsoft.EntityFrameworkCore;\r\nusing Microsoft.EntityFrameworkCore.Infrastructure;\r\nusing System;\r\nusing System.Linq;\r\nusing System.Security.AccessControl;\r\n\r\nnamespace Furion.EntityFramework.Core\r\n{\r\n    [AppDbContext("Sqlite3ConnectionString")]\r\n    public class FurionDbContext : AppDbContext<FurionDbContext>\r\n    {\r\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\r\n        {\r\n        }\r\n\r\n        /// <summary>\r\n        /// \u91cd\u5199\u4fdd\u5b58\u4e4b\u524d\u4e8b\u4ef6\r\n        /// </summary>\r\n        /// <param name="sender"></param>\r\n        /// <param name="e"></param>\r\n        protected override void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)\r\n        {\r\n            // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\r\n            var dbContext = eventData.Context;\r\n\r\n            // \u5f3a\u5236\u91cd\u65b0\u68c0\u67e5\u4e00\u8fb9\u5b9e\u4f53\u66f4\u6539\u4fe1\u606f\r\n            // dbContext.ChangeTracker.DetectChanges();\r\n\r\n            // \u83b7\u53d6\u6240\u6709\u66f4\u6539\uff0c\u5220\u9664\uff0c\u65b0\u589e\u7684\u5b9e\u4f53\uff0c\u4f46\u6392\u9664\u5ba1\u8ba1\u5b9e\u4f53\uff08\u907f\u514d\u6b7b\u5faa\u73af\uff09\r\n            var entities = dbContext.ChangeTracker.Entries()\r\n                .Where(u => u.Entity.GetType() != typeof(Audit) && (u.State == EntityState.Modified || u.State == EntityState.Deleted || u.State == EntityState.Added))\r\n                .ToList();\r\n\r\n            // \u901a\u8fc7\u8bf7\u6c42\u4e2d\u83b7\u53d6\u5f53\u524d\u64cd\u4f5c\u4eba\r\n            var userId = App.GetService<IHttpContextAccessor>().HttpContext.Items["UserId"];\r\n\r\n            // \u83b7\u53d6\u6240\u6709\u5df2\u66f4\u6539\u7684\u5b9e\u4f53\r\n            foreach (var entity in entities)\r\n            {\r\n                // \u83b7\u53d6\u5b9e\u4f53\u7c7b\u578b\r\n                var entityType = entity.Entity.GetType();\r\n\r\n                // \u83b7\u53d6\u6240\u6709\u5b9e\u4f53\u6709\u6548\u5c5e\u6027\uff0c\u6392\u9664 [NotMapper] \u5c5e\u6027\r\n                var props = entity.OriginalValues.Properties;\r\n\r\n                // \u83b7\u53d6\u5b9e\u4f53\u5f53\u524d\uff08\u73b0\u5728\uff09\u7684\u503c\r\n                var currentValues = entity.CurrentValues;\r\n\r\n                // \u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u5b9e\u4f53\u7684\u503c\r\n                var databaseValues = entity.GetDatabaseValues();\r\n\r\n                // \u904d\u5386\u6240\u6709\u5c5e\u6027\r\n                foreach (var prop in props)\r\n                {\r\n                    // \u83b7\u53d6\u5c5e\u6027\u540d\r\n                    var propName = prop.Name;\r\n\r\n                    // \u83b7\u53d6\u73b0\u5728\u7684\u5b9e\u4f53\u503c\r\n                    var newValue = currentValues[propName];\r\n\r\n                    object oldValue = null;\r\n                    // \u5982\u679c\u662f\u65b0\u589e\u6570\u636e\uff0c\u5219 databaseValues \u4e3a\u7a7a\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\u4e00\u4e0b\r\n                    if (databaseValues != null)\r\n                    {\r\n                        oldValue = databaseValues[propName];\r\n                    }\r\n\r\n                    // \u63d2\u5165\u5ba1\u8ba1\u65e5\u5fd7\u8868\uff0cAudit \u662f\u4f60\u81ea\u5b9a\u4e49\u7684\u5b9e\u4f53\r\n                    dbContext.Set<Audit>().Add(new Audit\r\n                    {\r\n                        Table = entityType.Name,    // \u8868\u540d\r\n                        Column = propName,  // \u66f4\u65b0\u7684\u5217\r\n                        NewValue = newValue,    // \u65b0\u503c\r\n                        OldValue = oldValue,    // \u65e7\u503c\r\n                        CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\r\n                        UserId = userId,    // \u64cd\u4f5c\u4eba\r\n                        Operate = entity.State.ToString()  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u6027\u80fd\u6709\u6240\u8981\u6c42\uff0c\u90a3\u4e48\u5efa\u8bae\u5ba1\u8ba1\u65e5\u5fd7\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"\u65e5\u5fd7\u7ec4\u4ef6"})," \u5199\u5165\u6570\u636e\u5e93\uff0c\u5982\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Nlog\u3001Log4Net"})," \u8fd9\u4e9b\u7b49\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u63d2\u5165\u5ba1\u8ba1\u65e5\u5fd7\u8868\r\ndbContext.Set<Audit>().Add(new Audit\r\n{\r\n    Table = entityType.Name,    // \u8868\u540d\r\n    Column = propName,  // \u66f4\u65b0\u7684\u5217\r\n    newValue = newValue,    // \u65b0\u503c\r\n    OldValue = oldValue,    // \u65e7\u503c\r\n    CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\r\n    UserId = userId,    // \u64cd\u4f5c\u4eba\r\n    Operate = entity.State.ToString()  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\r\n});\n"})}),(0,t.jsx)(n.p,{children:"\u66ff\u6362\u4e3a\uff1a"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"logger.Information(JsonConvert.SerializeObject(new Audit\r\n{\r\n    Table = entityType.Name,    // \u8868\u540d\r\n    Column = propName,  // \u66f4\u65b0\u7684\u5217\r\n    newValue = newValue,    // \u65b0\u503c\r\n    OldValue = oldValue,    // \u65e7\u503c\r\n    CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\r\n    UserId = userId,    // \u64cd\u4f5c\u4eba\r\n    Operate = entity.State.ToString()  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\r\n}));\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5bf9\u6570\u636e\u5e93\u6240\u6709\u7684\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\u8fdb\u884c\u76d1\u63a7\u4e86\u3002"}),"\n",(0,t.jsxs)(n.h3,{id:"92332-\u6267\u884c-sql-\u5ba1\u8ba1\u65e5\u5fd7",children:["9.23.3.2 \u6267\u884c ",(0,t.jsx)(n.code,{children:"sql"})," \u5ba1\u8ba1\u65e5\u5fd7"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3b\u8981\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"DbCommandInterceptor"})," \u62e6\u622a\u5b9e\u73b0\uff0c\u5177\u4f53\u4f7f\u7528\u53ef\u67e5\u770b ",(0,t.jsx)(n.a,{href:"./dbcontext-Interceptor#92422-dbcommandinterceptor",children:"\u6570\u636e\u5e93\u62e6\u622a\u5668 - DbCommandInterceptor"}),"\uff0c\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {11}",children:"using Microsoft.EntityFrameworkCore.Diagnostics;\r\nusing System.Data.Common;\r\nusing System.Threading;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.Web.Core\r\n{\r\n    /// <summary>\r\n    /// \u6267\u884c sql \u5ba1\u8ba1\r\n    /// </summary>\r\n    public sealed class SqlCommandAuditInterceptor : DbCommandInterceptor\r\n    {\r\n        public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)\r\n        {\r\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u8bed\u53e5\r\n            var sql = command.CommandText;\r\n\r\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u7c7b\u578b\uff0c\u662f sql \u8bed\u53e5\uff0c\u8fd8\u662f\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd8\u662f\u5176\u4ed6\r\n            var type = command.CommandType;\r\n\r\n            // \u83b7\u53d6 sql \u4f20\u9012\u7684\u547d\u4ee4\u53c2\u6570\r\n            var parameters = command.Parameters;\r\n\r\n            // \u5199\u65e5\u5fd7~~~~\r\n\r\n            return base.NonQueryExecuting(command, eventData, result);\r\n        }\r\n\r\n        public override ValueTask<InterceptionResult<int>> NonQueryExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\r\n        {\r\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u8bed\u53e5\r\n            var sql = command.CommandText;\r\n\r\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u7c7b\u578b\uff0c\u662f sql \u8bed\u53e5\uff0c\u8fd8\u662f\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd8\u662f\u5176\u4ed6\r\n            var type = command.CommandType;\r\n\r\n            // \u83b7\u53d6 sql \u4f20\u9012\u7684\u547d\u4ee4\u53c2\u6570\r\n            var parameters = command.Parameters;\r\n\r\n            // \u5199\u65e5\u5fd7~~~~\r\n\r\n            return base.NonQueryExecutingAsync(command, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u5176\u4ed6 override\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6ce8\u518c\u5ba1\u8ba1\u65e5\u5fd7"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u5728\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u6307\u5b9a ",(0,t.jsx)(n.code,{children:"interceptors"})," \u53c2\u6570\u5373\u53ef"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// services.AddDb \u4e00\u6837\r\nservices.AddDbPool<FurionDbContext>(interceptors: new IInterceptor[] {\r\n    new SqlCommandAuditInterceptor()\r\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"92333-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",children:"9.23.3.3 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"}),"\n",(0,t.jsx)(n.admonition,{title:"\u5173\u4e8e\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5982\u9700\u5b9e\u73b0\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u53ef\u67e5\u9605 \u3010",(0,t.jsx)(n.a,{href:"/furion/docs/audit",children:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u7ae0\u8282"}),"\u3011"]})}),"\n",(0,t.jsx)(n.h2,{id:"9234-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.23.4 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,t.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,t.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,t.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);