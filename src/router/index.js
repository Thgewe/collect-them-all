import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DarkSouls_III_View from '@/views/Dark_Souls_III_View.vue'
import DarkSouls_II_View from '@/views/Dark_Souls_II_View.vue'
import DarkSouls_View from '@/views/Dark_Souls_View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Dark_Souls_III',
    name: 'dark-souls-III',
    component: DarkSouls_III_View
  },
  {
    path: '/Dark_Souls_II',
    name: 'dark-souls-II',
    component: DarkSouls_II_View
  },
  {
    path: '/Dark_Souls',
    name: 'dark-souls',
    component: DarkSouls_View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
