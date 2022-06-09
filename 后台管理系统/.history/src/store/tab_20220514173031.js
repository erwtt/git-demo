import request from '@/api'

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
        login: {}
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
        login(state, res){
            state.login = res
        }
    },
    actions:{
        login({commit}){
            request.login().then((res)=>{
                commit('login', res)
            })

        }
    }
}