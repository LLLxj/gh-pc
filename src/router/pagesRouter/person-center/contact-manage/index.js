export default [
  {
    path: '/perCenter/conManage',
    name: 'person-contact-manage',
    component (resolve) {
      require(['@/views/person-center/contact-manage/index'], resolve)
    },
    meta: {
      title: '联系人管理'
    }
  }
]