import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from "./store";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueProgressBar  from 'vue-progressbar';

// options of vue progressbar
const options = {
  color: '#085aa0',
  failedColor: '#085aa0',
  thickness: '2px',
  transition: {
    speed: '1s',
    opacity: '0.3s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

import axios from 'axios'

// loading bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// importing layouts
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import JobSearchLayout from './layouts/JobSearchLayout';
import JobPosterLayout from './layouts/JobPosterLayout';

// register layout componet globally
Vue.component('default-layout',DefaultLayout);
Vue.component('guest-layout',GuestLayout);
Vue.component('job-search-layout',JobSearchLayout);
Vue.component('job-poster-layout',JobPosterLayout);

import { namespaced } from "./store/utils";
import { NS_USER } from "./store/namespace.names";
import { GET_TOKEN_FROM_LOCAL_STORE } from "./store/action.names";
import { GET_TOKEN } from "./store/getter.names";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueProgressBar, options);

window.axios = axios;

store.dispatch(namespaced(NS_USER, GET_TOKEN_FROM_LOCAL_STORE));
// router.beforeEach((to, from, next) => {
//   const loggedIn = store.getters[namespaced(NS_USER, GET_TOKEN)] != null;
  
// });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
