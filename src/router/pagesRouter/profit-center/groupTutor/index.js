export default [
  {
    path: '/proCenter/groupTutor',
    name: 'proCenter-group-tutor',
    component: function(resolve) {
      require(['@/views/profit-center/group-tutor/index'], resolve)
    },
    meta: {
      title: '团队导师'
    }
  }
]