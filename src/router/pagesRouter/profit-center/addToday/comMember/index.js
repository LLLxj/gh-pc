export default [
  {
    path: '/proCenter/addToday/comMember', //  普通会员
    name: 'addToday-comMember',
    component(resolve) {
      require(['@/views/profit-center/increase-today/comMember/index'], resolve)
    },
    meta: {
      title: '普通会员'
    }
  }
]