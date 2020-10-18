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
  {
    path: '/create-game',
    name: 'CreateGame',
    component: () => import('./CreateGame/CreateGame'),
  },
  {
    path: '/join-room',
    name: 'JoinRoom',
    component: () => import('./JoinRoom/JoinRoom'),
  },
];
