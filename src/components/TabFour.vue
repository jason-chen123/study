<template>
  <div>
    <div>这里是低4</div>
    <input type="text" v-model="myvalue" @input="inputValue" />
  </div>
</template>

<script>
export default {
    props:['value'],
  created() {},
    data(){
        return{
            myvalue:''
        }
    },
  mounted() {},
  methods: {
    test() {
      console.log("我是tabFour");
    },
    inputValue() {
      this.$emit("concat", this.myvalue);//父组件监听子组件变化 并传递给父组件
    },
  },
  watch:{
      value:function(value){
        //   通过传值 router-view子组件 使用prop和watch监听父组件值得变化
          console.log(value)
      }
  }
};
</script>

<style>
</style>