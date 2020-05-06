export default [
  {
    path: '/perCenter/myCollect',
    name: 'person-my-collect',
    component (resolve) {
      require(['@/views/person-center/my-collect/index'], resolve)
    },
    meta: {
      title: '我的收藏'
    }
  }
]