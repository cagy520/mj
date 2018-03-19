<template>
  <div class="back">
    <div class="content">
      <div class="back_box" @click="goBack">
        <i class="iconfont icon-fanhui"></i>
        <span>返回</span>
      </div>
      <span v-text="title"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Back',
    props: ['title'],
    methods: {
      goBack(){
        this.$router.back(-1)
      }
    }
  }
</script>

<style scoped>
  .content{
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#3e3ac0), to(#3c78c5));
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    position: relative;
  }
  .back_box{
    position: absolute;
    left: 10px;
  }
</style>


