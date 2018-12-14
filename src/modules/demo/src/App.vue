<template>
  <div id="app">
    <EmotionHeader></EmotionHeader>
    <router-view></router-view>
    <p>你好{{msg1}}变化 ===》<span>nihao </span></p>
    <p>nihao 2 {{msg2}}</p>
  </div>
</template>
<style type="text/css">
</style>
<script>
import { mapState } from 'vuex'
import EmotionHeader from '~common/EmotionHeader'
export default {
  name: 'demo',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      msg1: state => state.demo1Store.state.msg,
      msg2: state => state.demo2Store.state.msg,
    }),
  },
  mounted () {
    console.log('demo打印', this.$store)
  },
  components: {
    EmotionHeader
  }
}
</script>
