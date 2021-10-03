<template>
  <div class="l-card" :style="width?{width:width+'px'}:{}">
    <div class="l-card-img" :style="imgHeight?{height:imgHeight+'px'}:{}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="l-card-summary">
      {{summary}}
    </div>
    <div v-else class="l-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name:'Card',
    props:{
      //卡片宽度
      width:{
        type:Number,
        default:0
      },
      //卡片图片资源
      imgSrc:{
        type:String,
        default:''
      },
      //卡片图片高度
      imgHeight:{
        type:Number,
        default:0
      },
      //卡片概要
      summary:{
        type:String,
        default:''
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>