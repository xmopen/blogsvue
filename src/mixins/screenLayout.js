/**
 * 与 Element Plus 栅格一致：md 起为「桌面」布局（≥992px）。
 */
export default {
  data() {
    return {
      _screenW: typeof window !== "undefined" ? window.innerWidth : 1200,
    }
  },
  computed: {
    mdAndUp() {
      return this._screenW >= 992
    },
    isPhone() {
      return this._screenW < 768
    },
  },
  mounted() {
    this._onScreenResize = () => {
      this._screenW = window.innerWidth
    }
    window.addEventListener("resize", this._onScreenResize)
  },
  beforeUnmount() {
    window.removeEventListener("resize", this._onScreenResize)
  },
}
