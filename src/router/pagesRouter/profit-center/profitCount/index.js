export default [
  {
    path: '/proCenter/proCount',
    name: 'proCenter-proCount',
    component: function(resolve) {
      require(['@/views/profit-center/profit-count/index'], resolve)
    },
    meta: {
      title: '收益结算'
    }
  }
]