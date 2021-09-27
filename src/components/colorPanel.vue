<template>
    <div>
        <el-color-picker v-model="colorPick" @change="getColorHandle()" :disabled="disabled"></el-color-picker>
        <div class="color-list" v-if='colorList.length'>
            <ul>
                <li v-for="item in colorList" :key="item" style="float:left"><div class="color-list-box mr-1" :style='{"background-color": item}' @click="getColorHandle(item)"></div></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'noteConfig',
  props: {
    colorList: {
      type: Array,
      default: () => []
    },
    defaultColor: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
        colorPick: null
    }
  },
  mounted(){
      this.colorPick = this.defaultColor
  },
  methods: {
    getColorHandle (color) {
      if (color) {
        this.colorPick = color
      }
      this.$emit('getColorBack', this.colorPick)
    }
  }
}
</script>
<style lang="scss" scoped>
.color-list-box{
    width: 30px;
    height: 30px;
    &:hover{
        border: 1px solid red;
    }
}
</style>
