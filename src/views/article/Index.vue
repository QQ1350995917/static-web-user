<template>
  <el-container>
    <el-header>
      <div style="margin-top: 15px;">
        <el-input placeholder="Please input" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <el-main>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

      <el-row :gutter="20">
        <el-col
          :xs="{span:24,offset:0}" :sm="{span:12,offset:0}" :md="{span:6,offset:0}"
          v-for="book in books" v-bind:key="book.id">
          <router-link target="_blank" :to="{path:'bookDetail',query:{bookId:book.id}}">
            <el-button class="text item book">
              {{book.title}}
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-main>
    <el-divider></el-divider>
  </el-container>
</template>

<script>
  import { books } from '@/apis/Article'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    name: 'Books',
    data () {
      return {
        input: '',
        books: []
      }
    },
    mounted: function () {
      books().then((res) => {
        if (res.meta.code === 200) {
          this.books = res.data.elements;
        } else {
          this.$message.error('参数错误')
        }
      })
    },
    method: {}
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
