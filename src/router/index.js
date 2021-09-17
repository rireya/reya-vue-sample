import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes/_register';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/test'
    }
  ]
});

export default router;
