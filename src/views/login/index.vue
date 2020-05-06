<template>
  <div>
    <el-button @click="login()">
      登录
    </el-button>
  </div>
</template>

<script>
import system from '@/api/system'
export default {
   name: 'login',
    components: {
    },
    data() {
      return {
        dataform: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      // nextTo () {
      //   console.log(11)
      //   this.$router.push({path:'login'}) 
      // }
      login() {
        system.login(this.dataform).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
}
</script>

<style>

</style>