<template>
  <div class="login-container">
    <el-form :model="signInForm" :rules="rules" status-icon ref="ruleForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">系统登录</h3>

      <el-form-item prop="identify">
        <el-input type="text" v-model="signInForm.identify" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="signInForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import { signin } from '@/apis/SignIn'
  export default {
    data(){
      return {
        logining: false,
        signInForm: {
          identify: '18511694468',
          password: '123456',
        },
        rules: {
          identify: [{required: true, message: 'please enter your account', trigger: 'blur'}],
          password: [{required: true, message: 'enter your password', trigger: 'blur'}]
        },
        checked: false
      }
    },
    methods: {
      handleSubmit(event){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            signin(this.signInForm.identify, this.signInForm.password)
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
            this.$message.error('请按照规定输入参数')
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
