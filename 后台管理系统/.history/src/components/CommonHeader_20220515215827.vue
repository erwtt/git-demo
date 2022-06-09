<template>
  <header>
      <div class='l-content'>
          <el-button @click="dropdownClick" plain icon='el-icon-menu' size='mini'></el-button>
          <!-- <h3 style="color:#fff">首页</h3> -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item style="color:#fff" v-for='item in tags' :key='item.path' :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            
        </el-breadcrumb>
      </div>
      <div class='r-content'>
          <el-dropdown  trigger="click" size='mini'>
              <span>
                  <img class='user' :src="userImg" >
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
      </div>
  </header>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
    name:'CommonHeader',
    data(){
        return{
            userImg:require('../assets/images/user.png')
        }
    },
    methods: {
        // dropdownClick(){
        //     this.$store.commit('collapseMenu')
        // }
        ...mapMutations('tab',{dropdownClick:'collapseMenu'})
    
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList 
        })
    }
}
</script>

<style  lang='less' scoped>
    header{
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items:center ;
    }
    .l-content{
        display: flex;
        align-content: center;
        .el-button{
            margin-right:20px;
        }
        .el-breadcrumb-item {
            line-height: 30px;
        }
    }
    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius:50%;
        }
    }
</style>