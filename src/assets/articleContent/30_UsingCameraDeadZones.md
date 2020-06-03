# 使用相机死区

我们可以用一个很宽的死区来阻止相机水平滚动。

一个死区是一个区域周围的相机不会滚动播放器。

你可能在很多游戏中看到过这样的场景，让你到处跑，而不会因为摄像机的移动而晕车。

下面是我们在游戏中设置横向死区的方法:

```javascript
1 create()
2 {
3 // 以前的代码...
4
5 this.cameras.main.startFollow(this.player)
6
7 // 将水平死区设置为1.5倍游戏宽度
8 this.cameras.main.setDeadzone(this.scale.width * 1.5)
9 }
```

首先要注意的是，我们使用的Phaser ScaleManager以…获得比赛的宽度 this.scale.width.

这是获得游戏宽度和高度的推荐方式，而不是使用固定的数字。

我们乘以1.5，为以后实现环绕屏幕播放器提供空间。

 要实际设置死区，我们使用this.camera.main.setDeadZone（）。

 轻松搞定！

 保存您的更改，游戏将不再左右滚动，除非您移动方式离开屏幕。

 

接下来我们会用一个小屏幕包装来修复它！