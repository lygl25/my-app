# 使用类属性

我们有一个玩家角色，但它什么也没做。
我们修改后，兔子降落到平台后添加一个自动跳跃。

我们将需要向update（）方法添加逻辑。 您可能听说过“更新循环”一词。
这是指在每一帧都被调用的代码。 将效率低下的代码放入update（）通常是导致性能不佳的原因。
您不必担心此游戏中的任何问题。 只要记住，update（）中的任何内容
将一遍又一遍地执行。
因此，我们进行一些更改，以便我们检查兔子何时降落在平台上。
在update（）中进行校检，我们需要对兔子的引用。 目前，我们只能使用本地player变量访问create（）中的player。
这是我们需要更改的内容：

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 /** @type {Phaser.Physics.Arcade.Sprite} */
4 player
5
6 // 构造函数，预加载... ...
7
8 create()
9 {
10 // platform code...
11
12 // change to use class property this.player
13 this.player = this.physics.add.sprite(240, 320, 'bunny-stand')
14 .setScale(0.5)
15
16 // same thing here in the second parameter
17 this.physics.add.collider(platforms, this.player)
18 }
19
20 update()
21 		{
22 			}
23 }
```

我们之前已经在第3行看到过这种符号。这是一个JSDoc注释。 JSDoc是用于生成文档的JavaScript文档语法。
很酷的故事，但是……我们实际上并不在乎。
我们之所以使用它，是因为VS Code使用它来提供有关属性和变量的类型信息。
这使IntelliSense在我们使用player属性时可以继续提供帮助。它还可以帮助我们或阅读代码的其他人知道player是Phaser.Physics.Arcade.Sprite。
在第4行之后，紧接着是player属性的声明，该属性将用作this.player。

您可以在create（）中看到我们已经从使用本地变量播放器更改为class属性这个玩家。
确保注意this.physics.add.collider（）的更改。这是确保您关注的测试！
最后一件事是新的update（）方法。现在将其留空。
测试我们刚刚进行的更改。游戏应该仍然像以前一样工作。
如果它不像以前那样工作，请确保在所有地方都使用this.player。
以前使用过。