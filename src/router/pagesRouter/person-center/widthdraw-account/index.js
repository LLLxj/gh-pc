
export default [
  {
    path: '/perCenter/widthdrawAccount',
    name: 'person-widthdraw-account',
    component (resolve) {
      require(['@/views/person-center/widthdraw-account/index'], resolve)
    },
    meta: {
      belongs: 'person-center',
      title: '提现账户'
    }
  }
]