import WhyWebandnotUnity from "./book/Introduction/WhyWebandnotUnity"



const directory=[
    {
      icon: "mdi-book-open-page-variant",
      "icon-alt": "mdi-chevron-down",
      text: "导言",
      model: false,
      children: [
        { text: "为什么是Web而不是Unity？" ,articleContent:WhyWebandnotUnity},
        { text: "为什么使用现代JavaScript",articleContent:"内容2" },
        { text: "如何使用这本书",articleContent:"内容3" },
        { text: "示例源码" ,articleContent:"内容4"},
      ],
    },
    {
      icon: "mdi-speedometer",
      text: "入门",
      model: false,
      children: [
        { text: "创建新文件夹",articleContent:"(未完成)" },
        { text: "开发服务器",articleContent:"(未完成)"  },
        { text: "创建index.html",articleContent:"(未完成)"  },
        { text: "创建入口点" ,articleContent:"(未完成)" },
        { text: "让我们去直播吧" ,articleContent:"(未完成)" },
        { text: "现代JavaScript",articleContent:"(未完成)"  },
        { text: "使用模块",articleContent:"(未完成)"  },
        { text: "VS代码IntelliSense" ,articleContent:"(未完成)" },
        { text: "准备好，一号9号选手",articleContent:"(未完成)"  },
      ],
    },
    {
      icon: "mdi-numeric-1-box-multiple",
      text: "设置游戏",
      model: false,
      children: [
        { text: "创建相位器游戏",articleContent:"(未完成)"  },
        { text: "创建游戏场景" ,articleContent:"(未完成)" },
        { text: "绕道入班",articleContent:"(未完成)"  },
        { text: "开始游戏场景",articleContent:"(未完成)"  },
        { text: "预加载背景",articleContent:"(未完成)"  },
        { text: "创造背景",articleContent:"(未完成)"  },
      ],
    },
    {
      icon: "mdi-numeric-2-box-multiple",
      text: "创建平台",
      model: false,
      children: [
        { text: "添加拱廊物理",articleContent:"(未完成)" },
        { text: "添加物理支持平台" ,articleContent:"(未完成)" },
        { text: "添加多个平台" ,articleContent:"(未完成)" },
      ],
    },
    {
      icon: "mdi-numeric-3-box-multiple",
      text: "创建播放器",
      model: false,
      children: [
        { text: "添加碰撞" ,articleContent:"(未完成)" },
        { text: "使用类属性" ,articleContent:"(未完成)" },
        { text: "我们跳吧",articleContent:"(未完成)"  },
        { text: "我们跳吧",articleContent:"(未完成)"  },
        { text: "迂回进入速度" ,articleContent:"(未完成)" },
        { text: "跟着那只兔子",articleContent:"(未完成)"  },
      ],
    },
    {
      icon: "mdi-numeric-4-box-multiple",
      text: "滚动平台",
      model: false,
      children: [{ text: "再利用和再循环",articleContent:"(未完成)"  }, 
                  { text: "保持背景滚动" ,articleContent:"(未完成)" }],
    },
    {
      icon: "mdi-numeric-5-box-multiple",
      text: "左右移动",
      model: false,
      children: [
        { text: "处理移动逻辑" ,articleContent:"(未完成)" },
        { text: "使用相机死区",articleContent:"(未完成)"  },
        { text: "水平环绕" ,articleContent:"(未完成)" },
      ],
    },
    {
      icon: "mdi-numeric-6-box-multiple",
      text: "收集胡萝卜",
      model: false,
      children: [
        { text: "在游戏中加入胡萝卜",articleContent:"(未完成)"  },
        { text: "创建一组物理驱动的胡萝卜",articleContent:"(未完成)"  },
        { text: "清理绕道" ,articleContent:"(未完成)" },
        { text: "把胡萝卜放在平台上" ,articleContent:"(未完成)" },
        { text: "让我们收集一些胡萝卜" ,articleContent:"(未完成)" },
        { text: "再利用胡萝卜" ,articleContent:"(未完成)" },
      ],
    },
    {
      icon: "mdi-numeric-7-box-multiple",
      text: "记分",
      model: false,
      children: [{ text: "更新收集的胡萝卜案文",articleContent:"(未完成)"  }],
    },
    {
      icon: "mdi-numeric-8-box-multiple",
      text: "处理游戏超过",
      model: false,
      children: [
        { text: "Scene52上的游戏" ,articleContent:"(未完成)" },
        { text: "添加再次播放" ,articleContent:"(未完成)" },
        { text: "初始化场景属性",articleContent:"(未完成)"  },
      ],
    },
    {
      icon: "mdi-numeric-9-box-multiple",
      text: "简单的动画与跳转纹理",
      model: false,
      children: [{ text: "切换回Stand" ,articleContent:"(未完成)" },
                 { text: "还有一件事…" ,articleContent:"(未完成)" }],
    },
  ]

export default directory