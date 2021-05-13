// 【尚硅谷】最经典Node.JS全套完整版教程(快速入门nodejs) - 李立超
// https://www.bilibili.com/video/BV1bs411E7pD?p=20

// 共 20 节课，主要讲解了 node.js 的基础，从命令行窗口，讲到创始人生平到写node出来，讲到 node 的运行环境，再讲到 node 模块化及其 api，再讲到模块包的管理 npm 和 cnpm，再讲了内置对象 Buffer 的原理和使用，最后重点讲解了 node 内置模块 fs 的相关 api。

// 1、命令行窗口：就是最简单的输入指令让计算机执行的界面，一般在服务器端用的较多，需要节省更多的硬件资源到软件服务上，GUI 是比较耗性能的。nodejs 可以运行在 Linux、Windows 等多种操作系统内，只需要安装对应的版本即可。

// 2、进程和线程：进程是程序执行的空间，线程是程序执行的最小单位，JS 是单线程的，但是浏览器是有多进程和多线程的。

// 3、nodejs 简介：是一个能够运行在服务端的 JavaScript 开源跨平台，采用的是 Google 的 V8 引擎来运行代码，具有 事件驱动、非阻塞、异步I/O 等高性能特性。是数学博士 Ryan Dahl （瑞安达尔）做个人开发者一段时间后开始帮人解决 web 服务的性能问题，最终发现 nodejs 这种解决方案才能较好解决高并发问题。因此 nodejs 诞生。虽然 nodejs 本来是作为服务器端语言的，但是其较为科学的包管理方式和 js 的普适性，给前端开发生态注入了生命力，使得前端开发圈非常繁荣。所以，nodejs 在前端圈作为生态工具的时候更多些。

// 4、nodejs 执行：在命令行窗口输入 node xx.js 即可执行。

// 5、nodejs 编辑器：vscode、webstorm 等常见开发工具都有很好的生态圈，非常方便。

// 6、模块化：为了提高编码、复用、维护等各个环节的效率，把公共的小功能封装到一个个的 js 文件当中，这种操作就是利用模块化的编程思想。在 nodejs 中，一个 js 文件就是一个模块。

// 7、nodejs 模块化：一个文件就是一个模块，采用 commonjs 规范，每个文件中都可以使用全局/默认方法 module.exports 和 exports 来导出模块 require 来导入/引入模块。

// 8、module.exports 和 exports 的区别：exports 是对 module.exports 的引用，所以不能将 exports 直接赋值为对象，但是可以对其中的变量进行赋值。

// 9、包简介：将可复用的、有意义的多个模块封装到一个文件夹的动作就是打包，这个文件夹成为功能包。这个包是 nodejs 生态繁荣的基础。由包规范/目录、包描述文件组成。至少包含 package.json 和 1 个模块。package.json 是包的描述文件，里边的多个字段规范组成了包的基础信息。常见的有 name version description scripts author main keywords license dependencies devDependencies。

// 10、npm：node package manager，nodejs 中的包管理器，也是 nodejs 的一个模块，是跟随 nodejs 安装时默认安装的。常见命令：npm install  npm uninstall  npm search  npm list  npm run xxx 

// 11、cnpm：是淘宝镜像的 npm 管理器，国内访问 npm.org 可能网速不稳定，采用这个会快一些。

// 12、nodejs 中的包搜索：在 nodejs 中，通过 require 包名的方式来引用包，包的查找方式类似于 function 中变量作用域的查找，查找为就近原则，从当前目录的 node_modules 目录开始一直找到模块或者到根目录找不到报错为止。

// 13、Buffer：nodejs 中 Buffer 是一个缓冲区对象，是一段连续的内存空间，用于存放二进制数据。比如说请求响应的流数据、文件数据等等。从结构上来看，Buffer 是类数组的，里边存放的是多个 十六进制 元素，每个元素就是一个字节/byte，也就是 8 bit，所以每个元素的范围是 00 - ff（0-255）。一个中文占 3 个字节，一个英文占 1 个字节。存入 Buffer 中时会按照一字节一字节的存取，多的会被截掉，Buffer 大小一旦确定则不能修改。Buffer 的 API：Buffer.from(string), new Buffer(length) - 废弃, buf.length, Buffer.alloc(length), buf[index] 读写

// 14、同步文件写入：nodejs 中一般 api 都有同步和异步两种，有 sync 关键字的是同步的，没有的则是异步的，需要有回调函数。nodejs 中以错误优先，回调函数的第一个参数一般都是错误对象 error，需要重点处理。fs 模块是内置模块，不需要安装依赖，使用时直接 require('fs') 引入即可。fs 是文件系统，对系统所在磁盘中的文件做增删改查操作。fs.openSync(path, flags[, mode]), fs.writeSync(fd, content), fs.closeSync(fd)

// 15、异步文件写入：fs.open(path, flags[, mode], callback), fs.write(), fs.close(fd)

// 16、简单文件写入：fs.writeFile(file, data[, options], callback), fs.writeFileSync(file, data[, options])

// 17、流式文件写入：简单写入性能很差，容易内存溢出。fs.createWriteStream(path, [, options]), ws.write(content), ws.end() - 关闭源头, ws.close() - 关闭接收入口, ws.on(event, callback), ws.once(event, callback)

// 18、简单文件读取：fs.readSync(), fs.read(), fs.readFileSync(path[, options]), fs.readFile(path[, options], callback) - 返回的是一个 buffer

// 19、流式文件读取：适用于大文件，分多次读取文件到内存中。fs.createReadStream(path), rs.once(event, callback), rs.on('data', callback), 每次读取的是 65536 （64kb）, rs.end(), res.pipe(ws)

// 20、其他 fs api：fs.existsSync(path), fs.stat(path, callback), fs.unlink(path) - 删除, fs.mkdir(), fs.rmdir(), fs.rename(oldPath, newPath, callback), fs.watchFile(filename[, options], callback)