//import request from '@/api'
import router from '../router'
import Cookie from 'js-cookie'
export default{
    namespaced:true,
    state:{
        isCollapse: false,
        tabsList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu: null,
        menu:[]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val){
            if(val.name != 'home'){
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if(result === -1)
                    state.tabsList.push(val)
            }
            else{
                state.currentMenu = null
            }
        },
        closeTag(state, val){
            const result = state.tabsList.findIndex(item => item.name === val.name)
            if(result !== -1){
                state.tabsList.splice(result,1)
            }
        },
        // login(state, res){
        //     state.login = res
        // }
        setMenu(state, val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        clearMenu(state){
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state, router){
            if(!Cookie.get('menu')){
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }
                else{
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            //console.log(menuArray)
            // 动态路由添加
            menuArray.forEach(item => {
                router.addRoute('Main',item)
            })
        }
         
    },
    // actions:{
    //     login({commit}){
    //         request.login().then((res)=>{
    //             commit('login', res)
    //         })

    //     }
    // }
}