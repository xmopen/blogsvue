<template>
  <div class="header_div">
    <div>
      <!--      这里的格式可以考虑用分栏去做.-->
      <el-row>

        <el-col :span="4"></el-col>
        <el-col :span="10">
          <div class="div_border_test">
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
            </ul>

          </div>
        </el-col>
        <el-col :span="4">
          <div class="div_border_test" v-if="userIsLogin">
            <div class="user_img_div">
              <router-link to="/auth/v2.html">
                <el-avatar
                    src="https://blogs-1303903194.cos.ap-beijing.myqcloud.com/blogs/1719414530微信图片_20240626230830.jpg"
                />
              </router-link>
            </div>
          </div>
          <div class="div_border_test" v-if="!userIsLogin">
            <router-link to="/auth/v2.html">
              <div class="user_img_div">
                <el-avatar :icon="UserFilled"/>
              </div>
            </router-link>
          </div>
        </el-col>
        <el-col :span="6">
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>

require('@/assets/index.logo.64.png')
import {UserFilled} from '@element-plus/icons-vue'

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
  computed: {
    UserFilled() {
      return UserFilled
    },
    userIsLogin() {
      return this.$store.state.auth.xmToken !== ""
    }
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

  .div_border_test {
    border: 1px red solid;
  }

  .header_div {
  //background-image: url("https://blogs-1303903194.cos.ap-beijing.myqcloud.com/blogs/1719415393贝壳-4k.jpg"); //background-image: url("https://blogs-1303903194.cos.ap-beijing.myqcloud.com/blogs/1705506261black_boat_mini.png"); //background-image: url("../../assets/black_boat.png"); width: 100%; top: 0; background-color: #f7f7f7; z-index: 99999;
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

  .user_img_div {
    margin-top: 0.4em;
  }

}
</style>