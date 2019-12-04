(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{239:function(a,r,e){"use strict";e.r(r);var t=e(0),s=Object(t.a)({},function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"容器管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器管理")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"创建容器常用选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建容器常用选项","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建容器常用选项")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/docker/docker08.png",alt:""}}),a._v(" "),e("img",{attrs:{src:"/images/docker/docker09.png",alt:""}}),a._v(" "),e("br")]),a._v(" "),e("h2",{attrs:{id:"管理容器常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管理容器常用命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 管理容器常用命令")]),a._v(" "),e("p",[a._v("容器 -> container"),e("br"),a._v("\n查看容器管理的命令: "),e("strong",[a._v("$ docker container --help")]),e("br"),a._v(" "),e("img",{attrs:{src:"/images/docker/docker10.png",alt:""}}),a._v(" "),e("br")]),a._v(" "),e("h2",{attrs:{id:"创建新容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建新容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建新容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ docker container run -itd --name ngx0 nginx \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/docker/docker11.png",alt:""}}),a._v(" "),e("br")]),a._v(" "),e("h2",{attrs:{id:"进入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//在本机上操作docker - 退出中断运行\n//退出保证不中断 ctrl+p+q\n$ docker container attach bs\n\n//访问远程主机上的docker\n$ docker exec -it ngx0 bash/sh/csh\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/docker/docker12.png",alt:""}}),a._v(" "),e("br")]),a._v(" "),e("h2",{attrs:{id:"查看容器文件挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器文件挂载","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看容器文件挂载")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/docker/docker13.png",alt:""}}),a._v(" "),e("br"),a._v("\n容器的创建和重启会到宿主机中把这三个文件挂载出来，所以修改容器中的这三个文件，是不生效的。\n重启和创建容器，修改的内容就丢失了。")]),a._v(" "),e("h2",{attrs:{id:"容器日志目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器日志目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器日志目录")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/docker/docker14.png",alt:""}}),a._v(" "),e("br"),a._v("\n容器的日志存储在 /var/lib/docker/containers/ 中")]),a._v(" "),e("h2",{attrs:{id:"容器信息查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器信息查看","aria-hidden":"true"}},[a._v("#")]),a._v(" 容器信息查看")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ docker container inspect [containerId/containerName]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"从容器中复制到一个新的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从容器中复制到一个新的镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 从容器中复制到一个新的镜像")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/docker/docker15.png",alt:""}}),a._v(" "),e("br")]),a._v(" "),e("h2",{attrs:{id:"复制文件到容器中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制文件到容器中","aria-hidden":"true"}},[a._v("#")]),a._v(" 复制文件到容器中")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ docker container cp [fileName] [容器名:/目录]\n//该文件在重启容器后不会丢失\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/docker/docker16.png",alt:""}}),a._v(" "),e("br")]),a._v(" "),e("h2",{attrs:{id:"查询容器资源利用情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询容器资源利用情况","aria-hidden":"true"}},[a._v("#")]),a._v(" 查询容器资源利用情况")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ docker stats [containerName/ID]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/docker/docker17.png",alt:""}}),a._v(" "),e("br")])])},[],!1,null,null,null);r.default=s.exports}}]);