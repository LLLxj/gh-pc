export default [
  {
    path: '/home',
    name: 'home',
    component: function(resolve) {
      require(['@/views/home/index'], resolve)
    },
    meta: {
      title: '首页'
    }
  }
]