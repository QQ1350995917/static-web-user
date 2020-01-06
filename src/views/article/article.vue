<template>
  <el-container>
    <el-main>
      <el-row>
        <h1 style="text-align: center">{{article.title}}</h1>
      </el-row>
      <el-divider></el-divider>
      <el-row style="text-align: center">
        <el-link type="primary">作者</el-link>
      </el-row>
      <br>
      <el-divider></el-divider>
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="text-align: center;height: 50px">
          <el-link type="primary" v-if="pre != null">上一章：{{pre.title}}</el-link>
          <el-link type="primary" v-if="pre == null">&nbsp;</el-link>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="text-align: center;height: 30px">
          <el-link type="primary">返回目录</el-link>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="text-align: center;height: 50px">
          <el-link type="primary" v-if="next != null">下一章：{{next.title}}</el-link>
          <el-link type="primary" v-if="next == null">&nbsp;</el-link>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-col
        v-for="paragraph in article.paragraphs" v-bind:key="paragraph.id" class="text item">
        <span>{{paragraph}}</span>
        <br>
      </el-col>
      <el-divider></el-divider>
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="text-align: center;height: 50px">
          <el-link type="primary" v-if="pre != null">上一章：{{pre.title}}</el-link>
          <el-link type="primary" v-if="pre == null">&nbsp;</el-link>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="text-align: center;height: 30px">
          <el-link type="primary">返回目录</el-link>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="text-align: center;height: 50px">
          <el-link type="primary" v-if="next != null">下一章：{{next.title}}</el-link>
          <el-link type="primary" v-if="next == null">&nbsp;</el-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import { fetchAroundTableInBook,fetchArticleInBook } from '@/api/article'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElRow from "element-ui/packages/row/src/row";
  export default {
    components: {
      ElRow,
      ElCol},
    name: 'ArticleDetail',
    data () {
      return {
        bookId:null,
        pre:null,
        article: {},
        next:null
      }
    },
    mounted: function () {
      this.bookId = this.$route.query.bookId;
      fetchAroundTableInBook(this.$route.query.bookId,this.$route.query.articleId).then((res) => {
        if (res.meta.code === 200) {
          this.pre = res.data.pre;
          this.next = res.data.next;
        } else {
          this.$message.error('参数错误')
        }
      }),
      fetchArticleInBook(this.$route.query.bookId,this.$route.query.articleId).then((res) => {
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
