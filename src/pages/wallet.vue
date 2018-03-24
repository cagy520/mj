<template>
  <div class="wallet">
    <div class="header" v-if="accout && accout._address">
      <h2>我的钱包</h2>
      <div class="available_balance">
        <card :header="{title: '可用余额'}">
          <div class="card_flex card_content" slot="content">
            <div class="vux-1px-r">
              <span class="red">{{accout._balance | twofixed}}</span>
              <!-- <br/> -->
              <span class="gray">麻将币</span>
            </div>
          </div>
        </card>
      </div>
      <div class="address">
        <div><span>当前麻将币地址:</span></div>
        <div class="scale6"><span v-text="address"></span></div>
      </div>
      <div class="scan absolute" @click="scan">
        <i class="iconfont icon-saoma"></i>
      </div>
      <div class="qr_code absolute" @click="receive">
        <i class="iconfont icon-msnui-qr-code"></i>
      </div>
      <div class="icon-tuichu-copy absolute" @click="logoOut">
        <i class="iconfont icon-tuichu"></i>
      </div>
    </div>
    <div class="content">
      <group title="交易记录">
        <div class="group">
          <div v-if="transactionData.length == 0" class="nodata">
            <span>暂无交易数据</span>
          </div>
          <cell v-for="(item, key) in transactionData" :key="key + 'transactiondata'">
            <div slot="title" class="cell_title">
              <div><span class="cell_title_left">时间:</span><span class="cell_title_right">{{item.Time|ftm}}</span></div>
              <div class="scale6"><span class="cell_title_left">HASH:</span><span class="cell_title_right" v-text="item.Hash">CACF50CAC8BA89337DE1F5A0CE0F8718F0153761</span></div>
              <div class="scale6"><span class="cell_title_left">from:</span><span class="cell_title_right" v-text="item.Tx"></span></div>
              <div class="scale6"><span class="cell_title_left">to:</span><span class="cell_title_right" v-text="item.Rx"></span></div>
              <div><span class="cell_title_left">金额:</span><span class="cell_title_right"><em v-text="item.Sum"></em> mjc</span></div>
            </div>
          </cell>
        </div>
      </group>
    </div>
    <!-- <div class="logout">
      <button class="button" @click="logoOut">退出账户</button>
    </div> -->
  </div>
</template>

<script>
  import {Card, Cell, Group} from 'vux'
  import moment from 'moment'
  export default {
    name: '',
    data(){
      return {
        transactionData: [],
        address: '',
        password: '',
        accout: null
      }
    },
    components: {
      Card,
      Cell,
      Group
    },
    methods: {
      addressesManage(){
        this.$router.push({
          path: '/manage_addresses'
        })
      },
      receive(){
        this.$router.push({
          path: '/receive'
        })
      },
      scan(){
        this.$router.push({
          path: '/scan'
        })
      },
      getAccount(){
        this.$http.get('http://47.94.133.76:3000/DemoService/GetWallet/' + this.address + '/' + this.password).then(data => {
          this.accout = data.body
          this.getTransactionData()
        })
      },
      getTransactionData(){
        this.$http.get('http://47.94.133.76:3000/DemoService/gettrans/' + this.address).then(data => {
          this.transactionData = data.body
        })
      },
      logoOut(){
        localStorage.removeItem('address');
        localStorage.removeItem('password');
        this.$router.push({
          path: '/start'
        })
      }
    },
    computed: {
    },
    filters: {
      ftm(v){        
        return moment(v).format('YYYY.MM.DD HH:mm:ss')
      },
      twofixed(v){
        return v.toFixed(2)
      }
    },
    mounted(){
      this.address = localStorage.getItem('address')
      this.password = localStorage.getItem('password')
      // if(!this.address || !this.password){
      //   this.$router.push({
      //     path: '/start'
      //   })
      // }
      // this.getAccount()
      this.accout = {"_address":"0x九万九筒幺筒二筒八万幺筒六万八万九条五万二万四万幺万二万","_allowMining":0,"_balance":0,"_block":"0","_password":"111"}
      this.address = '0x九万九筒幺筒二筒八万幺筒六万八万九条五万二万四万幺万二万'
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';
  .iconfont {
    font-size: 28px;
  }
  .header{
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#3e3ac0), to(#3c78c5));
    color: #fff;
    font-size: 12px;
    position: relative;
  }
  h2{
    text-align: center;
    padding: 10px;
    font-size: 20px;
    line-height: 40px;
  }
  .available_balance{
    width: 90%;
    margin: 0px auto;
  }
  .gray{
    color: #333;
    font-size: 16px;
  }
  .red{
    color: #f74c31;
    font-size: 16px;
  }
  .card_flex{
    display: flex;
  }
  .card_content {
    padding: 10px 0;
  }
  .card_flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .address{
    width: 90%;
    margin: 10px auto;
  }
  .absolute{
    position: absolute;
    top: 10px;
  }
  .scan{
    left: 30px;
  }
  .qr_code{
    left: 80px;
  }
  .icon-tuichu-copy{
    right: 30px;
  }
  .cell_title{
    font-size: 12px;
  }
  .scale6{
    width: 125%;
    transform: scale(0.8);
    margin-left: -12%;
  }
  .cell_title_left{
    width: 40px;
    display: inline-block;
  }
  .cell_title_right{
    color: #376ad3;
  }
  .group{
    height: 360px;
    overflow: scroll;
  }
  @media screen and (max-width: 321px){
    .group{
      height: 350px;
      overflow: scroll;
    }
  }
  @media screen and (max-width: 376px)and(min-width: 321px){
    .group{
      height: 450px;
      overflow: scroll;
    }
  }
  @media screen and (max-width: 415px)and(min-width: 376px){
    .group{
      height: 520px;
      overflow: scroll;
    }
  }

  .nodata{
    text-align: center;
    margin-top: 40px;
    color: #777;
  }
  .logout{
    text-align: center;
  }
  .button{
    width: 220px;
    height: 50px;
    border: 1px solid rgba(200, 200, 200, 0.7);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    background: #36b9c8;
    color: #fff;
  }
</style>