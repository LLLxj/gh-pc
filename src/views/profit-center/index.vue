<template>
  <div class="wrap">
    <div class="left">
      <el-row :gutter="20" class="margin" v-for="(item,index) in routers" :key="index">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="pageTo(item)">{{item.title}}</el-button>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="20" class="margin">
        <el-col :span="20" :offset="2">
          <el-button type="primary" @click="toProCount()">收益结算</el-button>
          <el-button type="primary" @click="toProCount()">权益说明</el-button>
          <el-button type="primary" @click="toMyGroup()">我的团队</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary">今日新增</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="20" :offset="3">
          <el-button type="primary" @click="toPreProfit()">预估收益</el-button>
          <el-button type="primary" @click="toComMember()">普通会员</el-button>
          <el-button type="primary" @click="toPriAdviser()">初级顾问</el-button>
          <el-button type="primary" @click="toMidAdviser()">中级顾问</el-button>
          <el-button type="primary" @click="toHighAdviser()">高级顾问</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toProfitWidthdraw()">收益提现</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="20" :offset="3">
          <el-button type="primary" @click="toInProfitWidthdraw()">提现中</el-button>
          <el-button type="primary" @click="toHasProfitWidthdraw()">已提现</el-button>
          <el-button type="primary" @click="toCanProfitWidthdraw()">可提现</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toInviteFriend()">邀请好友</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toGroupTutor()">团队导师</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toFreshCourse()">新手教程</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="margin">
        <el-col :span="6" :offset="2">
          <el-button type="primary" @click="toWidthdrawAccount()">提现账户</el-button>
        </el-col>
      </el-row> -->
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
   name: 'profit-center',
    components: {
    },
    data() {
      return {
        routers: [
          { title: '预估收益', path:'/proCenter/addToday/preProfit' },
          { title: '普通会员', path:'/proCenter/addToday/comMember' },
          { title: '初级顾问', path:'/proCenter/addToday/priAdviser' },
          { title: '中级顾问', path:'/proCenter/addToday/midAdviser' },
          { title: '高级顾问', path:'/proCenter/addToday/highAdviser' },
          { title: '收益结算', path:'/proCenter/proCount' },
          { title: '我的团队', path:'/proCenter/myGroup' },
          { title: '邀请好友', path:'/proCenter/inviteFriend' },
          { title: '团队导师', path:'/proCenter/groupTutor' },
          { title: '新手教程', path:'/proCenter/freshCourse' },
          { title: '提现账户', path:'/proCenter/widthdrawAccount' },
          { title: '提现结算', path:'/proCenter/proWidthdraw' },
          { title: '提现中', path:'/proCenter/inProWidthdraw' },
          { title: '已提现', path:'/proCenter/hadProWidthdraw' },
          { title: '可提现', path:'/proCenter/canProWidthdraw' },
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
        if (this.route.path !== item.path) {
          this.$router.push({path: item.path})
        }
      },
      toPreProfit () {
        this.$router.push({path:'/proCenter/addToday/preProfit'}) 
      },
      toComMember () {
        this.$router.push({path:'/proCenter/addToday/comMember'}) 
      },
      toPriAdviser () {
        this.$router.push({path:'/proCenter/addToday/priAdviser'}) 
      },
      toMidAdviser () {
        this.$router.push({path:'/proCenter/addToday/midAdviser'}) 
      },
      toHighAdviser () {
        this.$router.push({path:'/proCenter/addToday/highAdviser'}) 
      },
      toProCount () {
        this.$router.push({path:'/proCenter/proCount'}) 
      },
      toMyGroup () {
        this.$router.push({path:'/proCenter/myGroup'}) 
      },
      toInviteFriend () {
        this.$router.push({path:'/proCenter/inviteFriend'}) 
      },
      toGroupTutor () {
        this.$router.push({path:'/proCenter/groupTutor'}) 
      },
      toFreshCourse () {
        this.$router.push({path:'/proCenter/freshCourse'}) 
      },
      toWidthdrawAccount () {
        this.$router.push({path:'/proCenter/widthdrawAccount'}) 
      },
      toProfitWidthdraw () {
        this.$router.push({path:'/proCenter/proWidthdraw'}) 
      },
      toInProfitWidthdraw () {
        this.$router.push({path:'/proCenter/inProWidthdraw'}) 
      },
      toHasProfitWidthdraw () {
        this.$router.push({path:'/proCenter/hadProWidthdraw'}) 
      },
      toCanProfitWidthdraw () {
        this.$router.push({path:'/proCenter/canProWidthdraw'}) 
      },
    }
}
</script>

<style>
  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>
