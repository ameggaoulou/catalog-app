import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductPage from '@/views/ProductPage.vue';
import ProductCategories from '@/views/ProductCategories.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  { path: '/products', component: ProductCategories },
  { path: '/products/:category', component: ProductPage, props: true },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;