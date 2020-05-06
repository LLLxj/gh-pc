<template>
  <div class="app-wrap">
    <div class="header">
      <Header></Header>
    </div>

    <div class="content">
      <router-view />
    </div>
    
    <div class="footer">
      <Footer></Footer>
    </div>
    
  </div>
  
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components: {
      Header, Footer
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scope>
  .app-wrap {
    width: 100%;
    margin:0;
    padding:0;
    .left{
      width:700px;
    }
    .right {
    }
    .margin {
      margin-top:10px;
    }
    .header {
      width:100%;
    }
    .content {
      width:62.5%;
      margin:0 auto;
      min-width: 1200px;
    }
    .footer {
      width:100%;
       border:1px solid blue;
      height:100px;
    }
  }
</style>