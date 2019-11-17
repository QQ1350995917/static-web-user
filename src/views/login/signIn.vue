<template>

  <el-form :model="loginForm" :rules="loginRule" status-icon ref="loginForm" label-position="left" label-width="0px">
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="rememberme">记住密码
    </el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: "SignInView",
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRule: {
          username: [{required: true, message: '请输入账号', trigger: 'blur'}],
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
            if (this.loginForm.username === 'admin' &&
              this.loginForm.password === '123456') {
              this.logining = false;
              sessionStorage.setItem('user', this.loginForm.username);
              this.$router.push({path: '/'});
            } else {
              this.logining = false;
              this.$alert('用户名或密码错误!', 'info', {
                confirmButtonText: 'ok'
              })
            }
          } else {
            console.log('error submit!');
            return false;
          }
        })
      },
      //登录
      login: function () {
        //这里使用的是固定的用户名和密码。admin/111111

        //校验密码
        if (this.form.pw !== '111111') {
          this.$message({
            type: "danger",
            message: "用户名或密码错误!"
          });
          return;
        }
        //校验用户
        if (this.form.id === 'admin') {
          this.modelShow = false;
          //把登录数据写入到session
          if (window.sessionStorage) {
            sessionStorage.setItem("is_login", "true");
          }
        } else {
          this.$message({
            type: "danger",
            message: "用户名或密码错误!"
          });
        }
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
