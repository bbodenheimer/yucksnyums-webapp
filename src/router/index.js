import Vue from 'vue';
import VueRouter from 'vue-router';
import InternalTools from '@/components/pages/InternalTools.vue';

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { 
      path: '/tools',
      component: InternalTools 
    }
  ]
});