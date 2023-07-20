<template>
  <div class="common_background_color">
    <!--  style="display: none;" -->
    <PageHeader class="page_header_div"></PageHeader>
    <div class="router_view_div">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import PageHeader from "@/page/header/header"

export default {
  name: 'App',
  components: { PageHeader },
}
</script>

<style>
@import "./css/font.css";
@import "./css/common.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top: 60px;*/
  /*margin-top: -0.9em;*/
  width: 100%;
  height: 100%;
  /* height: 3000px; */
  padding: 0;
  margin: 0;
  /* 自定义字体. */
  font-family: "Z Style";
}

/*美化滚动条*/
::-webkit-scrollbar {
  width: 0.5em;
  height: 0em;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  /*box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
  /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
  border-radius: 10px;
  /*背景颜色滚动条背景颜色*/
  /*background-color: #f7f7f7;*/
  /*background-color: #f5f5f5;*/
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
