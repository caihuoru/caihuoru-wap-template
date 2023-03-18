import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// 全局引入UI库 vant
import './plugins/vant'
import { i18n } from './plugins/i18n'
import '@/lib/rem'
import '@/lib/directive'
import "@/less/index.less";

new Vue({
  router,
  store,
  i18n,
  el: '#app',
  render: h => h(App)
});
