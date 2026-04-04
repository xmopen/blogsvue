<template>
  <div class="common_background_color">
    <!--  style="display: none;" -->
    <PageHeader class="page_header_div"></PageHeader>
    <div class="router_view_div app-main-view">
      <router-view></router-view>
    </div>
    <el-backtop class="app-backtop" :bottom="backTopOffset">
      <div
          style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>

import PageHeader from "@/page/header/header"
import {CheckSession} from "@/api/auth_api";
import {ReportVisit} from "@/api/api";

export default {
  name: 'App',
  components: {PageHeader},
  data() {
    return {
      isNarrow: typeof window !== 'undefined' && window.innerWidth <= 768,
    }
  },
  computed: {
    backTopOffset() {
      return this.isNarrow ? 72 : 100
    },
  },
  mounted() {
    const vm = this
    this._onResize = function () {
      vm.isNarrow = window.innerWidth <= 768
    }
    window.addEventListener('resize', this._onResize)
  },
  beforeUnmount() {
    if (this._onResize) {
      window.removeEventListener('resize', this._onResize)
    }
  },
  methods: {
    initXMUserFromLocalStorage() {
      let thisVue = this
      let xmToken=localStorage.getItem("openxm_token")
      CheckSession(xmToken).then(function (response) {
        if (response.code === 0){
          thisVue.updateStoreAuthInfo(response.data)
        } else{
          localStorage.removeItem("openxm_token")
        }
      })
    },
    updateStoreAuthInfo(checkSessionResponse){
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateAuthInfo, {
        account: checkSessionResponse.user_info.user_account,
        name: checkSessionResponse.user_info.user_name,
        xmToken: checkSessionResponse.xm_token,
        icon:checkSessionResponse.user_icon,
      })
    },
  },
  created() {
    console.log("2023-08-19 22:27:00")
    // 这里应该初始化auth info. 从cookie.
    this.initXMUserFromLocalStorage()
    // 延迟1S上报。
    setTimeout(function () {
        ReportVisit("index").then(function (response) {
          if (response.code === 0) {
            console.log("report success")
          }
        })
    },1000)
  }
}
</script>

<style>
@import "./css/font.css";
@import "./css/common.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

/* 主内容区默认左对齐，避免继承 #app 的 center 导致时间线、文章块居中错位 */
.app-main-view {
  text-align: left;
  width: 100%;
  min-width: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-bottom: env(safe-area-inset-bottom, 0);
}

@media screen and (max-width: 768px) {
  .app-backtop {
    right: 12px !important;
  }
}

/*美化滚动条*/
::-webkit-scrollbar {
  width: 0.5em;
  height: 0em;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  /*背景颜色滚动条背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  height: 200px;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  /*滚动条的颜色.*/
  background-color: aquamarine;
}

.page_header_div {
  /* margin-bottom: 2em; */
  /* display: none; */
}
</style>
