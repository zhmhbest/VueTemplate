# Front-end Template

手动搭建一个使用Webpack打包的，支持Typescript、Vue3、Sass等技术的前端开发模板。

## Ready

```bash
npm init -f
npm -D i cross-env
npm -D i webpack@4 webpack-cli@3
npm -D i webpack-dev-server@3 html-webpack-plugin@4
npm -D i typescript ts-loader @types/vscode
# Json5
npm -D i json5-loader
# Images
npm -D i url-loader
# Style
npm -D i mini-css-extract-plugin css-loader
npm -D i sass-loader node-sass@npm:dart-sass
# Vue
npm -D i vue-loader vue-template-compiler
npm -S i vue vue-resource vue-router vuex
```

## Dev

```bash
npx webpack-dev-server --inline --progress
# http://localhost:9000/
```

## Build

```bash
npx cross-env NODE_ENV=production webpack
# npx cross-env NODE_ENV=development webpack
```
