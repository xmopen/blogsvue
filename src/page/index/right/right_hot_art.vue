<template>
  <div class="common_card_div_pc index_right_hot_art_div">
    <b>最热文章</b>

    <div v-for="index in 4" :key="index">

      <div class="right_hot_item_div"
           :class="[index === 1?'div_item_back_pink':index===2?'div_item_back_huang':index === 3?'div_item_back_lanse':'div_item_back_ls']">

        <!--        分类-->
        <div class="right_hot_item_classify "
             :class="[index === 1?'div_back_pink':index===2?'div_back_huang':index === 3?'div_back_lanse':'div_back_ls']">
          <div class="right_hot_classify_text">Linux网络</div>
        </div>

        <!--        名称-->
        <div class="right_hot_item_name ">
          <div class="right_hot_item_name_text">
            Linux是如何将用户进程的数据包通过中断来配合网卡将数据包发送到目标机器上的{{ index }}
          </div>
        </div>


      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "index_right",
  data() {
    return {}
  },
  created() {
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
@import "../../../css/common.css";

/* 移动 */
@media screen and (max-width: 768px) {
}

/* PC */
@media screen and (min-width: 768px) {

  .index_right_hot_art_div {
    width: 28em;
    height: 13em;
    margin-left: 10em;
  }

  .right_hot_item_div {
    height: 2em;
    margin-top: 0.8em;
    //border: 2px solid #eab543;
  }

  .right_hot_item_classify {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;

    width: 20%;
    height: 100%;
    display: inline-block;
    float: left;
    border-radius: 5%;
  }

  .right_hot_item_name {
    margin-left: 2em;
    width: 70%;
    display: inline-block;
    float: left;
  }

  .right_hot_item_name_text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin-top: 0.3em;
  }

  .right_hot_classify_text{
    margin-top: 0.3em;
  }

  .div_back_pink {
    background-color: #fd79a8;
  }

  .div_back_huang {
    background-color: #eab543;
  }

  .div_back_lanse{
   background-color: #54a0ff;
  }

  .div_back_ls{
    background-color: #0ca678;
  }

  .div_item_back_pink {
    border: 1.5px solid #fd79a8;
  }

  .div_item_back_huang {
    border: 1.5px solid #eab543;
  }

  .div_item_back_lanse{
    border: 1.5px solid #54a0ff;
  }

  .div_item_back_ls{
    border: 1.5px solid #0ca678;
  }

}
</style>
