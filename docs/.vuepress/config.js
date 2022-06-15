module.exports = {
  title: '前端文档',
  description: '前端开发文档',
  theme: 'reco',
  base: '/blog/',
  themeConfig: {
    logo: '/img/logo.png',
    lastUpdated: '上次更新',
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '友情链接',
        items: [
          { text: 'Github', link: 'https://github.com' }
        ]
      }
    ],
    sidebar: [
      {
          title: '开始',
          path: '/',
          collapsable: true, // 不折叠
          children: [
              { title: "快速入门", path: "/" }
          ]
      },
      {
        title: "基础",
        path: '/handbook/Base',
        collapsable: true, // 不折叠
        children: [
          { title: "基础", path: "/handbook/Base" }
        ],
      }
    ]
  }
}