import {
    createRouter,
    createWebHashHistory
  } from "vue-router";
import DefaultLayout from '../components/layout/DefaultLayout.vue';
import HomePage from '../components/pages/HomePage.vue';
import AboutPage from '../components/pages/AboutPage.vue';


const routes = [

    {
        path:'/',
        redirect:'/home',
        component:DefaultLayout,
        children:[
            {
                path:'/home',
                name:'Home',
                component:HomePage
            },
            {
                path:'/about',
                name:'About',
                component:AboutPage
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  });


export default router;
