window.$docsify = {
    name: 'jiajiacloud',
    repo: '',
    logo: './src/image/logo.png',
    homepage: 'zh-cn/README.md',
    basePath: 'pages/',
    loadSidebar: true,
    loadNavbar: true,
    maxLevel: 4,
    subMaxLevel: 10,
    alias: {
        '/_navbar.md': '/zh-cn/_navbar.md',
        '/_sidebar.md': '/zh-cn/_sidebar.md',
        '/zh-cn/.*/_navbar.md': '/zh-cn/_navbar.md',
        '/zh-cn/.*/_sidebar.md': '/zh-cn/_sidebar.md',
        '/en-us/.*/_navbar.md': '/en-us/_navbar.md',
        '/en-us/.*/_sidebar.md': '/en-us/_sidebar.md',
    },
    nameLink: {
        '/en-us': '#',
        '/zh-cn': '#',
        '/': '#',
    },
    markdown: {
        renderer: {
            // image: function (href, title, alt, size) {
            //     var obj = this.origin.image.apply(this, arguments)
            //     obj = obj.replace(/src="[^"]+"/, 'src="' + href + '"');
            //     return obj
            // }
        }
    },
    search: { // 完整配置参数
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: [
            '/',            // => /README.md
            '/en-us/',      // => /get-started.md
            '/zh-cn/',      // => /zh-cn/README.md
        ], // or 'auto'
        // 支持本地化
        placeholder: {
            '/en-us': 'Type to search',
            '/': '搜索'
        },
        noData: 'No Results!',
        // 支持本地化
        noData: {
            '/en-us': 'No Results',
            '/': '找不到结果'
        },
        // 搜索标题的最大程级, 1 - 6
        depth: 6
    }
}
