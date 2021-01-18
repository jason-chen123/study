<template>
  <div>
      213
    <div id='drawWrap'>
      <img
        ref="img"
        src="../../src/assets/image/meinv.png"
        style="width: 300px; height: 300px"
        alt=""
      />
    </div>
    <canvas ref="canvas" width="300" height="300" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
      console.log('我绘画啦')
    var mycanvas = document.querySelector('#canvas');
    var ctx = mycanvas.getContext("2d");
    var myImg = new Image();
    myImg.style.width='300px';
    myImg.src = document.querySelector('img').src;
    myImg.onload = ()=>{
        ctx.drawImage(myImg, 0, 0,300,300);
        this.convertCanvasToImage(mycanvas)();
    }

    setTimeout(() => {
      
    }, 200);

    //    var xx = mycanvas.toDataURL('image/png');
    //    console.log(xx)
  },
  methods: {
    convertCanvasToImage(canvas) {
      //  console.log(canvas)
      var image = new Image();
      image.src = canvas.toDataURL("image/png");
      console.log(image);
      return function () {
        document.querySelector('#drawWrap').appendChild(image);
      };
    },
  },
};
</script>

<style>
</style>