<template>
  <div class="scan">
    <back title="付款页面"></back>
    <group>
      <x-input title="收款地址" v-model="receiveAddress" placeholder="请填写地址"></x-input>
      <x-input title="数量" v-model="amount" placeholder="请填写数量"></x-input>
    </group>
    <div class="button_box">
      <button class="button">发送</button>
    </div>
  </div>
</template>

<script>
  import { XInput, Group } from 'vux'
  import Back from "../components/back";
  export default {
    name: 'Scan',
    components: {
      XInput,
      Group,
      Back
    },
    data(){
      return {
        receiveAddress: '',
        amount: '',
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
  .button_box{
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 20px;
  }
  .button{
    width: 220px;
    height: 50px;
    border: 1px solid rgba(200, 200, 200, 0.7);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 120px;
    background: #36b9c8;
    color: #fff;
  }
</style>


