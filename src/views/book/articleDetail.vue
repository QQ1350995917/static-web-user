<template>
    <el-container>
        <el-main>
            <span>{{article.title}}</span>
            <el-divider></el-divider>
            <el-col v-for="paragraph in article.paragraphs" v-bind:key="paragraph.id" class="text item">
                <span>{{paragraph}}</span>
                <p><span> </span></p>
            </el-col>
        </el-main>
    </el-container>
</template>

<script>
  import { articleDetail } from '@/api/book/article'
  import ElCol from 'element-ui/packages/col/src/col'
  export default {
    components: {
      ElCol},
    name: 'ArticleDetail',
    data () {
      return {
        article: {}
      }
    },
    mounted: function () {
      articleDetail(this.$route.query.articleId).then((res) => {
        if (res.meta.code === 200) {
          this.article = res.data;
        } else {
          this.$message.error('参数错误')
        }
      })
    },
    methods: {
    }
  }
</script>


<style scoped>
</style>