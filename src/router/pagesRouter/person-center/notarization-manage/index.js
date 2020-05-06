export default [
  {
    path: '/perCenter/norManage',
    name: 'person-notarization-manage',
    component (resolve) {
      require(['@/views/person-center/notarization-manage/index'], resolve)
    },
    meta: {
      title: '公证管理'
    }
  }
]