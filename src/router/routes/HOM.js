/**
 * HOM Routes
 */
export default [
  {
    path: '/home',
    name: 'HOM0010',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HOM/HOM0010.vue')
  }
];
