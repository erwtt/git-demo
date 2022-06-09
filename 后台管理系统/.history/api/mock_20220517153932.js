import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'
import userApi from './mockServeData/user'

Mock.mock('/api/home/getData',homeApi.getStatisticalData)
Mock.mock(/api\/user\/add/,'post',userApi.createUser)               // '\'表示反转义，表明后面是字符串
Mock.mock(/api\/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/api\/user\/del/,'post',userApi.deleteUser)