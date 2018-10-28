import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Show from './views/Show.vue';
import Swap from './views/Swap.vue';
import Add from './views/Add.vue';
import Redact from './views/Redact.vue';
import test from './views/test.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/articles/:id/show',
      name: 'show',
      component: Show
    },

    {
      path: '/articles/:id/redact',
      name: 'redact',
      component: Redact
    },

    {
      path: '/articles/:id/swap',
      name: 'swap',
      component: Swap
    },

    {
      path: '/articles/:id/add',
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
