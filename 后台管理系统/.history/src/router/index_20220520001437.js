import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
  
Vue.use(VueRouter)
const routes = [{
    path:'/',
    name:'Main',
    component:Main,
    children:[
       
    ]
},
    {
        path:'/login',
        name:'login',
        component:() => import('../views/login/login.vue')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})