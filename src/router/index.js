import HomePage from '@/views/HomePage.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
