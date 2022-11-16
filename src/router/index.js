import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/interieur',
      component: () => import('../views/InterieurView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'intérieur"}
        ]
      }
    },
    {
      path: '/interieur/:id',
      component: () => import('../views/GoodCardView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'intérieur", link: '/interieur'},
        ]
      }
    },
    {
      path: '/exterieur',
      component: () => import('../views/ExterieurView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'extérieur"}
        ]
      }
    },
    {
      path: '/exterieur/:id',
      name: 'card',
      component: () => import('../views/GoodCardView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'extérieur", link: '/exterieur'},
        ]
      }
    },
    {
      path: '/conseils',
      component: () => import('../views/ConseilsView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: 'Conseils'}
        ]
      }
    },
    {
      path: '/company',
      component: () => import('../views/AboutView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: 'Company'}
        ]
      }
    },
    {
      path: '/community',
      component: () => import('../views/CommunityView.vue'),
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: 'Community'}
        ]
      }
    },
  ]
})

export default router
