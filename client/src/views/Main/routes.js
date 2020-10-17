export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./About/About'),
  },
];
