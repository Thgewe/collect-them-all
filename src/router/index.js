import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import DarkSouls_III_View from '@/views/Dark_Souls_III_View.vue'
// import DarkSouls_II_View from '@/views/Dark_Souls_II_View.vue'
// import DarkSouls_View from '@/views/Dark_Souls_View.vue'
const DarkSouls_III_View = () => import('@/views/Dark_Souls_III_View.vue');
const DarkSouls_II_View = () => import('@/views/Dark_Souls_II_View.vue');
const DarkSouls_View = () => import('@/views/Dark_Souls_View.vue');
const Rings = () => import('@/components/RingList.vue');
const NotFound = () => import('@/components/NoContent.vue');
const PageDescription = () => import('@/components/PageDescription.vue');


const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: HomeView
  },
  {
    path: '/Dark_Souls_III',
    name: 'dark-souls-III',
    component: DarkSouls_III_View,
    children: [
        {
            path: '',
            component: PageDescription,
            replace: true
        },
        {
            path: 'rings',
            component: Rings,
            replace: true
        },
        {
            path: 'miracles',
            component: NotFound,
            replace: true
        },
        {
            path: 'pyromancy',
            component: NotFound,
            replace: true
        },
        {
            path: 'sorcery',
            component: NotFound,
            replace: true
        },
        {
            path: 'infusions',
            component: NotFound,
            replace: true
        },

        {
            path: 'gestures',
            component: NotFound,
            replace: true
        },
    ]
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
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
