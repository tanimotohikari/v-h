import Vue from 'vue';
import router from './router';
import root from './pages/root';

const vue = new Vue({
  router,
  render: h => h(root),
});
vue.$mount('#app');
