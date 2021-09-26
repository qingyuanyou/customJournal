<template>
    <div class='panel-box aside-menu'>
        <div class='aside-bar'>
            <el-menu default-active="pageInfo" @select="handleSelect" :collapse="true">
                <el-menu-item v-for="menu in menuList" :key="menu.type" :index="menu.type">
                    <i :class="menu.icon"></i>
                    <span slot="title">{{menu.menuName}}</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class='menu-content'>
            {{currentMenu}}
            <page-info-config v-if='currentMenu == "pageInfo" '></page-info-config>
            <form-config v-if='currentMenu == "form" '></form-config>
            <note-config v-if='currentMenu == "note" '></note-config>
            <table-config v-if='currentMenu == "table" '></table-config>
        </div>
    </div>
</template>
<script>
import formConfig from './itemConfig/form.vue'
import noteConfig from './itemConfig/note.vue'
import tableConfig from './itemConfig/table.vue'
import pageInfoConfig from './itemConfig/pageInfo.vue'
export default {
  name: 'asideMenu',
  components: {
    formConfig,
    noteConfig,
    tableConfig,
    pageInfoConfig
  },
  data () {
    return {
      menuList: [
        {
          type: 'pageInfo',
          icon: 'el-icon-tickets',
          menuName: 'pageInfoConfig'
        },
        {
          type: 'table',
          icon: 'el-icon-location',
          menuName: 'tableConfig'
        },
        {
          type: 'note',
          icon: 'el-icon-location',
          menuName: 'noteConfig'
        },
        {
          type: 'form',
          icon: 'el-icon-location',
          menuName: 'formConfig'
        }
      ],
      currentMenu: 'pageInfo'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.currentMenu = key
      console.log(keyPath)
    },
    handleClose (key, keyPath) {

    }
  }
}
</script>
<style lang="scss" scoped>
.aside-menu{
    position: relative;
    height: 100%;
    .menu-content{
        margin-left: 63px;
        height: 100%;
        padding: 10px;
        background: #fafafa;
    }
    .aside-bar{
        position: absolute;
        top: 0;
    }
}
</style>
