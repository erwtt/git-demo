import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'
import userApi from './mockServeData/user'

Mock.mock('/home/getData',homeApi.getStatisticalData)
Mock.mock(/user\/add/,'post',userApi.createUser)               // '\'表示反转义，表明后面是字符串
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/uer\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'post',userApi.deleteUser)