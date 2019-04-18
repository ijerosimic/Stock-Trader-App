import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  routes
} from './routes';
import {
  store
} from './store/store';
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueSweetalert2);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');