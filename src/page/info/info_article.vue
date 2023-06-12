<template>
  <div class="info_div" id="info_div_id">
    <!-- 文章详情页面应该只显示和文章相关的内容(内容+目录),其他一律不显示 -->
    <el-row>

      <el-col :span="2"></el-col>
      <el-col :span="15">
        <div class="grid-content ep-bg-purple test_div">
          <div class="common_card_div_pc article_info_div">
            <b>一文详解Go底层数据结构</b>
            <div class="article_user_info_div">
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/catalog.svg" alt="">
                <div class="article_info_desc">
                  Golang 数据结构
                </div>
              </div>
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/user_id.svg" alt="">
                <div class="article_info_desc">
                  zhenxin
                </div>
              </div>
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/time2.svg" alt="">
                <div class="article_info_desc">
                  2023-02-04 20:31:31
                </div>
              </div>
              <div class="article_user_div">
                <img class="common_icon_size_pc article_img" src="../../assets/tongji.svg" alt="">
                <div class="article_info_desc">
                  90
                </div>
              </div>

            </div>
            <el-divider/>
            <!--                      文章主内容-->
            <div id="article_content_div" class="article_content">
             <div  class="info_text">
               <div id="vditor-md-content-m">
               </div>
             </div>
            </div>

          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-light catalog_afafix common_affix_div">
          <el-affix target=".catalog_afafix" :offset="300">
            <div class="common_card_div_pc catalog_info_div ">
              <b>目录</b>
              <div id="catalog_content" class="catalog_detail_div">
                <div v-for="cataItem in catalogTree.next" :key="cataItem">
                  <div v-if="cataItem.type === 'H0' || cataItem.type === 'H1'">
                    <a @click="catalogClick(cataItem.id)" :id="`a` + cataItem.id">
                      {{ cataItem.name }}
                    </a>
                    <div>
                      <!-- 这里貌似只展示了二级 -->
                      <div v-for="item in cataItem.next" :key="item" :id="`a` + item.id"
                           class="catalog_detail_h2"><a @click="catalogClick(item.id)">{{
                          item.name
                        }}</a>
                        <div v-for="h3Item in item.next" :key="h3Item" :id="`a` + h3Item.id"
                             class="catalog_detail_h3">
                          <!-- 展示三级 -->
                          <a @click="catalogClick(h3Item.id)">{{
                              h3Item.name
                            }}</a>
                        </div>
                      </div>

                      <div>
                        <!-- 展示四级 -->
                      </div>
                      <div>
                        <!-- 展示五级 -->
                      </div>
                      <div>
                        <!-- 展示六级 -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-affix>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

// 引入vditor.
import Vditor from "vditor";
import 'vditor/dist/index.css';

// 用于文章目录. 
let childMap = new Map()
childMap.set("H1", 1)
childMap.set("H2", 2)
childMap.set("H3", 3)
childMap.set("H4", 4)
childMap.set("H5", 5)
childMap.set("H6", 6)


// 目录树. 
// root:[H1,...].next:[H2...] ...
let Item = {
  "id": 0,
  "type": "H0",
  "name": "目录",
  "next": [],
}

let catalogTree = Item;


export default {

  name: "info_article",
  //  MdEditor, MdCataLog
  components: {},
  data() {
    return {
      mar: " # 文章测试",
      catalog: [], // 目录.
      mdContent: `<h1 id="这是标题">一、这是标题</h1><pre><code class="language-go"><span class="code-block"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    health := &amp;XiaoMiHealth{
        User: <span class="hljs-string">&quot;18822038494&quot;</span>,
        Pass: <span class="hljs-string">&quot;mzx19980803.&quot;</span>,
    }
    health.GetXiaoMiCode()
    // 我是注释.
    /*我也是注释*/
}</span>
</code></pre> 



<h1 id="这是标题">二、这是标题二</h2><pre><code class="language-go"><span class="code-block"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    health := &amp;XiaoMiHealth{
        User: <span class="hljs-string">&quot;18822038494&quot;</span>,
        Pass: <span class="hljs-string">&quot;mzx19980803.&quot;</span>,
    }
    health.GetXiaoMiCode()
}</span>
</code></pre>

<h2 id="这是标题">2.1、这是标题2.1</h2><pre><code class="language-go"><span class="code-block"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    health := &amp;XiaoMiHealth{
        User: <span class="hljs-string">&quot;18822038494&quot;</span>,
        Pass: <span class="hljs-string">&quot;mzx19980803.&quot;</span>,
    }
    health.GetXiaoMiCode()
}</span>

</code></pre>


<h3 id="这是标题">2.1.1、这是标题2.1.1</h3><pre><code class="language-go"><span class="code-block"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span> {
    health := &amp;XiaoMiHealth{
        User: <span class="hljs-string">&quot;18822038494&quot;</span>,
        Pass: <span class="hljs-string">&quot;mzx19980803.&quot;</span>,
    }
    health.GetXiaoMiCode()
}</span>

`,
      scrollElement: document.documentElement,
      catalogTree: catalogTree,
    }
  },
  created() {

  },
  computed: {},
  mounted() {

    Vditor.preview(document.getElementById("vditor-md-content-m"), this.mdContent, {
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

    // setTimeout(() => {
    //     // array.
    //     let rootNodes = document.getElementById("article_content_div").childNodes;
    //     let nodes = rootNodes[0].childNodes;
    //     let pre = {}
    //     nodes.forEach(item => {
    //         let exists = childMap.has(item.nodeName)
    //         if (exists) {
    //             var id = "h" + this.hasCode(item.nodeName)
    //             item.setAttribute("id", id)
    //             let value = childMap.get(item.nodeName)
    //             console.log("value")
    //             console.log(value)
    //             // 构造有问题.
    //             let cataItem = {
    //                 "id": id,
    //                 "type": item.nodeName,
    //                 "name": item.outerText,
    //                 "diff": item.nodeName.substring(1),
    //                 "next": [],
    //             }
    //             if (value === 1) {
    //                 this.catalogTree.next.push(cataItem)
    //             } else {
    //                 pre.next.push(cataItem)
    //                 console.log("pre")
    //                 console.log(pre)
    //                 console.log(this.catalogTree)
    //             }
    //             pre = cataItem
    //             // this.catalog.push(catalogTree)
    //         }
    //     });
    // }, 600)
  },
  methods: {
    hasCode(str) {
      var hash = 0, i, chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
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
      } while (node != root)
      return height;
    },
  },
}
</script>
<style scoped>

@import "../../css/common.css";

/*通用CSS*/

pre::after {
  position: absolute;
  left: 20px;
  top: 10px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #ff5f56;
  border-radius: 50%;
  content: '';
  box-shadow: 25px 0 0 #ffbd2e;
}

pre::before {
  position: absolute;
  left: 70px;
  top: 10px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #27c93f;
  border-radius: 50%;
  content: '';
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
    /*margin-left: 22em;*/
    width: 98%;
    /* height: 10em; */
  }

  .catalog_info_div {
    width: 22em;
    text-align: justify;
    /* height: 10em; */
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

  .article_img {
    margin-top: 0.3em;
  }

  .info_back_img {
    background-image: linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(60, 10, 30, .04) 3%, rgba(0, 0, 0, 0) 3%);
  }

  .info_text {
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

}
</style>
