#react-native实现的菜谱应用


## 前言

上一个项目[天气预报](https://github.com/liuboshuo/react-native-weather)使用```react-native```提供的传统```state```和```props```管理搭建项目, 这个则采用```react-redux,redux```搭建项目;两者区别在[天气预报](https://github.com/liuboshuo/react-native-weather)有详细的讲解，本项目重点是```redux,react-redux,react-navigation```使用;

官方文档
>* [redux](http://redux.js.org/)
>* [react-redux](https://github.com/reactjs/react-redux)
>* [react-navigation](https://reactnavigation.org/)

其中react-redux有许多中间件redux-thunk,react-logger等

个人学习中做的小Demo,有兴趣可以共同学习一下
[react-native-learn](https://github.com/liuboshuo/react-native)不断更新中...


## 项目介绍


### 功能

* 首页推荐菜谱列表，热门标签，轮播图显示热门推荐菜谱
* 导航条在滚动下隐藏,显示（```Animated```）
* 自定义导航
* 分类（不同方式切换）二级列表
* 搜索菜谱 上拉加载, 下拉刷新
* 我的收藏
* 浏览记录
* 菜谱详情
* 菜谱制作步骤的大图浏览
* ...

### 技术点

* 网络请求的封装
* Animated和滚动事件结合
* 轮播图自定义分页组件
* 上拉加载
* 下拉刷新
* 我的收藏，浏览记录的本地缓存
* 小图点击放大，支持手势
* 二级列表的显示和隐藏
* 自定义```tabBar```
* 自定义```navigationBar```
* 组件和```action```的绑定等

## 项目截图
![](https://github.com/liuboshuo/react-native-food/blob/master/image/rn_food.gif)


### 安装

```
git clone https://github.com/liuboshuo/react-native-food.git
```

```
npm install
```


### 运行

[数据来源](https://www.juhe.cn/docs/api/id/46/aid/129)

在android项目找到string.xml文件替换你申请的appKey

```
react-native run-android
```

在iOS项目找到pch文件替换你申请的appKey

```
react-native run-ios

```

## 项目使用框架

```
"dependencies": {
  "immutable": "^3.8.1",
  "qs":": "^6.5.0",
  "react": "16.0.0-alpha.6",
  "react-native": "0.44.0",
  "react-native-swiper": "^1.5.4",
  "react-navigation": "^1.0.0-beta.11",
  "react-redux": "^5.0.4",
  "redux": "^3.6.0",
  "redux-thunk": "^2.2.0",
  "react-native-storage":"^2.1.1",
  "react-native-gallery":"0.0.17"
},
```
* ```react-native-storage```
> [react-native-storage](https://github.com/sunnylqm/react-native-storage)

一个本地持久存储的封装，可以同时支持react-native(AsyncStorage)和浏览器(localStorage)
这个框架的存储内容是文件存储，而且还是明文的，可以在iOS沙盒找到存储文件，打开后内容一目了然。这太不安全了；

所以,如果你的项目安全性比较高，建议搭配加密的js框架一起使用。crypto-js
* ```react-native-gallery```
>[react-native-gallery](https://github.com/ldn0x7dc/react-native-gallery)

相册墙

* ```immutable```
>[immutable](https://github.com/hughfdjackson/immutable)

immutable可以说给```react```的app提高了性能,是很厉害的一个库，可以飞升```react```开发的app的性能

* ```react-native-swiper```轮播
>[react-native-swiper](https://github.com/leecade/react-native-swiper)

* ```react-navigation```
>[react-navigation](https://github.com/react-community/react-navigation)

这个库提供三种框架的搭建app
  * tabBar
  * navigator
  * drawer 侧边栏

* ```redux-thunk```
> [redux-thunk](https://github.com/gaearon/redux-thunk)

redux-thunk 是 redux 官方文档中用到的异步组件

## 心得
* 使用redux是有利于项目的搭建，和业务逻辑拆分，降低耦合度
* 在app中store管理的state是全局的，这导致在退出页面的数据还存在内存，这就需要我们收到能够清除
* 我们都知道web编写style是一件繁琐的事情，虽然react-native的style比web的css更简单。但是当app复杂化的时候(比如管理皮肤)，怎样更方便去管理style是一个问题？求解？ 有方案的大神可以联系liushuo132981@163.com一起沟通交流
