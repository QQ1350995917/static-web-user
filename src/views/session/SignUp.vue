<template>
  <div class="login-container">
    <el-form :model="signUpForm" :rules="rules" status-icon ref="signUpForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">账号注册</h3>
      <el-form-item prop="phoneNumber">
        <el-input type="text" v-model="signUpForm.phoneNumber" auto-complete="off" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item prop="smsCode">
        <el-input type="text" v-model="signUpForm.smsCode" auto-complete="off" placeholder="短信验证码"></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input type="text" v-model="signUpForm.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import { signup } from '@/apis/session/SignUp'
  export default {
    data(){
      return {
        signUpForm: {
          phoneNumber: '18511694468',
          smsCode: '123456',
          username: 'DingPengwei',
        },
        rules: {
          phoneNumber: [{required: true, message: '请输入手机号码', trigger: 'blur'}],
          smsCode: [{required: true, message: '请输入短信验证码', trigger: 'blur'}],
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}]
        },
      }
    },
    methods: {
      handleSubmit(event){
        this.$refs.signUpForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            signup(this.signUpForm.phoneNumber, this.signUpForm.smsCode, this.signUpForm.username)
              .then((res) => {
                this.logining = false;
                if (res.meta.code === 200) {
                  sessionStorage.setItem('token', res.data.token);
                  sessionStorage.setItem('uid', res.data.uid);
                  this.$router.push({path: '/'});
                } else {
                  this.$message.error('参数错误')
                }
              })
          } else {
            return false;
          }
        })
      }
    }
  };
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
  }

  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }

</style>
