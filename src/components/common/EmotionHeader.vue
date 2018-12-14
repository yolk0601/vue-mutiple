<template>
  <section id="header" class="header">
    <header class="wrapper">
      <div class="slogan">{{title}}</div>
    </header>
  </section>
</template>
<style type="text/css" scoped>
  .header{
    height:64px;
    background-color: rgb(255, 207, 39)
  }
</style>
<script type="text/javascript">
  export default {
    name:'EmotionHeader',
    data () {
      return {
        title: '搜狗云表情'
      }
    }
  }
</script>