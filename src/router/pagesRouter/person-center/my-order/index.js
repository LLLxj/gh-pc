export default [
  {
    path: '/perCenter/myOrder',
    name: 'person-my-order',
    component (resolve) {
      require(['@/views/person-center/my-order/index'], resolve)
    },
    meta: {
      title: '我的订单'
    }
  }
]