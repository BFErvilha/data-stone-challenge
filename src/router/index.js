import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeContent.vue'),
  },
  {
    path: '/products',
    name: 'productsList',
    component: () => import('@/views/Products/ProductsList.vue'),
  },
  {
    path: '/products/create',
    name: 'productsCreate',
    component: () => import('@/views/Products/Product.vue'),
  },
  {
    path: '/products/:productId',
    name: 'productsEdit',
    component: () => import('@/views/Products/Product.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
