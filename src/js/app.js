import Vue from 'vue';
import router from './router';
import store from './store';
import root from './pages/root';

const vue = new Vue({
  router,
  store,
  render: h => h(root),
});
vue.$mount('#app');
