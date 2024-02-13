import CounterValue from '@/counter/pages/Counter-1-page.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
  ]
})

export default router
