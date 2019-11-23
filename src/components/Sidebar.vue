<template>
  <div style="height: 100%;">
    <div class="app-side-logo">
      <img src="@/assets/logo.png"
           :width="collapse ? '60' : '60'"
           height="60" />
    </div>

    <el-menu class="el-menu-vertical-demo" style="height: 100%;"
             :default-active="defaultActive"
             router unique-opened
             :collapse="collapse">
      <SidebarItem v-for="(item, idx) in routes"
                   :subroute="item"
                   :fatherpath="fatherPath"
                   :barIdx="idx" :key="idx" />
    </el-menu>
  </div>
</template>
<script>
  import SidebarItem from './SidebarItem'
  export default {
    name: "Sidebar",
    components: {
      SidebarItem
    },
    props: {
      collapse: {
        type: Boolean
      },
      routes: {
        type: Array
      }
    },
    computed: {
      // 首次进入页面时展开当前页面所属的菜单
      defaultActive(){
        return this.$route.path
      },
      fatherPath(){
        // 这里直接获取路由配置的 '/' 项
        return this.$router.options.routes[0].path
      }
    }
  }
</script>

<style>

</style>
