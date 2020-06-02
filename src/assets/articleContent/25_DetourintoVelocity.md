# 绕行速度

如果您知道自己的速度，则跳过此步。
速度就是位置的变化……您的物理老师说。 如果那时那没有意义的话，那可能现在就没有意义了。
因此，让我们尝试一下…
在上方代码段的第10行，我们将沿y轴的垂直速度设置为-300。 这意味着每帧将y位置值更改-300像素。 如果您从0开始，那么您将处于
-300 in 1帧，-600 in 2帧等
那些关注的人可能想知道为什么兔子然后不飞出屏幕？ 游戏高度仅为640像素。
它应该在3帧屏幕外！ 而且这不是Jazz Jackrabbit游戏，是的，游戏历史爱好者可以参考90年代。
回想一下main.js中的引力设置为y：200。
初始-300推力后，Arcade Physics将进行所有数学运算以调整每帧的速度。 您可以调整这些数字以更改跳跃感。

回到我们的碰撞问题。 我们只希望在平台上着陆时发生碰撞。 这是我们需要做的：

```javascript
1 create()
2 {
3 // previous code...
4
5 this.player.body.checkCollision.up = false
6 this.player.body.checkCollision.left = false
7 this.player.body.checkCollision.right = false
8 }
```

Phaser.Physics.Arcade.Body类具有checkCollision属性，我们可以在其中设置想要碰撞的方向。
默认情况下，所有方向都是true属性。
对于我们的玩家，我们可以将其设置为false，将left和right设置为false，而将其保留为要检查的碰撞。

兔子现在应该跳过平台，降落在平台上，然后再次跳。 刷新几次以查看其如何在不同的平台位置上工作。