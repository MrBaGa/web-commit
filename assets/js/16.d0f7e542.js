(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{404:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx部署"}},[s._v("#")]),s._v(" Nginx部署")]),s._v(" "),a("h2",{attrs:{id:"nginx基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx基础配置"}},[s._v("#")]),s._v(" Nginx基础配置")]),s._v(" "),a("h3",{attrs:{id:"安装编译工具及库文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装编译工具及库文件"}},[s._v("#")]),s._v(" 安装编译工具及库文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" zlib zlib-devel gcc-c++ libtool  openssl openssl-devel\n")])])]),a("h3",{attrs:{id:"首先要安装-pcre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先要安装-pcre"}},[s._v("#")]),s._v(" 首先要安装 PCRE")]),s._v(" "),a("blockquote",[a("p",[s._v("PCRE 作用是让 Nginx 支持 Rewrite 功能。")])]),s._v(" "),a("h4",{attrs:{id:"下载-pcre-安装包-下载地址-http-downloads-sourceforge-net-project-pcre-pcre-8-35-pcre-8-35-tar-gz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-pcre-安装包-下载地址-http-downloads-sourceforge-net-project-pcre-pcre-8-35-pcre-8-35-tar-gz"}},[s._v("#")]),s._v(" 下载 PCRE 安装包，下载地址： http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz\n")])])]),a("h4",{attrs:{id:"解压安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压安装包"}},[s._v("#")]),s._v(" 解压安装包:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf pcre-8.35.tar.gz\n")])])]),a("h4",{attrs:{id:"进入安装包目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入安装包目录"}},[s._v("#")]),s._v(" 进入安装包目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" pcre-8.35\n")])])]),a("h4",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./configure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h4",{attrs:{id:"查看pcre版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看pcre版本"}},[s._v("#")]),s._v(" 查看pcre版本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pcre-config --version\n")])])]),a("h3",{attrs:{id:"连接远程服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接远程服务器"}},[s._v("#")]),s._v(" 连接远程服务器")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" 用户名@xx.xx.xx.xx \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".  输入密码 \n")])])]),a("p",[s._v("登陆成功进入服务器根目录")]),s._v(" "),a("h3",{attrs:{id:"下载nginx及安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载nginx及安装"}},[s._v("#")]),s._v(" 下载Nginx及安装")]),s._v(" "),a("ul",[a("li",[s._v("去nginx download官网下载稳定版的nginx，上传到服务器的某个位置（这里的位置是 /usr/local ）解压。")]),s._v(" "),a("li",[s._v("在服务器上用命令下载\n进入服务器"),a("code",[s._v("/usr/local")]),s._v("文件夹，打开命令行输入如下命令：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.18.0.tar.gz\n")])])]),a("p",[s._v("查看当前目录就会看到 "),a("strong",[s._v("nginx-1.18.0.tar.gz")])]),s._v(" "),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("p",[s._v("输入命令"),a("code",[s._v("tar -zxvf nginx-1.18.0.tar.gz")]),s._v("进行解压, 解压完成之后查看这个目录就会出现一个 "),a("strong",[s._v("nginx-1.18.0")]),s._v(" 文件夹, 进入"),a("code",[s._v("cd nginx-1.18.0")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("./configure的作用是检测系统配置，生成makefile文件，以便你可以用 make 和 make install 来编译和安装程序。")])]),s._v(" "),a("ol",[a("li",[s._v("执行"),a("code",[s._v("./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35")])]),s._v(" "),a("li",[a("code",[s._v("make")]),s._v(" 编译 （make的过程是把各种语言写的源码文件，变成可执行文件和各种库文件）")]),s._v(" "),a("li",[a("code",[s._v("make install")]),s._v("安装 （"),a("code",[s._v("make install")]),s._v("是把这些编译出来的可执行文件和库文件复制到合适的地方）")]),s._v(" "),a("li",[s._v("查看nginx版本")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -v\n")])])]),a("h3",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),a("ul",[a("li",[s._v("http请求 listen端口以80开头")]),s._v(" "),a("li",[s._v("检查配置文件nginx.conf的正确性命令：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -t\n")])])]),a("h3",{attrs:{id:"启动-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-nginx"}},[s._v("#")]),s._v(" 启动 Nginx")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx\n")])])]),a("h3",{attrs:{id:"重新加载-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新加载-nginx"}},[s._v("#")]),s._v(" 重新加载 Nginx")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -s reload\n")])])]),a("h3",{attrs:{id:"修改dist文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改dist文件权限"}},[s._v("#")]),s._v(" 修改dist文件权限")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" dist\n")])])]),a("h3",{attrs:{id:"通过命令找到master对应的进程号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过命令找到master对应的进程号"}},[s._v("#")]),s._v(" 通过命令找到master对应的进程号")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])])]),a("h3",{attrs:{id:"nginx-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-压缩"}},[s._v("#")]),s._v(" nginx 压缩")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启gzip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用gzip压缩的最小文件，小于设置值的文件将不会压缩")]),s._v("\ngzip_min_length 1k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明")]),s._v("\ngzip_comp_level "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进行压缩的文件类型。javascript有多种形式。其中的值可以在 mime.types 文件中找到。")]),s._v("\ngzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否在http header中添加Vary: Accept-Encoding，建议开启")]),s._v("\ngzip_vary on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用IE 6 gzip")]),s._v("\ngzip_disable "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [1-6]\\."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置压缩所需要的缓冲区大小     ")]),s._v("\ngzip_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" 4k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置gzip压缩针对的HTTP协议版本，没做负载的可以不用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip_http_version 1.0;")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启缓存")]),s._v("\nlocation ~* ^.+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ico"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    access_log   off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    expires      2d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation ~* ^.+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("swf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("wav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    access_log   off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    expires      24h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation ~* ^.+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    expires      1h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation ~* ^.+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ttf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("otf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("woff"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    access_log   off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    expires max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"nginx的ssl模块安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx的ssl模块安装"}},[s._v("#")]),s._v(" Nginx的SSL模块安装")]),s._v(" "),a("ol",[a("li",[s._v("查看 nginx 是否安装 http_ssl_module 模块。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -V\n")])])]),a("p",[s._v("如果出现 "),a("code",[s._v("configure arguments: –with-http_ssl_module")]),s._v(", 则已安装（下面的步骤可以跳过，进入 nginx.conf 配置）。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("配置SSl模块")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-xxx\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_ssl_module\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("使用 make 命令编译（使用make install会重新安装nginx，不建议使用make install），此时当前目录会出现 objs 文件夹。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("关闭Nginx进程")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nginx -s stop\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("用新的 nginx 文件覆盖当前的 nginx 文件")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./objs/nginx /usr/local/nginx/sbin/\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("再次查看安装的模块（configure arguments: –with-http_ssl_module说明ssl模块已安装）。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ /usr/local/nginx/sbin/nginx -V\n\nnginx version: nginx/1.15.9\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nconfigure arguments: --with-http_ssl_module\n")])])]),a("h3",{attrs:{id:"sll证书部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sll证书部署"}},[s._v("#")]),s._v(" SLL证书部署")]),s._v(" "),a("ol",[a("li",[s._v("下载申请好的 ssl 证书文件压缩包到本地并解压（这里是用的 pem 与 key 文件，文件名可以更改）")]),s._v(" "),a("li",[s._v("在 nginx 目录新建 cert 文件夹存放证书文件。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" cert\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("将这两个文件上传至服务器的 cert 目录里。\n这里使用 mac 终端上传至服务器的 scp 命令（这里需要新开一个终端，不要使用连接服务器的窗口）:")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /Users/yourname/Downloads/ssl.pem root@xxx.xx.xxx.xx:/usr/local/nginx/cert/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /Users/yourname/Downloads/ssl.key root@xxx.xx.xxx.xx:/usr/local/nginx/cert/\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("scp [本地文件路径，可以直接拖文件至终端里面] [<服务器登录名>@<服务器IP地址>:<服务器上的路径>]")])]),s._v(" "),a("h3",{attrs:{id:"nginx-conf-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf-配置"}},[s._v("#")]),s._v(" nginx.conf 配置")]),s._v(" "),a("ol",[a("li",[s._v("编辑 "),a("code",[s._v("/usr/local/nginx/conf/nginx.conf")]),s._v(" 配置文件")]),s._v(" "),a("li",[s._v("配置 https server。注释掉之前的 http server 配置，新增 https server:")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器端口使用443，开启ssl, 这里ssl就是上面安装的ssl模块")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 域名，多个以空格分开")]),s._v("\n    server_name  hack520.com www.hack520.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl证书地址")]),s._v("\n    ssl_certificate     /usr/local/nginx/cert/ssl.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pem文件的路径")]),s._v("\n    ssl_certificate_key  /usr/local/nginx/cert/ssl.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key文件的路径")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl验证相关配置")]),s._v("\n    ssl_session_timeout  5m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#缓存有效期")]),s._v("\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("NULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ADH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加密算法")]),s._v("\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安全链接可选的加密协议")]),s._v("\n    ssl_prefer_server_ciphers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用服务器端的首选算法")]),s._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 将 http 重定向 https。\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  hack520.com www.hack520.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"重启-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启-nginx"}},[s._v("#")]),s._v(" 重启 nginx")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n")])])]),a("ol",[a("li",[s._v("如果 80 端口被占用，用"),a("code",[s._v("kill [id]")]),s._v("来结束进程：")])]),s._v(" "),a("h3",{attrs:{id:"查看端口使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看端口使用"}},[s._v("#")]),s._v(" 查看端口使用")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lntp\n\n\nActive Internet connections "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("only servers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21307")]),s._v("/nginx: master \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:22              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3072")]),s._v("/sshd           \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:443             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21307")]),s._v("/nginx: master \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束 80 端口进程")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21307")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("再次重启 nginx：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);