import Vue from 'vue';
import VueRouter from 'vue-router';
import first from './pages/first';
import start from './pages/start';
import second from './pages/second';
import confirm from './pages/confirm';

Vue.use(VueRouter);

const routes = [
  {
    name: 'start',
    path: '/start',
    component: start,
  },
  {
    name: 'first',
    path: '/first',
    component: first,
  },
  {
    name: 'second',
    path: '/second',
    component: second,
  },
  {
    name: 'confirm',
    path: '/confirm',
    component: confirm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
