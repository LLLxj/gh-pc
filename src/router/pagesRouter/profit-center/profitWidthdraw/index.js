export default [
  {
    path: '/proCenter/proWidthdraw',
    name: 'proCenter-profitWidthdraw',
    component: function(resolve) {
      require(['@/views/profit-center/profit-widthdraw/home/index'], resolve)
    },
    meta: {
      title: '提现结算'
    }
  },
  {
    path: '/proCenter/inProWidthdraw',
    name: 'proCenter-inProfitWidthdraw',
    component: function(resolve) {
      require(['@/views/profit-center/profit-widthdraw/status/index'], resolve)
    },
    meta: {
      title: '提现中'
    }
  },
  {
    path: '/proCenter/hadProWidthdraw',
    name: 'proCenter-hadProfitWidthdraw',
    component: function(resolve) {
      require(['@/views/profit-center/profit-widthdraw/status/index'], resolve)
    },
    meta: {
      title: '已提现'
    }
  },
  {
    path: '/proCenter/canProWidthdraw',
    name: 'proCenter-canProfitWidthdraw',
    component: function(resolve) {
      require(['@/views/profit-center/profit-widthdraw/status/index'], resolve)
    },
    meta: {
      title: '可提现'
    }
  },
]