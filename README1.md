# react-native实现一款简单的天气预报iOS，android客户端
***
## 前言
***
本项目与[菜谱项目](https://github.com/liuboshuo/react-native-food)是一个对比;有兴趣的可以了解下

本项目的使用```react-native```提供的传统```state```和```props```管理搭建项目。[菜谱项目](https://github.com/liuboshuo/react-native-food)是使用```react-redux,redux，react-navigation```;

我本着使用最原始的构建方式目的是为了和用```redux```,```react-redux```构建项目做一个对比，为各位对两者搭建项目的不同列出简单的对比;

在[菜谱项目](https://github.com/liuboshuo/react-native-food)会详细介绍```redux```,```react-redux```的使用

### 传统方式
* 组件管理```state```，当一个组件交互多的时候，```state```中的值越来越庞大，简单的通过```setState```更新UI这会让你管理```state```更加的不易，这样会把应用逻辑放在组件中，会使组件代码量越来越多
* 通过```props```传值和回调。通过```props```正向传值没什么问题，但是当组件的封装层级越深,反传就会越复杂，这就导致回调很多层次才达到你想把子组件的值回调目的组件，这使得逆向传值复杂化

### ```redux```的方式
* ```store```管理```state```,当然也可以在组件中管理```state```(不推荐使用), 全局的方式
* ```action```编写应用逻辑, 不管封装多少层, 你都可以在子组件中通过```connect```方法连接```action```, ```action```通过```dispatch```通知负责目的父组件```state```的```reducer```更新```state```中的变量, 更新父组件,组件中的逻辑代码被抽开，在这里可以编写交互事件的逻辑，网络请求，数据处理等，降低了模块间耦合度
* ```reducer```管理state的更新与否，当然最好配合Immutable使用更加方便

## 学习经历
***
目前移动端的混合开发越来与火了,目前比较成熟的混合开发框架包括```react-native,Ionic,Weex```等,总之很多

相比下react-native还是蛮火的，不仅有成熟的web框架react,还有react-native开发移动app

我前段时间学习```react-native```的学习历程
* ```react-native```官方网站```api```
* [开源项目](http://www.jianshu.com/p/470606826b12)


个人学习中做的小Demo,有兴趣可以共同学习一下
[react-learn](https://github.com/liuboshuo/react-learn)不断更新...


## 项目简介
***
纯粹使用```react-native```的UI组件和提供的```Animated Api```实现的一款天气预报的app；功能主要包括：城市列表，城市搜索，城市添加，设置默认城市，15天天气预报，24小时天气详情，生活指数，天气详情。
技术点实现：
* 分页组件
* 仿```iOS```的搜索框
* 毛玻璃效果
* 侧滑删除，设置默认
* ```FlatList``` 横向
* 导航组件
* 组件数据流的传递
* 基于```react-native```实现的简单动画
* 导航条的封装
* 手势与动画相结合的滑动效果的实现


## 项目截图
***
https://github.com/liuboshuo/react-native-food


## 使用框架
***
```
"react": "16.0.0-alpha.6",
"react-native": "0.44.0",
"react-native-blur": "^3.1.2",
"react-native-deprecated-custom-components": "^0.1.0",
"react-native-drawer": "^2.3.0",
"react-native-swipeout": "^2.0.13"

```
* ```react-native-deprecated-custom-components```是facebook废弃的组件框架
  * 项目用到了```naviagtor```实现导航组件, 在0.44.0的```react-native```已经被废弃,官方已经推荐```react-navigation```,下一个[菜谱项目](https://github.com/liuboshuo/react-native-food)项目会用到
* ```react-native-swipeout```实现侧滑功能
> [react-native-swipeout](https://github.com/root-two/react-native-drawer)

* ```react-native-drawer``` 实现侧边栏效果
> [react-native-drawer](https://github.com/root-two/react-native-drawer)

* ```react-native-blur``` 实现毛玻璃效果
> [react-native-blur](https://github.com/react-native-community/react-native-blur)

## 项目安装,运行
***
### 下载

```
git clone https://github.com/liuboshuo/react-native-weather.git
```

### 安装

切换到项目工作环境,在terminal执行

```
npm install

react-native link react-native-blur

```

### 运行

```
react-native run-android
```

Run ```android avd``` and start an emulator
```
react-native run-ios

```

## 心得
***
