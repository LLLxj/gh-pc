import proCount from './profitCount'
import proExplain from './profitExplain'
import myGroup from './myGroup'
import addToday from './addToday'
import profitWidthdraw from './profitWidthdraw'
import inviteFriend from './inviteFriend'
import groupTutor from './groupTutor'
import freshCourse from './freshCourse'
import withdrawAccount from './withdrawCount'


export default [
  {
    path: '/proCenter',
    name: 'profit-center',
    component (resolve) {
      require(['@/views/profit-center/index'], resolve)
    },
    children: [
      ...proCount, //收益结算
      ...proExplain, //权益说明
      ...myGroup,  //我的团队
      ...addToday, //今日新增
      ...profitWidthdraw,  //收益提现
      ...inviteFriend,  //邀请好友
      ...groupTutor,  //团队导师
      ...freshCourse,  //新手教程
      ...withdrawAccount  //提现账户
    ]
  },
  
]