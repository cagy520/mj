<template>
  <div class="repeate_passphrase">
    <back></back>
    <h2>请将下列单词按照你的密钥的顺序排列</h2>
    <div class="passphrase_box" :class="{warn_border: !isRight}">
      <span class="passphrase" v-for="(item, key) in clickData" :key="key + 'passphrase'">
        <em v-text="item"></em>        
      </span>
      <div class="reset_all" @click="resetArr">重置</div>
    </div>
    <div class="disorder">
      <span v-for="(item, key) in disOrder" :key="key + 'disorder'" class="disorder_word" @click="selectItem(item)" :class="{none: clickData.indexOf(item) > -1}">
        <em v-text="item"></em>
      </span>
    </div>
    <div class="note">
      <p>
        请注意，密钥是确认你身份的唯一依据，如果你忘记，你将不能导入你的账户，并且你的资产也将全部丢失!
      </p>
    </div>
  </div>
</template>

<script>
  import Back from '../components/back.vue';
  export default {
    name: 'RepeatePassphrase',
    components: {
      Back
    },
    data(){
      return {
        words: ['cliff', 'coffee', 'beginning', 'attendance', 'expert', 'indicate', 'prevent', 'invention', 'suite', 'expect', 'rod', 'crystal'],
        clickData: [],
        isRight: true
      }
    },
    methods: {
      upsetArr(arr){
        arr.sort(() => {
          return 0.5 - Math.random()
        })
      },
      selectItem(item){
        this.clickData.push(item)
        if(this.clickData.length == this.words.length){
          if(JSON.stringify(this.clickData) != JSON.stringify(this.words)){
            this.isRight = false
            this.$vux.toast.show({
              type: 'warn',
              text: '排序有误，请重置后重试',
              width: '200px'
            })
          }else{
            this.$router.push({
              'path': '/'
            })
          }
        }
      },
      resetArr(){
        this.clickData = [],
        this.isRight = true
      }
    },
    computed: {
      disOrder(){
        let wordStr = JSON.stringify(this.words)
        let tempArr = JSON.parse(wordStr)
        return tempArr.sort(() => {
          return 0.5 - Math.random()
        })
      }
    }
  }
</script>

<style scoped>
  h2{
    margin: 20px;
    font-size: 16px;
    text-align: center; 
  }
  .passphrase_box{
    margin: 10px;
    height: 160px;
    border: 1px solid #eaeaea;
    padding: 5px;
    border-radius: 4px;
    position: relative;
    background: #f7f7f7;
  }
  .reset_all{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 40px;
    border: 1px solid #eaeaea;
    text-align: center;
    line-height: 40px;
    color: #333;
  }
  .passphrase{
    display: inline-block;
    border: 1px solid #36b9c8;
    padding: 4px;
    border-radius: 3px;
    color: #36b9c8;
    background: #fff;
    margin: 4px;
  }
  .disorder_word{
    display: inline-block;
    border: 1px solid #36b9c8;
    padding: 4px;
    border-radius: 3px;
    color: #ffffff;
    background: #36b9c8;
    margin: 4px;
  }
  .disorder{
    margin: 10px;
  }
  .note{
    margin: 40px 10px;
    color: #999;
  }
  .none{
    display: none;
  }
  .warn_border{
    border: 2px solid #f00;
  }
</style>