<template>
  <div>
      <div>这里是滚动视区</div> 
      <div class='scroll_wrap'>
          <div class='b1 item' v-for="(each) in 30" :key='each' :class="addClass===true?'myclass':''" :style='background()'>{{each}}</div>
      </div>
  </div>
</template>

<script>
var domList
export default {
  created(){
    // console.log(this.$parent.$children)
    window.addEventListener('scroll',this.debounce(this.scrollToTop,10));
  },
  mounted(){
     domList = document.querySelectorAll('.scroll_wrap div');
    // console.log(this.randomColor(500,200,true))
    this.scrollToTop()
  },
  data(){
    return{
      addClass:false,
      background:function(){
        // console.log(this.randomColor(0,255))
        return {
          'background':this.randomColor(255,0),
          'height':this.randomColor(500,200,true)+'px'
        }
      }
    }
  },
  methods:{
    scrollToTop(){
      const slideInAt = window.scrollY + window.innerHeight;//滚动的距离加上整个视口的距离
      console.log(window.scrollY)
      domList.forEach(element => {
        var Top = element.offsetTop;
        const isNotScrollPast = window.scrollY < element.offsetTop;//卷动的距离小于元素距window顶部的距离 即在视口内元素的滚动
        const isShown = slideInAt>Top;//滚动的距离加上整个视口的距离总共的距离大于元素距window顶部的距离 即滚动后的视口区域元素出现
        // console.log(element.offsetTop);
        if(isShown&&isNotScrollPast){//isShown&&isNotScrollPast  即元素在可视范围内
          //刚好超过div头顶
          console.log(`超过了div${element.innerHTML}`);
          element.classList.add('myclass')
        }else {
        //  element.classList.remove('myclass')
        }
      });
    },
  debounce(fn, wait) {
        var timeout = null;
        return function() {
            if (timeout !== null)
                clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
        }
    },
    randomColor(max, min,a) {
      if(a){
        let random =  Math.floor(Math.random() * (max - min) - min)
        return random
        }
      let random = function(){ return Math.floor(Math.random() * (max - min) - min)};
      return `rgb(${random()},${random()},${random()})`;
      //   console.log(random);
    },
   
  }
}
</script>

<style lang="less" scoped>
.scroll_wrap{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  color:#fff
}
.item{
  // flex:1;
  width: 100%;
  height: 500px;
   transition:all 1s linear;
   opacity: 0;
   position: relative;
   left: -100px;
}
.myclass{
 left: 0;
  opacity: 1;
}
</style>