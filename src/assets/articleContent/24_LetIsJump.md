# 让我们跳

现在我们有了player作为类的属性，我们可以在update（）中使用它来检查兔子何时降落在平台上。

```javascript
1 update()
2 {
3 // 从Arcade Physics中找出player的物理身体
4 // 在触摸下面的东西
5 const touchingDown = this.player.body.touching.down
6
7 if (touchingDown)
8 {
9 // 这使得兔子直线向上跳跃
10 this.player.setVelocityY(-300)
11 }
12 }
```

现在保存您的更改，并且每次兔子降落在平台上时，它们都会跳。
它也将超越我们想要的平台。 玩家应该能够
通过平台跳起，仅在着陆时发生碰撞。
我们应该怎么做？
植物学想法？
认真地，什么得到了？
有什么事吗 我知道您会想到一些东西！
Arcade Physics实际上使这变得非常容易！ 但首先…