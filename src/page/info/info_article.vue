<template>
  <div class="info_div" id="info_div_id">
    <!-- 文章详情页面应该只显示和文章相关的内容(内容+目录),其他一律不显示 -->
    <el-row>

      <el-col :span="2"></el-col>
      <el-col :span="15">
        <div class="grid-content ep-bg-purple ">
          <div class="common_card_div_pc article_info_div">

            <b>{{title}}</b>
            <div class="article_user_info_div">
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/catalog.svg" alt="">
                <div class="article_info_desc article_info_desc_type">
                  {{type}}
                </div>
              </div>
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/user_id.svg" alt="">
                <div class="article_info_desc article_info_desc_name">
                  {{author}}
                </div>
              </div>
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/time2.svg" alt="">
                <div class="article_info_desc article_info_desc_time">
                  {{time}}
                </div>
              </div>
            </div>
            <div class="div_subhead">
              <div class="div_subhead_text">
               {{subTitle}}
              </div>
            </div>
            <el-divider/>

            <!--                      文章主内容-->
            <div id="article_content_div" class="article_content">
              <div class="info_text">
                <div id="vditor-md-content-m">
                </div>
              </div>
            </div>

          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-light catalog_afafix common_affix_div">
          <el-affix target=".catalog_afafix" :offset="300">
            <div class="common_card_div_pc catalog_info_div ">
              <b>目录</b>
              <div id="catalog_content" class="catalog_detail_div">
                <div v-for="cataItem in catalogTree.next" :key="cataItem">
                  <div v-if="cataItem.type === 'H0' || cataItem.type === 'H1'">
                    <a @click="catalogClick(cataItem.id)" :id="`a` + cataItem.id">
                      {{ cataItem.name }}
                    </a>
                    <div>
                      <!-- 这里貌似只展示了二级 -->
                      <div v-for="item in cataItem.next" :key="item" :id="`a` + item.id"
                           class="catalog_detail_h2"><a @click="catalogClick(item.id)">{{
                          item.name
                        }}</a>
                        <div v-for="h3Item in item.next" :key="h3Item" :id="`a` + h3Item.id"
                             class="catalog_detail_h3">
                          <!-- 展示三级 -->
                          <a @click="catalogClick(h3Item.id)">{{
                              h3Item.name
                            }}</a>
                        </div>
                      </div>

                      <div>
                        <!-- 展示四级 -->
                      </div>
                      <div>
                        <!-- 展示五级 -->
                      </div>
                      <div>
                        <!-- 展示六级 -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-affix>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

// 引入vditor.
import Vditor from "vditor";
import 'vditor/dist/index.css';
import {ArticleInfo} from "@/api/api"

export default {
  name: "info_article",
  components: {},
  data() {
    return {
      catalog: [], // 目录.
      catalogTree: "",
      scrollElement: document.documentElement,
      mdContent: "",
      type: "",
      author: "",
      time: "",
      title: "",
      subTitle: "",
    }
  },
  computed: {},
  mounted() {
    this.articleInfo()
    // this.render()
  },
  methods: {
    articleInfo() {
      let url = window.location.href
      let sourceParam = url.split('?')
      let vueThis = this
      let id = sourceParam[1]
      ArticleInfo(id).then(function (response) {
        vueThis.mdContent = response.data.content
        vueThis.type = response.data.type
        vueThis.author = response.data.author
        vueThis.time = response.data.time
        vueThis.title = response.data.title
        vueThis.subTitle = response.data.sub_head
      }).then(function () {
        vueThis.render()
      })
    },
    render() {
      Vditor.preview(document.getElementById("vditor-md-content-m"), this.mdContent, {
        anchor: 1,
        hljs: {
          style: "monokai",
        },
        markdown: {
          autoSpace: true,
          mark: true,
          paragraphBeginningSpace: true,
        },
      })
    },

    catalogClick(item) {
      var target = document.getElementById(item)
      let height = this.getElementHeight(target)
      height -= 350;
      window.scrollTo({
        top: height,
        behavior: "smooth",
      })
    },
    // 获取某个节点到body顶部的高度。
    getElementHeight(node) {
      let root = document.body;
      let height = 0;
      do {
        height += node.offsetTop;
        node = node.offsetParent;
      } while (node != root)
      return height;
    },
  },
}
</script>
<style>

@import "../../css/common.css";

/*修改vditor样式*/

code {
  max-height: 100% !important;
}

.article_content p{
  line-height: 1.8em;
}

/*修改vditorH2下划线样式*/
.article_content h2{
  padding-bottom: 0.3em !important;
  border-bottom: 1px solid #f97f51 !important;
}

/*blockquote*/
.article_content blockquote{
  //color: red !important;
  background-color: rgba(64, 158, 255, 0.17) !important;
  border-left: 0.25em solid #409eff !important;
}

/*修改a链接*/
.article_content p>a{
  border-radius: 5% !important;
  background-color: #fbc531;
}

/*修改背景图片UI样式
参考： https://getcssscan.com/css-box-shadow-examples?ref=producthunt
*/
.article_content p>img{
  //border: 0.1em solid red !important;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px !important;
}


/* 移动 */
@media screen and (max-width: 768px) {
}

/* PC */
@media screen and (min-width: 768px) {

  .info_div {
    padding-top: 3em;
    width: 100%;
    /* height: 700px; */
    overflow: hidden;
    height: 100%;
  }

  .article_info_div {
    padding-right: 1em !important;
  }

  .catalog_info_div {
    width: 22em;
    text-align: justify;
  }

  .article_user_info_div {
    margin-top: 0.5em;
  }

  .article_user_div {
    margin-left: 1em;
    display: inline-block;
  }

  .article_info_desc {
    display: inline-block;
    vertical-align: top;
    margin-top: 0.5em;
    margin-left: 0.8em;
  }

  .article_info_desc_type {
    border-radius: 5%;
    background-color: pink;
  }

  .article_info_desc_name {
    border-radius: 5%;
    background-color: #74b9ff;
  }

  .article_info_desc_time {
    border-radius: 5%;
    background-color: #f9ca24;
  }

  .article_img {
    margin-top: 0.3em;
  }

  .info_back_img {
    background-image: linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(60, 10, 30, .04) 3%, rgba(0, 0, 0, 0) 3%);
  }

  .info_text {
    text-align: justify;
    /*  在长单次或者URL进行换行 */
    word-wrap: break-word;
    /* 允许单词内自动换行 */
    word-break: break-all;
    /* overflow: hidden; */
  }


  .catalog_detail_div {
    margin-left: 1.6em;
  }

  .catalog_detail_h2 {
    margin-left: 1.8em;
  }

  .catalog_detail_h3 {
    margin-left: 2em;
  }

  .catalog_detail_h4 {
    margin-left: 2.2em;
  }

  .catalog_detail_h5 {
    margin-left: 2.4em;
  }

  .catalog_detail_h6 {
    margin-left: 2.5em;
  }

  .div_subhead {
    text-align: left;
    height: 3em;
    margin-top: 1em;
    border-left: 0.3em solid #20bf6b;
    background-color: rgba(225, 234, 229, 0.98);
  }

  .div_subhead_text {
    margin-left: 0.8em;
    padding-top: 0.7em;
  }

  .article_content {
    width: 100%;
    height: 100%;
    margin-top: -2.5em;
  }
}

</style>
