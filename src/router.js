import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Show from './views/Show.vue';
import Swap from './views/Swap.vue';
import Add from './views/Add.vue';
import Redact from './views/Redact.vue';
import test from './views/test.vue';
import details from './components/details.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
      path: '/articles/:id',
      name: 'articles-show',
      component: Show
    },

    {
      path: '/redact',
      name: 'redact',
      component: Redact
    },

    {
      path: '/swap',
      name: 'swap',
      component: Swap
    },

    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/articles:id',
      name: 'test',
      component: test
    }
  ]
});
