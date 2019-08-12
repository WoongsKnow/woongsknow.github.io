import Vue from 'vue';
import Test from './test.vue';

Vue.mixin({
  created() {
    console.log('test');
  },
  mounted() {
    console.log('global mounted');
  },
});
new Vue(Test).$mount('#app');