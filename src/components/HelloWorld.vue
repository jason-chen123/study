<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
      <button @click="send">zxc请求</button>
      <button @click="send2">fun請求</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    send(){
          this.$http.get('http://81.69.58.49:899/zxc').then((res)=>{
        // http://192.168.1.7:8088/fun
        // http://localhost:899/zxc
        // http://81.69.58.49:8088/zxc
        // /api/fun
        console.log(res)
      })
    },
    send2(){
      this.$http.get('http://81.69.58.49:899/fun').then((res)=>{
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
