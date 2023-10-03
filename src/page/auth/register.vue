<template>
  <div class="user_register_div">
    <el-drawer
        ref="drawerRef"
        v-model="isOpenRegisterDialog"
        title="Register"
        :before-close="closeRegisterDialog"
        direction="rtl"
        class="demo-drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="registerData">
          <el-form-item label="Account" :label-width="formLabelWidth">
            <el-input v-model="registerData.account" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="registerData.name" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="Password" :label-width="formLabelWidth">
            <el-input v-model="registerData.password" autocomplete="off"/>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button type="primary" @click="submitToRegister">注 册</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>

import {Register} from "@/api/auth_api";
import {ElNotification} from 'element-plus';

export default {
  name: "UserRegister",
  data() {
    return {
      formLabelWidth: '80px',
      registerData: {
        account: "",
        name: "",
        password: "",
      },
    }
  },
  methods: {
    submitToRegister() {
      let thisVue = this
      Register(this.registerData).then(function (response) {
        if (response.code === 0) {
          ElNotification({
            title: "注册成功",
            message: "恭喜，成功注册且已登录！",
            type: 'success',
          })
          thisVue.userRegisterSuccessPostAction(response.data)
        } else {
          ElNotification({
            title: "注册失败",
            message: "注册失败，请稍后重试",
            type: 'error',
          })
        }
      })
    },
    userRegisterSuccessPostAction(registerResponse){
      this.updateStoreUserInfo(registerResponse)
      this.clearRegisterData()
      this.closeRegisterDialog()
      this.updateLocalStorageUserInfo(registerResponse.xm_token)
    },
    // updateStoreUserInfo update user auth info to store
    updateStoreUserInfo(registerResponse) {
      console.log(registerResponse)
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateAuthInfo, {
        account: registerResponse.user_info.user_account,
        name: registerResponse.user_info.user_name,
        xmToken: registerResponse.xm_token,
        icon:registerResponse.user_icon,
      })
      console.log(this.$store.state.auth)
    },
    // clearRegisterData clear register data for user info
    clearRegisterData(){
      this.registerData = {}
    },
    closeRegisterDialog() {
      this.$store.commit(this.$store.state.staticVariable.mutationsName.updateLoginStatus,
          this.$store.state.staticVariable.login.closeRegisterDialog)
    },
    updateLocalStorageUserInfo(token){
      localStorage.setItem("openxm_token",token)
    },
  },
  computed: {
    isOpenRegisterDialog() {
      return this.$store.state.controlStatus.authDialogStatus === this.$store.state.staticVariable.login.openRegisterDialog
    },
  },
}
</script>

<style scoped>

@media screen and (min-width: 768px) {
  .user_register_div {
  }
}

</style>