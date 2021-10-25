import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/MainLayout'
// import _ from 'lodash'
// import BellsSociety from '../pages/BellsSociety'
// import Matahari from '../pages/Matahari'
// import Biomagg from '../pages/Biomagg'
// import Bluesville from '../pages/Bluesville'
// import Fabelio from '../pages/Fabelio'
// import NirmanaKinetik from '../pages/NirmanaKinetik'
// import Senormal from '../pages/Senormal'
// import Landing from '../pages/Landing'

Vue.use(Router);

const xCaseFormatter = (str, separator) => {
    let result = ''
    for(let item of [...str]){
        if(item.charCodeAt() > ('a'.charCodeAt() - 1) || !Number.isNaN(+item)){
            result += item
        }else{
            result += `${separator}${item.toLocaleLowerCase()}`
        }
    }
    if(result.charAt(0) === separator){
        result = result.slice(1)
    }
    return result

}

const camelCaseFormatter = (str) => xCaseFormatter(str, '-')

const titleCaseFormatter = (str) => xCaseFormatter(str, ' ')

const capitalCaseFormatter = (str) => {
    let result = xCaseFormatter(str, ' ')
    return result.split(' ').reduce((acc, itm) => {
        return acc + itm.charAt(0).toUpperCase() + itm.slice(1)
    }, '')
}

let routeBuilder = (name) => {
    return {
        path: '/' + camelCaseFormatter(name),
        component: Layout,
        redirect: '/' + camelCaseFormatter(name) + '/index',
        children: [
            {
                path: 'index',
                component: () => import('../pages/' + capitalCaseFormatter(name)),
                name: capitalCaseFormatter(name),
                meta: { title: titleCaseFormatter(name), noCache: false }
            }
        ]
    }
}

let builtRoute = ['bellsSociety', 'matahari', 'biomagg', 'bluesville', 'fabelio', 'nirmanaKinetik', 'senormal', 'bobobox'].map(el => routeBuilder(el))

export const routes = [
    {
        path: '',
        component: Layout,
        redirect: 'landing',
        children: [
            {
                path: 'landing',
                component: () => import('../pages/Landing'),
                name: 'LandingPage',
                meta: { title: 'Landing Page', icon: 'dashboard', noCache: false },
            },
        ],
    },
    ...builtRoute,
    {
        path: '/scene',
        component: Layout,
        children: [
            {
                path: 'company/:company/model/:model',
                component: () => import('../pages/SceneViewer'),
                name: 'SceneViewer',
                meta: { title: 'Scene Viewer', icon: 'dashboard', noCache: false },
            },
        ],
    },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes,
});

const router = createRouter();

export default router