import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditView from '@/views/EditView.vue'
import MainView from '@/views/MainView.vue'
import CreateV from '@/views/CreateV.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: () => import( '../views/MapView.vue')
  },{
    path: '/create',
    name: 'create',
    component: CreateV
  },{
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },{
    path: '/main',
    name: 'main',
    component: MainView
  },
   
   
 
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
