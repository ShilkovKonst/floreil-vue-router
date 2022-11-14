import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/interieur',
      name: 'interieur',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InterieurView.vue'),
      // children: [
      //   {
      //     // UserProfile will be rendered inside User's <router-view>
      //     // when /user/:id/profile is matched
      //     path: ':id',
      //     component: () => import('../views/GoodCardView.vue')
      //   },]
    },
    {
      path: '/exterieur',
      name: 'exterieur',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExterieurView.vue'),
      // children: [
      //   {
      //     // UserProfile will be rendered inside User's <router-view>
      //     // when /user/:id/profile is matched
      //     path: ':id',
      //     component: () => import('../views/GoodCardView.vue')
      //   },]
    },
    {
      path: '/conseils',
      name: 'conseils',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ConseilsView.vue')
    },
    {
      path: '/:id',
      name: 'card',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GoodCardView.vue'),
    },
    {
      path: '/company',
      name: 'company',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/community',
      name: 'community',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CommunityView.vue')
    },
  ]
})

export default router
