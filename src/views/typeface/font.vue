<template>
    <el-container>
        <el-header>
            <el-input placeholder="请输入字体名称" clearable v-model="fontSearchContent" class="input-with-select"
                      @keyup.enter.native="searchFont(fontSearchContent)">
                <el-button slot="append" icon="el-icon-search" @click="searchFont(fontSearchContent)"></el-button>
            </el-input>
        </el-header>
        <el-main>
            <div class="infinite-list-wrapper" style="overflow:auto">
                <el-col :span="6" v-for="(item, index) in fonts" :key="item.id" v-infinite-scroll="loadMore"
                        infinite-scroll-disabled="disabled">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 5px;cursor: pointer;" shadow="hover"
                             @click.native="handleOpen(item)">
                        <div slot="header" class="clearfix" style="text-align: center;">
                            <span>{{item.title}}</span>
                        </div>
                        <div style="text-align: center;">
                            <el-image :src="item.thumbUrl"></el-image>
                        </div>
                    </el-card>
                </el-col>
            </div>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
            <el-dialog
                    :title="chosenFont.title"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <el-input
                        type="textarea"
                        autosize
                        placeholder="请输入内容"
                        maxlength="30"
                        show-word-limit
                        v-model="paintingContent">
                </el-input>

                <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false" @click.native="draw()">确 定</el-button>
        </span>
            </el-dialog>
        </el-main>
    </el-container>
</template>
<script>
  import ElHeader from '../../../node_modules/element-ui/packages/header/src/main'
  import ElContainer from '../../../node_modules/element-ui/packages/container/src/main'
  import ElMain from '../../../node_modules/element-ui/packages/main/src/main'
  import { listFont } from '@/api/typeface/font'
  import { paint } from '@/api/typeface/painting'
  export default {
    components: {
      ElMain,
      ElContainer,
      ElHeader
    },
    name: 'Typeface',
    data () {
      return {
        loading: false,
        fontSearchContent: '',
        title: '',
        nextPageIndex: 0,
        totalPages: 0,
        pageSize: 12,
        paintingContent: '',
        fonts: [],
        dialogVisible: false,
        chosenFont: {},
      }
    },
    mounted: function () {
      this.loadMore()
    },
    computed: {
      noMore () {
        return this.nextPageIndex >= this.totalPages - 1;
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      loadMore () {
        this.loading = true;
        setTimeout(() => {
          listFont(this.title, this.nextPageIndex, this.pageSize).then((res) => {
            if (res.meta.code === 200) {
              this.nextPageIndex += 1;
              this.totalPages = res.data.page;
              this.fonts = this.fonts.concat(res.data.data);
              this.loading = false;
            } else {
              this.$message.error('参数错误')
            }
          })
        }, 1000)
      },
      searchFont(title) {
        this.fonts = [];
        this.title = title;
        this.nextPageIndex = 0;
        this.loadMore();
      },
      handleOpen(chosenFont){
        this.dialogVisible = true;
        this.chosenFont = chosenFont;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      draw(){
        paint(this.chosenFont.id, this.paintingContent).then((res) => {
          if (res.meta.code === 200) {
            this.$message({"message": "成功", "type": "success"})
          } else {
            this.$message({"message": "参数错误", "type": "error"})
          }
        })
      }
    }
  }
</script>
<style>
    .el-card__header {
        padding: 1px 2px;
    }
</style>