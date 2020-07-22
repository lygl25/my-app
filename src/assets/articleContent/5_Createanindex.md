# 创建index.html索引

每个Web应用程序都会index.html索引phaser游戏也一样。在显示项目文件夹的资源管理器面板中单击鼠标右键，然后选择“新建文件”使index.html索引文件。

你要把这个文件放在兔子跳的底部，和src在同一水平。

选择index.html索引并在下面插入HTML：

```html
 <html>
     <head>
         <title>Bunny Jump!</title>
        <script
         src="//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js">
         </script>
     </head>
     <body>
     	<script type="module" src="src/main.js"></script>
     </body>
 </html>
```

第5行是我们从互联网上包括Phaser 3框架的地方。

然后是9号线，包括main.js我们将要制作的javascript文件。

我们的游戏代码会从这个开始main.js文件。这也是我们比赛的切入点！