<template>
  <div class="info_div" id="info_div_id">
    <!-- 文章详情页面应该只显示和文章相关的内容(内容+目录),其他一律不显示 -->
    <el-row>

      <el-col :span="6"></el-col>
      <el-col :span="12">

        <!--        文章信息-->
        <div class="grid-content ep-bg-purple ">
          <div class="common_card_div_pc article_info_div">

            <div class="article_info_title_div tracking-in-contract">
              <b>{{ article.title }}</b>
            </div>


            <div class="article_user_info_div">
              <div class="article_user_div slide-in-left">
                <img class="common_icon_size_pc article_img" src="../../assets/catalog.svg" alt="">
                <div class="article_info_desc article_info_desc_type">
                  {{ article.type }}
                </div>
              </div>
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/user_id.svg" alt="">
                <div class="article_info_desc article_info_desc_name">
                  {{ article.author }}
                </div>
              </div>
              <div class="article_user_div slide-in-right">
                <img class="common_icon_size_pc article_img" src="../../assets/time2.svg" alt="">
                <div class="article_info_desc article_info_desc_time">
                  {{ article.time }}
                </div>
              </div>
            </div>
            <div class="div_subhead">
              <div class="div_subhead_text">
                {{ article.subTitle }}
              </div>
            </div>
            <el-divider style="margin-bottom: 3em"/>

            <!--                      文章主内容-->
            <div id="article_content_div" class="article_content">
              <div class="info_text">
                <div id="vditor-md-content-m">
                </div>
              </div>
            </div>

          </div>
        </div>

<!--        <div class="article_common_div">-->
<!--          <div class="article_common_top_div" @click="clickComment">-->
<!--            &lt;!&ndash;              评论&ndash;&gt;-->
<!--            <el-button type="success" class="article_common_button">-->
<!--              <el-icon style="margin-right: 0.3em">-->
<!--                <EditPen/>-->
<!--              </el-icon>-->
<!--              回复讨论-->
<!--            </el-button>-->
<!--          </div>-->
<!--        </div>-->

<!--        <el-drawer-->
<!--            :size="500"-->
<!--            v-model="comment.buttomDrawer"-->
<!--            :show-close="false"-->
<!--            direction="btt"-->
<!--            :before-close="handleClose"-->
<!--        >-->
<!--          &lt;!&ndash;          template 这里就相当于透传下去了,事件也都透传下去了.&ndash;&gt;-->
<!--          <template #header="{close,titleId,titleClass}">-->
<!--            <div :id="titleId" :class="titleClass">-->
<!--              <el-button style="float: left" type="" @click="close">-->
<!--                取消-->
<!--              </el-button>-->
<!--            </div>-->
<!--            <el-button type="warning" @click="submitComment">-->
<!--              <el-icon style="margin-right: 0.1em;margin-left: -1em">-->
<!--                <Position/>-->
<!--              </el-icon>-->
<!--              回复评论-->
<!--            </el-button>-->
<!--          </template>-->
<!--          &lt;!&ndash;comment&ndash;&gt;-->
<!--          <div class="buttom_comment_div">-->
<!--            <div id="buttom_comment_id">-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-drawer>-->
<!--        &lt;!&ndash;        回复列表&ndash;&gt;-->
<!--        <div class="article_comment_list_div" id="article_comment_list_id">-->
<!--          <div class="article_common_top_div article_comment_item_div" v-for="(item,index) in comment.list"-->
<!--               :key="index">-->
<!--            &lt;!&ndash;            img以及昵称&ndash;&gt;-->
<!--            <div>-->
<!--              <div class="article_comment_img_div">-->
<!--                <img :src="item.icon" alt="" style="width: 32px;height: 32px;border-radius: 8px">-->
<!--              </div>-->
<!--              <div class="article_comment_name_span">-->
<!--                <span>{{ item.username }}</span>-->
<!--              </div>-->
<!--              &lt;!&ndash;              右侧楼层、地区、时间&ndash;&gt;-->
<!--              <div class="article_comment_right_div">-->
<!--                <span class="article_comment_right_span">{{item.commentLevel}}&nbsp;楼</span>-->
<!--                <span style="margin-left: 0.1em"> > </span>-->
<!--                <span class="article_comment_right_span">来自{{item.city}} </span>-->
<!--                <span style="margin-left: 0.1em"> > </span>-->
<!--                <span class="article_comment_right_span">{{item.comment_time}}</span>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;评论渲染: 这里可能没有HTML没有渲染后面新添加的评论&ndash;&gt;-->
<!--            <div :id="index" class="article_comment_content_div">-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->

      </el-col>

    </el-row>
    <UserLogin></UserLogin>
    <UserRegister></UserRegister>
  </div>
</template>
<script>

// 引入vditor.
import Vditor from "vditor";
import 'vditor/dist/index.css';
import {ElMessageBox, ElNotification,ElMessage} from "element-plus";
import UserLogin from "@/page/auth/login.vue"
import UserRegister from "@/page/auth/register.vue"

import {ArticleInfo} from "@/api/api"
import {ArticleCommentList} from "@/api/api";
import {Comment} from "@/api/api"

export default {
  name: "info_article",
  components:{UserLogin,UserRegister},
  data() {
    return {
      catalog: [], // 目录.
      catalogTree: "",
      scrollElement: document.documentElement,
      article: {
        content: "",
        type: "",
        author: "",
        time: "",
        title: "",
        subTitle: "",
      },
      comment: {
        buttomDrawer: false,
        flag: true,
        vditor: {},
        list: [
          {
            icon: "https://typoraimg-1303903194.cos.ap-guangzhou.myqcloud.com/blog3185-2023-05-08044945-1683535785745.jpg",
            username: "a",
            city:"",
            content:"",
            comment_time:"",
          },
        ]
      },
    }
  },
  computed: {},
  mounted() {
    this.articleInfo()
    this.getCommentList()
  },
  methods: {
    getArticleID(){
      let url = window.location.href
      let sourceParam = url.split('?')
      return  sourceParam[1]
    },
    articleInfo() {
      let vueThis = this
      ArticleInfo(this.getArticleID()).then(function (response) {
        vueThis.article.content = response.data.content
        vueThis.article.type = response.data.type
        vueThis.article.author = response.data.author
        vueThis.article.time = response.data.time
        vueThis.article.title = response.data.title
        vueThis.article.subTitle = response.data.sub_head
      }).then(function () {
        vueThis.render()
      })
    },

    getCommentList(){
      let thisVue = this
      ArticleCommentList(this.getArticleID()).then(function (response) {
        if (response.code === 0){
          thisVue.comment.list = response.data
          // 修正N楼层.
          let length = thisVue.comment.list.length
          for (let i = 0; i < length; i++) {
            thisVue.comment.list[i].commentLevel = length - i
          }
        }else{
          ElNotification({
            title: "拉取评论失败",
            message: "拉取评论失败，请稍后重试",
            type: 'error',
          })
        }
      })
    },

    // 渲染文章内容
    render() {
      Vditor.preview(document.getElementById("vditor-md-content-m"), this.article.content, {
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
      // 渲染评论List.
      setTimeout(() => {
        this.renderCommentList()
      }, 500)
    },

    renderCommentList() {
      for (let i = 0; i < this.comment.list.length; i++) {
        let item = this.comment.list[i]
        Vditor.preview(document.getElementById(i), item.content, {
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
      }
    },

    // renderComment 渲染评论MD编辑器.
    renderComment() {
      this.comment.vditor = new Vditor('buttom_comment_id', {
        height: 368,
        toolbar: [
          "headings", // 标题
          "bold", // 粗体
          "italic", // 斜体
          "|",
          "list",
          "ordered-list",
          "|",
          "line",
          "code",
        ],
        mode: "sv", // IR即时渲染、SV分屏预览、WYSIWYG所见即所得.
        preview: {
          delay: 100,
        },
        hljs: {
          style: "monokai",
        },
        toolbarConfig: {
          pin: true, // 是否固定工具栏.
        },
        cache: {
          enable: false,
        },
      })
    },
    // 打开评论
    clickComment() {
      if (this.$store.state.auth.xmToken === "") {
        this.openUserLoginDialog()
      } else {
        this.comment.buttomDrawer = true
        setTimeout(() => {
          this.renderComment()
          this.comment.vditor.setValue("", true)
        }, 300)
      }
    },
    openUserLoginDialog(){
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateLoginStatus,
          this.$store.state.staticVariable.login.openLoginDialog)
    },
    handleClose() {
      ElMessageBox.confirm('您确定要关闭评论吗？', {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.comment.buttomDrawer = false
      })
    },
    // 评论
    submitComment() {
      let thisVue = this
      ElMessageBox.confirm('您确定提交评论吗？', {
        confirmButtonText: "回复",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let commentData = {
          xm_token: this.$store.state.auth.xmToken,
          article_id: parseInt(thisVue.getArticleID()),
          content: thisVue.comment.vditor.getHTML(),
        }
        Comment(commentData).then(function (response) {
          if (response.code === 0){
            ElMessage.success('评论成功')
            thisVue.getCommentList()
            thisVue.comment.vditor.setValue("", true)
            thisVue.comment.vditor = null
          }else{
            ElMessage.error('评论失败，请稍后重试！')
          }
        })
        this.comment.buttomDrawer = false
        setTimeout(() => {
          this.renderCommentList()
        }, 10)
      }).catch(() => {
        // 点击取消执行事件.
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
      } while (node !== root)
      return height;
    },
  },
}
</script>
<style>

@import "../../css/common.css";
@import "../../css/animation.css";

/*修改vditor样式*/

code {
  max-height: 100% !important;
}

.article_content p {
  line-height: 1.8em;
}

/*修改vditorH2下划线样式*/
.article_content h2 {
  padding-bottom: 0.3em !important;
  border-bottom: 1px solid #f97f51 !important;
}

/*blockquote*/
.article_content blockquote {
//color: red !important; background-color: rgba(64, 158, 255, 0.17) !important; border-left: 0.25em solid #409eff !important;
}

/*修改a链接*/
.article_content p > a {
  border-radius: 5% !important;
  background-color: #fbc531;
}

/*修改背景图片UI样式
参考： https://getcssscan.com/css-box-shadow-examples?ref=producthunt
*/
.article_content p > img {
//border: 0.1em solid red !important; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px !important;
}

.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
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
    padding-right: 1.3em !important;
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
    //text-align: center;
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

  .article_info_title_div {
    margin-top: 1.5em;
    margin-bottom: 1em;
    font-size: 1.5em;
  }

  /*文章评论*/
  .article_common_top_div {
    margin-top: 0.8em;
    border-radius: 8px;
    background-color: #FFFFFF68;
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.08), 0 1px 2px rgba(255, 255, 255, 0.1);
  }

  .article_common_button {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    border-radius: 8px;
  }

  .article_common_div {
    margin-bottom: 1em;
  }

  .buttom_comment_div {
    margin-top: 0.6em;
    text-align: left;
    height: 100%;
  }

  .article_comment_item_div {
    height: 100%;
    margin-top: 1.6em;
  }

  .article_comment_list_div {
    text-align: left; /*控制布局居中*/
    margin-bottom: 2em;
  }

  .article_comment_img_div {
    vertical-align: top;
    margin-left: 0.8em;
    margin-top: 0.6em;
    display: inline-block;
  }

  .article_comment_name_span {
    vertical-align: top;
    margin-left: 0.7em;
    margin-top: 0.8em;
    display: inline-block;
  }

  .article_comment_content_div {
    padding-right: 1.2em;
    margin-top: -0.1em;
    margin-left: 2.1em;
  }

  .article_comment_right_div {
    color: #bfbfbf;
    float: right;
    margin-top: 0.6em;
  }

  .article_comment_right_span {
    margin-left: 0.2em;
  }

}

</style>
