# 初始化场景属性

Game Scene的大多数类属性都是在create（）中设置或重置的。
除胡萝卜外，其余全部。 我们可以在create（）中执行this.carrotsCollected = 0，但是您可以使用另一个场景挂钩：

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // properties...
4
5 // contructor...
6
7 init()
8 {
9 this.carrotsCollected = 0
10 }
11
12 // other code...
13 }
```

Phaser在preload（）之前调用init（）方法。 顾名思义，这是进行初始化的好地方。
将上面类似的init（）方法添加到您的代码中，然后尝试一下。 现在一切都应该正常工作！

我们几乎已经完成了这个游戏。
我们只想向您展示一件事。
这是一本包含9章的书吗？ 让我们将其设为第10轮。我们还有另外1个尚未使用的艺术资产。
下一章将通过使用bunny1_jump.png图像添加一些动画来结束。