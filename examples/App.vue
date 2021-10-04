<template>
  <div id="app">
    <!-- <Card imgSrc="./img/card.png" summary="Vue.js 源码全方位深入解析 全面深入理解Vue实现原理，掌握源码分析技巧"></Card>
    <br />
    <Card imgSrc="./img/card.png" summary="Vue.js 源码全方位深入解析 全面深入理解Vue实现原理，掌握源码分析技巧">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">高级 · 4256人报名 </div>
          <div class="price">￥488.00</div>
        </div>
      </template>
    </Card> -->
    <Demo></Demo>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  margin: 0 auto;
  width: 270px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
</style>
