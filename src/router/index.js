 import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ratings from '../../src/components/ratings/ratings'
import Goods from '@/components/goods/Goods'
import Seller from '@/components/Seller'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods

    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller

    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings

    },
    { path: '*', redirect: '/goods' }

  ]
})
