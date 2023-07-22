<template>
  <div class="common_card_div_pc right_comment_div">

    <div class="div_common">
      最近评论
    </div>

    <div v-for="index in 5" :key="index">

      <div class="right_common_div">
        {{ index }}
      </div>

    </div>

    <div>

    </div>

  </div>
</template>
<script>
export default {
  name: "index_right_comment",
  data() {
    return {}
  },
  created() {
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
@import "../../../css/common.css";

/* PC */
@media screen and (min-width: 768px) {
  .right_comment_div {
    width: 28em;
    height: 14em;
    margin-left: 10em;
  }

  .right_common_div {
    border: 1px solid red;
    margin-bottom: 0.8em;
  }

}

/* 移动端 */
@media screen and (max-width: 768px) {
}
</style>
