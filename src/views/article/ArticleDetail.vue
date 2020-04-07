<template>
  <el-container>
    <el-main>
      <span>{{article.title}}</span>
      <el-divider></el-divider>
      <el-col v-for="paragraph in article.paragraphs" v-bind:key="paragraph.id" class="text item">
        <span>{{paragraph}}</span>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
  import { articleDetailInBook } from '@/apis/article/Article'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElDivider from '../../../node_modules/element-ui/packages/divider/src/main'
  export default {
    components: {
      ElDivider,
      ElCol},
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
