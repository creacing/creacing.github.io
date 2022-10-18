import avator from './../public/images/avator.jpg'
const author = 'Cheshire Cat'
const config = {
    author,
    CNName: '柴郡猫',
    description: 'Wonderland',
    nav: [
        { name: author, link: "/", children: [], liClass: 'title', rel: 'start', iClass: '', aClass: '' },
        { name: '首页', link: "/", children: [], liClass: '', rel: 'section', iClass: 'i-feather', aClass: '' },
        { name: '归档', link: "/archives", children: [], liClass: '', rel: 'section', iClass: 'i-list-alt', aClass: '' },
        { name: '标签', link: "/tags", children: [], liClass: '', rel: 'section', iClass: 'i-tags', aClass: '' },
        { name: '收藏', link: "/WebSites", children: [], liClass: '', rel: 'section', iClass: 'i-star', aClass: '' },
        { name: '关于', link: "/about", children: [], liClass: '', rel: 'section', iClass: 'i-cloud', aClass: '' },
        { name: 'Github', link: "#", children: [], liClass: '', rel: 'noopener external nofollow noreferrer', iClass: 'i-paper-plane', aClass: '' }
    ],
    sidebar: {
        avator,
        author,
        description: '一个专注于前端的web爱好者',
        articlesNum: '0',
        categoriesNum: '0',
        tagsNum: '33',
        socialLinks: [
            { url: 'https://github.com/creacing/Close_To_Me', name: 'github', icon: "i-github" },
            { url: 'https://twitter.com/', name: 'twitter', icon: "i-twitter" },
            { url: 'https://www.zhihu.com/people/', name: 'zhihu', icon: "i-zhihu" },
            { url: 'https://music.163.com/', name: 'music', icon: "i-cloud-music" },
            { url: 'https://t.me/', name: 'telegram', icon: "i-paper-plane" },
        ],
        localPath: [
            { url: '/', icon: 'i-feather', name: 'could1', },
            { url: '/archives', icon: 'i-list-alt', name: 'could2', },
            { url: '/tags', icon: 'i-tags', name: 'could3', },
            { url: '/WebSites', icon: 'i-star', name: 'could4', },
            { url: '/about', icon: 'i-cloud', name: 'could5', }
        ]
    },
    sites: [
        { url: "https://www.remove.bg/zh", title: "在线抠图", color: "", description: '在线抠图' },
        { url: "http://www.sortablejs.com/", title: "sortablejs", color: "", description: '功能强大的javascript拖拽库' },
        { url: "http://tool.c7sky.com/webcolor/", title: "网页设计常用色彩搭配表", color: "", description: '网页设计常用色彩搭配表' },
        { url: "http://www.googlefonts.net/", title: "谷歌字体", color: "", description: '谷歌字体' },
        { url: "https://jpgmin.cn/", title: "压图大师", color: "", description: '压图大师' },
        { url: "https://www.fontke.com/tool/rgb/eee5f8/", title: "颜色查询", color: "", description: '颜色查询' },
        { url: "https://animista.net/play/basic/rotate", title: "css动画大全", color: "", description: 'css动画大全' }

        
    ],
    //colud color
    cloudColorList: [
        '#747bff',
        '#646cff',
        '#cf9baa',
        '#de8293',
        '#5b93b1',
        '#1b5489',
        '#7690b8',
        '#cfd8e0',
        '#6896b7',
        '#db8ea6',
        '#7b9361',
        '#3b6f87',
        '#b85b6c',
        '#dd8a94',
        '#f38b61',
        '#ffa842',
        '#596085',
        '#3e3a64',
        '#e15195',
        '#5fa3d5',
        '#7c94b1',
        '#3e749f',
        '#da7b35',
        '#ff9d4e',
        '#345a6d',
    ]
}
export default config