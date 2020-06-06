# 创建一组启用物理的胡萝卜

让我们删除刚刚添加到*create（）*的胡萝卜代码。 我们将很快用更好的代码替换它。
首先，我们需要一个创建*Carrot*实例的*Group*。

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // previous properties...
4
5 /** @type {Phaser.Physics.Arcade.Group} */
6 carrots
7
8 create()
9 {
10 // previous code...
11
12 this.carrots = this.physics.add.group({
13 classType: Carrot
14 })
15
16 this.carrots.get(240, 320, 'carrot')
17 }
18 }
```

就像我们在平台上所做的一样，像在第6行上一样创建一个胡萝卜类属性。
然后在*create（）*的底部添加一个物理组，并传入一个配置对象，指定
*classType*为*Carrot*。
物理组默认情况下将创建*Phaser.Physics.Arcade.Sprite*实例。 指定
*classType*让我们更改它。
最后，我们在屏幕中间创建一个测试胡萝卜。
保存您的更改，您应该看到胡萝卜出现，然后跌落到了厄运。