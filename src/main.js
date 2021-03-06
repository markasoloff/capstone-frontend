import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

var history = require('connect-history-api-fallback');

var express = require('express');

var app = express();
app.use(history());

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
