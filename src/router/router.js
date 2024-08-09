
const Favorite = ()=>import('@/components/Favorite/Favorite.vue');
const Home=()=>import('@/components/Home/Home.vue');
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path:'/favorite',
    component:Favorite
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
