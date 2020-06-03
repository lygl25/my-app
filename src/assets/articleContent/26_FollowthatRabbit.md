# 跟着那只兔子！

游戏核心机制正在运行，但这应该是一个无限的跳投。 这意味着我们必须跟随兔子的跳跃。
Phaser使Camera变得非常简单：

```javascript
1 create()
2 {
3 // previous code...
4
5 this.cameras.main.startFollow(this.player)
6 }
```

而已！ 只需1行。
现在，我们的下一个问题是我们已经用光了平台，无法继续前进。 这是游戏开发还是问题困扰？
这是一个技巧问题。 它们实际上是相同的！ 接下来，我们将处理滚动平台。