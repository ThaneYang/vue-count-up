<template>
  <div id="app">
    <v-count-up :ev="endVal" :opts="opts"></v-count-up>
  </div>
</template>

<script>
import VCountUp from './v-count-up.vue'

export default {
  name: 'countup-demo',
  components: {
    VCountUp
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
