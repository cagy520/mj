<template>
  <div class="manage_addresses">
    <back title="地址管理"></back>
    <group title="我的钱包">
      <cell v-for="i in 10" :key="i">
        <div class="scale6" slot="title">0x二条幺鸡三条七条二条五条八万六条九条八条幺万五筒三万七筒</div>
        <div class="scale6"><span>0</span>麻将币</div>
      </cell>
    </group>
    <div class="button_box"><button class="button first" @click="createWallet">新建钱包</button></div>
  </div>
</template>

<script>
  import {Group, Cell} from 'vux';
  import Back from '../components/back.vue';
  export default {
    name: 'ManageAddresses',
    components: {
      Cell,
      Group,
      Back
    },
    data(){
      return {

      }
    },
    methods: {
      createWallet(){
        this.$router.push({
          path: '/create_wallet',
        })
      }
    }
  }
</script>

<style scoped>
  .scale6{
    width: 125%;
    transform: scale(0.8);
    margin-left: -12%;
    font-size: 12px;
  }
  .button_box{
    text-align: center;
  }
  .button{
    width: 220px;
    height: 50px;
    border: 1px solid rgba(200, 200, 200, 0.7);
    margin-top: 20px;
    border-radius: 6px;
    font-size: 16px;
    /* color: #fff; */
    font-weight: 500;
    background: rgba(255, 255, 255, 0.4)
  }
  .first{
    margin-top: 120px;
  }
</style>

