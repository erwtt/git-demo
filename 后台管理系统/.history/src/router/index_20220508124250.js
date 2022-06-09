import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
  
Vue.use(VueRouter)
const routes = [{
    path:'/',
    name:'Main',
    component:Main,
    children:[
        {
            path:'/home',
            name:'home',
            component:() => import('../views/home')
        },
        {
            path:'/user',
            name:'user',
            component:() => import('../views/user')
        },
        {
            path:'/mall',
            name:'mall',
            component:() => import('../views/mall')
        },
        {
            path:'/page1',
            name:'page1',
            component:() => import('../views/other/page1')
        },
        {
            path:'/page2',
            name:'page2',
            component:() => import('../views/other/page2')
        }
    ]
}]

export default new VueRouter({
    mode:'history',
    routes
})