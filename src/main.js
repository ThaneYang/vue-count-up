import VueCountUp from './vue-count-up.vue';
export default VueCountUp;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-count-up', VueCountUp);
}
