<template>
  <div class="index_middle_art_list">

    <div v-infinite-scroll="loadArticleList">
      <div class="infinite-list-item" v-for="(item,index) in indexListData" :key="index">
        <!--      分两部分,图片和描述-->
        <div class="middle_card_div" v-on:mouseover="mouseover(index)" v-on:mouseout="mouseout(index)">
          <!--右上角标签-->
          <div style="z-index: 999999">
            <div class="a">
              <div class="b">
                <span>{{ item.type }}</span>
              </div>
            </div>
          </div>

          <div class="index_middle_art_img" v-bind:class="{shadowDropCenter:isSlideFwdCenter[index]}">
            <img class="kenburns-left" :src="item.img" style="width: 100%;" alt="">
          </div>

          <router-link :to="`/article/info.html?` + item.id">
            <div class="index_middle_art_desc">
              <div>
                <div class="index_middle_art_desc_author bounce-in-left">
                  {{ item.author }}
                </div>

                <div class="index_middle_art_desc_time bounce-in-left">
                  {{ item.time }}
                </div>

                <div class="index_middle_art_desc_title tracking-in-contract">
                  {{ item.title }}
                </div>

              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {IndexList} from "@/api/api"
import {ElMessage} from "element-plus";

export default {
  name: "index_middle",
  data() {
    return {
      isSlideFwdCenter: [false, false, false, false, false, false],  // 这里应该是一个bool数组.
      indexListData: [],
      offset: 0,
      limit: 2,
    }
  },
  methods: {
    loadArticleList() {
      this.getIndexArticleList(this.offset, this.limit)
      this.offset += this.limit
    },
    mouseover(index) {
      this.isSlideFwdCenter[index] = true
    },
    mouseout(index) {
      this.isSlideFwdCenter[index] = false
    },
    getIndexArticleList(offset, limit) {
      let vueThis = this
      IndexList(offset, limit).then(function (response) {
        if (response.code === 0) {
          for (let i = 0; i < response.data.length; i++) {
            vueThis.indexListData.push(response.data[i])
          }
        } else {
          ElMessage.error("获取文章出错,请稍后重试！")
        }
      })
    },
  },
  created() {
    this.getIndexArticleList(this.offset, 3)
    this.offset += 3
  }
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
    border-radius: 3px;
    background-color: #ffa940;
    padding: 0.2em 0.5em;
  }

  .index_middle_art_desc_author {
    display: inline-block;
    margin-left: 2em;
    border-radius: 4px;
    background-color: pink;
    padding: 0.2em 0.5em;
  }
}
</style>