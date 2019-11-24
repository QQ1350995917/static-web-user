<template>
  <el-container style="width:100%; text-align: center;justify-content: center;">
    <el-form :model="createOrgForm" :rules="rules" label-width="80px">
      <h3 class="title">{{title}}</h3>
      <el-form-item prop="name" label="组织名称">
        <el-input type="text" v-model="createOrgForm.name" auto-complete="off" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item prop="slogan" label="组织口号">
        <el-input type="text" v-model="createOrgForm.slogan" auto-complete="off" placeholder="请输入口号"></el-input>
      </el-form-item>
      <el-form-item prop="description" label="组织描述">
        <el-input type="textarea" v-model="createOrgForm.description" auto-complete="off" placeholder="请输入描述"></el-input>
      </el-form-item>
      <el-form-item prop="logo" label="组织图标">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="createOrgForm.imageUrl" :src="createOrgForm.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
          imageUrl: ''
        },
        rules: {
          name: [{required: true, message: 'please enter your account', trigger: 'blur'}],
          slogan: [{required: true, message: 'enter your password', trigger: 'blur'}],
          description: [{required: true, message: 'enter your password', trigger: 'blur'}],
          logo: [{required: true, message: 'enter your password', trigger: 'blur'}]
        },
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
