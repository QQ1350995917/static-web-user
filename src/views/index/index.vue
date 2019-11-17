<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24" style="text-align: center">
          <el-button type="primary" @click="signInDialogVisible = true">登录</el-button>
          <el-button type="primary" @click="signUpDialogVisible = true">注册</el-button>
          <el-button type="primary" @click="mine">个人中心</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-dialog title="登录"
                 width="30%"
                 :visible.sync="signInDialogVisible"
                 :show-close="true"
                 @close='closeDialog'>
        <SignInView></SignInView>
      </el-dialog>
      <el-dialog title="注册"
                 width="30%"
                 :visible.sync="signUpDialogVisible"
                 :show-close="true"
                 @close='closeDialog'>
        <SignUpView></SignUpView>
      </el-dialog>
    </el-main>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</template>
<script>
  import ElHeader from "../../../node_modules/element-ui/packages/header/src/main";
  import ElFooter from "../../../node_modules/element-ui/packages/footer/src/main";
  import SignInView from "../login/signIn.vue"
  import SignUpView from "../login/signUp.vue"
  import {setToken} from '@/utils/auth'
  export default {
    components: {
      ElFooter,
      ElHeader,
      SignInView,
      SignUpView,
    },
    name: "Index",
    data(){
      return {
        signInDialogVisible: false,
        signUpDialogVisible: false,
      }
    },

    methods: {
      mine() {
        commit('SET_ROLES', 'admin')
        setToken('admin-token')
        this.$router.push({ path: this.redirect || '/mine' })
      }
    }
  }
</script>

<style scoped>
</style>
