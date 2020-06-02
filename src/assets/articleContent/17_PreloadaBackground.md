# 预加载背景

我们的资产文件夹中应该有一个bg_layer1.png文件。
让我们在preload（）中加载它，以便在create（）中使用它。

```javascript
 preload()
     {
    	 this.load.image('background', 'assets/bg_layer1.png')
     }
```

请注意，它使用关键字this。 它指的是类的实例。 在此特定示例中，这是游戏场景的当前实例。
游戏场景具有一个称为load的成员，该成员是从Phaser.Scene继承的。 见文档
在这里提到。
游戏将具有Phaser.Scene拥有的所有方法和属性，因为Game 来自
Phaser.Scene。 这在面向对象编程中称为继承。

load属性是Phaser.Loader.LoaderPlugin的实例，该实例具有用于加载图像，音频，spritesheet等的逻辑。
键入此代码时，请使用VS Code IntelliSense快速查看各种方法和属性。 加载..
我们的示例仅加载图像。 我们给它一个叫做“background”的键，然后是图像文件的路径。
该键稍后将用作创建由Phaser渲染的图像或精灵的参考。