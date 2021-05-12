// 2020Webpack速学实战教程 - 老陈打码
// https://www.bilibili.com/video/BV1gA411B7M2

// 1、认识webpack
// 模块化的打包工具，将模块化依赖的文件最终编译打包成浏览器能够识别的静态资源文件。

// 基本概念：
// webpack.config.js
// 入口(entry)，构建依赖图的开始
module.exports = {
    entry: './path/to/my/entry/file.js',
}

// 输出(output)
// loader：源代码的转换
// 插件(plugin)
// 模式(mode)  development, production 或 none，默认production
// 浏览器兼容性(browser compatibility) 
// webpack 支持所有符合 ES5 标准 的浏览器（不支持 IE8 及以下版本）
// 环境(environment) ：webpack 5 运行于 Node.js v10.13.0+ 的版本

// webpack ./src/index.js -o ./dist/bundle.production.js --mode=production

// webpack.config.js

// loader 的配置在 module 配置中

// plugin 插件配置，完成 HTML 模板打包

// 6、图片资源的打包

// 7、模块的 HMR，热更新 dev-server 插件



// 【2020新课程】Webpack从原理到实战完整版-深入浅出，简单易学，前端工程师必学经典内容！ - 有鱼
// https://www.bilibili.com/video/BV1a741197Hn

// 【课程介绍】
// 1、webpack 的定义：是一个现代的 JavaScript 应用程序的静态模块打包器。
// 自己理解：静态模块就是不会改变的模块，如js、css。
// 打包的场景：逻辑多、文件多，项目的复杂度提高了。
// 在打包之外，还有“翻译官”技能 - loader，把浏览器看不到的代码翻译成浏览器能理解的；plugins提供更多的能力。
// webpack不进强大，而且灵活

// 2、课程安排和学习建议
// 重点：
// - 理解前端模块化
// - 理解 webpack 打包的核心思路
// - 理解 webpack 中的“关键人物”

// 误区：
// 不要执着于 API 和 命令

// 【webpack 的原理与背景】
// 3、理解前端模块化
// 作用域 -> 命令空间 -> 模块化
// 避免变量作用域污染和冲突，同时让使用模块的人不再关心变量本身也不能允许其修改变量（不能让别人访问和篡改）
// 作用域决定了代码中 变量 和其他资源的 可见性。
// 闭包、IIFE的应用，利用函数作用域来做局部作用域的模块化写法
// 模块化的优点：
// - 作用域封装
// - 重用性
// - 解除耦合

// 4、模块化方案进化史
// AMD -> commonjs -> ES6 module
// ES5 本身不具备模块化的特性，从 ES6 开始原生支持模块
// AMD：异步模块定义。出的比较早，现在使用的较少。
// define(xxx, ['xx'], function() {})
// commonjs：2009年发布的，nodejs实现了部分规范，一般来讲我们认为nodejs的模块化方案就是基于commonjs的。每个文件就是一个模块，都有其作用域。
// 通过 require 函数引入，通过 exports 导出
// AMD 和 commonjs 都强调模块的 显示 引用
// ES6 module：import 导入，export 导出

// 5、webpack的打包思路/机制
// - webpack 与 IIFE（立即执行函数）的关系
// - webpack 打包的核心逻辑
// webpack 打包过程：
// - 从入口文件开始，分析整个应用的依赖树
// - 将每个依赖模块包装起来，放到一个数组中等待调用
// - 实现模块加载的方法，并把它放到模块执行的环境中，确保模块间可以互相调用
// - 把执行入口文件的逻辑放在一个函数表达式中，并立即执行这个函数


// 【webpack 实战】
// 6、配置开发环境
// npm 与包管理器
// - 理解包管理器：帮助开发者便捷地获取或分发包的工具
// - 熟悉 npm 核心特性
// - 理解 npm “仓库”与“依赖”的概念：--save/-S(npm 5以上的 npm install 的 dependencies 默认值，生产环境的依赖)；--save-dev/-D（devDependencies，指定 npm install 的环境为开发环境，开发环境需要的依赖）；npm install --only=prod、--only=dev（指定安装的类型
// - 理解 npm 语义化版本：运行依赖的版本是动态的，^version 中小版本 ^1.0.1 -> 1.x.x，~version 小版本 -> 1.0.x，version 特定版本
// - 掌握使用 npm 自定义工程脚本的方法：npm 生命周期命令以外的命令，常见的有 test dev build...
// 不建议使用 npm 5 以下的版本
// npm intsall 的过程
// - 寻找包版本信息文件(package.json)，依照它来进行安装
// - 查package.json中的依赖，并检查项目中其他的版本信息文件
// - 如果发现了新包，就更新版本信息文件


// 7、webpack 核心特征
// - 使用 webpack 构建简单的工程
// - 了解 webpack 配置文件：entry、output、webpack-dev-server\devServer（打包的文件在内存中，不会在 dist 目录内）
// - 掌握“一起皆模块与loaders”的思想：所有的资源（图片、CSS等）都是模块，用对应的 loader 来翻译。使用时需先 npm install 这些依赖的 loader，再在配置文件的 module 字段中配置 rules，test、use。use 中的加载顺序是倒序的。
// - 理解 webpack 中的“关键人物”
// loader 就是文件加载器，编译 js 不能识别的文件的能力，翻译官角色
// plugins 功能的扩展，压缩、混淆等

// 8、webpack 构建工程
// – 使用 webpack 构建真实的 react 工程
// – 掌握 babel 的用法，理解 babel 原理：代码的编译；写的代码不是最终浏览器能够识别的，就需要工具来处理，babel 就是这么一个工具。一般要core、cli结合使用，另外可以结合 preset-env 等规则库将高本版 js 代码转换为低版本。.babelrc 配置文件。
// – 掌握高频 loader 和 plugin 的用法
// – 掌握生产级别的 webpack 配置方法

// 9、更强的 webpack：loader 和 plugin

// 【webpack 与前端性能】
// 10、webpack 性能调优
// - 打包结果优化：空间维度，尽可能的小，传输更高效。optimization.minimizer terser-webpack-plugin 无用代码的去除 webpack-bundle-analyzer 用来分析大小; 
// - 构建过程优化：时间维度，时间尽可能少。optimization.minimizer terser-webpack-plugin cache缓存; 减少查找、减少解析、多线程、预编译；（减少查找：module.rule.exclude、精确的 test 正则；减少解析：不需要解析的排除掉 module.noParse；多线程/多干活：HappyPack、thread-loader）
// - Tree-Shaking：消除无用的代码（是 DCE 的一种实现），在 production 模式下做的彻底。


// 【课程总结】
// 11、webpack：不止“pack”
// - 前端发展的产物
// - 模块化打包方案
// - 工程化方案


// 快速掌握 webpack 面试题 - 哈默聊前端
// https://www.bilibili.com/video/BV1By4y177gX
// 1、拆分配置、合并配置
// 2、如何使用 webpack-dev-server，proxy 的知识点
// 3、如何处理样式 style-loader css-loader postcss-loader/autoprefixer插件 sass-loader
// 4、如何处理图片 file-loader url-loader
// 5、多入口 entry = { main: '', other: '', index: '' }
// 6、抽离 CSS：几个 css 的 loader 默认是把 CSS 打入打包出来的 js 文件中的，使用 MiniCSSExtractPlugin MiniCSSExtractPlugin.loader
// 7、抽离公共代码：使用 HtmlWebpackPlugin 插件的 chunks 配置，再在 optimization.splitChunks.cacheGroups 进行代码分割
// - 公共模块：公共模块的代码不需要重复打包，单独抽离成一个公共模块的文件，然后引用即可
// - 第三方模块：第三方模块的代码一般不会轻易改变，不需要在业务代码改变之后再重新打包，单独抽离成一个第三方模块的文件，然后引用即可
