import Cookie from 'js-cookie'

export default{
    namespaced:true,
    state:{
        token:''
    },
    mutations:{
        setToken(state, val){
            state.token = val
            Cookies.set('token',val)
        },
        clearToken(state){
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state){
            state.token = state.token || Cookie.get('token')
        }
    }
}