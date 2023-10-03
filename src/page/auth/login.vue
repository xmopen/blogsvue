<template>
  <el-drawer
      ref="drawerRef"
      v-model="isOpenLoginDialog"
      title="Login"
      :before-close="closeLoginDialog"
      direction="rtl"
      class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <el-form :model="loginData">
        <el-form-item label="Account" :label-width="formLabelWidth">
          <el-input v-model="loginData.account" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth">
          <el-input v-model="loginData.password" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer login_button_div">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" @click="submitToLogin">登 录</el-button>

        <a class="to_register_account_div" @click="openRegisterDialogAndCloseLogin">没有账号？注册账号 </a>
      </div>
    </div>
  </el-drawer>
</template>

<script>

import {Login} from "@/api/auth_api"
import {ElNotification} from "element-plus";

export default {
  name: "UserLogin",
  data() {
    return {
      formLabelWidth: '80px',
      loginData: {
        account: "",
        password: "",
      },
    }
  },
  methods: {
    cancelForm() {
      console.log("cancelForm")
      this.closeLoginDialog()
    },
    submitToLogin() {
      let thisVue = this
      Login(this.loginData).then(function (response) {
        if (response.code === 0) {
          ElNotification({
            title: "登录成功",
            message: "登录成功，已刷新用户登录态！",
            type: 'success',
          })
          thisVue.userLoginSuccessPostAction(response.data)
        } else {
          ElNotification({
            title: "登录失败",
            message: "登录失败，请稍后重试",
            type: 'error',
          })
        }
      })
    },
    userLoginSuccessPostAction(loginResponse) {
      console.log(loginResponse)
      this.updateStoreUserInfo(loginResponse)
      this.clearUserLoginData()
      this.closeLoginDialog()
      this.updateLocalStorageUserInfo(loginResponse.xm_token)
    },
    // updateStoreUserInfo update user auth info to store
    updateStoreUserInfo(loginResponse) {
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateAuthInfo, {
        account: loginResponse.user_info.user_account,
        name: loginResponse.user_info.user_name,
        xmToken: loginResponse.xm_token,
        icon: loginResponse.user_icon,
      })
    },
    clearUserLoginData() {
      this.loginData = {}
    },
    closeLoginDialog() {
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateLoginStatus,
          this.$store.state.staticVariable.login.closeLoginDialog)
    },
    openRegisterDialogAndCloseLogin() {
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateLoginStatus,
          this.$store.state.staticVariable.login.openRegisterDialog)
    },
    updateLocalStorageUserInfo(token) {
      localStorage.setItem("openxm_token", token)
    },
  },
  computed: {
    isOpenLoginDialog() {
      return this.$store.state.controlStatus.authDialogStatus === this.$store.state.staticVariable.login.openLoginDialog
    },
  },
}
</script>

<style scoped>

@media screen and (min-width: 768px) {

  a:hover {
    cursor: pointer;
  }

  .to_register_account_div {
    display: inline-block;
    vertical-align: top;
    margin-left: 1em;
    margin-top: 1.1em;
    font-size: 0.8em;
    color: #ffb142;
  }
}

</style>