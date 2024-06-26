<template>
  <div>
    用户登录注册界面。
    <!--    目标：在一个卡片内完成登录/注册效果-->
    <div class="user_login_v2_div">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content ep-bg-purple"/>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple"/>
          <div>
            <el-card>
              <div class="user_login_form_div" v-if="formStatus===1">
                <el-form
                    :label-position="labelPosition"
                    label-width="auto"
                    :model="userInfo"
                >
                  <el-form-item label="邮箱" prop="userInfo.mail">
                    <el-input v-model="userInfo.mail"/>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="userInfo.passWord"/>
                  </el-form-item>
                </el-form>
              </div>
              <!--页面按钮逻辑：如果注册或者登录邮箱为空，则点击注册转换为注册，否则为登录。-->
              <div class="user_login_form_div" v-if="formStatus===0">
                <!--                用户注册页面。-->
                <el-form
                    :label-position="labelPosition"
                    label-width="auto"
                    :model="userInfo"
                >
                  <el-form-item label="邮箱" prop="userInfo.mail">
<!--                    如何让多个div在同一行。-->
                    <div>
                      <div class="div_inline_block">
                        <el-input v-model="userInfo.mail"/>
                      </div>
                      <div class="div_inline_block send_email_code_div" >
                        <el-button @click="sendGenerateCode" size="small"  type="danger" round><b>发送验证码</b></el-button>
                      </div>
                    </div>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-input v-model="userInfo.code"/>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <el-input v-model="userInfo.userName"/>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="userInfo.passWord"/>
                  </el-form-item>
                </el-form>
              </div>

              <!--              登录注册控制按钮-->
              <div class="user_form_button_div">
                <el-button @click="userLogin" type="success" round><b>登录</b></el-button>
                <el-button @click="userRegister" type="success" round><b>注册/登录</b></el-button>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import {Check} from '@element-plus/icons-vue'
import {SendGenerateMailCode} from '@/api/auth_api'
import { ElNotification } from 'element-plus'

export default {
  name: "UserLogin",
  computed: {
    Check() {
      return Check
    }
  },
  data() {
    return {
      // 0注册，1是登录，页面默认是登录页面。
      formStatus: 1,
      userInfo: {
        mail: "",
        code: null,
        userName:"",
        passWord: "",
      }
    }
  },

  methods: {
    userLogin() {
      if (this.formStatus === 0){
        // 只修改状态。
        this.formStatus = 1
        return
      }
      // 去登录。
      this.toLogin()
    },
    userRegister(){
      if (this.formStatus === 1) {
        this.formStatus=0
        return
      }
      // 此时提交注册。
      this.toRegister()
    },
    toLogin(){},
    toRegister(){},
    // 发送验证码： 单纯调用下后台接口，后台接口生成验证码并保存短暂的一段时间，由用户去获取验证码进而登录。
    sendGenerateCode(){
      if (!this.checkMailIsValid()){
        // 提示。
        ElNotification({
          title: 'Error',
          message: '用户输入不合法(邮箱)，请重新检查后在进行提交！',
          type: 'error',
        })
        return
      }
      SendGenerateMailCode(this.userInfo.mail)
    },
    checkMailIsValid(){
      if (this.userInfo.mail === "") {
        return false
      }
      if (this.userInfo.mail.search("@")=== -1) {
        return false
      }
      return true
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

.user_login_v2_div {
  margin-top: 20em;
}

.user_login_form_div {
//padding-left: 2em;
}

.user_form_button_div {
  margin-top: 2em;
}

.div_inline_block{
  display: inline-block;
  vertical-align: top;
}

.send_email_code_div{
  margin-left: 2em;
}

</style>