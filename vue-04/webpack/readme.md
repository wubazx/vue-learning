<<<<<<< HEAD
### vue-01：vue基本语法的使用
* vue-if
* vue-else-if
* vue-for
* vue-on

---
### vue-02: Axios异步通信框架的使用
* Axion-demo

---
### vue-03: vue布局
* 表单输入 v-model
* 组件基础 component
* 计算属性 computed
* 内容分发与自定义事件 slot 
=======
### webpack 简介
webpack是一个前端模块加载和打包工具，它可以将许多松散耦合的模块按照依赖和规则打包成符合生产环境部署的前端资源。
还可以将按需加载的模块进行代码分离，等到实际需要时再异步加载。通过 loader 转换，任何形式的资源都可以当做模块，
比如 CommonsJS、AMD、ES6、CSS、JSON、CoffeeScript、LESS 等；

---
### webpack 安装
```
npm install webpack -g
npm install webpack-cli -g
```

---
### webpack 配置文件
**webpack.config.js** 的主要参数：
 * entry：入口文件，指定 WebPack 用哪个文件作为项目的入口
 * output：输出，指定 WebPack 把处理完成的文件放置到指定路径
 * module：模块，用于处理各种类型的文件
 * plugins：插件，如：热更新、代码重用等
 * resolve：设置路径指向
 * watch：监听，用于设置文件改动后直接打包
 ```js
 module.exports = {
     entry: "",
     output: {
         path: "",
         filename: ""
     },
     module: {
         loaders: [
             {test: /\.js$/, loader: ""}
         ]
     },
     plugins: {},
     resolve: {},
     watch: true
 }
 ```
 
 ---
 ### 运行 
 执行 "webpack" 命令
>>>>>>> webpack study
