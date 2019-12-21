<template>
  <el-container>
    <el-card class="box-card" style="width: 100%;overflow: scroll">
      <div slot="header" class="clearfix">
        <span></span>
      </div>
      <div v-for="book in books" class="text item" style="text-align: center">
        <router-link :to="{path:'bookDetail',query:{bookId:book.id}}">
          <el-button style="width: 98%;margin-bottom: 10px;font-size: 4rem">
            {{book.title}}
          </el-button>
        </router-link>
      </div>
    </el-card>
  </el-container>
</template>

<script>
  import { books } from '@/apis/Article'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'Books',
    data () {
      return {
        books: []
      }
    },
    mounted: function () {
      books().then((res) => {
        if (res.meta.code === 200) {
          this.books = res.data.elements;
        } else {
          this.$message.error('参数错误')
        }
      })
    },
    method: {}
  }
</script>


<style scoped>
</style>
