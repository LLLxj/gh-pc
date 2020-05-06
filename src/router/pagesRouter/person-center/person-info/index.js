export default [
  {
    path: '/perCenter/perInfo',
    name: 'person-info',
    component (resolve) {
      require(['@/views/person-center/info/index'], resolve)
    },
    meta: {
      title: '个人信息'
    }
  }
]