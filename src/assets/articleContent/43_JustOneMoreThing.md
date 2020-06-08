# 还有一件事…

我们仅能向您展示一件事，那就是增加跳跃的音效。 我们正在使用的跳跃声音来自Kenney的Digital Audio包。
只需转到http://kenney.nl，单击Assets，然后选择Audio，然后找到Digial Audio。 他还有许多其他声音效果，您可以在此游戏或其他游戏中使用。 音频文件将以ogg文件的形式出现，如果您使用Windows，那就没问题了。
如果您使用的是Mac，则需要将其转换为mp3或wav。
从“数字音频”包中找到phaseJump1.ogg文件，并将其复制到下面的sfx文件夹中
图像所在的资产。
我们可以以类似于图像的方式加载音频。 将此添加到游戏场景中的preload（）：

```javascript
1 preload()
2 {
3 // images...
4
5 this.load.audio('jump', 'assets/sfx/phaseJump1.ogg')
6
7 // cursor keys...
8 }
```

就像加载图像一样，我们给this.load.audio（）一个键作为第一个参数，并将音频文件的路径作为第二个参数。
现在要播放声音，我们可以在每次兔子跳跃时调用this.sound.play（）：

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
13
14 // play jump sound
15 this.sound.play('jump')
16 }
17
18 // other code...
19 }
```

您只需要第15行上的简单代码即可。
保存您的更改并尝试一下。 确保您的音量不为0。每次兔子跳动时，您都会听到悦耳的跳动声。

好吧，我们现在真的完成了。
恭喜你！ 您已经学到了很多有关使用Phaser 3用现代JavaScript制作游戏的知识。
这款游戏至少还有一个问题，我们将留给您解决。 兔子跳是一个无限的跳投者，它将对99.9％的玩家显示为无限。
0.01％播放器的问题在于JavaScript或任何编程语言中的数字值都有最大值。 他们不能拥有无限的价值。
玩家每次跳跃都会增加y值。 这可以一直持续到超过最大值，然后发生意外情况。
您能提出什么想法来解决这个问题？
我们如何才能做出像无限一样的有限行为？ 游戏开发是解决问题的方法。
祝好运！

