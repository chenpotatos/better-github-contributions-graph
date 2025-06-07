# **Better Github Contributions Gragh**
✨ Personalize your Github Contribution Gragh

## 💻 Sreenshots

![image](https://github.com/user-attachments/assets/d3f94b7a-66fa-40e7-8195-1f8aa12f8e1a)


## 🔧 Development

**Step1** Edit in ./src/gh_colorful_contributions/data.cljs

Example:
```
:halloween ["#631c03", "#bd561d", "#fa7a18", "#fddf68"]
```
It's worth mentioning that you'll need to change both **default-fills** and **dark-fills** to make sure the script works in all cases.

**Step2** Edit in ./resources/public/js/content_script.js

Example:
```
halloween: [defaultGreen[0], '#631c03', '#bd561d', '#fa7a18', '#fddf68']
```
**Step3** Run ./build.sh

**Make sure that *Lein* is properly configured and installed on your computer. **

Once the run is complete, find the release.zip in the project directory, which is the compiled output.

## 😽 Contributions

[不吃土豆泥](https://github.com/chenpotatos) Main frame and script

[火星猫](https://github.com/Martian14000605) UI and color matching recommendations

灵狐 UI and color matching recommendations 

This project is distributed under the MIT license.







