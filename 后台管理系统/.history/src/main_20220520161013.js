import Vue from 'vue'
import App from './App.vue'
import{Container,Main,Header,Aside} from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './assets/less/index.less'
import store from './store'
import http from 'axios'
import '../api/mock.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Header)
// Vue.use(Aside)
Vue.prototype.$http = http

router.beforeEach((to,from,next)=>{
    store.commit('user/getToken')
    const token = store.state.user.token
    if(!token && to.name !== 'login'){
        next({name:'login'})
    }
    else{
        next()
    }
}
)

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
      console(router)
  }
}).$mount('#app')
