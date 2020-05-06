export default [
  {
    path: '/proCenter/inviteFriend',
    name: 'proCenter-invite-friend',
    component: function(resolve) {
      require(['@/views/profit-center/invite-friend/index'], resolve)
    },
    meta: {
      title: '邀请好友'
    }
  }
]