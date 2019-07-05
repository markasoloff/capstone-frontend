import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Show from './views/Show.vue';
import Swap from './views/Swap.vue';
import Add from './views/Add.vue';
import Redact from './views/Redact.vue';
// import Signup from "./views/Signup.vue";
// import Login from "./views/Login.vue";
// import Logout from "./views/Logout.vue";
// import Template from "./views/template.vue";
// import Profile from "./views/Profile.vue";
// import test from './views/test.vue';
// import details from './components/details.vue';


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
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
    },

    { 
      path: "/signup", 
      name: "signup", 
      component: Signup 
    },

    {
      path: "/login",
      name: "login",
      component: Login
    },

    {
      path: "/logout",
      name: "logout",
      component: Logout
    },

    {
      path: "/template",
      name: "template",
      component: Template
    },

    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
});
