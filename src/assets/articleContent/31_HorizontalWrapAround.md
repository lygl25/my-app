# 水平环绕

无限跳投的预期行为是，当玩家经过屏幕的左右两侧时，玩家绕在屏幕周围。

Arcade Physics在世界上有一个wrap（）方法，但它也是垂直包装的。 

这对于像小行星这样的游戏来说是完美的，但对于这款游戏来说就不是那么完美了。

好消息是，水平屏幕包装的代码非常简单！

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // 以前的类代码...
4
5 update()
6 {
7 //以前的代码...
8
9 this.horizontalWrap(this.player)
10 }
11
12 /**
13 * @param {Phaser.GameObjects.Sprite} sprite
14 */
15 horizontalWrap(sprite)
16 {
17 const halfWidth = sprite.displayWidth * 0.5
18 const gameWidth = this.scale.width
19 if (sprite.x < -halfWidth)
20 {
21 sprite.x = gameWidth + halfWidth
22 }
23 else if (sprite.x > gameWidth + halfWidth)
24 {
25 sprite.x = -halfWidth
26 }
27 }
28 }
```

这个  horizontalWrap(sprite)方法是屏幕环绕逻辑所在的位置。 

方法声明上面的注释更像是JSDoc。 这一次它将定义sprite 参数设置为Phaser.GameObjects.Sprite

我们将只包装*player*，但这个方法可以包装任何 *Sprite* 。

您通常应该渴望编写更像这样的方法，并且具有更少的隐藏的内部依赖关系。 如果这听起来太混乱了，那就别担心了！

只要记住通用代码更可重用，可重用代码帮助我们更快地制作更好的游戏。

中的逻辑 在horizontalWrap 是相当直截了当的。 如果传入 sprite超过一半宽度的左边，然后传送到一半宽度的右边。 
当超过右侧宽度一半时，再进行相反操作。
我们在update（）的结尾处调用this.horizontalWrap，并将this.player作为sprite传入。
试试看，您应该会看到相机不再完全水平滚动，并且播放器将像快乐的兔子一样环绕屏幕！