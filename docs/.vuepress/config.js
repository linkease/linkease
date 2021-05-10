module.exports = ctx => ({
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
    // 部署站点的基础路径
    base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'public/assets/'
            }
        }
    },
    // 站点标题
    title: '易有云 远程文件管理',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理',
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.png' }
        ]
    ],
    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
            // title: 'DDNSTO',
            description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理'
        },
    },
    themeConfig: {
        // 站点logo
        logo: '/image/logo.png',
        // 页面配置
        locales: {
            // 中文
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '安装', link: '/zh/docs/' },
                    { text: '文档', link: '/zh/guide/' },
                    { text: '视频号',  items: [
                        { text: '哔哩哔哩', link: 'https://space.bilibili.com/626572404' },
                        { text: '头条号', link: 'https://bit.ly/3cFVAuY' },
                      ] },					
                    { text: '反馈',  items: [
			 { text: '问题反馈', link: 'https://github.com/linkease/linkease/issues' },
                        { text: '问卷调查', link: 'https://wj.qq.com/s2/8425893/80c4/' },
                        { text: '联系我们', link: '/zh/docs/about' }
                      ] },
                    { text: '下载', link: 'https://www.ddnsto.com/linkease/download/#/' },
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            title: "文档",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "基础信息"],
								["Scene", "使用场景"],
                            ]
                        },
                    ],
                    '/zh/docs/': [
                      {
                            title: "安装指南",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                	["", "介绍"],
									["store", "存储端安装"],
									["download", "客户端安装"],									
                                	["tutorial", "移动端基础教学"],
                                	["pc", "PC端基础教学"],
                                	["tv", "TV端基础教学"],                               	
                                	["question", "常见问题"],
                                	["about", "联系我们"],
                            ]
                      },
                    ]
                }
            },
        },
        // 最后更新时间
        // lastUpdated: 'Last Updated', // string | boolean
        // 搜索
        // search: false,
        // searchMaxSuggestions: 10
    },
})
