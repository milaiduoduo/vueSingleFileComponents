import Vue from 'vue'
import Router from 'vue-router'
import tabComponent from '../components/tabComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component:tabComponent
    }
  ]
})
