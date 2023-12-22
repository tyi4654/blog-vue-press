import { defineUserConfig, defaultTheme } from 'vuepress'
import vuepressPluginV2Demoblock from 'vuepress-plugin-v2-demoblock'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '思途智旅',
    description: '一个简洁、优雅、大气的VuePress 博客&文档主题',
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    theme: defaultTheme({
        navbar: [
            {
                text: '介绍',
                link: '/guide/'
            },
            {
                text: '项目',
                link: '/project/'
            },
            {
                text: '组件',
                link: '/components/'
            }
        ],
        sidebar: {
            '/project/': [
                {
                    text: '项目介绍',
                    children: [
                        '/project/思途CMS.md',
                        '/project/梦旅程电商小程序.md',
                        '/project/梦旅程酒店房态PMS.md',
                        '/project/智旅互联APP.md',
                        '/project/文旅游产业监测.md'
                    ]
                }
            ],
            '/components/': [
                {
                    text: '基础组件',
                    children: [
                        '/components/button.md',
                        '/components/select.md',
                        '/components/list.md',
                        '/components/calendar.md'
                    ]
                }
            ]
        }
    }),
    plugins: [vuepressPluginV2Demoblock()]
})
