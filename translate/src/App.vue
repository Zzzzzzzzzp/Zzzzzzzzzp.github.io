<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">在线 / 易用 / 便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateoutput v-text="translatedText"></translateoutput>
  </div>
</template>

<script>
import translateForm from './components/TranslateForm'
import translateoutput from './components/TranslateOutput'
export default {
  name: 'App',
  data (){
    return {
      translatedText:""
    }
  },
  components: {
    translateForm,
    translateoutput
  },
  methods:{
    translateText:function(text,language){
      this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180830T065252Z.892fe95022bff461.177152064d8a8eba68b32ac5b429eecffe32e60c&lang="+language+"&text="+text)
      .then((res)=>{
        this.translatedText = res.body.text[0];
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
