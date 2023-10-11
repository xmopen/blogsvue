<template>
  <div class="header_div">
    <div>
      <!--      这里的格式可以考虑用分栏去做.-->
      <el-row>

        <el-col :span="4"></el-col>
        <el-col :span="20">
          <div>
            <ul class="header_ul">

              <li class="header_li header_li_hover"
                  v-on:mouseover="mouseover(0)"
                  v-on:mouseout="mouseout"
                  v-bind:class="{nowClickLiCss:css_controller.li === 0 || css_controller.hover === 0}"
                  @click="headerLiClick(0)">
                <router-link to="/">
                  <div class="header_li_div">首页</div>
                </router-link>
              </li>

              <li class="header_li header_li_hover"
                  v-on:mouseover="mouseover(1)"
                  v-on:mouseout="mouseout"
                  v-bind:class="{nowClickLiCss:css_controller.li === 1 || css_controller.hover === 1}"
                  @click="headerLiClick(1)">
                <router-link to="/archived.html">
                  <div class="header_li_div">归档</div>
                </router-link>
              </li>

<!--              <li class="header_li header_li_hover"-->
<!--                  v-on:mouseover="mouseover(2)"-->
<!--                  v-on:mouseout="mouseout"-->
<!--                  v-bind:class="{nowClickLiCss:css_controller.li === 2 || css_controller.hover === 2}"-->
<!--                  @click="headerLiClick(2)">-->
<!--                <router-link to="/test.html">-->
<!--                  <div class="header_li_div">在线聊天</div>-->
<!--                </router-link>-->
<!--              </li>-->

            </ul>

          </div>
        </el-col>
      </el-row>
    </div>
    <!--先屏蔽掉-->
    <!--    <div class="div_text_desc">-->
    <!--      并不只是会写代码的程序员-->
    <!--      <div class="div_text_sub_desc">-->
    <!--        互联网打工人的窝-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    Header 导航.-->
  </div>
</template>

<script>

require('@/assets/index.logo.64.png')

export default {
  name: "PageHeader",
  data() {
    return {
      css_controller: {
        li: 0,
        hover: 0
      },
    }
  },
  methods: {
    headerLiClick(num) {
      this.css_controller.li = num
    },
    mouseover(index) {
      this.css_controller.hover = index
    },
    mouseout() {
      this.css_controller.hover = this.css_controller.li
    },
  },
  mounted() {

  }
}

// 如何监听滚动条距离,超出多少距离之后就隐藏Header.

</script>

<style scoped>

/*手机CSS样式*/
@media screen and (max-width: 768px) {
  .header_div {
  }

  .header_ul {
  }

}

/*PC CSS样式*/
@media screen and (min-width: 768px) {

  .header_div {
    background-image: url("../../assets/black_boat.png");
    width: 100%;
    height: 16em;
    top: 0;
    background-color: #21282e;
    z-index: 99999;
    /*水平居中*/
    text-align: center;
    line-height: 3.2em;
    /*垂直居中*/
    justify-content: center;
    margin-left: -1px;
  }

  .header_ul {
    margin-top: -1em;
    list-style-type: none;
    color: #9b9ea0;
    align-content: center;
  }

  .header_li {
    display: inline-block;
    height: 3.2em;
    margin-left: 0.8em;
    vertical-align: top;
    margin-top: 1em;
    /*内边距*/
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: #9b9ea0;
  }

  .header_li_div {
    height: 3.0em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: #9b9ea0;
  }

  .nowClickLiCss {
    border-bottom: #fd79a8 solid 0.15em;
  }

}
</style>