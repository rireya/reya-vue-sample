/**
 * LOG Routes
 */
export default [
  {
    path: '/login',
    name: 'LOG0010',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LOG/LOG0010.vue')
  }
];
