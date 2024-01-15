<template>
  <div class="common_card_div_pc index_right_hot_art_div">
    <b class="tracking-in-contract">最热文章</b>

    <div v-for="(item,index) in list" :key="index">

      <div class="right_hot_item_div"
           :class="[index === 1?'div_item_back_pink':index===2?'div_item_back_huang':index === 3?'div_item_back_lanse':'div_item_back_ls']">

        <!--        分类-->
        <div class="right_hot_item_classify "
             :class="[index === 1?'div_back_pink':index===2?'div_back_huang':index === 3?'div_back_lanse':'div_back_ls']">
          <div class="right_hot_classify_text tracking-in-expand-fwd">{{ item.type }}</div>
        </div>

        <!--名称：跳转到指定详情页-->
        <router-link :to="`/article/info.html?`+item.id">
          <div class="right_hot_item_name">
            <div class="right_hot_item_name_text slide-in-right">
              {{ item.title }}
            </div>
          </div>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>

import {GetHotArticleList} from "@/api/api";
import {ElMessage} from "element-plus";

export default {
  name: "index_right",
  data() {
    return {
      list: [],
    }
  },
  created() {
    let thisVue = this
    GetHotArticleList().then(function (response) {
      if (response.code === 0) {
        thisVue.list = response.data
      } else {
        ElMessage.error("获取热门文章失败,请稍后重试")
      }
    })
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
@import "../../../css/common.css";
@import "../../../css/animation.css";

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
    overflow: hidden;
    transition: all 1s;
  }

  .right_hot_item_name:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .right_hot_item_name_text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin-top: 0.3em;
  }

  .right_hot_classify_text {
    margin-top: 0.3em;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  .div_back_pink {
    background-color: #fd79a8;
  }

  .div_back_huang {
    background-color: #eab543;
  }

  .div_back_lanse {
    background-color: #54a0ff;
  }

  .div_back_ls {
    background-color: #0ca678;
  }

  .div_item_back_pink {
    border: 1.5px solid #fd79a8;
  }

  .div_item_back_huang {
    border: 1.5px solid #eab543;
  }

  .div_item_back_lanse {
    border: 1.5px solid #54a0ff;
  }

  .div_item_back_ls {
    border: 1.5px solid #0ca678;
  }

}
</style>
