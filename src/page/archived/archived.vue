<template>
  <div class="archive_div">
<!--    <h3>归档</h3>-->
    <div>
      <el-row>
        <el-col :span="5"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="14"><div class="grid-content ep-bg-purple" />
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
        <el-col :span="5"><div class="grid-content ep-bg-purple-light" /></el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: "ArchivePage"
}
</script>

<style scoped>

@media screen and(min-width: 768px){
  archive_div{
    height: 100%;
  }
}

</style>