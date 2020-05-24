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
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="size"
        :total="total"
        @current-change="handleCurrentChange">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
  import { bookSummary, bookTable } from '@/apis/book/Book'
  export default {
    name: 'BookDetail',
    data () {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        bookRate: 3.5,
        bookId: this.$route.query.bookId,
        book: null,
        index: 1,
        size: 12,
        total: 0,
        tables: [],
      }
    },
    mounted: function () {
      bookSummary(this.bookId).then((res) => {
        if (res.meta.code === 200) {
          this.book = res.data;
        } else {
          this.$message.error('参数错误')
        }
      });
      this.requestBookTable(this.bookId, this.index, this.size)
    },
    methods: {
      requestBookTable: function (bookId, index, size) {
        bookTable(bookId, index - 1, size).then((res) => {
          this.tables = []
          if (res.meta.code === 200) {
            this.tables = res.data.elements;
            this.index = res.data.index + 1;
            this.size = res.data.size;
            this.total = res.data.total;
          } else {
            this.$message.error('参数错误')
          }
        })
      },
      handleCurrentChange: function (currentPage) {
        this.index = currentPage;
        this.requestBookTable(this.bookId, this.index, this.size)
      }
    }
  }
</script>


<style scoped>
</style>
