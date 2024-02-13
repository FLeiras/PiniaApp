import CounterValue from '@/counter/pages/Counter-1-page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: CounterValue
    },
    
  ]
})

export default router
