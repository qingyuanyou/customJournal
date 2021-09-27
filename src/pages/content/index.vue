<template>
    <div class="total-height" >
        <el-tabs v-model="activeName" type="border-card" class="total-height" closable @tab-remove="tabRemoveHandle">
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
                    <div :class='{"page": true,"a4-horizontal": !item.isVertical,"a4-vertical": item.isVertical }'
                         :style='{"background-color": item.color}'
                         @ondragover="ondragoverHandle"
                         @ondrop="ondropHandle"
                         @ondragenter="ondragenterHandle"
                    >
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog title="新建模板" :visible.sync="isShowInitDialog" width='600px'>
            <div class="pr-2">
                <el-form ref="initForm" :model="initInfo" :rules="pageRules" label-width="120px">
                 <el-form-item label="模板方向：" required>
                    <el-radio-group v-model="initInfo.pageDirection" class="page-radio-group mr-1" >
                        <el-radio label="vertical">横向</el-radio>
                        <el-radio label="horizontal">纵向</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="模板名称：" required>
                    <el-input v-model="initInfo.pageName" type="text"></el-input>
                </el-form-item>
                <el-form-item label="背景颜色：">
                    <color-panel :colorList="colorList" v-model="initInfo.color" :defaultColor="initInfo.color" @getColorBack="getColorBackHandle"></color-panel>
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
import colorPanel from '@/components/colorPanel.vue'
export default {
  name: '',
  components: {
    colorPanel
  },
  data () {
    return {
      activeName: 'initPage',
      pageRules: {
        pageDirection: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        pageName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      },
      initInfo: {
        pageDirection: 'vertical',
        pageName: '',
        color: '#fff'
      },
      pageInfo: [],
      isShowInitDialog: false,
      colorList: ['#ddd', '#e2c0b2', '#aaa']
    }
  },
  methods: {
    showInitDialog () {
      this.isShowInitDialog = true
    },
    newPageAdd () {
      this.$refs['initForm'].validate((valid) => {
        if (!valid) {
          return false
        }
        let myDate = new Date().getTime()
        let pageId = myDate.toString()
        this.pageInfo.push({
          pageId: pageId,
          pageName: this.initInfo.pageName,
          pageDirection: this.initInfo.pageDirection,
          isVertical: !!(this.initInfo.pageDirection == 'vertical'),
          color: this.initInfo.color
        })
        this.initInfo = {
          pageDirection: 'vertical',
          pageName: '',
          color: '#fff'
        }
        this.isShowInitDialog = false
        this.activeName = pageId
      })
    },
    tabChangeHandle (value) {

    },
    tabRemoveHandle (value) {
      if (value == 'initPage') return
      let deletedPage = value
      let oldPageInfo = this.pageInfo
      if (this.activeName == deletedPage) {
        oldPageInfo.forEach((item, index) => {
          if (deletedPage == item.pageId) {
            let newActiveItem = oldPageInfo[index + 1] || oldPageInfo[index - 1]
            if (newActiveItem) {
              this.activeName = newActiveItem.pageId
            } else {
              this.activeName = 'initPage'
            }
          }
        })
      }
      this.pageInfo = oldPageInfo.filter(item => item.pageId !== deletedPage)
    },
    getColorBackHandle (color) {
      this.initInfo.color = color
    },
    ondragoverHandle(event){
        event.preventDefault()
        cosnole.log("over")
    },
    ondropHandle(){
        cosnole.log("dropdown")
    },
    ondragenterHandle(){
        cosnole.log("enter")
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
