# 具有跳跃纹理的简单动画

这不是带有Spritesheet的传统意义上的真实动画。
我们将在发生跳跃时简单地切换兔子的活动纹理，并在兔子开始掉落时将其切换回原来的状态。
首先，让我们像处理游戏场景中的其他图像一样预加载bunny1_jump.png：

```javascript
1 preload()
2 {
3 // other images...
4
5 this.load.image('bunny-jump', 'assets/bunny1_jump.png')
6
7 // cursor keys...
8 }
```

您应该完全了解这里发生的事情。
接下来，在update（）中，我们将y速度设置为-300，我们想要切换到使用该跳转纹理：

```javascript
1 update()
2 {
3 // previous code...
4
5 const touchingDown = this.player.body.touching.down
6
7 if (touchingDown)
8 {
9 this.player.setVelocityY(-300)
10
11 // switch to jump texture
12 this.player.setTexture('bunny-jump')
13 }
14
15 // other code...
16 }
```

我们使用this.player.setTexture（'bunny-jump'）切换到我们
预装。

保存更改并在游戏中签出。 兔子应该以站立姿势开始，直到跳跃。
看起来好一点不是吗？
但是有一个问题……它永远不会变回来！

24/5000

## 切换回原位

一旦兔子开始掉落，我们想切换回站立的图像。
我们如何检测何时不再从跳跃中升起？ 而是被重力拉倒了吗？
你怎么看？
也许与速度有关？ 确实如此！
我们只需要检查y速度是否大于0即可知道兔子在下降而不在上升。
将其添加到以上示例代码中的update（）下：

```javascript
1 update()
2 {
3 // previous code...
4
5 const touchingDown = this.player.body.touching.down
6
7 if (touchingDown)
8 {
9 this.player.setVelocityY(-300)
10
11 // switch to jump texture
12 this.player.setTexture('bunny-jump')
13 }
14
15 const vy = this.player.body.velocity.y
16 if (vy > 0 && this.player.texture.key !== 'bunny-stand')
17 {
18 // switch back to jump when falling
19 this.player.setTexture('bunny-stand')
20 }
21
22 // other code...
23 }
```

我们可以通过访问玩家物理身体的速度属性来获得y速度。
然后，我们检查它是否大于0，并且玩家的当前纹理还不是“兔子站”。
如果是这样，我们将纹理更改回立式图像。 测试一下，看看外观如何！
感觉更活泼不是吗？