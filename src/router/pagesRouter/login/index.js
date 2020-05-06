export default [
  {
    path: '/login',
    name: 'login',
    component: function(resolve) {
      require(['@/views/login/index'], resolve)
    },
    meta: {
      title: '登录'
    }
  }
]