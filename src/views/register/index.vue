<template>
  <div @click="nextTo">register</div>
</template>

<script>
  export default {
    name: 'register',
    components: {
    },
    data() {
      return {

      }
    },
    methods: {
      nextTo () {
        this.$router.push({path:'login'}) 
      }
    }
  }
</script>

<style>

</style>