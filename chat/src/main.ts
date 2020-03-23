import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import elem from 'element-ui'

Vue.config.productionTip = false;

Vue.use(elem)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
