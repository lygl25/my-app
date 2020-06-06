# 左右移动

目前，我们的游戏更多的是一个无限的视频，而不是一个游戏。

它只是在自我发挥。

让我们通过增加玩家输入键盘来改变这一点。

我们需要能够左右移动，在不在我们正下方的平台上着陆。

相位器给了我们一个非常方便的方法来获得和使用键盘箭头键。

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // 以前的代码...
4
5 /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
6 cursors
7
8 // 构造函数...
9
10 preload()
11 {
12 // 以前的预加载代码...
13
14 this.cursors = this.input.keyboard.createCursorKeys()
15 }
16
17 // other code...
```

我们添加另一个名为cursors的类属性，并使用JSDoc给它一个类型。 这个现在应该很熟悉了！ 

然后，在preload（）方法的末尾，我们将this.cursors设置为this.input的结果。 

CreateCursorKeys（）。

注意，我们还可以在create（）中设置this.cursors。 您想在哪里拥有它是一个风格或具体实现要求的问题。 

在这种情况下，完全是风格问题。



## 处理移动逻辑

现在我们有了箭头或光标键，我们可以检查它们何时被按下，并改变玩家的速度。

我们将在update（）方法中完成此操作: 

```javascript
1 update(t, dt)
2 {
3 //平台重用代码...
4
5 const touchingDown = this.player.body.touching.down
6
7 if (touchingDown)
8 {
9 this.player.setVelocityY(-300)
10 }
11
12 // 左右输入逻辑
13 if (this.cursors.left.isDown && !touchingDown)
14 {
15 this.player.setVelocityX(-200)
16 }
17 else if (this.cursors.right.isDown && !touchingDown)
18 {
19 this.player.setVelocityX(200)
20 }
21 else
22 {
23 //如果不是向左或向右，则停止移动
24 this.player.setVelocityX(0)
25 }
26 }
```

我们可以检查是否按下了左箭头键，使用 这个。游标。左。ISDOWN的右箭头键也是如此 这个。游标。右。ISDOWN。

如果按下键，则设置 X到达速度 -200左侧和 200为右。 

当没有按下任何东西时，我们设置 X到达速度 0停止水平运动。 

我们也只允许左右移动，当兔子 不是触碰由以下因素确定的平台 触地。

游戏现在应该让你左右移动兔子时，它是在空中。

试试看！

你会注意到相机跟着你左右移动。 那不是我们想要的。

相机不应水平滚动，播放器通过左右两侧时应绕圈。