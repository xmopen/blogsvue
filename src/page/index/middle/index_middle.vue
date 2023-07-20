<template>
  <div class="index_middle_art_list">
    <div v-for="index in data_list" :key="index">
      <!--      分两部分,图片和描述-->

      <div class="middle_card_div">
        <!--右上角标签-->
        <div>
          <div class="a">
            <div class="b">
              <span>分类</span>
            </div>
          </div>
        </div>

        <div class="index_middle_art_img">
          <img src="../../../assets/black_boat.png" style="width: 100%;height: 100%" alt="">
        </div>

        <router-link :to="`/article/info.html?` + index">
          <div class="index_middle_art_desc">
            <div>
              <!--            分出几个DIV来进行容纳.-->

              <div class="index_middle_art_desc_classify">
                <!--                分类-->
                Linux网络
              </div>

              <!--              热度-->
              <div class="index_middle_art_desc_hot">
                99
              </div>

              <div class="index_middle_art_desc_title">
                Linux是如何将用户进程的数据包通过中断来配合网卡将数据包发送到目标机器上{{ index }}
              </div>

              <div class="index_middle_art_desc_time">
                2023-07-21 00:50:51
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
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  /*  移动端.*/
}

@media screen and (min-width: 768px) {

  /*  PC*/
  .card_height {
  }
  /**/
  .middle_card_div {
    height: 300px;
    margin-bottom: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .middle_card_div:hover{
    //-webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    //animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    //-webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    //animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  .index_middle_art_list {
    margin-left: 1em;
  }

  /*参考: https://blog.csdn.net/qq_39473019/article/details/103634666*/
  .a {
    position: relative;
  //overflow: hidden; //display: block;
  }

  .b {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
    right: -50px;
    transform: rotate(45deg);
  //overflow: hidden;
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

  .index_middle_art_img:hover {
  }

  .index_middle_art_desc {
    margin-top: 1em;
    margin-left: 1em;
    height: 20%;
    text-align: left;
  }

  .index_middle_art_desc_classify {
    display: inline-block;
    float: left;
  }

  .index_middle_art_desc_hot {
    display: inline-block;
    margin-left: 2em;
  }

  .index_middle_art_desc_title {
    display: inline-block;
    margin-left: 2em;
  }

  .index_middle_art_desc_time {
    display: inline-block;
    margin-left: 2em;
  }
}
</style>