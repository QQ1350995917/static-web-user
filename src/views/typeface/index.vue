<template>
    <el-container>
        <el-header>
            <el-tabs type="card" @tab-click="handleClick" style="margin-top: 10px">
                <el-tab-pane label="字体">
                    <child1></child1>
                </el-tab-pane>
                <el-tab-pane label="字帖">
                    <child2></child2>
                </el-tab-pane>
            </el-tabs>
        </el-header>
        <el-main>

        </el-main>
    </el-container>
</template>

<script>
  import font from '@/views/typeface/font'
  import painting from '@/views/typeface/painting'
  export default {
    components:{
      child1:font,
      child2:painting
    },
    data () {
      return {
        activeName: 'first',
      }
    },
    mounted: function () {

    },
    methods: {
      handleCurrentChange: function (currentPage) {
        this.index = currentPage;
      }
    }
  }
</script>


<style scoped>

</style>