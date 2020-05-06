export default [
  {
    path: '/proCenter/widthdrawAccount',
    name: 'proCenter-widthdraw-account',
    component: function(resolve) {
      require(['@/views/profit-center/widthdraw-account/index'], resolve)
    },
    meta: {
      title: '提现账户'
    }
  }
]