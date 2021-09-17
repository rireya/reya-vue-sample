/**
 * ETC Routes
 */
export default [
  {
    path: '/about',
    name: 'ETC0010',
    component: () => import(/* webpackChunkName: "etc" */ '@/views/ETC/ETC0020.vue')
  },
  {
    path: '/test',
    name: 'ETC0020',
    component: () => import(/* webpackChunkName: "etc" */ '@/views/ETC/ETC0020.vue')
  }
];
