import Vue from 'vue'
import Router from 'vue-router'
import pagesRouter from './pagesRouter'
 
// 解决路由跳转相同路径问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    ...pagesRouter
  ]
})

export default router