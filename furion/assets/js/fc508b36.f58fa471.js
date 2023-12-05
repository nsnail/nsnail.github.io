"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8429],{981:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=s(5893),i=s(1151),c=s(510);const t={id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6"},l=void 0,d={id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",description:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7",source:"@site/docs/encryption.mdx",sourceDirName:".",slug:"/encryption",permalink:"/furion/docs/encryption",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/encryption.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6"},sidebar:"docs",previous:{title:"19. \u8fdc\u7a0b\u8bf7\u6c42 (HttpClient)",permalink:"/furion/docs/http"},next:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316\uff08\u591a\u8bed\u8a00\uff09",permalink:"/furion/docs/local-language"}},o={},a=[{value:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",id:"201-\u6570\u636e\u52a0\u89e3\u5bc6",level:2},{value:"20.2 \u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",id:"202-\u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",level:2},{value:"20.3 \u52a0\u89e3\u5bc6\u4f7f\u7528",id:"203-\u52a0\u89e3\u5bc6\u4f7f\u7528",level:2},{value:"20.3.1 <code>MD5</code> \u52a0\u5bc6",id:"2031-md5-\u52a0\u5bc6",level:3},{value:"20.3.2 <code>DESC</code> \u52a0\u89e3\u5bc6",id:"2032-desc-\u52a0\u89e3\u5bc6",level:3},{value:"20.3.3 <code>AES</code> \u52a0\u89e3\u5bc6",id:"2033-aes-\u52a0\u89e3\u5bc6",level:3},{value:"20.3.4 <code>JWT</code> \u52a0\u89e3\u5bc6",id:"2034-jwt-\u52a0\u89e3\u5bc6",level:3},{value:"20.3.5 <code>PBKDF2</code> \u52a0\u5bc6",id:"2035-pbkdf2-\u52a0\u5bc6",level:3},{value:"20.3.6 <code>RSA</code> \u52a0\u5bc6",id:"2036-rsa-\u52a0\u5bc6",level:3},{value:"20.4 \u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",id:"204-\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",level:2},{value:"20.5 <code>SM2</code>\u3001<code>SM3</code>\uff0c<code>SM4</code> \u56fd\u5bc6",id:"205-sm2sm3sm4-\u56fd\u5bc6",level:2},{value:"20.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"206-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7"}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b0\u7279\u6027"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xa0",(0,r.jsx)(c.Z,{children:"\u65b0\u589e"})," ",(0,r.jsx)(n.code,{children:"AES"})," \u652f\u6301\u5bf9\u6587\u4ef6\uff08\u542b\u8d85\u5927\u6587\u4ef6\uff09\u8fdb\u884c\u52a0\u89e3\u5bc6 ",(0,r.jsx)("sup",{children:"4.8.8.11"})," ",(0,r.jsx)("sup",{children:"\u23f1\ufe0f2023.05.05"})," ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/1d2265be04cfd7c6c2b9db932a77ebd620ef6054",children:"1d2265b"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xa0",(0,r.jsx)(c.Z,{children:"\u65b0\u589e"})," ",(0,r.jsx)(n.code,{children:"RSA"})," \u652f\u6301\u5bf9\u8d85\u957f\u5b57\u7b26\uff08\u8d85 ",(0,r.jsx)(n.code,{children:"245"})," \u4f4d\uff09\u8fdb\u884c\u5206\u6bb5\u52a0\u89e3\u5bc6 ",(0,r.jsx)("sup",{children:"4.8.8.2"})," ",(0,r.jsx)("sup",{children:"\u23f1\ufe0f2023.04.19"})," ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/pulls/788",children:"!788"})," \u611f\u8c22 ",(0,r.jsx)(n.a,{href:"https://gitee.com/YaChengMu",children:"@YaChengMu"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xa0",(0,r.jsx)(c.Z,{children:"\u65b0\u589e"})," ",(0,r.jsx)(n.code,{children:"byte[]"})," \u7c7b\u578b ",(0,r.jsx)(n.code,{children:"MD5"})," \u52a0\u5bc6/\u6bd4\u8f83\u91cd\u8f7d\u65b9\u6cd5 ",(0,r.jsx)("sup",{children:"4.8.6.3"})," ",(0,r.jsx)("sup",{children:"\u23f1\ufe0f2023.02.15"})," ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/I6F1NT",children:"#I6F1NT"})]}),"\n"]}),"\n"]}),"\n"]})})})]}),"\n",(0,r.jsx)(n.h2,{id:"201-\u6570\u636e\u52a0\u89e3\u5bc6",children:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u73b0\u5728\u7684\u4e92\u8054\u7f51\u8d8a\u5177\u53d1\u8fbe\uff0c\u6570\u636e\u6210\u4e3a\u4e86\u6211\u4eec\u751f\u6d3b\u7684\u4e00\u90e8\u5206\uff0c\u5f53\u7136\u4e5f\u5e26\u6765\u4e86\u5f88\u591a\u6570\u636e\u5b89\u5168\u6027\u7684\u95ee\u9898\uff0c\u6bd4\u5982\u7528\u6237\u5bc6\u7801\u660e\u6587\u5b58\u50a8\uff0c\u7528\u6237\u4fe1\u606f\u660e\u6587\u5b58\u5728\u5728\u6d4f\u89c8\u5668 ",(0,r.jsx)(n.code,{children:"cookies"})," \u4e2d\u7b49\u7b49\u4e0d\u5b89\u5168\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u5bf9\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u662f\u7cfb\u7edf\u5f00\u53d1\u5fc5\u8981\u7684\u73af\u8282\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"202-\u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",children:"20.2 \u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MD5"})," \u52a0\u5bc6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DESC"})," \u52a0\u89e3\u5bc6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AES"})," \u52a0\u89e3\u5bc6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"JWT"})," \u52a0\u89e3\u5bc6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PBKDF2"})," \u52a0\u5bc6\uff08",(0,r.jsx)(n.code,{children:"Furion v2.12 +"})," \u7248\u672c\u5df2\u79fb\u9664\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RSA"})," \u52a0\u89e3\u5bc6"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"203-\u52a0\u89e3\u5bc6\u4f7f\u7528",children:"20.3 \u52a0\u89e3\u5bc6\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.h3,{id:"2031-md5-\u52a0\u5bc6",children:["20.3.1 ",(0,r.jsx)(n.code,{children:"MD5"})," \u52a0\u5bc6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6d4b\u8bd5 MD5 \u52a0\u5bc6\uff0c\u6bd4\u8f83\r\nvar md5Hash = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\r\nvar isEqual = MD5Encryption.Compare("\u767e\u5c0f\u50e7", md5Hash); // \u6bd4\u8f83\r\nreturn (md5Hash, isEqual);\r\n\r\n// \u8f93\u51fa\u5927\u5199 MD5 \u52a0\u5bc6\r\nvar md5Hash = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7", true);\r\n\r\n// \u8f93\u51fa 16\u4f4d MD5 \u52a0\u5bc6\uff0cFurion 4.2.6+ \u7248\u672c\r\nvar md5Hash16 = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7", is16: true);\r\n\r\n// Furion 4.8.6.3+ \u7248\u672c\u652f\u6301 byte[] \u7c7b\u578b\uff0c\u5982\u83b7\u53d6\u6587\u4ef6 MD5 Hash\r\nvar bytes = File.ReadAllBytes("image.png");\r\nvar md5Hash = MD5Encryption.Encrypt(bytes); // \u52a0\u5bc6\r\nvar isEqual = MD5Encryption.Compare(bytes, md5Hash);  // \u6bd4\u8f83\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2032-desc-\u52a0\u89e3\u5bc6",children:["20.3.2 ",(0,r.jsx)(n.code,{children:"DESC"})," \u52a0\u89e3\u5bc6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6d4b\u8bd5 DESC \u52a0\u89e3\u5bc6\r\nvar descHash = DESCEncryption.Encrypt("\u767e\u5c0f\u50e7", "Furion"); // \u52a0\u5bc6\r\nvar str = DESCEncryption.Decrypt(descHash, "Furion");  // \u89e3\u5bc6\r\nreturn (descHash, str);\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2033-aes-\u52a0\u89e3\u5bc6",children:["20.3.3 ",(0,r.jsx)(n.code,{children:"AES"})," \u52a0\u89e3\u5bc6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6d4b\u8bd5 AES \u52a0\u89e3\u5bc6\r\nvar key = Guid.NewGuid().ToString("N"); // \u5bc6\u94a5\uff0c\u957f\u5ea6\u5fc5\u987b\u4e3a24\u4f4d\u621632\u4f4d\r\n\r\nvar aesHash = AESEncryption.Encrypt("\u767e\u5c0f\u50e7", key); // \u52a0\u5bc6\r\nvar str2 = AESEncryption.Decrypt(aesHash, key); // \u89e3\u5bc6\r\nreturn (aesHash, str2);\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.jsx)(n.code,{children:"Furion 4.8.8.11 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u5bf9\u6587\u4ef6\uff08\u542b\u8d85\u5927\u6587\u4ef6\uff09\u8fdb\u884c\u52a0\u89e3\u5bc6"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {3,8}",children:'// \u52a0\u5bc6\r\nvar originBytes = File.ReadAllBytes("xxx.rar"); // \u8bfb\u53d6\u6e90\u6587\u4ef6\u5185\u5bb9\r\nvar encryptBytes = AESEncryption.Encrypt(originBytes, "123456");\r\n// \u53ef\u4ee5\u901a\u8fc7 encryptBytes.CopyToSave("xxx.\u52a0\u5bc6.rar");   \u4fdd\u5b58\u5230\u78c1\u76d8\r\n\r\n// \u89e3\u5bc6\r\nvar encryptBytes = File.ReadAllBytes("xxx.\u52a0\u5bc6.rar"); // \u8bfb\u53d6\u52a0\u5bc6\u6587\u4ef6\u5185\u5bb9\r\nvar originBytes = AESEncryption.Decrypt(encryptBytes, "123456");\r\n// \u53ef\u4ee5\u901a\u8fc7 originBytes.CopyToSave("xxx.\u771f\u5b9e.rar");   \u4fdd\u5b58\u5230\u78c1\u76d8\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2034-jwt-\u52a0\u89e3\u5bc6",children:["20.3.4 ",(0,r.jsx)(n.code,{children:"JWT"})," \u52a0\u89e3\u5bc6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var token = JWTEncryption.Encrypt(new Dictionary<string, object>()  // \u52a0\u5bc6\r\n            {\r\n                { "UserId", user.Id },\r\n                { "Account",user.Account }\r\n            });\r\n\r\nvar tokenData = JWTEncryption.ReadJwtToken("\u4f60\u7684token");  // \u89e3\u5bc6\r\n\r\nvar (isValid, tokenData, validationResult) = JWTEncryption.Validate("\u4f60\u7684token"); // \u9a8c\u8bc1token\u6709\u6548\u671f\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"important",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"JWTEncryption"})," \u52a0\u89e3\u5bc6\u5e76\u672a\u5305\u542b\u5728 ",(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e2d\uff0c\u9700\u8981\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u7684 ",(0,r.jsx)(n.code,{children:"Furion.Extras.Authentication.JwtBearer"})," \u62d3\u5c55\u5305\u3002"]})}),"\n",(0,r.jsxs)(n.h3,{id:"2035-pbkdf2-\u52a0\u5bc6",children:["20.3.5 ",(0,r.jsx)(n.code,{children:"PBKDF2"})," \u52a0\u5bc6"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"Furion v2.12 +"})," \u7248\u672c\u5df2\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6d4b\u8bd5 PBKDF2 \u52a0\u5bc6\uff0c\u6bd4\u8f83\r\nvar basestring = PBKDF2Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\r\nvar isEqual = PBKDF2Encryption.Compare("\u767e\u5c0f\u50e7", basestring); // \u6bd4\u8f83\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u652f\u6301\u9009\u62e9\u66f4\u591a\u53c2\u6570",type:"important",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PBKDF2"})," \u8fd8\u53ef\u4ee5\u914d\u7f6e\u66f4\u591a\u53c2\u6570\uff1a"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Startup.cs"})," \u4e2d\u6ce8\u518c\u670d\u52a1"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"services.AddPBKDF2EncryptionOptions();\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"appsettings.json"})," \u914d\u7f6e\uff1a"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "PBKDF2EncryptionSettings": {\r\n    "InitialIterationCount": 110, // \u521d\u59cb\u8fed\u4ee3\u6b21\u6570\u7d2f\u52a0\u503c\r\n    "KeyDerivation": "HMACSHA256", // \u52a0\u5bc6\u7b97\u6cd5\u89c4\u5219  KeyDerivationPrf.HMACSHA256\r\n    "NumBytesRequested": 64 // \u6d3e\u751f\u5bc6\u94a5\u7684\u957f\u5ea6 (\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d) 512 / 8\r\n  }\r\n}\n'})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"KeyDerivation"})," \u53ef\u9009\u503c\u6709\uff1a",(0,r.jsx)(n.code,{children:"HMACSHA1"}),"\uff0c",(0,r.jsx)(n.code,{children:"HMACSHA256"}),"\uff0c",(0,r.jsx)(n.code,{children:"HMACSHA512"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"2036-rsa-\u52a0\u5bc6",children:["20.3.6 ",(0,r.jsx)(n.code,{children:"RSA"})," \u52a0\u5bc6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6d4b\u8bd5 RSA \u52a0\u5bc6\r\nvar (publicKey, privateKey) = RSAEncryption.GenerateSecretKey(2048);  //\u751f\u6210 RSA \u79d8\u94a5 \u79d8\u94a5\u5927\u5c0f\u5fc5\u987b\u4e3a 2048 \u5230 16384\uff0c\u5e76\u4e14\u662f 8 \u7684\u500d\u6570\r\nvar basestring = RSAEncryption.Encrypt("\u767e\u5c0f\u50e7", publicKey);  // \u52a0\u5bc6\r\nvar str2 = RSAEncryption.Decrypt(basestring, privateKey); // \u89e3\u5bc6\r\nreturn (basestring, str2);\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["\u5173\u4e8e ",(0,r.jsx)(n.code,{children:"RSA"})," \u7b7e\u540d\u548c\u6821\u9a8c"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u5e95\u5c42\u4e0d\u5185\u7f6e ",(0,r.jsx)(n.code,{children:"RSA"})," \u7b7e\u540d\u548c\u6821\u9a8c\u529f\u80fd\uff0c\u5982\u9700\u6dfb\u52a0\u8be5\u529f\u80fd\u53ef\u67e5\u9605\u5f00\u53d1\u8005\u63d0\u4ea4\u7684\u4ee3\u7801\uff1a",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/pulls/349",children:"\u67e5\u770b RSA \u7b7e\u540d\u548c\u6821\u9a8c"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"204-\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",children:"20.4 \u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f\u8fdb\u884c ",(0,r.jsx)(n.code,{children:"MD5\u52a0\u5bc6\u3001AES/DESC\u52a0\u89e3\u5bc6\u3001RSA\u52a0\u89e3\u5bc6"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'using Furion.DataEncryption.Extensions;\r\n\r\n// MD5 \u52a0\u5bc6\r\nvar s = "Furion".ToMD5Encrypt();\r\nvar b = "Furion".ToMD5Compare(s);   // \u6bd4\u8f83\r\n// Furion 4.8.6.3+ \u652f\u6301 bytes\r\nvar b = bytes.ToMD5Encrypt();\r\nvar z = bytes2.ToMD5Compare(bytes);\r\n\r\n// AES\u52a0\u89e3\u5bc6\r\nvar s = "Furion".ToAESEncrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\r\nvar str = s.ToAESDecrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\r\n\r\n// DESC \u52a0\u89e3\u5bc6\r\nvar s = "Furion".ToDESCEncrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\r\nvar str = s.ToDESCDecrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\r\n\r\n// PBKDF2 \u52a0\u5bc6\uff08`Furion v2.12 +` \u7248\u672c\u5df2\u79fb\u9664\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff09\r\nvar s = "Furion".ToPBKDF2Encrypt();\r\nvar b = "Furion".ToPBKDF2Compare(s);   // \u6bd4\u8f83\r\n\r\n// RSA \u52a0\u89e3\u5bc6\r\nvar (publicKey, privateKey) = RSAEncryption.GenerateSecretKey(2048);  //\u751f\u6210 RSA \u79d8\u94a5 \u79d8\u94a5\u5927\u5c0f\u5fc5\u987b\u4e3a 2048 \u5230 16384\uff0c\u5e76\u4e14\u662f 8 \u7684\u500d\u6570\r\nvar s= "Furion".ToRSAEncrpyt(publicKey);  // \u52a0\u5bc6\r\nvar str=s.ToRSADecrypt(privateKey);  // \u89e3\u5bc6\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"205-sm2sm3sm4-\u56fd\u5bc6",children:["20.5 ",(0,r.jsx)(n.code,{children:"SM2"}),"\u3001",(0,r.jsx)(n.code,{children:"SM3"}),"\uff0c",(0,r.jsx)(n.code,{children:"SM4"})," \u56fd\u5bc6"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u672a\u5185\u7f6e\u56fd\u5bc6\u7b97\u6cd5 ",(0,r.jsx)(n.code,{children:"SM2-4"}),"\uff0c\u4f46\u662f\u5df2\u6709\u5f00\u53d1\u8005\u8d21\u732e\u5b9e\u73b0\u5e76\u5f00\u6e90\uff0c\u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"https://gitee.com/xxcxy/SM/tree/master/GfsDemo/Smcrypto",children:"Gitee \u4ed3\u5e93"}),"\uff0c\u611f\u8c22 ",(0,r.jsx)(n.code,{children:"QQ\uff08373696184\uff09\u5f62\u5f71\u76f8\u5370\xb2\xba\xb2\xb2"})," \u8d21\u732e"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var data = "{\\"lx\\":\\"1\\",\\"wxid\\":\\"\\",\\"ehealth_code_id\\":\\"68A018036186B717CC1B051C10996F4EEE805F5F81EB1594C9EB43592545F7F6\\",\\"ehealth_code\\":\\"68A018036186B717CC1B051C10996F4EEE805F5F81EB1594C9EB43592545F7F6\\",\\"xm\\":\\"\u6d4b\u8bd5\\"}";\r\n\r\n// SM2\r\nvar b = SM2Utils.\u52a0\u5bc6("123");\r\nvar b1 = SM2Utils.\u89e3\u5bc6(b);\r\n\r\n// SM3 \u4e00\u822c\u7528\u4e8e\u6570\u5b57\u7b7e\u540d\r\nvar sM3Utils = new SM3Utils();\r\nsM3Utils.secretKey = "ASAFSDFDSGSDFSDFSDFSFSF";\r\nvar token= sM3Utils.\u52a0\u5bc6("123");\r\n\r\n// SM4\r\nvar sM4Utils = new SM4Utils();\r\nsM4Utils.secretKey = "BDBDBDBDBDBDBDBDBDBDBDBDBDBDBD";\r\n\r\nvar a = sM4Utils.\u52a0\u5bc6(data);\r\nvar a1 = sM4Utils.\u89e3\u5bc6(a);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"206-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"20.6 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},510:(e,n,s)=>{s.d(n,{Z:()=>G});s(7294);const r=(e,n,s)=>e?"string"==typeof e?e:e[n]||s:s;var i=s(5893);const c={display:"block"},t=e=>{let{size:n,color:s,style:t,...l}=e;const d=t?{...c,...t}:c;return(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:d,...l,children:(0,i.jsx)("path",{d:"M856.4 292.8c-63.3-63.6-126.6-127.1-190.2-190.3-15.3-15.2-32.7-16.1-48.1-0.8-64.3 63.6-128.1 127.6-191.8 191.9-14 14.2-16.3 31.6-1.7 46 14.8 14.7 31.5 10.6 46.1-2.7 5.1-4.6 9.8-9.7 14.7-14.7 39.2-39.7 78.5-79.5 122.8-124.4 0 170 3 332.2-1.1 494-2.4 96.4-91.2 174.6-187.4 176.6-110.6 2.3-198.6-84.4-199-197.4-0.6-136.3-0.2-272.6-0.1-408.9 0-21.8-7.9-37.4-31.2-39.9-18.9-2-33.2 13.2-33.1 37.5 0 145.8-3.4 291.7 2.4 437.2 6 152.1 160.4 263.5 309.5 230.5C591.8 900 672.8 797.2 673.6 664.6c0.8-144 0.2-288.1 0.2-432.1v-33.3c11.2 10.2 17.6 15.4 23.3 21.3 38.5 38.4 76.7 77 115.3 115.2 14.8 14.6 32.2 19.2 47.8 2.9 13.8-14.8 10.3-31.7-3.8-45.8z",fill:r(s,0,"#333333")})})};t.defaultProps={size:18};const l=t,d={display:"block"},o=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...d,...c}:d;return(0,i.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:[(0,i.jsx)("path",{d:"M143.872 768a51.2 51.2 0 0 1-15.36-2.56 51.2 51.2 0 0 1-35.328-51.2V283.136a148.992 148.992 0 0 1 141.824-153.6h450.56a148.992 148.992 0 0 1 141.824 153.6V512a148.992 148.992 0 0 1-141.824 153.6H244.224l-60.928 80.896a51.2 51.2 0 0 1-39.424 21.504zM235.008 180.224a97.792 97.792 0 0 0-90.624 102.4v430.592L218.624 614.4h466.944a97.792 97.792 0 0 0 90.624-102.4V283.136a97.792 97.792 0 0 0-90.624-102.4z",fill:r(s,0,"#333333")}),(0,i.jsx)("path",{d:"M880.128 875.52a51.2 51.2 0 0 1-39.424-20.48l-60.928-80.896h-243.2a25.6 25.6 0 0 1 0-51.2h268.8l76.288 102.4v-295.936a25.6 25.6 0 0 1 25.6-25.6 25.6 25.6 0 0 1 25.6 25.6v293.888a51.2 51.2 0 0 1-51.2 51.2z",fill:r(s,1,"#333333")})]})};o.defaultProps={size:18};const a=o,h={display:"block"},x=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...h,...c}:h;return(0,i.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:[(0,i.jsx)("path",{d:"M223.425605 449.2744l161.632237 0 0 253.65714c0 16.954137 13.745049 30.699186 30.699186 30.699186 16.95516 0 30.699186-13.745049 30.699186-30.699186l0-284.356326c0-16.95516-13.744026-30.699186-30.699186-30.699186L291.035446 387.876028l217.23665-248.51605L733.039255 387.580293 607.104031 387.580293c-16.954137 0-30.699186 13.745049-30.699186 30.699186l0 284.652062c0 16.954137 13.745049 30.699186 30.699186 30.699186s30.699186-13.745049 30.699186-30.699186L637.803217 448.978664l164.448376 0c12.140505 0 23.140023-7.154957 28.063149-18.251689 4.922103-11.097756 2.841721-24.053835-5.307889-33.05279L530.62315 72.570829c-5.881964-6.495948-14.273075-10.134825-23.024389-10.091846-8.763594 0.076748-17.076934 3.895727-22.844288 10.494005L200.312188 398.371056c-7.92653 9.067516-9.818623 21.931498-4.839215 32.896224S211.383338 449.2744 223.425605 449.2744z",fill:r(s,0,"#333333")}),(0,i.jsx)("path",{d:"M222.354204 829.113381l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186s-13.745049-30.699186-30.699186-30.699186L222.354204 767.715009c-16.954137 0-30.699186 13.745049-30.699186 30.699186S205.400067 829.113381 222.354204 829.113381z",fill:r(s,1,"#333333")}),(0,i.jsx)("path",{d:"M804.086381 896.729361 222.354204 896.729361c-16.954137 0-30.699186 13.745049-30.699186 30.699186s13.745049 30.699186 30.699186 30.699186l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186S821.041542 896.729361 804.086381 896.729361z",fill:r(s,2,"#333333")})]})};x.defaultProps={size:18};const p=x,j={display:"block"},u=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...j,...c}:j;return(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:(0,i.jsx)("path",{d:"M380.15463648 874.54223633c0 18.12744166-14.83154297 32.95898463-32.95898463 32.95898463s-32.95898463-14.83154297-32.95898462-32.95898463V228.9152832L172.71078883 370.86962865a33.04467773 33.04467773 0 0 1-46.60400416 0 33.04467773 33.04467773 0 0 1 0-46.6040034l197.55615234-198.14941406A32.76782227 32.76782227 0 0 1 347.0967749 116.52514674c0.03295924 0 0.06591772-0.03295924 0.09887695-0.03295924 1.54907201 0 2.90039088 0.69213867 4.41650366 0.88989258 2.66967773 0.39550781 5.40527318 0.59326172 7.94311548 1.61499049 12.03002904 4.94384766 20.59936549 16.71020508 20.59936549 30.45410156v725.0910642z m320.15698192 23.34155248a32.85351537 32.85351537 0 0 1-23.43383789 9.59106445c-0.03295924 0-0.06591772 0.03295924-0.09887696 0.03295924-1.54907201 0-2.90039088-0.69213867-4.41650365-0.92285182-2.70263697-0.36254857-5.40527318-0.56030248-7.94311549-1.61498972-12.03002904-4.91088842-20.59936549-16.67724584-20.59936473-30.42114309V149.45776367c0-18.12744166 14.83154297-32.95898463 32.95898387-32.95898463s32.95898463 14.83154297 32.95898463 32.95898463v645.60058619l141.52587916-141.92138697c12.81445313-12.82104467 33.81591797-12.82104467 46.63037109 0 12.78808619 12.81445313 12.78808619 33.77636719 0 46.60400416L700.3116184 897.88378881z",fill:r(s,0,"#333333")})})};u.defaultProps={size:18};const y=u,v={display:"block"},f=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...v,...c}:v;return(0,i.jsx)("svg",{viewBox:"0 0 1172 1024",width:n+"px",height:n+"px",style:l,...t,children:(0,i.jsx)("path",{d:"M870.0416 250.4704a38.4 38.4 0 0 0-8.96 53.5552c13.056 18.2784 24.4224 37.8368 33.7408 58.112a38.4512 38.4512 0 0 0 50.944 18.8928 38.4512 38.4512 0 0 0 18.8416-50.944 436.0192 436.0192 0 0 0-40.96-70.6048 38.3488 38.3488 0 0 0-53.6064-9.0112zM181.4528 566.016a35.9936 35.9936 0 0 0 25.5488-10.5984L351.7952 410.624a36.096 36.096 0 1 0-51.0976-51.0976L217.6 442.5728C250.0096 278.1184 395.264 153.6 569.1392 153.6c50.7904 0 99.8912 10.3936 145.92 30.9248a38.4 38.4 0 1 0 31.232-70.0928 431.36 431.36 0 0 0-177.152-37.632c-214.6816 0-393.1136 156.416-428.4416 361.216L62.1568 359.4752a36.1984 36.1984 0 0 0-51.0976 51.0976l144.8448 144.7936a36.0448 36.0448 0 0 0 25.5488 10.6496zM978.5344 463.104a36.1984 36.1984 0 0 0-51.0976 0l-144.8448 144.7936a36.096 36.096 0 1 0 51.0976 51.0976l88.6272-88.576C894.3104 740.2496 746.8032 870.4 569.1392 870.4a357.7856 357.7856 0 0 1-325.2736-207.7184 38.4 38.4 0 1 0-69.7344 32.3072 434.3808 434.3808 0 0 0 394.9568 252.2112c215.1936 0 393.984-157.184 428.6464-362.7008l74.496 74.496a35.9936 35.9936 0 0 0 51.0976 0 36.096 36.096 0 0 0 0-51.0976l-144.7936-144.7936z",fill:r(s,0,"#333333")})})};f.defaultProps={size:18};const g=f,m={display:"block"},b=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...m,...c}:m;return(0,i.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:[(0,i.jsx)("path",{d:"M302 332a30 30 0 1 1 0-60h420a30 30 0 0 1 0 60H302zM302 542a30 30 0 0 1 0-60h420a30 30 0 0 1 0 60H302zM302 752a30 30 0 0 1 0-60h120a30 30 0 0 1 0 60H302z",fill:r(s,0,"#333333")}),(0,i.jsx)("path",{d:"M789.47 784.1a30 30 0 0 1 39.36 45.3l-144.24 125.25a30 30 0 0 1-19.68 7.35H214.85C163.4 962 122 919.46 122 867.38V156.62C122 104.54 163.4 62 214.85 62h594.3C860.6 62 902 104.54 902 156.62v529.05a30 30 0 1 1-60 0V156.62C842 137.3 827.09 122 809.15 122H214.85C196.91 122 182 137.3 182 156.62v710.76C182 886.7 196.91 902 214.85 902h438.84l135.78-117.9z",fill:r(s,1,"#333333")}),(0,i.jsx)("path",{d:"M692 931.19a30 30 0 1 1-60 0v-174.6C632 704.57 673.4 662 724.85 662h147.78a30 30 0 0 1 0 60h-147.78c-17.94 0-32.85 15.3-32.85 34.62v174.6z",fill:r(s,2,"#333333")})]})};b.defaultProps={size:18};const E=b,D={display:"block"},S=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...D,...c}:D;return(0,i.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:[(0,i.jsx)("path",{d:"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z",fill:r(s,0,"#333333")}),(0,i.jsx)("path",{d:"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z",fill:r(s,1,"#333333")})]})};S.defaultProps={size:18};const M=S,C={display:"block"},F=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...C,...c}:C;return(0,i.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:[(0,i.jsx)("path",{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5 0.2 13 0.7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2c41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7 0.4-6.4 0.7-12.8 0.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3-20.1 11.8-42 20-64.9 24.3V484c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v396.5c-22.9-4.3-44.8-12.5-64.9-24.3-30.3-17.7-55.6-43-73.3-73.3C317.7 752 308 716.8 308 680V412h408v268z",fill:r(s,0,"#333333")}),(0,i.jsx)("path",{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z",fill:r(s,1,"#333333")})]})};F.defaultProps={size:18};const z=F,B={display:"block"},A=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...B,...c}:B;return(0,i.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:[(0,i.jsx)("path",{d:"M512 71.68c-242.688 0-440.32 197.632-440.32 440.32s197.632 440.32 440.32 440.32 440.32-197.632 440.32-440.32-197.632-440.32-440.32-440.32z m0 819.2c-208.896 0-378.88-169.984-378.88-378.88s169.984-378.88 378.88-378.88 378.88 169.984 378.88 378.88-169.984 378.88-378.88 378.88z",fill:r(s,0,"#333333")}),(0,i.jsx)("path",{d:"M542.72 261.12H481.28v220.16H261.12v61.44h220.16v220.16h61.44v-220.16h220.16V481.28h-220.16z",fill:r(s,1,"#333333")})]})};A.defaultProps={size:18};const w=A,k={display:"block"},H=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...k,...c}:k;return(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:(0,i.jsx)("path",{d:"M384 896h-64v-70.4c0-15.2-10.4-28-24.8-31.2C159.2 768 64 644.8 64 496v-32h64v32c0 118.4 73.6 215.2 179.2 236 44.8 8.8 76.8 48 76.8 94.4v69.6zM704 896h-64v-70.4c0-45.6 32-85.6 76.8-94.4C822.4 711.2 896 614.4 896 496v-32h64v32c0 148.8-95.2 272-231.2 298.4-14.4 3.2-24.8 16-24.8 31.2v70.4zM512.8 640l-41.6-37.6c-147.2-133.6-244-208-244-316.8 0-88 68.8-156.8 156.8-156.8 49.6 0 97.6 23.2 128.8 60C544 152 592 128.8 641.6 128.8c88 0 156.8 68.8 156.8 156.8 0 108-96.8 183.2-244 316.8L512.8 640z",fill:r(s,0,"#333333")})})};H.defaultProps={size:18};const L=H,N={display:"block"},T=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...N,...c}:N;return(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:(0,i.jsx)("path",{d:"M942.4615936 284.62787926c-14.30911886-14.12709945-37.31996786-14.05468217-51.48229632 0.21920654L517.97142983 661.27810333 139.75544149 286.45003606c-14.30911886-14.16232846-37.31996786-14.05468217-51.51948344 0.21920654-14.16232846 14.30911886-14.05468217 37.35519687 0.21920654 51.51948345l401.99014627 398.34974663c0.61847666 0.61847666 1.41897273 0.76526706 2.03940637 1.34655658 0.14483342 0.14483342 0.18201941 0.32685283 0.32685283 0.47364324 7.09877874 7.02636259 16.38375538 10.55911595 25.63154489 10.55911595 9.35739278 0 18.75001458-3.60516949 25.85075143-10.77636551l398.34974663-401.99014628C956.84312974 321.8382427 956.73548345 298.7921647 942.4615936 284.62787926z",fill:r(s,0,"#333333")})})};T.defaultProps={size:18};const K=T,P={display:"block"},R=e=>{let{size:n,color:s,style:c,...t}=e;const l=c?{...P,...c}:P;return(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...t,children:(0,i.jsx)("path",{d:"M81.5384064 739.37212074c14.30911886 14.12709945 37.31996786 14.05468217 51.48229632-0.21920654L506.02857017 362.72189667 884.24455851 737.54996394c14.30911886 14.16232846 37.31996786 14.05468217 51.51948344-0.21920654 14.16232846-14.30911886 14.05468217-37.35519687-0.21920654-51.51948345l-401.99014627-398.34974663c-0.61847666-0.61847666-1.41897273-0.76526706-2.03940637-1.34655658-0.14483342-0.14483342-0.18201941-0.32685283-0.32685282-0.47364324-7.09877874-7.02636259-16.38375538-10.55911595-25.6315449-10.55911595-9.35739278 0-18.75001458 3.60516949-25.85075143 10.77636551l-398.34974663 401.99014628C67.15687026 702.1617573 67.26451655 725.2078353 81.5384064 739.37212074z",fill:r(s,0,"#333333")})})};R.defaultProps={size:18};const U=R,V=e=>{let{name:n,...s}=e;switch(n){case"youhua":return(0,i.jsx)(l,{...s});case"dayi":return(0,i.jsx)(a,{...s});case"shengji":return(0,i.jsx)(p,{...s});case"tiaozheng":return(0,i.jsx)(y,{...s});case"gengxin":return(0,i.jsx)(g,{...s});case"wendang":return(0,i.jsx)(E,{...s});case"shanchu":return(0,i.jsx)(M,{...s});case"bug":return(0,i.jsx)(z,{...s});case"xinzeng":return(0,i.jsx)(w,{...s});case"fuwu":return(0,i.jsx)(L,{...s});case"down":return(0,i.jsx)(K,{...s});case"up":return(0,i.jsx)(U,{...s})}return null},J={label:"label_p8vM",icon:"icon_knQK"};function G(e){const{children:n}=e,s={"\u65b0\u589e":{icon:"xinzeng",bgColor:"#39b54a"},"\u4fee\u590d":{icon:"bug",bgColor:"#9c26b0"},"\u6587\u6863":{icon:"wendang",bgColor:"rgb(79, 147, 255)"},"\u66f4\u65b0":{icon:"gengxin",bgColor:"#0081ff"},"\u8c03\u6574":{icon:"tiaozheng",bgColor:"#333"},"\u5347\u7ea7":{icon:"shengji",bgColor:"#e03997"},"\u79fb\u9664":{icon:"shanchu",bgColor:"#666"},"\u7b54\u7591":{icon:"dayi",bgColor:"#bbb"},"\u4f18\u5316":{icon:"youhua",bgColor:"#38e550"}};return(0,i.jsxs)("label",{className:J.label,title:n,style:{backgroundColor:s[n].bgColor},children:[(0,i.jsx)(V,{name:s[n].icon,color:"white",size:14,className:J.icon})," ",n]})}}}]);