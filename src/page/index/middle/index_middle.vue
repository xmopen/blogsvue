<template>
  <div class="index_middle_art_list">
    <div v-for="index in data_list" :key="index">
      <router-link :to="`/article/info.html?` + index">
        <div class="middle_card_div">
          <div class="a">
            <div>
              Always{{ index }}
            </div>
            <div class="b">
              <span>分类</span>
            </div>
          </div>
        </div>
      </router-link>
      <!-- <el-card class="card_height" shadow="always">  </el-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "index_middle",
  data() {
    return {
      data_list: 16,
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  /*  移动端.*/
}

@media screen and (min-width: 768px) {

  /*  PC*/
  .card_height {
  }
  /**/
  .middle_card_div {
    height: 300px;
    margin-bottom: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .index_middle_art_list {
    margin-left: 1em;
  }

  /*参考: https://blog.csdn.net/qq_39473019/article/details/103634666*/
  .a {
    position: relative;
    //overflow: hidden;
    //display: block;
  }

  .b {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
    right: -50px;
    transform: rotate(45deg);
    overflow: hidden;
  }

  .b span {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    //text-align: center;
    background-color: #b8e245;
  }
}
</style>