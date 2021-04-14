import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routers/routes';
import store from "./store";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios'

// loading bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// importing layouts
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import JobSearchLayout from './layouts/JobSearchLayout';

// register layout componet globally
Vue.component('default-layout',DefaultLayout);
Vue.component('guest-layout',GuestLayout);
Vue.component('job-search-layout',JobSearchLayout);

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

window.axios = axios;

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition;
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
