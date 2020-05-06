export default [
  {
    path: '/proCenter/myGroup',
    name: 'proCenter-myGroup',
    component: function(resolve) {
      require(['@/views/profit-center/my-group/index'], resolve)
    },
    meta: {
      title: '我的团队'
    }
  }
]