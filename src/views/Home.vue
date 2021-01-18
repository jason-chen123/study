<template>
  <div class="home">
    <router-link to='/canvas'>点我跳转到canvas</router-link>
    <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-5">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
     <HelloWorld></HelloWorld>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
// import Text from '../components/text.vue'

export default {
  components: {
    HelloWorld,
    // Text
  },
  data(){
    return{
      isCollapse:false
    }
  },
  computed: {
        defaultActive() {
            return '/' + this.$route.path.split('/').reverse()[0];
        }
    }
}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
}
.el-container,.el-header,.el-aside,.el-main{
width: 100%;
height: 100%;
}
.el-header{
  background: gray;
}
.el-aside{
  background: rgb(84, 92, 100);
} 
.el-main{
  background: navajowhite;
  border-right: none !important;
}
.el-menu{
  border-right: none ;
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
