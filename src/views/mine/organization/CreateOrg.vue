<template>
  <el-form :model="createOrgForm" :rules="createOrgRule" status-icon ref="createOrgForm" label-position="left" label-width="0px">
    <el-form-item prop="orgName">
      <el-input type="text" v-model="createOrgForm.orgName" auto-complete="off" placeholder="组织名称"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="createOrgForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CreateOrg',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>
