<template>
  <div class="layout_div">
    <!-- 手机 / 平板：仅中间文章列表；桌面（≥md）：左留白 + 列表 + 右侧 Hot -->
    <el-row :gutter="0">
      <el-col v-if="mdAndUp" :md="3" :lg="3" id="left_div">
        <div class="grid-content ep-bg-purple"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="11" id="middle_div">
        <div class="grid-content ep-bg-purple-light">
          <Index_middle/>
        </div>
      </el-col>
      <el-col
          v-if="mdAndUp"
          :md="6"
          :lg="6"
          class="right_div height_style"
      >
        <div class="grid-content ep-bg-purple affix_class_test affix_div">
          <el-affix target=".affix_class_test" :offset="200">
            <Index_right_hot/>
          </el-affix>
        </div>
      </el-col>
    </el-row>
  </div>

  <ButtomPage/>
</template>

<script>

import Index_middle from "@/page/index/middle/index_middle"
import Index_right_hot from "@/page/index/right/right_hot_art.vue"
import ButtomPage from "@/page/buttom/buttom"
import screenLayout from "@/mixins/screenLayout"

export default {
  name: "IndexPage",
  mixins: [screenLayout],
  components: {Index_middle, Index_right_hot, ButtomPage},
}
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .layout_div {
    padding-top: 2em;
    overflow: visible;
    padding-left: var(--app-gutter, 0.75rem);
    padding-right: var(--app-gutter, 0.75rem);
    box-sizing: border-box;
  }

  #middle_div {
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
  }
}

@media screen and (min-width: 992px) {

  #left_div {
    margin-left: 3.5em;
  }

  .layout_div {
    height: 100%;
    overflow: hidden;
    padding-top: 3em;
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
