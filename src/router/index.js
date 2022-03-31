// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import ItemList from '../pages/ItemList.vue'
import ItemDetail from '../pages/ItemDetail.vue'


const routes = [
  {
    path: '/',
    name: 'ItemList',
    component: ItemList
  },
  {
    path: '/ItemDetail/:id',
    name: 'detail',
    props: true,
    component: ItemDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes,
})

export default router
