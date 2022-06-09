<template>
<div id="login">
<vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    >
</vue-particles>
    
    <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="login_container"
    >
    <h3 class="login_title">系统登录</h3>
    <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
    >
        <el-input
            type="input"
            v-model="form.username"
            auto-complete="off"
            placeholder="请输入用户名"
        ></el-input>
    </el-form-item>
        <el-form-item
        label="密码"
        label-width="80px"
        prop="username"
        class="username"
    >
        <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="请输入密码"
        ></el-input>
    </el-form-item>
    <el-form-item class="login_submit" >
       
        <el-button 
            type='primary'
            @click="login"
            class="login_submit"
         >登录</el-button>
        
         
            <el-button 
            type='primary'
            @click="register"
            class="register_submit"
         >注册</el-button>
         
    </el-form-item>
    </el-form> 
    
    </div>
    
</template>

<script>
import {getMenu} from '../../../api/data'
import mock from 'mockjs'
export default {
    name:'login',
    data(){
        return{
            form:{

            },
            rules:{
                username:[
                    {
                        required:true,message:'请输入用户名',trigger:'blur'
                    },
                    {
                        min:3,message:'用户名长度不能少于三位',trigger:'blur'
                    }
                ],
                 password:[
                     {required:true,message:'请输入密码',trigger:'blur'}
                 ]
            }
        }
    },
    methods:{
        login(){
            getMenu(this.form).then(({data:res}) => {
                console.log(res)
                if(res.code === 20000){
                    this.$store.commit('tab/clearMenu')
                    this.$store.commit('tab/setMenu',res.data.menu)
                    this.$store.commit('user/setToken',res.data.token)
                    this.$store.commit('tab/addMenu',this.$router)
                    console.log(this.$router)
                    this.$router.push({name:'Main'} )
                    
                }else{
                    this.$message.warning(res.data.message)
                }
            })
        //     const token = mock.Random.guid()
        //     this.$store.commit('user/setToken',token)
        //     this.$router.push({name:'home'})
        },
        register(){

        }
    }
}
</script>

<style lang="less" scoped>
.cash{
     width: 100%;
        height: 100%;
        position: absolute;
    }

    #login{
        width: 100%;
  height: 100vh;
  background: url("../../assets/images/xiaoyuan.jpg") center center no-repeat;
  background-size: 100% 100%;
  position: fixed;//固定定位
    }

    .login_container{
        display: flex;
        justify-content: space-around;
        border-radius: 15px;
        background-clip: padding-box;
        margin:180px auto;
        width: 350px;
        padding:35px 35px 15px 35px;
        background-color:#fff;
        border:1px solid #eaeaea;
        box-shadow: #cac6c6;
        //position:absolute;
    }
    .login_title{
        margin:0px auto 40px auto;
        text-align: center;
        color:#505458;
    }
    .login_submit{
         margin:10px auto 0px auto 
    }
    .register_submit{

    }
</style>