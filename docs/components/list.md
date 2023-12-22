---
title: 导航栏
---

### 自定义导航栏

``` js
/**
 * stCustomHeader 导航栏
 * @description 自定义导航栏组件, 原生导航栏不满足功能时替换
 * @author xuqiang 2023-11-08
 * @property {String} title  页面标题
 * @property {String} titleColor  标题颜色
 * @property {String} titleSize  字体大小
 * @property {String} iconColor  返回
 * @event {Function()} backPrevPage 点击事件
 */  

export default {
    name:"st-custom-header",
    props: {
        title: {
            type: String,
            default: '标题'
        },
        titleColor: {
            type: String,
            default: '#fff'
        },
        titleSize: {
            type: [String, Number],
            default: 16
        },
        iconColor: {
            type: String,
            default: '#fff'
        }
    }
}
```