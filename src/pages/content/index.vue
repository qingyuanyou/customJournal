<template>
    <div class="total-height" >
        <el-tabs v-model="activeName" type="border-card" class="total-height" closable @edit="tabChangeHandle">
            <el-tab-pane label="主页" name="initPage">
            <!-- 新增 -->
                <div class='init-panel panel-box pd-2'>
                    <el-row :gutter='20'>
                        <el-col :span="6" ><span class="mr-1 text-center text-medium">新增模板</span></el-col>
                        <el-col :span="18">
                            <el-button type="primary" @click="showInitDialog">新增</el-button>
                        </el-col>
                    </el-row>
                    <el-row :gutter='20'>
                        <el-col :span="6"><span class="mr-1 text-center text-medium">历史文件</span></el-col>
                        <el-col :span="18"> content </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
             <!-- page -->
            <el-tab-pane
                v-for="(item, index) in pageInfo"
                :key="item.pageId"
                :label="item.pageName"
                :name="item.pageId"
            >
                <div class='init-page page-box' :id="item.pageId">
                    <div :class='{"page": true,"a4-horizontal": !item.isVertical,"a4-vertical": item.isVertical }'>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog title="新建模板" :visible.sync="isShowInitDialog" width='600px'>
            <div class="pr-2">
                <el-form ref="initForm" :model="initInfo" label-width="120px">
                 <el-form-item label="模板方向：">
                    <el-radio-group v-model="initInfo.pageDirection" class="page-radio-group mr-1" >
                        <el-radio label="vertical">横向</el-radio>
                        <el-radio label="horizontal">纵向</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="模板名称：">
                    <el-input v-model="initInfo.pageName"></el-input>
                </el-form-item>
                <el-form-item label="背景颜色：">
                    <el-color-picker v-model="initInfo.color"></el-color-picker>
                </el-form-item>
            </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShowInitDialog=false">取 消</el-button>
                <el-button type="primary" @click="newPageAdd">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'initPage',
      initInfo: {
        pageDirection: 'vertical',
        isVertical: true,
        pageName: '',
        color: '#fff'
      },
      pageInfo: [
        {
          pageId: 'testPage',
          pageName: 'testPage',
          pageDirection: 'vertical',
          isVertical: true,
          color: '#fff'
        }
      ],
      isShowInitDialog: false
    }
  },
  methods: {
    showInitDialog () {
      this.isShowInitDialog = true
    },
    newPageAdd () {

    },
    tabChangeHandle () {

    }
  }
}
</script>
<style lang="scss" scoped>
.main-content{
    .el-tabs__content{
        @include grid-center
    }
}
.init-panel{
    width: 400px;
    .page-radio-group{
       .el-radio{
           //display: inline-flex;
       }
    }
}
 .init-page{
        .page{
            background-color: #fff;
            @include box-common-style;
        }
    }
    .total-height{
        height:100%
    }
</style>
