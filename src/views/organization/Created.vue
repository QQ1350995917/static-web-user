<template>
  <el-container style="width:100%; text-align: center">
    <el-form :model="createOrgForm" :rules="rules" >
      <h3 class="title">{{title}}</h3>
      <el-form-item prop="name">
        <el-input type="text" v-model="createOrgForm.name" auto-complete="off" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item prop="slogan">
        <el-input type="text" v-model="createOrgForm.slogan" auto-complete="off" placeholder="请输入口号"></el-input>
      </el-form-item>
      <el-form-item prop="description">
        <el-input type="text" v-model="createOrgForm.description" auto-complete="off" placeholder="请输入描述"></el-input>
      </el-form-item>
      <el-form-item prop="logo">
        <el-input type="text" v-model="createOrgForm.logo" auto-complete="off" placeholder="请上传logo"></el-input>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="">创建</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
  export default {
    name: 'Created',
    data () {
      return {
        title: '创建我的组织',
        createOrgForm: {
          name: 'name',
          slogan: 'slogan',
          description: 'description',
          logo: 'logo',
        },
        rules: {
          name: [{required: true, message: 'please enter your account', trigger: 'blur'}],
          slogan: [{required: true, message: 'enter your password', trigger: 'blur'}],
          description: [{required: true, message: 'enter your password', trigger: 'blur'}],
          logo: [{required: true, message: 'enter your password', trigger: 'blur'}]
        },
      }
    }
  }
</script>

<style scoped>

</style>
