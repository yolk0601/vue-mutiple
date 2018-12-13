<template>
  <div id="app">
    {{mes}}
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: 'demo',
  data: function () {
    return {
      mes: 'hello,demo，huangtao'
    }
  },
  components: {
  },
 mounted () {
  }
}
</script>
<style type="text/css">
  div{
    color: red;
    background-color: black;
  }
</style>
