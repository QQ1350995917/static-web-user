<template>
  <el-container>
    <el-main>
      <el-image
        style="width: 100px; height: 100px" :src="url">
      </el-image>
      <span>图书名称:{{book.title}}</span>
      <el-rate
        v-model="bookRate"
        :colors="colors">
      </el-rate>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col
          v-for="table in tables" v-bind:key="table.id">
          <router-link target="_blank" :to="{path:'articleDetail',query:{bookId:table.bookId,articleId:table.id}}">
            <div>
              <span>{{table.title}}</span>
              <el-divider></el-divider>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import { bookDetail, bookTable } from '@/apis/book/Book'
  export default {
    name: 'BookDetail',
    data () {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        bookRate: 3.5,
        book: null,
        tables: [],
      }
    },
    mounted: function () {
      bookDetail(this.$route.query.bookId).then((res) => {
        if (res.meta.code === 200) {
          this.book = res.data;
        } else {
          this.$message.error('参数错误')
        }
      });
      bookTable(this.$route.query.bookId).then((res) => {
        if (res.meta.code === 200) {
          this.tables = res.data.elements;
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
