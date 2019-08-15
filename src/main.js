import VCountUp from './v-count-up.vue';
export default VCountUp;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('v-count-up', VCountUp);
}
