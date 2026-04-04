<template>
  <div class="index_middle_art_list">

    <div v-infinite-scroll="loadArticleList">
      <div class="infinite-list-item" v-for="(item,index) in indexListData" :key="index">
        <!--      分两部分,图片和描述-->
        <div class="middle_card_div" v-on:mouseover="mouseover(index)" v-on:mouseout="mouseout(index)">
          <!--右上角飘条（与日志页 log.vue 一致）-->
          <div class="log_ribbon_wrap">
            <div class="a">
              <div class="b" :style="{ '--ribbon-bg': ribbonColor(item.type) }">
                <span>{{ item.type }}</span>
              </div>
            </div>
          </div>

          <div class="index_middle_art_img" v-bind:class="{shadowDropCenter:isSlideFwdCenter[index]}">
            <img class="kenburns-left" :src="item.img" style="width: 100%; height: 100%;" alt="">
          </div>

          <router-link :to="`/article/info.html?` + item.id" class="index_middle_art_link">
            <div class="index_middle_art_desc">
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
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {IndexList} from "@/api/api"
import {ElMessage} from "element-plus";

const RIBBON_PALETTE = ["#b8e245", "#95d5b2", "#e17055", "#fdcb6e", "#74b9ff"]

export default {
  name: "index_middle",
  data() {
    return {
      isSlideFwdCenter: [false, false, false, false, false, false],  // 这里应该是一个bool数组.
      indexListData: [],
      offset: 0,
      limit: 4,
    }
  },
  methods: {
    ribbonColor(type) {
      const s = type || ""
      let h = 0
      for (let i = 0; i < s.length; i++) {
        h = (h + s.charCodeAt(i) * 17) % RIBBON_PALETTE.length
      }
      return RIBBON_PALETTE[h]
    },
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
    // this.getIndexArticleList(this.offset, 3)
    // this.offset += 3
  }
}
</script>

<style scoped>

@import "../../../css/animation.css";

/* 与 src/page/log/log.vue 飘条同结构、同配色逻辑 */
.log_ribbon_wrap {
  position: relative;
  z-index: 20;
}

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
  text-align: center;
  background-color: var(--ribbon-bg, #b8e245);
  color: #2d3436;
  font-size: clamp(10px, 2.5vw, 12px);
}

.middle_card_div {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.index_middle_art_img {
  overflow: hidden;
}

.index_middle_art_img img {
  width: 100%;
  transition: all 0.6s;
}

.index_middle_art_desc {
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

/* 与首页 layout 横向 padding 对齐，避免重复留白 */
@media screen and (max-width: 991px) {
  .index_middle_art_list {
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .index_middle_art_desc {
    font-size: clamp(11px, 3.2vw, 13px);
    margin-top: 0.85em;
    margin-left: 0.65em;
    height: auto;
    min-height: 18%;
  }

  .index_middle_art_desc_title {
    margin-left: 0.75em;
    display: block;
    margin-top: 0.35em;
  }

  .index_middle_art_desc_time,
  .index_middle_art_desc_author {
    margin-left: 0.65em;
    margin-right: 0.35em;
  }

  .middle_card_div {
    height: auto;
    min-height: 220px;
    max-height: 78vh;
    margin-bottom: 1.75rem;
  }

  .index_middle_art_img {
    height: 58%;
    min-height: 140px;
    max-height: 42vh;
  }

  .b {
    width: 88px;
    height: 88px;
    top: -44px;
    right: -44px;
  }
}

@media screen and (min-width: 769px) {
  .middle_card_div {
    height: 300px;
    margin-bottom: 50px;
  }

  .index_middle_art_list {
    margin-left: 1em;
  }

  .index_middle_art_img {
    height: 80%;
  }

  .index_middle_art_img img:hover {
    transform: scale(1.1);
  }

  .index_middle_art_desc {
    margin-top: 1.2em;
    margin-left: 1em;
    height: 20%;
  }
}

</style>