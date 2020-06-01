# VSCode智能感知

在开始编写游戏代码之前，我们还会做一件事。
Visual Studio Code是一个出色的代码编辑器，成千上万的专业人员使用它来开发我们每天使用的应用程序。
而且它是完全免费的！
VS Code最有用的功能之一是代码完成或IntelliSense。
并且为了获得诸如Phaser之类的外部库的功能，我们需要以类型定义的形式提供一些帮助。
Phaser包含一个官方的类型定义文件，您可以在Github上找到该文件，方法是转到官方Phaser存储库中的types文件夹。
如果链接不起作用或看起来不正确，请访问Github.com并搜索“ photonstorm / phaser”。
点击phaser.d.ts，然后使用Github的“下载”按钮获取文件或选择“查看原始文件”，然后将内容复制并粘贴到名为phaser.d.ts的文件中。
在src文件夹下创建一个名为types的文件夹，并将phaser.d.ts文件放在此处。

接下来，在与索引相同级别的项目基础上创建一个名为jsconfig.json的新文件。 html并插入以下内容：

```json
{
	"compilerOptions": {
	"module": "es6",
	"target": "es6"
	}
 }

```

此jsconfig.json文件用于为VS Code配置JavaScript处理。 最后，您的项目结构应如下所示：

```
 bunny-jump
 o-- src
 o-- types
 -- phaser.d.ts
 -- main.js
 -- index.html
 -- jsconfig.json
 
```

返回main.js并键入Phaser。。您应该获得一个内联菜单，该菜单具有与Phaser相同的不同属性，例如AUTO。
如果您无法正常工作，请给我们发送一条推文@ourcadehq。 附上VS Code的屏幕截图或您所看到的简短视频。

