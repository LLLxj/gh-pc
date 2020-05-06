<template>
  <div class="page">
    <header class="menu">
      <ul>
        <li v-for="(item,index) in routers" :key="index" @click="pageTo(item)">{{item.title || "你好," + name}}</li>
      </ul>
    </header>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '测试',
        routers: [
          { title: '' },
          { title: '首页', path:'/home' },
          { title: '登录', path:'/login' },
          { title: '注册', path:'/register' },
          { title: '权益中心', path:'/proCenter' },
          { title: '个人中心', path:'/perCenter' },
        ],
        route: ''
      }
    },
    watch: {  
      $route (val) {
        this.route = val
      }
    },
    methods: {
      pageTo (item) {
        if (item.path) {
          this.$router.push({path: item.path})
        }
      }
    }
  }
</script>

<style lang="scss" scope>
  .page {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.8);
    .menu {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          list-style: none;
          padding:15px 20px;
          color:#fff;
        }
      }
    }
  }
</style>