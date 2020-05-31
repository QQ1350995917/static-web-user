<template>
    <el-container>
        <el-header>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-top: 10px">
                <el-tab-pane label="字体" name="font" :key="'font'">
                    <child1></child1>
                    <!--<child1 v-if="isChildUpdate1"></child1>-->
                </el-tab-pane>
                <el-tab-pane label="字帖" name="painting" :key="'painting'">
                    <child2></child2>
                    <!--<child2 v-if="isChildUpdate2"></child2>-->
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
    components: {
      child1: font,
      child2: painting,
//      isChildUpdate1:true,
//      isChildUpdate2:false
    },
    data () {
      return {
        activeName: 'font',
      }
    },
    mounted: function () {

    },
    methods: {
      handleCurrentChange: function (currentPage) {
        this.index = currentPage;
      },
//      handleClick(tab) {
//        if(tab.name == "font") {
//          this.isChildUpdate1 = true;
//          this.isChildUpdate2 = false;
//        } else if(tab.name == "painting") {
//          this.isChildUpdate1 = false;
//          this.isChildUpdate2 = true;
//        }
//      }
    }
  }
</script>


<style scoped>

</style>