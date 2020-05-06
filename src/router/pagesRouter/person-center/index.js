import perInfo from './person-info'
import myOrder from './my-order'
import conManage from './contact-manage'
import norManage from './notarization-manage'
import myCollect from './my-collect' 
import widthdrawAccount from './widthdraw-account' 

export default [
  {
    path: '/perCenter',
    name: 'person-center',
    redirect: '/perCenter/perInfo',
    component (resolve) {
      require(['@/views/person-center/index'], resolve)
    },
    meta: {
      title: '个人中心'
    },
    children: [
      ...perInfo,
      ...myOrder,
      ...conManage,
      ...norManage,
      ...myCollect,
      ...widthdrawAccount
    ]
  }
]

