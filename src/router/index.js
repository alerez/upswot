import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/todo.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
