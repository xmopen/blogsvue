<template>
  <div class="header_div">
    <div>
      <!--      这里的格式可以考虑用分栏去做.-->
      <el-row>

        <el-col :span="4"></el-col>
        <el-col :span="20">
          <div>
            <ul class="header_ul">
              <li class="header_li">
              </li>
              <li class="header_li header_li_hover"
                  :class="[css_controller.li === 1 ? 'headerLiClickCss' : 'headerLiMoveCss']" id="header_li_sy"
                  @click="headerLiClick(1)">
                <router-link to="/">
                  <div class="header_li_div">首页</div>
                </router-link>
              </li>
              <li class="header_li header_li_hover"
                  :class="[css_controller.li === 2 ? 'headerLiClickCss' : 'headerLiMoveCss']" @click="headerLiClick(2)">
                <router-link to="/archived.html">
                  <div class="header_li_div">归档</div>
                </router-link>
              </li>
              <li class="header_li header_li_hover"
                  :class="[css_controller.li === 3 ? 'headerLiClickCss' : 'headerLiMoveCss']" @click="headerLiClick(3)">
                <router-link to="/test.html">
                  <div class="header_li_div">分类</div>
                </router-link>
              </li>
              <li class="header_li header_li_hover"
                  :class="[css_controller.li === 4 ? 'headerLiClickCss' : 'headerLiMoveCss']" @click="headerLiClick(4)">
                <router-link to="/test.html">
                  <div class="header_li_div">动态</div>
                </router-link>
              </li>
              <li class="header_li header_li_hover"
                  :class="[css_controller.li === 5 ? 'headerLiClickCss' : 'headerLiMoveCss']" @click="headerLiClick(5)">
                <router-link to="/test.html">
                  <div class="header_li_div">开源</div>
                </router-link>
              </li>
              <li class="header_li header_li_hover"
                  :class="[css_controller.li === 6 ? 'headerLiClickCss' : 'headerLiMoveCss']" id="header_li_lt"
                  @click="headerLiClick(6)">
                <router-link to="/test.html">
                  <div class="header_li_div">在线聊天</div>
                </router-link>
              </li>
            </ul>

          </div>
        </el-col>
      </el-row>
    </div>

    <div class="div_text_desc">
      并不只是会写代码的程序员
      <div class="div_text_sub_desc">
        互联网打工人的窝
      </div>
    </div>

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
        li: 1
      },
    }
  },
  methods: {
    headerLiClick(num) {
      console.log(num)
      this.css_controller.li = num
    },
  },
  mounted() {
    // window.addEventListener("scroll",function (){
    // })
  }
}

// 如何监听滚动条距离,超出多少距离之后就隐藏Header.

</script>

<style scoped>
/*去除a标签*/
a {
  text-decoration: none;
}

/*手机CSS样式*/
@media screen and (max-width: 768px) {
  .header_div {
  }

  .header_ul {
  }

  .index_logo_img {
  }
}

/*PC CSS样式*/
@media screen and (min-width: 768px) {

  .div_text_desc {
    color: #9b9ea0;
    margin-top: 4em;
  }

  .header_div {
    width: 100%;
    /* margin-bottom: 3em; */
    border: pink solid 1px;
    height: 16em;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
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
    /*margin-left: -105em;*/
    list-style-type: none;
    color: #9b9ea0;
  }

  .header_li {
    display: inline-block;
    /*border: coral solid 1px;*/
    height: 3.2em;
    margin-left: 0.8em;
    vertical-align: top;
    margin-top: 1em;
    /*内边距*/
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: #9b9ea0;
  }

  .index_logo_img {
    width: 2.3em;
    height: 2.3em;
    margin-top: 0.4em;
  }

  .header_li_div {
    height: 3.0em;
    /*margin-top: -0.4em;*/
    /*border: darkgreen solid 1px;*/
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: #9b9ea0;
  }

  .header_li_hover :hover {
    border-bottom: rgba(203, 236, 255, 0.99) solid 0.3em;
    border-radius: 0.2em;
  }

  /*有问题.*/
  .headerLiClickCss {
    border-bottom: rgba(203, 236, 255, 0.99) solid 0.3em;
    border-radius: 0.2em;
  }

  .headerLiMoveCss {
  }

}
</style>