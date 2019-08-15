<template>
  <div id="app">
    <vue-count-up :ev="endVal" :opts="opts"></vue-count-up>
  </div>
</template>

<script>
import VueCountUp from './vue-count-up.vue'

export default {
  name: 'countup-demo',
  components: {
    VueCountUp
  },
  data () {
    return {
      endVal: 2019,
      opts: {
        startVal: 1000
      }
    }
  }
}
</script>
