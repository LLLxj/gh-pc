export default [
  {
    path: '/proCenter/addToday/midAdviser', //  中级顾问
    name: 'addToday-midAdviser',
    component(resolve) {
      require(['@/views/profit-center/increase-today/adviser/index'], resolve)
    },
    meta: {
      title: '中级顾问'
    }
  }
]