// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/styles/index.less'
import Loading from './components/loading'
import axios from 'axios'
import vueAxios from 'vue-axios' 
require('./mock')
// 引入mock数据，关闭则注释该行
Vue.use(Loading)

Vue.config.productionTip = false
// axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
// axios.interceptors.request.use(function (config) { // 配置发送请求的信息
//   stores.dispatch('showLoading')
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// axios.interceptors.response.use(function (response) { // 配置请求回来的信息
//   stores.dispatch('hideLoading')
//   return response
// }, function (error) {
//   return Promise.reject(error)
// })
// Vue.prototype.$http = axios // 其他页面在使用axios的时候直接  this.$http就可以了

Vue.use(vueAxios, axios)

// /*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; */
// axios.defaults.baseURL='http://localhost:8082/';
/* eslint-disable no-new */
// 可以不用new赋值给一个变量
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    eventHub: new Vue()
  }
})
