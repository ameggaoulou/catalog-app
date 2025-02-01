import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue'; // Updated import

const routes = [
  { path: '/', component: HomePage }, // Updated component name
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;