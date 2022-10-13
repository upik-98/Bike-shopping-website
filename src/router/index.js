import { createRouter, createWebHistory } from 'vue-router'
import BikeCatalogPage from '../views/BikeCatalog.vue';
import CartPage from '../views/CartPage.vue';
import BikeDetailPage from '../views/BikeDetails.vue';
import ErrorPage from '../views/Default.vue';
const routes = [
  {
    path: '/bikeCatalog',
    name: 'BikeCatalog',
    component: BikeCatalogPage,
  },
  {
    path: '/bikeDetail/:id',
    name: 'bikeDetails',
    component: BikeDetailPage,
  },
  {
    path: '/cart',
    name: 'cartPage',
    component: CartPage,
  },
  {
    path: '/',
    redirect: '/bikeCatalog',
  },
  {
    path: '/:errorPath(.*)*',
    component: ErrorPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
