import login from './login'
import register from './register'
import profitCenter from './profit-center'
import personCenter from './person-center'
import home from './home'

export default [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: function(resolve) {
      require(['@/views/layout'], resolve)
    },
    
    children: [
      ...home,
      ...profitCenter,
      ...personCenter,
      ...login,
      ...register,
    ]
  }
]