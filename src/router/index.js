import Vue from 'vue';
import VueRouter from 'vue-router';
import InternalTools from '@/components/pages/InternalTools.vue';
import Main from '@/components/pages/Main.vue';

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/tools',
      component: InternalTools
    },
    {
      path: '/main',
      component: Main
    }
  ]
});
