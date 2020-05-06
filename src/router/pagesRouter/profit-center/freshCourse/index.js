export default [
  {
    path: '/proCenter/freshCourse',
    name: 'proCenter-fresh-course',
    component: function(resolve) {
      require(['@/views/profit-center/fresh-course/index'], resolve)
    },
    meta: {
      title: '新手教程'
    }
  }
]