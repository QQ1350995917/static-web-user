<template>
    <el-container>
        <el-header>
            <el-input placeholder="请输入内容" clearable v-model="searchContent" class="input-with-select"
                      @keyup.enter.native="searchPainting(searchContent)">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="searchPainting(searchContent)"></el-button>
            </el-input>
        </el-header>
        <el-main class="infinite-list" v-infinite-scroll="loadMore" style="overflow:auto">
            <p v-for="(item, index) in paintings" class="infinite-list-item">
                <img style="width: 100%; height: 100%" show-overflow-tooltip :src="item.imageUrl"
                          :alt="item.content"/>
            </p>
        </el-main>
        <el-backtop></el-backtop>
    </el-container>
</template>
<script>
  import ElHeader from '../../../node_modules/element-ui/packages/header/src/main'
  import ElContainer from '../../../node_modules/element-ui/packages/container/src/main'
  import ElMain from '../../../node_modules/element-ui/packages/main/src/main'
  import { listMyPainting } from '@/api/typeface/painting'
  export default {
    name: 'painting',
    components: {
      ElMain,
      ElContainer,
      ElHeader
    },
    data () {
      return {
        select: 1,
        searchFontId: '',
        searchContent: '',
        nextPageIndex: 0,
        pageSize: 12,
        paintings: [],
      }
    },
    mounted: function () {
      this.loadMore()
    },
    methods: {
      searchPainting() {
        this.paintings = [];
        this.nextPageIndex = 0;
        this.loadMore();
      },
      loadMore () {
        listMyPainting(this.searchContent, this.searchFontId, this.nextPageIndex, this.pageSize).then((res) => {
          if (res.meta.code === 200) {
            this.paintings = res.data.elements
          } else {
            this.$message.error('参数错误')
          }
        })
      }
    }
  }
</script>