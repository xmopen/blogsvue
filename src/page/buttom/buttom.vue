<template>
  <div class="buttom_div">

    <div class="buttom_div_common buttom_div_img">
      <img class="buttom_img" src="../../assets/qq.jpg" alt="">
    </div>

    <div class="buttom_div_common buttom_div_text buttom_div_name">小馬技术Log	</div>

    <div class="buttom_div_common buttom_div_text">豫ICP备2023020196号-1</div>

  </div>
</template>

<script>
export default {
  name: "ButtomPage",
}
</script>

<style scoped>

/*PC样式*/
@media screen and (min-width: 768px) {
  .buttom_div {
    margin-bottom: 1em;
  }

  .buttom_img {
    width: 2em;
    height: 2em;
  }

  .buttom_div_common{
    display: inline-block;
  }

  .buttom_div_text{
    margin-top: 0.4em;
    vertical-align:top;
  }

  .buttom_div_img{
    margin-right: 0.3em;
  }

  .buttom_div_name{
    margin-right: 0.6em;
  }

}

</style>