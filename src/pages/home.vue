<template>
    <el-container class='background-main'>
        <el-header>
            this is header
        </el-header>
        <el-container>
            <el-aside width="460px">
                <aside-menu></aside-menu>
            </el-aside>
            <el-main>
               <page-content></page-content>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import asideMenu from '@/pages/asideMenu/index.vue'
import pageContent from '@/pages/content/index.vue'
export default {
  name: 'home',
  components: {
    asideMenu,
    pageContent
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
   .background-main{
       .el-main{
            background-color: #eee;
            height: $total-value;
       }
       height: $total-value;
       background-color: #eee;
       .el-header{
           height: 80px;
           background: $main-color;
       }
       .el-aside{
           height: $total-value;
       }
   }
</style>
