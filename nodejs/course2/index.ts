// 2021年node.js最新教程（基础+全栈项目） - 古艺散人, 千锋大前端
// https://www.bilibili.com/video/BV1ca4y1n7u3

// 1、基础 1 nodejs 的背景和基本功能集
// 浏览器安全沙箱：跨域限制，nodejs 没有这个限制可以做跨域代理

// 2、基础 2 
// nodejs 的文件读写 fs 内置模块
// 进程管理 process 内置模块
// 网络通信 http 内置模块

// 3、基础 3
// nvm: nodejs version manager, 4.x 开始 TLS 都是偶数版本，奇数版本是开发版本, nvm list, nvm use x.x.x, nvm run x.x.x app.js, nvm alias default x.x.x

// 4、Npm 1
// node package manager
// npm install/uninstall xx -g 全局安装/卸载, npm i xx -g --save --save-dev, package.json 中的 scripts 字段可以直接用 npm 的标识符从当前目录的 node_modules 中查找一直找到根目录再到全局

// 5、Npm 2
// dependencies 生产依赖， devDependencies 开发依赖
// npm list, npm list | grep xx

// 6、Npm 3
// npm view xx versions, npm install xx@x.x.x
// npm outdated 版本时期状态查询
// npm update
// 版本号规则: major.minor.patch(偶稳奇不稳), ^x.x.x - 锁 major , ~x.x.x 锁 major.minor, x.x.x 锁全部, * 最新的
// 清理缓存 npm cache clean --force

// 6、Npm 4
// path 内置模块
// node 中的 3 种模块：内置、三方、自定义

// 7、Npm 5
// node 自定义模块详解， commonjs
// npm adduser, npm publish
// nrm: npm registry manager
// npm config set registry xx.xx