<template>
  <div class="word">
    <p class="word_box">
      <span v-for="(item,key) in words" :key="'words' + key"><em>{{item}}</em>&nbsp;&nbsp;</span>
    </p>
    <div class="button_box">
      <div><button class="continue" @click="next">继续</button></div>
      <div><button class="copy" @click="copy">复制</button></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      words: ['cliff', 'coffee', 'beginning', 'attendance', 'expert', 'indicate', 'prevent', 'invention', 'suite', 'expect', 'rod', 'crystal']
    }
  },
  methods: {
    copy(){
      this.$vux.toast.show({
       text: '复制成功'
      })
    },
    next(){
      this.$router.push({
        path: '/repeate_passphrase',
      })
    }
  }
}
</script>

<style scoped>
  .word_box{
    margin: 60px 20px;
    padding: 10px;
    border: 2px solid #999;
    border-radius: 4px;
    background: #fafafa;
  }
  .word_box span {
    display: inline-block;
  }
  .button_box{
    display: flex;
    padding: 10px;
    margin-top: 300px;
  }
  .button_box div{
    flex: 1;
    text-align: center;
  }
  button{
    width: 90%;
    height: 40px;
    border-radius: 6px;
    border: none;
    font-size: 14px;
  }
  .continue{
    background: #eff2f3;
  }
  .copy{
    background: #36b9c8;
    color: #fff;
  }
</style>