import { createRouter, createWebHistory } from 'vue-router'
import MinhasTarefas from '../views/MinhasTarefas.vue'

const routes = [
  {
    path: '/',
    name: 'tarefas',
    component: MinhasTarefas
  },
  {
    path: '/concluidas',
    name: 'TarefasConcluidas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TarefasFinalizadas.vue')
  },
  {
    path: '/importantes',
    name: 'TarefasImportantes',
    component: () => import('../views/TarefasImportantes.vue')
  },
  {
    path: '/apagadas',
    name: 'TarefasApagadas',
    component: () => import('../views/TarefasApagadas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
