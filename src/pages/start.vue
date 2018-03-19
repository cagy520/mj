<template>
  <div class="start">
    <!-- <img src="https://placehold.it/150x150" alt="" class="logo">       -->
    <img src="../assets/icon.jpeg" alt="" class="logo">      
    <h3 class="title">你还没有钱包</h3>
    <p class="desc">新建一个钱包或者将你之前的钱包导入吧</p>
    <button class="button first" @click="createWallet">新建钱包</button>
    <button class="button">导入钱包</button>
    <x-dialog v-model="showNew">
      <x-input placeholder="请输入密码" :type="passwordInputType" v-model="password" class="input">
        <span slot=right @click="switchPwd">
          <i class="iconfont icon-yanjing" v-if="passwordInputType == 'password'"></i>
          <i class="iconfont icon-yanjing-tianchong" v-if="passwordInputType != 'password'"></i>
        </span>
      </x-input>
      <button class="dialog_button" @click="comfirmCreate">确认</button>        
    </x-dialog>
  </div>
</template>

<script>
  import { XDialog, Group, XInput } from 'vux'
  export default {
    name: 'Start',
    components: {
      XDialog,
      Group,
      XInput
    },
    data(){
      return{
        showNew: false,
        password: '',
        passwordInputType: 'password'
      }
    },
    methods: {
      switchPwd(){
        this.passwordInputType == 'password' ? this.passwordInputType = 'text' : this.passwordInputType = 'password'
      },
      createWallet(){
        this.showNew = true
        // this.$router.push({
        //   path: '/create_wallet',
        // })
      },
      comfirmCreate(){
        if(this.password != ''){
          this.$http.get('api/DemoService/createwallet/' + this.password).then(data => {
            console.log(data)
            if(data.body){
              // JSON.parse(data.body)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .start{
    height: 100vh;
    background: -webkit-linear-gradient(top, #3933b1, #9ed3ecc7);
    font-size: 12px;
    color: #fff;
    padding-top: 60px;
    text-align: center;    
  }
  .logo{
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }
  .title{
    margin-top: 30px;
  }
  .desc{
    margin-top: 20px;
  }
  .button{
    width: 220px;
    height: 50px;
    border: 1px solid rgba(200, 200, 200, 0.7);
    margin-top: 20px;
    border-radius: 6px;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.4)
  }
  .dialog_button{
    width: 120px;
    height: 30px;
    border: 1px solid rgba(200, 200, 200, 0.7);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
    font-size: 16px;
    color: #9ed3ec;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.4)
  }
  .first{
    margin-top: 120px;
  }
  .input{
    color: black;
    border: 1px solid #eee;
  }
</style>


