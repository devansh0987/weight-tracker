import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'Chart',
        component : () => import('../components/Chart.vue') 
    },
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export  default router

