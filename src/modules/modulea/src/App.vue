<template>
  <div id="app">
    {{mes}}
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: 'modulea',
  data: function () {
    return {
      mes: 'hello,modulea'
    }
  },
  components: {
  },
 mounted () {
  }
}
</script>
