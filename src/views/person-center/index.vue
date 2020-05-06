<template>
  <div class="wrap">
    个人中心
    <div class="left">

      <el-row :gutter="20" class="margin" v-for="(item,index) in routers" :key="index">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="pageTo(item)">{{item.title}}</el-button>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toPerIfno()">个人信息</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toMyOrder()">我的订单</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toConManage()">联系人管理</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toNorManage()">公证管理</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toMyCollect()">我的收藏</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toPersonWidthdrawAccount()">提现账户</el-button>
        </el-col>
      </el-row> -->
    </div>
    <div class="right">
       <router-view />
    </div>
    
   
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routers: [
          { title: '个人信息', path:'/perCenter/perInfo' },
          { title: '我的订单', path:'/perCenter/myOrder' },
          { title: '联系人管理', path:'/perCenter/conManage' },
          { title: '公证管理', path:'/perCenter/norManage' },
          { title: '我的收藏', path:'/perCenter/myCollect' },
          { title: '提现账户', path:'/perCenter/widthdrawAccount' }
        ],
        route: '',
      }
    },
    created () {
    },
    watch: {  
      $route (val) {
        this.route = val
      }
    },
    methods: {
      pageTo (item) {
        if (this.route.path !== item.path) {
          this.$router.push({path: item.path})
        }
      }
    }
  }
</script>

<style lang="scss" scope>
  .wrap {
    width: 100%;
    display: flex;
  }
  .left {
    width:300px;
  }
  .margin {
    margin-top:10px;
  }
</style>