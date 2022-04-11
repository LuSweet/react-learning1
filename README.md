# 这是第一个 github 项目-react-learning1

#### braft-editor

## React 后台管理系统

> [项目预览地址](https://ltadpoles.github.io)

基于 `React`和 `hooks` 生态系统搭建的后台管理系统模板

此项目为闲暇时间所做，主要是为了熟悉 `React` 项目的开发流程，打造一个快速开发后台管理系统的模板。

由于每个管理项目可能会有不同的定制化需求，所以对于模板中的一些功能并没有做完善的封装，比如对 `axios` 的封装、前端路由权限的控制。当然，结构或者思路已经存在代码之中了,只需要添加具体的业务代码即可

如果觉得不错或者对你有些许的帮助，欢迎 `star`，或者你有更好的实现方式、有趣的 `idea`，也欢迎留言交流

如果你想了解项目更为详细的信息，推荐阅读以下文章

- [如何打造 react 后台管理系统](https://github.com/ltadpoles/web-document/blob/master/React/%E5%BF%AB%E9%80%9F%E6%89%93%E9%80%A0react%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.md)

以下为项目基本信息 ↓

### 技术栈

`React@17.0.2 + React-Router-Dom@6.2.2 + Antd@4.18.9 + Axios@0.26.1`

> `Create React App` 脚手架工具快速搭建项目结构

> `react-loadable@5.5.0` 路由懒加载

> `JSON-server` 搭建本地的数据接口

<!-- > `react-redux@7.1.1` 配合 `Redux` 更舒心 -->

> `animate.css@3.7.2` 页面动画展示

> `braft-editor@2.3.8` 富文本插件

> `echarts@5.3.1` 数据可视化

> `nprogress@0.2.0` 顶部加载条

> `screenfull@5.0.0` 全屏插件

> `react-particles-js@2.4.0`: 登录界面首页,

> `eslint@8.3.0`, 代码检查

> `prettier@1.18.2` 代码风格美化

### 基本功能

- [x] Json server 搭建本地的数据接口
- [x] 富文本编辑器 braft-editor
- [x] 常用 UI 展示
- [x] echarts 全屏展示
- [x] 登陆/注销功能
- [x] axios 应用
- [x] 简单权限管理

### 项目结构

### 使用方法

```npm
git clone https://github.com/LuSweet/react-learning1

cd react-admin

// 安装依赖
yarn

// 启动
yarn start

// 启动Json server的db.json文件
json-server --watch db.json
```
