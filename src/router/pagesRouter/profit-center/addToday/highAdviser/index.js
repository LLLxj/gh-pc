export default [
  {
    path: '/proCenter/addToday/highAdviser', //  高级顾问
    name: 'addToday-highAdviser',
    component(resolve) {
      require(['@/views/profit-center/increase-today/adviser/index'], resolve)
    },
    meta: {
      title: '高级顾问'
    }
  }
]