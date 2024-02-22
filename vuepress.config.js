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
                text: '风格',
                link: '/style/'
            },
            {
                text: '项目',
                children: [
                    {
                        text: 'uni-app',
                        children: [
                            {
                                text: '思途CMS',
                                link: '/project/uni-app/situ-cms.md',
                                activeMatch: '^/project/uni-app/situ-cms'
                            },
                            {
                                text: '梦旅程电商小程序',
                                link: '/project/uni-app/mlc-miniprogram.md',
                                activeMatch: '^/project/uni-app/mlc-miniprogram'
                            },
                            {
                                text: '智旅互联APP',
                                link: '/project/uni-app/zlhl.md',
                                activeMatch: '^/project/uni-app/zlhl'
                            }
                        ]
                    },
                    {
                        text: 'vue.js',
                        children: [
                            {
                                text: '梦旅程酒店房态PMS',
                                link: '/project/vue/hotel-pms.md',
                                activeMatch: '^/project/vue/hotel-pms'
                            },
                            {
                                text: '文旅游产业监测',
                                link: '/project/vue/monitor-system.md',
                                activeMatch: '^/project/vue/monitor-system'
                            },
                            {
                                text: '思途智旅SCRM',
                                link: '/project/vue/scrm.md',
                                activeMatch: '^/project/vue/scrm'
                            }
                        ]
                    }
                ]
            },
            {
                text: '笔记',
                children: [
                    {
                        text: '客户端',
                        children: [
                            {
                                text: 'html',
                                link: '/note/client/html.md',
                                activeMatch: '^/note/client/html'
                            },
                            {
                                text: 'css',
                                link: '/note/client/css.md',
                                activeMatch: '^/note/client/css'
                            },
                            {
                                text: 'javascript',
                                link: '/note/client/javascript.md',
                                activeMatch: '^/note/client/javascript'
                            },
                            {
                                text: 'vue',
                                link: '/note/client/vue.md',
                                activeMatch: '^/note/client/vue'
                            },
                            {
                                text: 'react',
                                link: '/note/client/react.md',
                                activeMatch: '^/note/client/react'
                            },
                            {
                                text: '小程序',
                                link: '/note/client/miniprogram.md',
                                activeMatch: '^/note/client/miniprogram'
                            }
                        ]
                    },
                    {
                        text: '服务端',
                        children: [
                            {
                                text: 'nodejs',
                                link: '/note/server/nodejs.md',
                                activeMatch: '^/note/server/nodejs'
                            },
                            {
                                text: 'mysql',
                                link: '/note/server/mysql.md',
                                activeMatch: '^/note/server/mysql'
                            },
                            {
                                text: 'mongodb',
                                link: '/note/server/mongodb.md',
                                activeMatch: '^/note/server/mongodb'
                            },
                            {
                                text: 'nuxtjs',
                                link: '/note/server/nuxtjs.md',
                                activeMatch: '^/note/server/nuxtjs'
                            }
                        ]
                    }
                ]
            },
            {
                text: '工具',
                link: '/tools/'
            },
            {
                text: '组件',
                link: '/components/'
            }
        ],
        sidebar: {
            '/style/': [
                {
                    text: '前端规范',
                    children: ['/style/']
                }
            ],
            '/project/': [
                {
                    text: '项目介绍',
                    children: [
                        '/project/uni-app/situ-cms.md',
                        '/project/uni-app/mlc-miniprogram.md',
                        '/project/uni-app/zlhl.md',
                        '/project/vue/hotel-pms.md',
                        '/project/vue/monitor-system.md',
                        '/project/vue/scrm.md'
                    ]
                }
            ],
            '/note/': [
                {
                    text: '客户端',
                    children: [
                        '/note/client/html.md',
                        '/note/client/css.md',
                        '/note/client/javascript.md',
                        '/note/client/vue.md',
                        '/note/client/react.md',
                        '/note/client/miniprogram.md'
                    ]
                },
                {
                    text: '服务端',
                    children: [
                        '/note/server/nodejs.md',
                        '/note/server/mysql.md',
                        '/note/server/mongodb.md',
                        '/note/server/nuxtjs.md'
                    ]
                }
            ],
            '/tools/': ['/tools/'],
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
        },
        lastUpdated: false
    }),
    plugins: [vuepressPluginV2Demoblock()]
})
