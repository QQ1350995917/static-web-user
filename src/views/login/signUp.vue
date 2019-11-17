<template>

  <el-form :model="signUpForm" :rules="signUpRule" status-icon ref="signUpForm" label-position="left" label-width="0px">
    <el-form-item prop="phoneNumber">
      <el-input type="text" v-model="signUpForm.phoneNumber" auto-complete="off" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="signUpForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="rememberme">记住密码
    </el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: "SignUpView",
    data() {
      return {
        signUpForm: {
          phoneNumber: '',
          password: '',
        },
        signUpRule: {
          phoneNumber: [{required: true, message: '请输入手机号', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: false
      }
    },


    methods: {
      handleSubmit(event){
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.logining = true;

          } else {
            console.log('error submit!');
            return false;
          }
        })
      },

    },
  }
</script>

<style scoped>
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }

</style>
