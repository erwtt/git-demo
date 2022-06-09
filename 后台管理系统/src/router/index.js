import Vue from 'vue'
import VueRouter from 'vue-router'

  
Vue.use(VueRouter)
const routes = [{
    path:'/',
    name:'Main',
    component:() => import('../views/main.vue'),
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