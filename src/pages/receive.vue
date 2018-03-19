<template>
  <div class="receive">
    <back title="收款页面"></back>
    <div class="qr_code_box">
      <vue-qrcode :value="encodeAddress" :options="options"></vue-qrcode>
      <p><span v-text="address"></span></p>
    </div>
    <div class="button_box">
      <button class="button first" @click="copyAddress">复制地址</button>
      <button class="button" @click="changeWallet">切换地址</button>
    </div>
    <x-dialog :show = "show">
      <div class="address_list">
        <checklist :options="addressList" label-position="left" :max="1" @on-change="addressChange" :value="selectAddress"></checklist>
      </div>
    </x-dialog>
  </div>
</template>

<script>
  import Back from "../components/back";
  import VueQrcode from '@xkeshi/vue-qrcode'
  import { XDialog, Checklist} from "vux";
  export default {
    name: 'Receive',
    components: {
      Back,
      VueQrcode,
      XDialog,
      Checklist
    },
    data(){
      return {
        address: '0x一条幺鸡三条七条二条五条八万六条九条八条幺万五筒三万七筒',
        options: {
          size: 300,
          background: '#edf6f8',
          foreground: '#3c87b9'
        },
        show: false,
        addressList: [
          '0x二条幺鸡三条七条二条五条八万六条九条八条幺万五筒三万七筒',
          '0x二条幺鸡三条七条二条五条八万六条九条八条幺万五筒四万七筒',
          '0x二条幺鸡三条七条二条五条八万六条九条八条幺万五筒五万七筒'
        ]
      }
    },
    computed: {
      encodeAddress(){
        return encodeURIComponent(this.address)
      },
      selectAddress(){
        let tempArr = []
        tempArr.push(this.address)
        return tempArr
      }
    },
    methods: {
      copyAddress(){
        this.$vux.toast.show({
          text: '复制成功'
        })
      },
      changeWallet(){
        this.show = true
      },
      addressChange(v, l){
        this.address = v[0];
        this.show = false
      }
    }
  }
</script>

<style scoped>
  .qr_code_box{
    margin: 0 auto;
    margin-top: 10px;
    width: 300px;
    background: #edf6f8;
    padding: 10px;
    font-size: 10px;  
  }
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
    margin-top: 20px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    background: #eff2f3;
  }
  .first{
    margin-top: 120px;
    background: #36b9c8;
    color: #fff;
  }
  .address_list{
    width: 320px;
    overflow: scroll;
    max-height: 400px;
  }
</style>
<style>
  .receive .weui-cell__bd p{
    font-size: 8px!important;
  }
</style>


