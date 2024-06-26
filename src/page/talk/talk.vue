<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple test-border">11111</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-light test-border">111</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple test-border">111</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TalkMe",
  data() {
    return {}
  },
  methods: {},
  mounted() {

  }
}
</script>


<style>
@media screen and (min-width: 768px) {
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .test-border {
    border: red 1px solid;
  }
}


</style>