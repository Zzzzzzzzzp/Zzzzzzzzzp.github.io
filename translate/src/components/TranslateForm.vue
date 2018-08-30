<template>
  <div class="row" id="translateForm">
    <div class="col-md-6 col-md-offset-3">
        <form  class="well form-inline" v-on:submit="formSubmit" id="transForm">
            <input class="form-control" type="text" placeholder="输入要翻译的内容" v-model="textToTranslate">
            <select class="form-control" v-model="language"> 
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
                <option value="ja">Janpenese</option>
            </select>
            <input class="btn btn-primary" type="submit" value="翻译">
        </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'translateForm',
  data (){
      return {
          textToTranslate:"",
          language:""
      }
  },
  methods:{
      formSubmit:function(e){
          this.$emit("formSubmit",this.textToTranslate,this.language);
          e.preventDefault();
      }
  },
  created (){
      this.language = "en";
  }
}
</script>

<style>
   #transForm{
       border: 1px solid #ccc;
       border-radius: 10px;
   }
</style>
