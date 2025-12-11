import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/section',
      name: 'section',
      component: () => import('../views/SectionView.vue'),
    },
    {
      path: '/qna',
      name: 'qna',
      component: () => import('../views/QnaView.vue'),
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('../views/PolicyView.vue'),
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/NoticeView.vue'),
    },
  ],
})

export default router
