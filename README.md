# **更好的 Github Contributions Gragh**
✨个性化你的 Github Contribution Gragh

English Version of README : [Click Here](https://github.com/chenpotatos/better-github-contributions-graph/blob/main/README_EN.md)
## 💻 屏幕截图/Sreenshots

![image](https://github.com/user-attachments/assets/d3f94b7a-66fa-40e7-8195-1f8aa12f8e1a)


## 🔧 二次开发/Development

**Step1** 在 ./src/gh_colorful_contributions/data.cljs 中编辑

示例：
```
:halloween ["#631c03", "#bd561d", "#fa7a18", "#fddf68"]
```
值得一提的是，你需要同时更改 **default-fills** 和 **dark-fills** 来确保在所有情况下脚本都会生效。

**Step2** 在./resources/public/js/content_script.js 中编辑

示例：
```
halloween: [defaultGreen[0], '#631c03', '#bd561d', '#fa7a18', '#fddf68']
```
**Step3** 运行./build.sh

**请确保你的计算机上正确配置且安装了*lein*。**

运行完成后，在项目目录下找到 release.zip，此文件为编译后的输出。

## 😽 贡献与鸣谢/Contributions

[不吃土豆泥](https://github.com/chenpotatos) 主体框架与脚本

[火星猫](https://github.com/Martian14000605) UI和配色建议

灵狐 UI和配色建议 **实在找不到泥的个人页面辣qwq，可以私信我把你放上去~**

本项目根据 MIT 许可证分发。





