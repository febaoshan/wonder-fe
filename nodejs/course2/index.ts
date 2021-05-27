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

// 7、Npm 4
// path 内置模块
// node 中的 3 种模块：内置、三方、自定义

// 8、Npm 5
// node 自定义模块详解， commonjs
// npm adduser, npm publish
// nrm: npm registry manager
// npm config set registry xx.xx

// 9、Npm 脚本
// npm run xxx
// scripts 字段中的 & 和 &&，& 是并行，&& 是串行
// npm start/test 简写命令

// 10、Npm 脚本
// 脚本中的变量
// JS中：process.env.npm_package_xx
// package.json 的 scripts 字段中 $npm_package_xxx
// env 字段

// 11、Npm 脚本
// npm 装 git 上发布的包：npm install git+https://github.com/febaoshan/edge-extensions-github-code-viewer.git 或者 npm i git+ssh://git@github.com:febaoshan/edge-extensions-github-code-viewer.git

// 12、Npm 脚本
// cross-env: 运行跨平台设置和使用环境变量的脚本，不是所有 Windows 平台都有问题
// 当您使用NODE_ENV=preduction,来设置环境变量时，大多数Windows命令提示将会阻塞(报错)。(异常是Windows上的Bash，它使用本机Bash。)）换言之，Windows不支持 NODE_ENV=production的设置方式。
// cross-env使得您可以使用单个命令，而不必担心为平台正确设置或使用环境变量。这个迷你的包(cross-env)能够提供一个设置环境变量的scripts，让你能够以Unix方式设置环境变量，然后在Windows上也能兼容运行。
// npm i cross-env -D
// {
//     "scripts": {
//         "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
//     }
// }
// 在 js 中通过 process.env.NODE_ENV 获取环境变量

// 13、nrm npx
// nrm：node registry manager, nrm use xxx
// npx: node package extention, npm 从 5.2 版本开始引入 npx，npx 如果查找不到会安装到临时文件夹中，npx 查找会从本地找到全局，运行时可以指定使用全局还是本地的, --no-install --ignore-existing
// 本地模块的调用方法：1）./node_modules/.bin/xxx；2）npm run xxx（需在 package.json 中提前定义 scripts）；3）npx xxx （依赖不写到 package.json 但写到 scripts 命令行，是一种保险方案，不会导致运行不了，不存在会临时安装依赖）