<template>
  <el-container style="height: 500px;" ref="minePage">
    <el-aside width="200px" class="app-side app-side-left"
              :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
      <Sidebar :collapse="isCollapse" :routes="$router.options.routes[0].children"/>
    </el-aside>
    <el-container>
      <el-header class="app-header" style="text-align: right;">
        <div style="width: 60px; cursor: pointer;"
             @click.prevent="toggleSideBar">
          <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
          <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
        </div>
        <div class="app-header-userinfo">
          <el-dropdown trigger="hover"
                       :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided
                                @click.native="logout">退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="app-body">
        <template>
          <router-view/>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import { logout } from '@/apis/session/SignIn'
  export default {
    name: 'Layout',
    components: {
      Sidebar
    },
    data() {
      return {
        username: '',
        isCollapse: false,
        clientHeight: '',
      }
    },
    methods: {
      toggleSideBar() {
        this.isCollapse = !this.isCollapse
      },

      logout: function () {
        this.$confirm('确认退出?', '提示', {})
          .then(() => {
            logout(sessionStorage.getItem("uid")).then((res) => {
              if (res.meta.code === 200) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('uid');
                this.$router.push('/signin');
              } else {
                this.$message.error('参数错误')
              }
            })
          })
          .catch((e) => { console.log('exception' + e) });
      },
      changeFixed(clientHeight){ //动态修改样式
        this.$refs.minePage.$el.style.height = clientHeight-20+'px';
      },
    },
    mounted: function () {
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
      let user = sessionStorage.getItem('user');
      if (user) {
        this.username = user;
      }
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
  }
</script>

<style>

</style>
