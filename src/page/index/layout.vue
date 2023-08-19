<template>
  <div class="layout_div">
    <!--    TODO: 添加导航.-->
    <!--    如果是手机屏幕 则忽略掉某个组件即可.-->
    <!--    首页分屏2个部分-->
    <el-row :gutter="30">
      <el-col :span="3" id="left_div">
        <div class="grid-content ep-bg-purple">
          <!--        <Me></Me>-->
        </div>
      </el-col>
      <el-col :span="11" id="middle_div">
        <div class="grid-content ep-bg-purple-light">
          <Index_middle></Index_middle>
        </div>
      </el-col>
      <!-- 需要添加置顶. -->
      <el-col :span="6" class="right_div height_style">
        <div class="grid-content ep-bg-purple  affix_class_test affix_div">
          <!-- <el-affix target=".affix_class_test" :offset="300">
            <Index_right></Index_right>
          </el-affix> -->

<!--          <el-affix target=".affix_class_test" :offset="300">-->
<!--            <Index_right_comment></Index_right_comment>-->
<!--          </el-affix>-->

<!--          <el-affix target=".affix_class_test" :offset="400">-->
<!--            <Index_right_recent_visits></Index_right_recent_visits>-->
<!--          </el-affix>-->

          <el-affix target=".affix_class_test" :offset="200">
            <Index_right_hot></Index_right_hot>
          </el-affix>
<!--              首期先不实现,后续实现-->
<!--          <el-affix target=".affix_class_test" :offset="600">-->
<!--            <Index_right_git_commit></Index_right_git_commit>-->
<!--          </el-affix>-->

        </div>
      </el-col>
    </el-row>
  </div>

<!--  底部备案信息.-->
  <ButtomPage></ButtomPage>

</template>

<script>

import Index_middle from "@/page/index/middle/index_middle";
import Index_right_hot from "@/page/index/right/right_hot_art.vue"
import ButtomPage from "@/page/buttom/buttom"

export default {
  name: "IndexPage",
  components: { Index_middle,Index_right_hot,ButtomPage },
}
</script>

<style scoped>
/*  手机CSS.*/
@media screen and (max-width: 768px) {
  #left_div {
    display: none;
  }

  .layout_div {}
}

@media screen and (min-width: 768px) {

  #left_div {
    margin-left: 3.5em;
  }

  .layout_div {
    height: 100%;
    overflow: hidden;
    padding-top: 3em;
  }

  #middle_div {
    padding-left: 20em;
    margin-left: -2em;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .right_div {
    height: 100%;
  }

  .height_style {
    height: 100%;
  }

  .affix_div {
    margin-bottom: -10000em;
    padding-bottom: 10000em;
  }
}
</style>