# Vue.js 学習用プロジェクト

## Overview
このプロジェクトは、Vue.jsの学習を目的として作成したプロジェクトであり、  
様々な参考サイトの内容をコピーしている部分があります。  
主に以下の技術要素を利用して作成しています。

- 言語
  - node.js
  - Vue.js
  - Vuex
  - Vue-Router
  - Bootstrap-Vue
  
- バージョン管理＆ビルドシステム
  - npm
  - Webpack
  - babel

- 静的チェック
  - eslint

このプロジェクトの初期構築はVue-Cliを利用して作成しました。  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### サーバーサイドのサンプル
Vue.jsの学習はクライアントサイドに焦点を当てるが、
サーバーサイドのサンプルも存在しなければクライアント・サーバの学習ができない。  
そのためサーバサイド実装として簡易的にAPIを公開することのできる「Loopback」を利用している。  
永続化はしていないため、起動毎にデータは揮発する。  
サーバサイドの起動方法は以下。
```bash
cd loopback/hello-world
node .
```
上記コマンドが正常に終了した場合には、以下のURLでREST-APIの一覧が確認できる。（SwaggerUI）
http://localhost:3000/explorer

実際のエンドポンとは、以下となる。
http://localhost:3000



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
