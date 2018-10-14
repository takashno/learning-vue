// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueI18n)

Vue.config.productionTip = false

// 状態管理Store
const store = new Vuex.Store({
  state: {
    menu: 'index',
    signin: false
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 国際化対応
const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'ja',
  messages: {
    en: require('./i18n/en.json'),
    ja: require('./i18n/ja.json')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: i18n,
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
