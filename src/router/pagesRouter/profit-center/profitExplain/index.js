export default [
  {
    path: '/proCenter/proExplain',
    name: 'proCenter-proExplain',
    component: function(resolve) {
      require(['@/views/profit-center/profit-explain/index'], resolve)
    },
    meta: {
      title: '权益说明'
    }
  }
]