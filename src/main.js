import App from './App.vue';
import Vue from 'vue';
import router from './router';
import store from './store';
import vueDebounce from 'vue-debounce';

Vue.use(vueDebounce, {
  listenTo: 'input',
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
