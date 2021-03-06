# VueTemplate

手动搭建一个使用[Webpack](https://v4.webpack.js.org/concepts/)打包的，支持[Typescript](https://www.tslang.cn/docs/home.html)、[Sass](https://www.sass.hk/)、[Vue](https://cn.vuejs.org/)、[Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)等技术的前端开发模板。

>[效果预览](https://zhmhbest.github.io/VueTemplate/index.html#/)

## 直接使用

使用Yarn

```bash
# 准备环境
yarn install

# 调试
yarn run dev

# 打包
yarn run build
```

使用Npm

```bash
# 准备环境
npm install

# 调试
npm run dev

# 打包
npm run build
```

## 创建过程

### Packages

```bash
npm init -f
# Webpack
npm -D i cross-env
npm -D i webpack@4 webpack-cli@3
npm -D i webpack-dev-server@3 html-webpack-plugin@4
npm -D i copy-webpack-plugin
npm -D i open-browser-webpack-plugin
# Json5
npm -D i json5-loader
# Images
npm -D i file-loader url-loader
# Style
npm -D i mini-css-extract-plugin css-loader
npm -D i sass-loader sass@npm:dart-sass
npm -D i less-loader less@3
# Typescript
npm -D i @types/node
npm -D i typescript ts-loader
# Vue2
npm -D i vue-loader@15 vue-template-compiler@2
npm -S i vue@2 vue-router@3 vuex@3
# Vue3
# npm -D i vue-loader@16 @vue/compiler-sfc@3
# npm -S i vue@3 vue-router@4 vuex@4
# Antd1
npm -S i ant-design-vue@1
# axios
npm -S i axios
# echarts
npm -S i echarts
```

### Scripts

```bash
# dev
npx webpack-dev-server --inline --progress

# build.prod
npx cross-env NODE_ENV=production webpack

# build.dev
npx cross-env NODE_ENV=development webpack
```
