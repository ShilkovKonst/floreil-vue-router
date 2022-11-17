import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Interieur from '../views/InterieurView.vue'
import Exterieur from '../views/ExterieurView.vue'
import Good_Card from '../views/GoodCardView.vue'
import Conseils from '../views/ConseilsView.vue'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/interieur',
      component: Interieur,
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'intérieur"}
        ]
      }
    },
    {
      path: '/interieur/:id',
      component: Good_Card,
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'intérieur", link: '/interieur'},
          {name: " "},
        ]
      }
    },
    {
      path: '/exterieur',
      component: Exterieur,
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'extérieur"}
        ]
      }
    },
    {
      path: '/exterieur/:id',
      component: Good_Card,
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: "Plantes d'extérieur", link: '/exterieur'},
          {name: " "},
        ]
      }
    },
    {
      path: '/conseils',
      component: Conseils,
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: 'Conseils'}
        ]
      }
    },
    {
      path: '/company',
      component: About,
      meta:{
        breadcrumb: [
          {name: 'Home', link: '/'},
          {name: 'Company'}
        ]
      }
    },
    {
      path: '/community',
      component: About,
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
