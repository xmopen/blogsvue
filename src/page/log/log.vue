<template>
  <div class="log_layout_div">
    <div
        class="log_center_wrap"
        v-infinite-scroll="loadMoreLogs"
        :infinite-scroll-disabled="scrollDisabled"
        :infinite-scroll-distance="80"
        :infinite-scroll-immediate="false"
    >
      <div class="log_timeline_wrap">
        <el-timeline>
          <el-timeline-item
              v-for="item in logList"
              :key="item.id"
              :timestamp="item.time"
              placement="top"
              :color="'#ffa940'"
          >
            <div class="log_card middle_card_div" :id="'log-entry-' + item.id">
              <div class="log_ribbon_wrap">
                <div class="a">
                  <div class="b" :style="{ '--ribbon-bg': ribbonColor(item.type) }">
                    <span>{{ item.type }}</span>
                  </div>
                </div>
              </div>

              <div v-if="hasLogImg(item.img)" class="log_card_img">
                <img :src="String(item.img).trim()" :alt="item.type || '配图'">
              </div>

              <div class="log_card_body">
                <p class="log_content">{{ item.content }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>

        <div v-if="loadingMore" class="log_load_hint">加载中…</div>
        <div
            v-else-if="showEndLine"
            class="log_load_hint log_load_done"
        >没有更多了</div>
      </div>
    </div>
  </div>
</template>

<script>
import {LogList} from "@/api/api"
import {ElMessage} from "element-plus"

const RIBBON_PALETTE = ["#b8e245", "#95d5b2", "#e17055", "#fdcb6e", "#74b9ff"]

export default {
  name: "LogPage",
  data() {
    return {
      logList: [],
      offset: 0,
      limit: 10,
      hasMore: true,
      loadingInitial: true,
      loadingMore: false,
    }
  },
  computed: {
    scrollDisabled() {
      return this.loadingMore || !this.hasMore || this.loadingInitial
    },
    showEndLine() {
      return !this.hasMore && this.logList.length > 0
    },
  },
  created() {
    this.fetchLogPage(true)
  },
  methods: {
    /** 未传、空串、仅空白时不展示配图 */
    hasLogImg(img) {
      if (img == null) {
        return false
      }
      return String(img).trim() !== ""
    },
    ribbonColor(type) {
      let h = 0
      for (let i = 0; i < type.length; i++) {
        h = (h + type.charCodeAt(i) * 17) % RIBBON_PALETTE.length
      }
      return RIBBON_PALETTE[h]
    },
    loadMoreLogs() {
      if (!this.hasMore || this.loadingMore || this.loadingInitial) {
        return
      }
      this.fetchLogPage(false)
    },
    fetchLogPage(isInitial) {
      if (isInitial) {
        this.loadingInitial = true
      } else {
        this.loadingMore = true
      }
      const vueThis = this
      const reqOffset = this.offset
      LogList(reqOffset, this.limit)
          .then(function (response) {
            vueThis.applyLogPayload(response, reqOffset, isInitial)
          })
          .catch(function () {
            vueThis.loadingInitial = false
            vueThis.loadingMore = false
            vueThis.hasMore = false
            ElMessage.error("获取日志失败，请检查网络或接口")
          })
    },
    applyLogPayload(response, reqOffset, isInitial) {
      this.loadingInitial = false
      this.loadingMore = false
      if (!response || response.code !== 0) {
        this.hasMore = false
        if (!isInitial || this.logList.length === 0) {
          ElMessage.error(
              (response && response.msg) ? response.msg : "获取日志失败",
          )
        }
        return
      }
      const batch = response.data || []

      if (batch.length > 0) {
        for (let i = 0; i < batch.length; i++) {
          this.logList.push(batch[i])
        }
        this.offset = reqOffset + batch.length
      }

      if (isInitial && this.logList.length === 0) {
        this.hasMore = false
        return
      }

      /* 本批不足 limit 条视为已无更多 */
      this.hasMore = batch.length >= this.limit

      if (this.hasMore) {
        this.scheduleLoadIfViewportShort()
      }
    },
    /** 首屏内容不足以产生滚动条时，继续拉取直到可滚动或无更多 */
    scheduleLoadIfViewportShort() {
      const vueThis = this
      this.$nextTick(function () {
        if (!vueThis.hasMore || vueThis.loadingMore || vueThis.loadingInitial) {
          return
        }
        const doc = document.documentElement
        const body = document.body
        const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight)
        if (scrollHeight <= doc.clientHeight + 80) {
          vueThis.loadMoreLogs()
        }
      })
    },
  },
}
</script>

<style scoped>
@import "../../css/common.css";

.log_layout_div {
  padding-top: 3em;
  width: 100%;
  min-height: 50vh;
  box-sizing: border-box;
}

/* 覆盖 #app 的 text-align:center，否则时间戳会在卡片上方居中、与左侧圆点脱节 */
.log_center_wrap {
  width: 100%;
  max-width: 52em;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(0.75rem, 3vw, 1rem);
  padding-right: clamp(0.75rem, 3vw, 1rem);
  padding-bottom: clamp(1.5rem, 4vw, 2rem);
  box-sizing: border-box;
  text-align: left;
}

.log_timeline_wrap {
  width: 100%;
}

.log_timeline_wrap :deep(.el-timeline) {
  padding: 0;
}

.log_timeline_wrap :deep(.el-timeline-item__tail) {
  border-left: 2px solid #dcdfe6;
}

.log_timeline_wrap :deep(.el-timeline-item__node) {
  background-color: #ffa940;
}

.log_timeline_wrap :deep(.el-timeline-item__wrapper) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* 与圆点、竖线留出空隙（略小于 EP 默认 28px，避免贴死） */
  padding-left: 18px;
  top: -2px;
  text-align: left;
}

.log_timeline_wrap :deep(.el-timeline-item__timestamp.is-top) {
  margin-bottom: 0.5em;
  padding-top: 0;
}

.log_timeline_wrap :deep(.el-timeline-item__content) {
  width: 100%;
  max-width: 100%;
  align-self: stretch;
  text-align: left;
}

.log_timeline_wrap :deep(.el-timeline-item__timestamp) {
  display: inline-block;
  padding: 0.25em 0.55em;
  border-radius: 3px;
  background-color: #ffa940;
  color: #fff;
  font-size: clamp(11px, 2.8vw, 13px);
  line-height: 1.4;
  text-align: left;
  vertical-align: top;
}

.middle_card_div {
  position: relative;
  margin-bottom: 0.5em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
  background-color: #ffffff;
  overflow: hidden;
}

.log_ribbon_wrap {
  position: relative;
  z-index: 20;
}

.a {
  position: relative;
}

.b {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  right: -50px;
  transform: rotate(45deg);
}

.b span {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  text-align: center;
  background-color: var(--ribbon-bg, #b8e245);
  color: #2d3436;
  font-size: clamp(10px, 2.5vw, 12px);
}

.log_card_img {
  max-height: 180px;
  overflow: hidden;
}

.log_card_img img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.log_card_body {
  padding: clamp(0.75rem, 3vw, 1em) clamp(0.75rem, 3vw, 1em) clamp(1rem, 3vw, 1.2em);
  text-align: left;
}

.log_content {
  margin: 0;
  color: #636e72;
  font-size: clamp(13px, 3.1vw, 14px);
  line-height: 1.65;
  white-space: pre-wrap;
  word-break: break-word;
}

.log_load_hint {
  text-align: center;
  color: #909399;
  font-size: clamp(12px, 3vw, 13px);
  padding: 1em 0 0;
}

.log_load_done {
  opacity: 0.85;
}

/* 平板 / 小屏 */
@media screen and (max-width: 992px) {
  .log_layout_div {
    padding-top: 2.5em;
  }

  .log_center_wrap {
    max-width: 100%;
  }

  .log_card_img {
    max-height: 200px;
  }
}

/* 手机竖屏 */
@media screen and (max-width: 768px) {
  .log_layout_div {
    padding-top: 2em;
    min-height: 40vh;
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  .log_timeline_wrap :deep(.el-timeline-item__wrapper) {
    padding-left: 14px;
  }

  .log_timeline_wrap :deep(.el-timeline-item) {
    padding-bottom: 16px;
  }

  .b {
    width: 88px;
    height: 88px;
    top: -44px;
    right: -44px;
  }

  .log_card_img {
    max-height: 160px;
  }

  .middle_card_div {
    border-radius: 5px;
  }
}

/* 窄屏手机 */
@media screen and (max-width: 380px) {
  .log_center_wrap {
    padding-left: 0.65rem;
    padding-right: 0.65rem;
  }

  .log_timeline_wrap :deep(.el-timeline-item__wrapper) {
    padding-left: 12px;
  }
}
</style>
