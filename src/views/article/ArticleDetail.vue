<template>
  <el-container>
    <el-card class="box-card" style="width: 100%;overflow: scroll">
      <div slot="header" class="clearfix">
        <span style="font-size: 4rem">{{article.title}}</span>
      </div>
      <div v-for="paragraph in article.paragraphs" class="text item">
        <p style="width: 98%;margin-bottom: 10px;font-size: 4rem">
          {{paragraph}}
        </p>
      </div>
      <
    </el-card>
  </el-container>
</template>

<script>
  import { articleDetailInBook } from '@/apis/Article'
  export default {
    name: 'ArticleDetail',
    data () {
      return {
        article: {}
      }
    },
    mounted: function () {
      articleDetailInBook(this.$route.query.bookId,this.$route.query.articleId).then((res) => {
        if (res.meta.code === 200) {
          this.article = res.data;
        } else {
          this.$message.error('参数错误')
        }
      })
    },
    method: {

    }
  }
</script>


<style scoped>
</style>
