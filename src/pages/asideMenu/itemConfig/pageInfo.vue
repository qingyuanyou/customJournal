<template>
    <div>
        <div draggable="true" id="drag-box" class='drag-box' @dragstart="dragstartHandle" @drag="dragHandle" @dragend="dragendHandle">this is test drag components</div>
        <div class='drop-box'
            @dragenter="dragenterHandle"
            @dragover="drageoverHandle"
            @drop="dropHandle"
            @drag="dragleaveHandle"
        >
        </div>
    </div>
</template>
<script>
export default {
  name: 'noteConfig',
  data () {
    return {

    }
  },
  methods: {
    allowDrop (e) {
      e.preventDefault()
    },
    // 需要放置的盒子，鼠标开始拿起执行一次
    dragstartHandle (event) {
      event.dataTransfer.setData('Text', event.target.id)
      console.log('start')
    },
    // 需要放置的盒子，鼠标开始拿起拖动一直执行
    dragHandle () {
    },
    // 需要放置的盒子，鼠标放下结束执行一次
    dragendHandle () {
      console.log('end')
    },
    // 当被放置盒子移动到目标地段，触发一次
    dragenterHandle () {
      console.log('enter')
    },
    // 当被放置盒子移动到目标地段，一直执行
    drageoverHandle (e) {
        this.allowDrop(e)
    },
    // 放置
    dropHandle (e) {
      this.allowDrop(e)
      console.log('drop')
      let data = e.dataTransfer.getData('Text')
      console.log(data)
      e.target.appendChild(document.getElementById(data))
    },
    dragleaveHandle () {
      console.log('leave')
    }
  }
}
</script>
<style lang="scss" scoped>
.drag-box{
    width: 200px;
    height: 40px;
    background-color: #ee3;
}
.drop-box{
    margin: 10px;
    width: 300px;
    height: 600px;
    background-color: #eee;
}
</style>
