import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/MainLayout'

Vue.use(Router);

export const routes = [
    {
        path: '',
        component: Layout,
        redirect: 'landing',
        children: [
            {
                path: 'landing',
                component: () => import('../pages/Landing'),
                name: 'Landing Page',
                meta: { title: 'landing', icon: 'dashboard', noCache: false },
            },
        ],
    }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes,
});

const router = createRouter();

export default router