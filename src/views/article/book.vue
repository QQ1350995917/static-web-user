<template>
  <el-container>
    <el-main style="text-align: center">
      <el-row style="text-align: center">
        <h2>图书名称</h2>
      </el-row>
      <el-divider></el-divider>
      <el-row style="text-align: center">
        <span>作者</span>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <img
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit"/>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <span>简介</span>
      </el-row>
      <el-divider></el-divider>

      <el-row :gutter="20" style="text-align: center">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" style="height: 40px;"
          v-for="article in articles" v-bind:key="article.id">
          <router-link target="_blank" :to="{path:'/article/article',query:{bookId:article.bookId,articleId:article.id}}">
            <div>
              <span>{{article.title}}</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import { fetchBookSummary,fetchTableInBook } from '@/api/article'
  export default {
    name: 'BookDetail',
    data () {
      return {
        url: 'http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        articles: []
      }
    },
    mounted: function () {
      fetchBookSummary(this.$route.query.bookId).then((res) => {
        if (res.meta.code === 200) {

        } else {
          this.$message.error('参数错误')
        }
      }),
        fetchTableInBook(this.$route.query.bookId).then((res) => {
        if (res.meta.code === 200) {
          this.articles = res.data.elements;
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
