import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projetos',
    name: 'projetos',
   
    component: () => import( '../views/ProjetosView.vue')
  },
  {
    path: '/Contatos',
    name: 'Contatos',
    component: () => import('../views/ContatosView.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
