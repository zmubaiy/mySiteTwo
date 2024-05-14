
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XXX文档中心',
  tagline: '开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5 等应用。',
  favicon: 'img/website/logo2.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',//前置路径
  organizationName: 'zmubaiy', // Usually your GitHub org/user name.
  projectName: 'mySite2', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',// 默认使用的语言
    locales: ['en', 'zh-Hans'],// 使用哪些语言
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // plugins: [
    // [
      // require.resolve("@cmfcmf/docusaurus-search-local"),
      // {
        // whether to index docs pages
        // indexDocs: true,
      
        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        // indexDocSidebarParentCategories: 0,
      
        // whether to index blog pages
        // indexBlog: true,
      
        // whether to index static pages
        // /404.html is never indexed
        // indexPages: false,
      
        // language of your documentation, see next section
        // language: ["en", "zh"],
      
        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        // style: undefined,
      
        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        // maxSearchResults: 8,
      // },
    // ],
  // ],

  //主题配置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // 顶部公告配置
      // announcementBar: {
      //   id: 'notice',
      //   content: '滚动的公告～',
      //   backgroundColor: '#2160fd',
      //   textColor: '#ffffff',
      //   isCloseable: true,
      // },

      // Lunr.js 的配置
      // search: {
      //   // Lunr.js 配置的其他部分
      //   // ...
      //   lunr: {
      //     // 中文语言支持的配置
      //     languages: ['en', 'zh-Hans'], // 支持的语言列表，包括中文
      //     tokenizerSeparator: /[\s\-/]+/,
      //     tokenizer: {
      //       // 中文分词器
      //       separator: /[\s\-/]+/,
      //       // 忽略的中文常见停用词
      //       stopWordFilter: (token) => {
      //         return lunr.stopWordFilter(token) && !token.match(/[\u4e00-\u9fa5]/);
      //       },
      //     },
      //   },
      // },

      algolia: {
        apiKey: "cc40f7960282c394028aacd9e84ba866",
        indexName: "mySite2",
        appId: "Z69UY9FZDH",
      },

      //导航条
      navbar: {
        title: '首页',
        // hideOnScroll: true,//页面向下滚动时收起顶部导航
        logo: {
          alt: 'My Site Logo',
          src: 'img/website/logo2.ico',
        },
        //导航条显示的产品文档，如果想增加额外的页面，可在此处
        items: [
          {
            to: '/docs/knowledge',
            position: 'left',
            label: '知识库',
          },
          {
            to: '/docs/introduction',
            position: 'left',
            label: '功能介绍',
          },
          {
            to: '/blog', //点击后跳转的链接，站内跳转用to，站外用href
            label: '功能优化', 
            position: 'left'
          },
          {
            to: '/docs/tools', 
            label: '工具推荐', 
            position: 'left'
          },
          {
            to: '/docs/about', 
            label: '关于本站', 
            position: 'left'
          },
          {
            type: "localeDropdown",
            position: "right",// 菜单的显示位置
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          }
        ],
      },

      //底部
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '知识库',
                to: '/docs/knowledge',
              },
              {
                label: '功能介绍',
                to: '/docs/introduction',
              },
              {
                label: '功能优化',
                to: '/blog',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                html: `
                  <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                    <img src="/img/docusaurus-social-card.jpg" alt="build with docusaurus" width="120" height="50"/>
                  <a/>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
