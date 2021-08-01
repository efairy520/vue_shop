import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: () => import('@/views/Home.vue')
}, {
    path: '/category',
    component: () => import('@/views/Category')
}, {
    path: '/cart',
    component: () => import('@/views/Cart')
}, {
    path: '/user',
    component: () => import('@/views/User')
}]

const router = new VueRouter({
    routes
})

export default router