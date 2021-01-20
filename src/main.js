import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routers/routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// loading bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// importing layouts
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';

// register layout componet globally
Vue.component('default-layout',DefaultLayout);
Vue.component('guest-layout',GuestLayout);

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

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
}).$mount('#app')
