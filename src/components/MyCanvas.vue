<template>
  <div>
     <div>这里是myCanvas</div> 
       <div class='tabWrap' ref="tab">
         <router-link :to="{name:'one'}">tab1</router-link>
         <router-link :to="{name:'two'}">tab2</router-link>
         <router-link :to="{name:'three'}">tab3</router-link>
         <router-link :to="{name:'four'}">tab4</router-link>
         <router-link :to="{name:'five'}">tab5</router-link>
     </div>
     <router-view ref='myRef' @concat="handleConcat" :value="value" ></router-view>
     <div>{{value}}</div>
  </div>
</template>

<script>
export default {
  mounted(){
    if(this.$route.name=='four'){
      //  this.$refs.myRef.test();//与router-view渲染出来得组件通信
    }
  },
  watch:{
    $route:function(e){
       if(e.name=='four'){
         this.$nextTick(()=>{
           this.$refs.myRef.test()//与router-view渲染出来得组件通信
         })
    }
    }
  },
  data(){
    return{
      value:'',
      parentValue:'我是父组件信息'
    }
  },
  methods:{
    handleConcat(e){
      this.value = e;
      // console.log(e)
    }
  }
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