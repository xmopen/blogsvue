<template>
  <div >
    <div class="left_me_class">
      <div >1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageMe"
}
</script>

<style scoped>

  @media screen and (max-width: 768px){

  }

  @media screen and (min-width: 768px){
    .left_me_class{
      width: 19em;
      float: right;
      border: red solid 1px;
    }
  }

</style>