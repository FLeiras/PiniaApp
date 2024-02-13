import { createRouter, createWebHistory } from 'vue-router'

import CounterValue from '@/counter/pages/Counter-1-page.vue'
import ClientsLayout from '@/clients/layout/ClientsLayout.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import ListPage from '@/clients/pages/ListPage.vue'
import ClientPage from '@/clients/pages/ClientPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: CounterValue
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: {name: 'list'},
      children: [
        { path: '/clients', name: 'list', component: ListPage },
        { path: '/clients/:id', name: 'client', component: ClientPage },
      ]
    },
  ]
})

export default router
