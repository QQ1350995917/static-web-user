<template>
  <el-container>
    <el-header>
      <div style="margin-top: 15px;">
        <el-input
          @keyup.enter.native="onSearch()"
          placeholder="Please input"
          v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <el-main>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
      <el-row :gutter="20">
        <el-col
          :xs="{span:24,offset:0}" :sm="{span:24,offset:0}" :md="{span:24,offset:0}"
          v-for="book in books" v-bind:key="book.id">
          <a :href="book.esLinkTo" target="_blank">{{book.esTitle}}</a> - <span>{{book.esType}}</span>
          <!--<router-link target="_blank" :to="{path:'/book/articleDetail',query:{bookId:book.id,articleId:book.id}}">-->
          <!--<p class="text item book" v-html="book.esTitle"></p>-->
          <!--</router-link>-->
          <p v-html="book.esSummary"></p>
          <span :formatter="dateFormat(book.esUpdateTime)">{{book.esUpdateTime}}</span>
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
    <el-divider></el-divider>
  </el-container>
</template>

<script>
  import { search } from '@/apis/book/Book'
  import moment from 'moment'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'BookSearch',
    data () {
      return {
        input: this.$route.query.keyword,
        activeName: 'first',
        books: [],
        index: 1,
        size: 12,
        total: 0
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.doSearch(this.input, this.index, this.size)
      })
    },
    methods: {
      onSearch: function (e) {
        this.index = 1
        this.total = 0
        this.books = []
        var e = window.event || e;
        var keyCode = e.keyCode || e.which || e.charCode;
        if (keyCode == 13 && this.input) {
          this.doSearch(this.input, this.index - 1, this.size)
        }
      },
      doSearch: function (keyword, index, size) {
        search(keyword, index, size).then((res) => {
          if (res.meta.code === 200) {
            this.books = res.data.elements;
            this.index = res.data.index + 1;
            this.total = res.data.total;
          } else {
            this.$message.error('参数错误')
          }
        })
      },
      handleClick: function () {

      },
      dateFormat(date) {
        if (date == undefined) {
          return "";
        }
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      handleCurrentChange: function(currentPage){
        this.index = currentPage;
        this.doSearch(this.input, this.index - 1, this.size)
      },
    }
  }
</script>


<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .book {
    width: 100%;
    height: 100px;
  }
</style>
