<template>
  <div>
    <canvas ref="canvas" ></canvas>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hello:123
    }
  },
  mounted() {
    let zome = "qwertyuiopasdfghjklzxcvbnm";
    var c = this.$refs.canvas;
    c.width = 80;
    c.height = 30;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 80, 30);
    var color = this.randomColor(0, 255);
    ctx.font = "20px Arial";
    ctx.fillStyle = color;
    this.randomText(zome, ctx);
    this.randomCircle(ctx);
    this.randomLine(ctx)
  },
  methods: {
    randomColor(min, max) {
      let random = Math.floor(Math.random() * (max - min) - min);
      return `rgb(${random},${random},${random})`;
      //   console.log(random);
    },
    randomCount(min, max) {
      let random = Math.floor(Math.random() * (max - min) - min);
      return random;
    },
    randomText(str, ctx) {
      for (var i = 1; i <= 4; i++) {
        let random = Math.floor(Math.random() * str.length);
        ctx.save();
        ctx.rotate((this.randomCount(0, -5) * Math.PI) / 180);
        ctx.translate(15 * i, 0);
        ctx.fillText(str[random], 0, 20);
        console.log(str[random]);
        ctx.restore();
      }
    },
    randomCircle(ctx) {
      for (var i = 0; i < 40; i++) {
          let randomX =this.randomCount(0,100);
          let randomY = this.randomCount(0,80)
        ctx.beginPath();
      var color = this.randomColor(0,255);
      ctx.strokeStyle = color;
        ctx.arc(randomX, randomY, 1, 0, 2 * Math.PI);
        ctx.stroke();
      }
    },
    randomLine(ctx){
        for(var i = 0; i < 5; i++){
            ctx.moveTo(this.randomCount(0,100),this.randomCount(0,100));
            ctx.lineTo(this.randomCount(0,80),this.randomCount(0,100));
            ctx.stroke();
        }
    }
  },
};
</script>

<style>
</style>