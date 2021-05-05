## webpack 基础
新版本支持0配置，但是限制较多  
默认入口文件是 ./src/index.js  
默认输出到 ./dist/main.js
### 安装
npm i webpack webpack-cli -D
### 2.1
webpack 主要用于web打包，nodejs程序不需要，但是也可以打包。   
它同时支持 commonjs 和 ES6 module，不需要配置即可使用，只需要保证一致性。
### wepack 配置
入口，输出，loader, 插件
#### 入口
entry: ""
#### 输出
必须是绝对路径  
path.resolve 将相对路径转为绝对路径   
path.join(__dirname,'./') 拼接路径得到绝对路径.  
___
需要在最外层设置 mode(模式) 默认是 production ,会压缩代码,development 则不会压缩代码.
#### 使用自定义配置打包
npx webpack --config webpack.custom.config.js
#### 开启监视模式
在命令行中 webpack --watch  
也可在配置中写 watch : true
##### webpack-dev-server
webpack-dev-server 会将文件打包在内存中，而不在硬盘上。  
路径是 host:port/dist.js   
--open 自动打开浏览器，而不用手动操作点链接  
--contentBase 设置入口文件  
--port 指定端口  
--hot 热模块更替 HMR 把修改的部分作为补丁的形式更新，而不是全部重新编译。  
--compress 压缩生成后的代码（gzip）  
除了在命令行指定参数，也可以在配置中写。  
devServer:{}
#### html-webpack-plugin html插件
在webpack.config.js plugins 下配置，是一个构造函数。  
会在内存中生成一个html文件。  
devServer 时会自动引入 bundle.js 文件  
打包的时候也会自动打包到 dist 目录。  
模板文件不需要写 script 标签  
## loader
对模块的源代码进行转换。  
for example: import 一个css 文件会报错，因为 js 不支持css。
此时需要loader 去处理css,让js不报错。  
loader 是在 module （模块）里配置，它是一个对象，有 rules ,表示有很多的规则。  
{
    test://,
    use:[]
}  
webpack 读取loader 时，是从右往左,以管道的方式链式调用的。    
##### css-loader
css-loaer 解析css 文件  
style-loader  将解析出来的结果放到html中，使其生效。
 
##### less 和 sass
less-loader 依赖 less , sass-loader 依赖 sass.  
### 处理文件的 file-loader and url-loader
url-loader 是依赖 file-loader 的，所以必须先安装 file-loader .  
url-loader 会将文件名 hash ，可以设置小文件用 base64。
file-loader 可以设置 outputPath 和 name 确定打包的路径和名称。  
### 处理 Js
#### babel
```
npm i babel-loader @babel/core @babel/preset-env
```
@babel/core 是babel的核心包，@babel/preset-env 是 babel 的语法预设。  
如果写了babel不支持的高级语法，可以在options 下的 plugin 里配置对应的包，根据报错提示或者去官网搜。  
##### babel 实现 generator 语法的转换
需要在依赖里安装 @babel/runtime   
在开发依赖里装 npm install --save-dev @babel/plugin-transform-runtime
