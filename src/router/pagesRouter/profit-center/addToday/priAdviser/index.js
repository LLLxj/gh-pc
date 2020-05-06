export default [
  {
    path: '/proCenter/addToday/priAdviser', //  初级顾问
    name: 'addToday-priAdviser',
    component(resolve) {
      require(['@/views/profit-center/increase-today/adviser/index'], resolve)
    },
    meta: {
      title: '初级顾问'
    }
  }
]