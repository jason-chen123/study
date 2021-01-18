<template>
  <div>
    <ul
      :style="{ transform: 'rotate(' + (360 / list.length) * index + 'deg)' }"
    >
      <li :style="style(index)" v-for="(each, index) in list" :key="index">
        {{ index }}
      </li>
    </ul>
    <button @click="left">左</button>
    <button @click="right">右</button>
    <h2>{{ index }}</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(0 % 7);
  },
  methods: {
    left() {
      this.index--;
    },
    right() {
      this.index++;
    },
  },
  data() {
    return {
      index: 0,
      style: (index) => {
        var deg = 360 / this.list.length;
        var myIndex;
        var check;
        if (this.index > this.list.length || this.index <= 0) {
          if (index === 0) {
            myIndex = this.list.length;
          }
          myIndex = Math.abs(this.index);
          myIndex = myIndex % this.list.length;
        }
        this.index <= 0
          ? (check = myIndex)
          : (check = this.list.length - this.index);
        //   console.log(check)
        return {
          transform: `rotate(${index * deg}deg)`,
          color: `${index === check ? "red" : "#000"}`,
        };
      },
      list: [
        ["明星合作", 8],
        ["微综艺", 9],
        ["微剧集", 10],
        ["影视综", 11],
        ["国民晚会", 1],
        ["全娱盛典", 2],
        ["创作盛宴", 3],
      ],
    };
  },
};
</script>

<style lang="less" scoped>
ul {
  height: 367px;
  position: relative;
  transform: rotate(0deg);
  transform-origin: center center;
  transition: 2s ease;
}
ul li {
  transition: 2s ease;
  position: absolute;
  text-align: center;
  width: 2.1rem;
  height: 100%;
  left: 50%;
  font-size: 12px;
  /* top: -.67rem; */
  margin-left: -1.05rem;
  transform-origin: center center;
  list-style: none;
  font-size: 15px;
}
</style>