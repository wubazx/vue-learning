### 说明
* 这是一个由vue-cli创建的vue应用demo，实现简单的登录，路由嵌套，springboot简单整合
---
### 环境
* Node.js(v12.12.0)
* npm(6.11.3)

---
### 启动
* 进入hello-vue目录
```
npm install
npm run dev
```

* 启动 vue-spring-boot
* 在浏览器输入 http://localhost:8081/ 

---
> 下面为创建一个vue应用的准备
### 安装vue-cli
* 安装Node.js 点击 [这里](http://nodejs.cn/download/)
* 安装Node.js 加速器
```
npm install cnpm -g
```
* 安装vue-cli
```
cnpm install vue-cli -g
```
* 测试是否安装成功
```
# 查看可以基于哪些模板创建 vue 应用程序，通常我们选择 webpack
vue list
```
---
### 创建基于webpack的vue应用
```
# 这里的 hello-vue 是项目名称，可以根据自己的需求起名
vue init webpack hello-vue
```
---
### 启动
```
npm run dev
```
