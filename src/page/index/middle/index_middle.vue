<template>
  <div class="index_middle_art_list">
    <div v-for="index in data_list" :key="index">
      <!--      分两部分,图片和描述-->

      <div class="middle_card_div" v-on:mouseover="mouseover(index)" v-on:mouseout="mouseout(index)">
        <!--右上角标签-->
        <div style="z-index: 999999">
          <div class="a">
            <div class="b">
              <span>Linux网络</span>
            </div>
          </div>
        </div>

        <div class="index_middle_art_img" v-bind:class="{shadowDropCenter:isSlideFwdCenter[index]}">
          <img src="../../../assets/back_test.jpg" style="width: 100%;" alt="">
        </div>

        <router-link :to="`/article/info.html?` + index">
          <div class="index_middle_art_desc">
            <div>
              <!--            分出几个DIV来进行容纳.-->

              <div class="index_middle_art_desc_classify">
                <!--                分类-->
                Linux网络
              </div>

              <div class="index_middle_art_desc_time">
                2023-07-21 00:50:51
              </div>

              <div class="index_middle_art_desc_title">
                Linux是如何将用户进程的数据包通过中断来配合网卡将数据包发送到目标机器上
              </div>

            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_middle",
  data() {
    return {
      data_list: 6,
      isSlideFwdCenter: [false, false, false, false, false, false],  // 这里应该是一个bool数组.
    }
  },
  methods: {
    mouseover(index) {
      this.isSlideFwdCenter[index] = true
    },
    mouseout(index) {
      this.isSlideFwdCenter[index] = false
    },
  },
}
</script>

<style scoped>

@import "../../../css/animation.css";

@media screen and (max-width: 768px) {
  /*  移动端.*/
}

@media screen and (min-width: 768px) {

  /*  PC*/
  /**/
  .middle_card_div {
    height: 300px;
    margin-bottom: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .index_middle_art_list {
    margin-left: 1em;
  }

  /*参考: https://blog.csdn.net/qq_39473019/article/details/103634666*/
  .a {
    position: relative;
  }

  .b {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
    right: -50px;
    transform: rotate(45deg);
  }

  .b span {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
  //text-align: center; background-color: #b8e245;
  }

  .index_middle_art_img {
    overflow: hidden;
    height: 80%;
  }

  .index_middle_art_img img {
    width: 100%;
    transition: all 0.6s;
  }

  .index_middle_art_img img:hover {
    transform: scale(1.1);
  }

  .index_middle_art_desc {
    margin-top: 1.2em;
    margin-left: 1em;
    height: 20%;
    text-align: left;
  }

  .index_middle_art_desc_classify {
    display: inline-block;
    float: left;
    border-radius: 5%;
    background-color: #ffa39e;
  }

  .index_middle_art_desc_title {
    display: inline-block;
    margin-left: 2em;
  }

  .index_middle_art_desc_time {
    display: inline-block;
    margin-left: 2em;
    border-radius: 5%;
    background-color: #ffa940;
  }
}
</style>