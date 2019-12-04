(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{229:function(a,s,t){"use strict";t.r(s);var r=t(0),n=Object(r.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"centos7环境安装jdk8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7环境安装jdk8","aria-hidden":"true"}},[a._v("#")]),a._v(" Centos7环境安装JDK8")]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"上传安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传安装包","aria-hidden":"true"}},[a._v("#")]),a._v(" 上传安装包")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 使用 rz 命令上传文件档当前目录\n[root@host102 mydir]# rz\n\n[root@host102 mydir]# ll\ntotal 191128\n-rw-r--r--. 1 root root 194151339 Oct 22 13:23 jdk-8u231-linux-x64.tar.gz\n-rw-r--r--. 1 root root      5824 Oct 12 05:04 mysql-community-release-el6-5.noarch.rpm\ndrwxrwxr-x. 6 root root      4096 May 17  2017 redis-3.2.9\n-rw-r--r--. 1 root root   1547695 Oct 12 04:54 redis-3.2.9.tar.gz\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("h3",{attrs:{id:"解压jdk文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压jdk文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 解压JDK文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 将压缩包复制到指定文件目录\n[root@host102 mydir]# cp jdk-8u231-linux-x64.tar.gz /usr/local/java/\n\n# 解压文件\n[root@host102 java]# tar zxvf jdk-8u231-linux-x64.tar.gz\n\n# 移除压缩包\n[root@host102 java]# rm  -rf jdk-8u231-linux-x64.tar.gz \n[root@host102 java]# ll\ntotal 0\ndrwxr-xr-x. 7 10 143 245 Oct  5 18:13 jdk1.8.0_231\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h3",{attrs:{id:"设置jdk环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置jdk环境变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置JDK环境变量")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 修改etc/profile\n[root@host102 java]# vi /etc/profile\n# 文件末尾加上三行\n-----------------------------------------------------------------------------\n#############java environment =====================\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_231\nexport CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\nexport PATH=$PATH:$JAVA_HOME/bin\n-----------------------------------------------------------------------------\n\n# 使环境变量生效\n[root@host102 java]# source  /etc/profile\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h3",{attrs:{id:"验证java安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证java安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 验证java安装")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('[root@host102 java]# java -version\njava version "1.8.0_231"\nJava(TM) SE Runtime Environment (build 1.8.0_231-b11)\nJava HotSpot(TM) 64-Bit Server VM (build 25.231-b11, mixed mode)\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"完毕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完毕","aria-hidden":"true"}},[a._v("#")]),a._v(" 完毕")]),a._v(" "),t("p",[a._v("撒花。")])])},[],!1,null,null,null);s.default=n.exports}}]);