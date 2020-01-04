<template>
  <el-container>
    <el-main>
      <el-image
        style="width: 100px; height: 100px"
        :src="url">
      </el-image>
      <span>图书名称</span>
      <el-rate
        v-model="value2"
        :colors="colors">
      </el-rate>
      <el-row :gutter="20">
        <el-col
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
  import { fetchBook } from '@/api/article'
  export default {
    name: 'BookDetail',
    data () {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        articles: []
      }
    },
    mounted: function () {
      fetchBook(this.$route.query.bookId).then((res) => {
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
