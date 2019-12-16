<template>
  <el-container>
    <el-card class="box-card" style="width: 100%;overflow: scroll">
      <div slot="header" class="clearfix">
        <span></span>
      </div>
      <div v-for="article in articles" class="text item" style="text-align: center">
        <router-link :to="{path:'articleDetail',query:{bookId:article.bookId,articleId:article.id}}">
          <el-button style="width: 98%;margin-bottom: 10px">
            {{article.title}}
          </el-button>
        </router-link>
      </div>
    </el-card>
  </el-container>
</template>

<script>
  import { bookDetail } from '@/apis/Article'
  export default {
    name: 'BookDetail',
    data () {
      return {
        articles: []
      }
    },
    mounted: function () {
      bookDetail(this.$route.query.bookId).then((res) => {
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
