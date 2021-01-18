<template>
  <div> 
     <div>这里是cavans</div> 
    
      <router-link :to="{name:'mycanvas'}">继续跳转</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.tabWrap{
    display: flex;
    justify-content: space-around;
    width: 100%;
    router-link{
        flex:1
    }
}
</style>