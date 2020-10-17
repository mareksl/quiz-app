import Vue from 'vue';
import VueRouter from 'vue-router';
import mainRoutes from '@/views/Main/routes';
import gameRoutes from '@/views/Game/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game/GameContainer'),
    children: gameRoutes,
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main/MainContainer'),
    children: mainRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
