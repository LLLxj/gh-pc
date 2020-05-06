<template>
  <div>
    <div v-if="status === 0">初级顾问</div>
    <div v-if="status === 1">中级顾问</div>
    <div v-if="status === 2">高级顾问</div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        status: 0  // 0:初级, 1:中级, 2:高级
      }
    },
    created () {
      
    },
    mounted () {
      var $route = this.$route.path
      if ($route == '/proCenter/addToday/priAdviser') {
        this.status = 0 
      } else if ($route == '/proCenter/addToday/midAdviser') {
        this.status = 1
      } else {
        this.status = 2
      }
    },
    methods: {}
  }
</script>

<style>

</style>