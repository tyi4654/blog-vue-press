---
title: 思途CMS
---

## 项目总览
思途CMS是一款基于PHP+MySQL的CMS系统，支持多种开发模式，包括：模块开发、主题开发
实现全平台销售的旅游电商系统，抢占PC、移动流量，丰富的旅游API接口，解决资源获取与分销问题，强大的功能，
满足业务所需，丰富的营销功能，让你销售更容易。
项目基于UniApp开发，该项目具备强大的跨平台能力，一套代码可以在H5、小程序和APP多端使用。通过UniApp的框架，我们实现了高效的开发和维护，使开发者能够更便捷地创建出色的应用体验。

  - **跨平台一体化开发：**  
    利用UniApp，我们成功实现了一套代码多端适配，省去了在不同平台独立开发的烦恼，提高了开发效率。

  - **统一的UI表现：**  
    我们注重统一的用户界面表现，确保在不同平台上呈现出一致性和专业性的UI设计，为用户提供流畅、直观的应用体验。
  
  - **优化用户体验：**  
    借助UniApp的优秀性能表现，我们致力于提供流畅、高效的用户体验，确保应用在各个平台上表现出色。
  
  - **灵活的扩展性：**  
    项目采用模块化设计，具备良好的扩展性和可维护性，方便根据需求不断扩展和升级功能。
  
  - **统一的开发语言：**  
    开发者可以使用Vue.js进行开发，统一的开发语言和技术栈降低了学习成本，使团队更具协同开发的能力。


## 项目仓库

**[GIT地址：https://e.coding.net/menglvcheng/situcms/uniapp.git](https://e.coding.net/menglvcheng/situcms/uniapp.git)**


## 目录结构
``` js
uni-cms  // 该项目是基于uniApp可视化模式创建，直接在HBuilderX中打开项目 运行和发布
├─ api // api管理目录
├─ components // 公共组件和自定义组件目录
├─ pages // 存放主包vue文件目录
├─ platforms // 整体目录条件编译,存放不同平台的文件
├─ static // 静态资源目录如：图片、字体等
├─ store // Vuex状态管理
├─ subPackages // 放置其他分包文件资源目录
├─ ttcomponents // 针对字节小程序的组件
├─ unpackage // 打包相关目录
├─ utils // 工具函数，JS功能模块
├─ App.vue // 项目的根组件，是页面入口文件
├─ common.scss
├─ config.js // 全局配置文件
├─ ext.json
├─ main.js // 项目入口文件
├─ manifest.json // 进行全局配置，决定应用的名称、图标、权限等
├─ pages.json // 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等
├─ template.h5.html // APP模板文件
├─ uni.scss // 预置的scss变量
└─ README.md
```


## 发版流程

  - 打开项目选择git 版本库的dev 分支，把最新的代码和本地代码合并
  - 在HBuilderX中打开项目，打开配置文件config.js 仔细核对需要调整的配置项:
![image.png](/images/1.png)

1、client_id、client_secret、baseUrl 根据需求修改; (具体修改规则到具体文件看说明)
![image.png](/images/9.png)

 2、devMode 需要改为false; (具体修改规则到具体文件看说明)
![image.png](/images/8.png)

3、在HBuilderX中选择菜单的发行选项，按需求生成H5版本或各小程序版本；

4、H5打包给后端统一升级， 待发布后去销售演示站升级测试


#### 小程序上传代码至微信开放平台草稿箱
![image.png](/images/2.png)
微信开发工具上传代码，需填写版本号与项目备注。  
版本号获取方式:   
  1、登录小助手切换到老版本  
  2、在小程序管理`小程序列表中找到微信旅游小程序，编辑就可以查看到版本号了，在此基础上版本+1。`


项目备注填写本次更新内容即可。


![image.png](/images/3.png)


#### 登录微信开放平台添加草稿到模板库

[平台地址：](https://open.weixin.qq.com/cgi-bin/index?t=home/index&lang=zh_CN)
  - 账号：**********     
  - 密码：**********
  - 登录成功后(`账号询问管理员`)，进入第三方平台，找到思途CMS查看详情


然后选择待开发小程序，下方草稿箱会有刚刚开发者工具上传的信息，点击添加至模板库，添加为普通模板即可。

然后在普通模板库中，拿到版本号与模板ID。

#### 修改"微信旅游小程序"的模板ID与产品版本号

登录小助手切换到老版本，然后在小程序管理->小程序列表中找到**微信旅游小程序**，编辑，填写上新的版本号和模板id，保存后就算发布成功了。


![image.png](/images/4.png)


#### H5演示站：
  - [前台地址](https://quanyu.souxw.com/h5)
  - [后台地址](https://quanyu.souxw.com/newtravel)

`账号询问管理员`

#### 小程序演示站：  
直接搜索下图账号，到官网升级

![image.png](/images/7.png)

#### 登陆官网会员中心小程序管理升级版本


![image.png](/images/5.png)


![image.png](/images/6.png)
