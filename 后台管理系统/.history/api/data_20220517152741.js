import axios from "./axios";

export const getMenu = (param) => {
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}

export const getData = () =>{
    return axios.request({
        url:'/home/getData'
    })
}

export const getUser = (parse) =>{
    return axios.request({
        url:'api/uer/getUser',
        method:'get',
        parse
    })
}