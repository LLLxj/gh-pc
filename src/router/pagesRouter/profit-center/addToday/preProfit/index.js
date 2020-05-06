export default [
  {
    path: '/proCenter/addToday/preProfit', //  预估收益
    name: 'addToday-preProfit',
    component(resolve) {
      require(['@/views/profit-center/increase-today/preProfit/index'], resolve)
    },
    meta: {
      title: '预估收益'
    }
  }
]