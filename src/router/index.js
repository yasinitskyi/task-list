import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks'
import Task from '../views/Task'
import New from '../views/New'

const routes = [
  {
    path: '/',
    component: Tasks,
    alias: '/tasks'
  },
  {
    path: '/task/:id?',
    component: Task,
  },
  {
    path: '/new',
    component: New,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
