import Vue from 'vue'
import Router from 'vue-router'
import GlobalIndex from '@/components/pages/GlobalIndex'
import ExampleForm from '@/components/pages/ExampleForm'
import ExampleTable from '@/components/pages/ExampleTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GlobalIndex',
      component: GlobalIndex
    },
    {
      path: '/form',
      name: 'ExampleForm',
      component: ExampleForm
    },
    {
      path: '/table',
      name: 'ExampleTable',
      component: ExampleTable
    }
  ]
})
