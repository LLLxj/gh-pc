import Vue from 'vue'
import App from './App.vue'
import router from '@/router' // 路由
import './plugins/element.js'


Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
