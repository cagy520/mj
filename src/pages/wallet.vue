<template>
  <div class="wallet">
    <div class="header" v-if="accout && accout._address">
      <h2>我的钱包</h2>
      <div class="available_balance">
        <card :header="{title: '可用余额'}">
          <div class="card_flex card_content" slot="content">
            <div class="vux-1px-r">
              <span class="red">{{accout._balance}}</span>
              <br/>
              <span class="gray">mjc</span>
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
          console.log(this.accout)
          this.getTransactionData()
        })
      },
      getTransactionData(){
        this.$http.get('http://47.94.133.76:3000/DemoService/gettrans/' + this.address).then(data => {
          console.log(data)
          this.transactionData = data.body
        })
      }
    },
    computed: {
    },
    filters: {
      ftm(v){
      console.log(v)
        
        return moment(v).format('YYYY.MM.DD HH:mm:ss')
      }
    },
    mounted(){
      this.address = localStorage.getItem('address')
      this.password = localStorage.getItem('password')
      if(!this.address || !this.password){
        this.$router.push({
          path: '/start'
        })
      }
      this.getAccount()
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';
  .iconfont {
    font-size: 20px;
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
    font-size: 16px;
    line-height: 30px;
  }
  .available_balance{
    width: 90%;
    margin: 0px auto;
  }
  .gray{
    color: #333;
  }
  .red{
    color: #f74c31;
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
  .address_manage{
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
    height: 260px;
    overflow: scroll;
  }
  .nodata{
    text-align: center;
    margin-top: 40px;
    color: #777;
  }
</style>