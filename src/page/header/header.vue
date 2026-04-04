<template>
  <div class="header_div">
    <div>
      <!--      这里的格式可以考虑用分栏去做.-->
      <el-row justify="center">

        <el-col :xs="22" :sm="18" :md="14" :lg="12">
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

              <li class="header_li header_li_hover"
                  v-on:mouseover="mouseover(2)"
                  v-on:mouseout="mouseout"
                  v-bind:class="{nowClickLiCss:css_controller.li === 2 || css_controller.hover === 2}"
                  @click="headerLiClick(2)">
                <router-link to="/log.html">
                  <div class="header_li_div">日志</div>
                </router-link>
              </li>
            </ul>

          </div>
        </el-col>
<!--        <el-col :span="4"> 用户头像 -->
<!--          <div class="div_border_test" v-if="userIsLogin">-->
<!--            <div class="user_img_div">-->
<!--              <router-link to="/auth/v2.html">-->
<!--                <el-avatar-->
<!--                    src="https://blogs-1303903194.cos.ap-beijing.myqcloud.com/blogs/1719414530微信图片_20240626230830.jpg"-->
<!--                />-->
<!--              </router-link>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="div_border_test" v-if="!userIsLogin">-->
<!--            <router-link to="/auth/v2.html">-->
<!--              <div class="user_img_div">-->
<!--                <el-avatar :icon="UserFilled"/>-->
<!--              </div>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </el-col>-->
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

  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        const p = route.path || ""
        if (p === "/index.html" || p === "/") {
          this.css_controller.li = 0
        } else if (p.indexOf("archived") >= 0) {
          this.css_controller.li = 1
        } else if (p.indexOf("log") >= 0) {
          this.css_controller.li = 2
        }
      },
    },
  },
}

// 如何监听滚动条距离,超出多少距离之后就隐藏Header.

</script>

<style scoped>

.header_div {
  width: 100%;
  text-align: center;
  line-height: 3.2em;
  justify-content: center;
  margin-left: -1px;
  box-sizing: border-box;
  padding-left: var(--app-gutter, 0.75rem);
  padding-right: var(--app-gutter, 0.75rem);
}

.header_ul {
  margin-top: -1em;
  list-style-type: none;
  color: #9b9ea0;
  align-content: center;
  padding-left: 0;
}

.header_li {
  display: inline-block;
  height: 3.2em;
  margin-left: 0.8em;
  vertical-align: top;
  margin-top: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  color: #9b9ea0;
}

.header_li_div {
  height: 3em;
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

@media screen and (max-width: 768px) {
  .header_div {
    line-height: 2.6em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }

  .header_ul {
    margin-top: 0;
  }

  .header_li {
    margin-left: 0.35em;
    margin-top: 0.5em;
    height: auto;
    min-height: 2.75em;
    padding-left: 0.35em;
    padding-right: 0.35em;
  }

  .header_li_div {
    height: auto;
    min-height: 2.5em;
    line-height: 1.35;
    font-size: clamp(13px, 3.8vw, 15px);
  }
}
</style>