export default [
  {
    path: '/register',
    name: 'register',
    component: function(resolve) {
      require(['@/views/register/index'], resolve)
    },
    meta: {
      title: '注册'
    }
  }
]