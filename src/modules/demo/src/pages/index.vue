<template>
  <section>hello，demo</section>
</template>
<style type="text/css">
  section{
    width:100%;
    height:100px;
    background-color: #f13232;
  }
</style>
<script type="text/javascript">
  export default {
    name:'demoIndex',
    data: function () {
      return {
        name:'huangtao'
      }
    },
    mounted: function () {
      console.log('demo实例运行')
    }
  }
</script>