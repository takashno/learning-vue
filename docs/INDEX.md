# フロントエンド学習

## 事前準備
### インストール
#### node.js
#### バージョン管理
#### loopback


## 基本コマンド



## LoopbackでのREST-API作成
[loopback](https://loopback.io/doc/en/lb4/index.html)を用いて、簡易的なプロフィール管理のREST-APIを構築する。  
[loopback](https://loopback.io/doc/en/lb4/index.html)は「lb」コマンドを利用して、ターミナル or コマンドプロンプトからREST-APIの設計を行うことができる。
自動生成のみではなく、Rapid開発のためのフレームワーク機能を有している。  
```bash
$ lb model
? モデル名を入力してください: Profile
? Profile を付加するデータ・ソースを選択してください: db (memory)
? モデルの基本クラスを選択します PersistedModel
? REST API を介して Profile を公開しますか? Yes
? カスタム複数形 (REST URL の作成に使用します): profiles
? 共通モデルですか、あるいはサーバー専用ですか? 共通
では、Profile プロパティーをいくつか追加しましょう。
```


## 国際化対応
国際化対応はOSSの「[vue-i18n](http://kazupon.github.io/vue-i18n/)」利用することで実現する。  
Vue-i18nでは、Bootstrap-Vueのカスタムコンポーネント？「b-form-input」の「label」や「placeholder」属性に値をバインドすることができなかった。

試したソース
```vue
<b-form-input 
  id="hoge" 
  type="text" 
  required 
  v-model="form.hoge" 
  v-bind:placeholder="$t('hoge')"/>
```

