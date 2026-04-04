<template>
  <div class="buttom_div">

    <div class="buttom_div_common buttom_div_img">
      <img class="buttom_img" src="../../assets/qq.jpg" alt="">
    </div>

    <div class="buttom_div_common buttom_div_text buttom_div_name">小馬技术Log	</div>
    <div class="buttom_div_common buttom_div_text"> <a href="https://beian.miit.gov.cn"> 豫ICP备2023020196号-1</a>> </div>

  </div>
</template>

<script>
export default {
  name: "ButtomPage",
}
</script>

<style scoped>

.buttom_div {
  box-sizing: border-box;
  padding-left: var(--app-gutter, 0.75rem);
  padding-right: var(--app-gutter, 0.75rem);
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.buttom_div_common {
  display: inline-block;
}

.buttom_div_text {
  margin-top: 0.4em;
  vertical-align: top;
}

.buttom_div_img {
  margin-right: 0.3em;
}

.buttom_img {
  width: 2em;
  height: 2em;
}

@media screen and (max-width: 768px) {
  .buttom_div {
    margin-bottom: 0.75em;
    font-size: clamp(11px, 3.2vw, 13px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.35em 0.6em;
  }

  .buttom_img {
    width: 1.75em;
    height: 1.75em;
  }

  .buttom_div_name {
    margin-right: 0;
  }
}

@media screen and (min-width: 769px) {
  .buttom_div {
    margin-bottom: 1em;
  }

  .buttom_div_name {
    margin-right: 0.6em;
  }
}

</style>