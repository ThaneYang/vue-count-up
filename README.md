# vue-count-up

> It's a vue component that will count to a target number at a specified duration

vue-count-up is a dependency-free, lightweight vue component that can be overwrited easingFn by yourself.
You can set startVal and endVal ,it will automatic judge count up or count down.
It is support vue-ssr.
It is learn from countUp.js@2.0.4;

<!-- ## [Try the demo](https://github.com/WillamYang/vue-count-up/demo/) -->

### How to use?
```bash
npm install vue-count-up
```

### Example

```vue
<template>
  <vue-count-up :ev="endVal" :opts="opts"></vue-count-up>
</template>

<script>
  import VueCountUp from 'vue-count-up';
  export default {
    components: { VueCountUp },
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
```
demo:

<!-- Use CDN Script: [demo](https://github.com/WillamYang/vue-count-up/demo/) -->

### Params
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| endVal       | the value you want to arrive at |Number| 0 |
| options?       | optional configuration object for fine-grain control |Object| null |



### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| startVal       | number to start at (0) |Number| 0 |
| decimalPlaces         | number of decimal places (0) |Number | 0 |
| duration         | animation duration in seconds (2) |Number | 2 |
| useGrouping         | example: 1,000 vs 1000 (true) |Boolean | true |
| useEasing         | ease animation (true) |Boolean | true |
| smartEasingThreshold         | smooth easing for large numbers above this if useEasing (999) |Number | 999 |
| smartEasingAmount         | amount to be eased for numbers above threshold (333) |Number | 333 |
| separator         | grouping separator (',') |String | , |
| decimal         | decimal ('.') |String | . |
| easingFn         | easingFn: easing function for animation (easeOutExpo) |Function(t: number, b: number, c: number, d: number) => number | - |
| formattingFn         | this function formats result |Function(n: number) => string | - |
| prefix         | text prepended to result |String | '' |
| suffix         | text appended to result |String | '' |
| numerals         | numeral glyph substitution |string[] | [] |
| autoplay         | when mounted autoplay |Boolean | true |

** notes: when autoplay:true , it will auto start **


### Functions
| Function Name | Description   |
| :--------:   | -----  |
|    mountedCallback    |  when mounted will emit  mountedCallback  |
|    start    |  start the vue-count-up  |
|    pauseResume    |  Toggle pause/resume  |
|    reset    |  Reset the animation |
|    update    |  Update the end value and animate |
