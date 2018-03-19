<template>
  <div class="create_wallet">
    <h3>创建  P I N</h3>

    <div class="password" @click="inputPassword(password)" v-if="password.length < 6">
      <div class="password_child">
        <div class="password_circular" :class="{opcity: password.length >= 1}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: password.length >= 2}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: password.length >= 3}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: password.length >= 4}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: password.length >= 5}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: password.length >= 6}"></div>
        <div class="password_line"></div>
      </div>
    </div>

    <div class="password" @click="inputPassword(repassword)" v-if="password.length >= 6">
      <div class="password_child">
        <div class="password_circular" :class="{opcity: repassword.length >= 1}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: repassword.length >= 2}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: repassword.length >= 3}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: repassword.length >= 4}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: repassword.length >= 5}"></div>
        <div class="password_line"></div>
      </div>
      <div class="password_child">
        <div class="password_circular" :class="{opcity: repassword.length >= 6}"></div>
        <div class="password_line"></div>
      </div>
    </div>
    
    <div class="enter_pin">
      <button class="enter_pin_btn" @click="inputPassword">输入PIN</button>
    </div>
    <button class="cancel" @click="back">返回首页</button>
    <input type="tel" ref="password" class="password_input" @input="passwordChange(password)" v-model="password">
    <input type="tel" ref="repassword" class="password_input" @input="passwordChange(repassword)" v-model="repassword">
  </div>
</template>

<script>
  export default {
    name: 'createWallet',
    data(){
      return {
        passwordArr: [],
        password: '',
        repassword: '',
      }
    },
    methods: {
      back(){
        this.$router.push({
          path: '/start'
        })
      },
      inputPassword(){
        this.$refs.password.focus()
      },
      passwordChange(password){
        if(this.password.length > 5 && this.repassword.length == 0){
          this.$refs.repassword.focus();
        }else{
          if(password.length >= 6){
            if(this.password != this.repassword){
              this.password = '';
              this.repassword = '';
              this.$refs.password.focus();
            }else{
              this.$router.push('/words')
            }
          }
        }
      }
    },
    mounted(){
      console.log(this.passwordArr.length)
    }
  }
</script>

<style scoped>
  .create_wallet{
    height: 100vh;
    background: -webkit-linear-gradient(top, #3933b1, #9ed3ecc7);
    font-size: 12px;
    color: #fff;
    padding-top: 20px;
    text-align: center;  
  }
  h3{
    font-size: 18px;
    font-weight: 300;
  }
  .password{
    display: flex;
    margin-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .password_child{
    flex: 1;
  }
  .password_circular{
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #fff;
    margin: 15px auto;  
    opacity: 0;    
  }
  .password_line{
    width: 42px;
    height: 4px;
    background: #fff;
    margin: 15px auto;
  }
  .enter_pin_btn{
    width: 140px;
    height: 30px;
    background: rgba(200, 200, 200, 0.4);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    border: none;
    color: #fff;
  }
  .cancel{
    position: fixed;
    bottom: 30px;
    background: rgba(255, 255, 255, 0.5);
    left: 50%;
    margin-left: -80px;
    width: 180px;
    height: 46px;
    border: none;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
  }
  .opcity{
    opacity: 1;
  }
  .password_input{
    width: 1px;
    border: none;
    height: 1px;
    opacity: 0;
  }
</style>



