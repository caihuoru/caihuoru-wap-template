import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// 全局引入UI库 vant
import './plugins/vant'
import '@/lib/rem'
import "@/less/index.less";
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
