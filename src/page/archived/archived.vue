<template>
  <div class="archive_div" style="text-align: left">
    <div>
      <el-row>
        <el-col :span="5">
          <div class="grid-content ep-bg-purple"/>
        </el-col>

        <!--        左侧目录-->
        <el-col :span="4">
          <div style="margin-top: 3em">
            <div class="grid-content ep-bg-purple"/>
            <el-timeline>
              <el-timeline-item v-for="(item,index) in list"
                                :key="index"
                                :type="item.node_type"
                                :hollow="item.node_hollow"
                                :icon="MoreFilled"
                                placement="top">
                <div @click="clickArchive(index)" class="archive_list_item_div common_card_div_pc tracking-in-expand-fwd" :style="renderArchiveColor(item.node_color)">
                  {{ item.name }}
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-col>

        <!--        右侧该目录下具体列表-->
        <el-col :span="10">

          <div id="article_list" style="margin-top: 3em">
            <div class="grid-content ep-bg-purple"/>

            <el-timeline>
              <el-timeline-item v-for="(item,index) in articleList" :key="index"
                                type="warning"
                                hollow="false"
                                :timestamp="item.time"
                                placement="top">
                <router-link :to="`/article/info.html?` + item.id">
                <el-card class="archive_article_list_item_card">
                  <div class="article_item_div">
                    <div class="article_title_div tracking-in-contract">{{ item.title }}</div>
                    <div style="margin-left: 0.5em">
                      <div class="article_subhead_tag">
                        <div :style="renderArchiveArticleColor()" class="article_subhead_tag_item bounce-in-left" v-for="(tag,tin) in item.tags" :key="tin">
                          {{tag}}
                        </div>
                      </div>
                      <div class="article_subhead_div tracking-in-expand-fwd">
                        {{ item.sub_head }}
                      </div>
                    </div>
                  </div>
                </el-card>
                </router-link>

              </el-timeline-item>
            </el-timeline>

          </div>

        </el-col>
        <el-col :span="5">
          <div class="grid-content ep-bg-purple-light"/>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>

import {GetBlogArchiveList} from "@/api/archive_api";
import {ElMessage} from "element-plus";
import {MoreFilled} from '@element-plus/icons-vue'
import {GetBlogArticleWithArchive} from "@/api/archive_api";

export default {
  name: "ArchivePage",
  computed: {
    MoreFilled() {
      return MoreFilled
    }
  },
  data() {
    return {
      offset: 0,
      limit: 20,
      list: [],
      nowArchiveIndex:0,
      nowArchiveColor:"",
      articleList: [],
    }
  },
  methods: {
    clickArchive(index){
      let curArchiveNode =  this.list[index]
      this.nowArchiveIndex = index
      this.nowArchiveColor = curArchiveNode.node_color
      this.articleList = []
      this.refreshArticleList(curArchiveNode.id)
    },

    refreshArchiveList(offset, limit) {
      let thisVue = this
      GetBlogArchiveList(offset, limit).then(function (response) {
        if (response.code === 0) {
          for (let i = 0; i < response.data.length; i++) {
            if (i === thisVue.nowArchiveIndex){
              thisVue.nowArchiveColor = response.data[i].node_color
            }
            thisVue.list.push(response.data[i])
          }
          thisVue.refreshArticleList(thisVue.list[0].id)
        } else {
          ElMessage.error("获取文章分类失败,请稍后重试")
        }
      })
    },

    refreshArticleList(archive){
      let thisVue = this
      GetBlogArticleWithArchive(archive).then(function (response) {
        if (response.code === 0){
          for (let i = 0; i < response.data.length; i++) {
            thisVue.articleList.push(response.data[i])
          }
        }else{
          ElMessage.error("获取文章列表失败")
        }
      })
    },

    renderArchiveColor(color) {
      return 'background-color:' + color
    },
    renderArchiveArticleColor(){
      return 'background-color:' + this.nowArchiveColor
    },
  },
  mounted() {
  },
  created() {
    this.refreshArchiveList(this.offset, 20)
  }
}
</script>

<style scoped>

@import "../../css/common.css";
@import "../../css/animation.css";

.archive_list_item_div {
  border-radius: 4px;
  margin-top: 1.5em;
  width: 5em;
  height: 2em;
  text-align: center;
  padding-top: 0.5em;
  transition: all 0.6s;
  overflow: hidden;
}

.archive_list_item_div:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.article_item_div {
  overflow: hidden;
  transition: all 2s;
}

.archive_article_list_item_card {
  overflow: hidden;
}

.archive_article_list_item_card .article_item_div:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.article_title_div {
  margin-left: 0.5em;
  font-size: 18px;
}

.article_subhead_div {
  display: inline-block;
  width: auto;
  margin-top: 2.6em;
  margin-left: 0.5em;
  vertical-align: top;
}

.article_subhead_tag{
  margin-top: 1.8em;
  display: inline-block;
}

.article_subhead_tag_item{
  display: inline-block;
  padding: 0.5em;
  border-radius: 3px;
  background-color: #409eff;
  margin-right: 1em;
}

</style>