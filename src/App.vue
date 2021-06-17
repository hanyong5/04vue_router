<template>
  <top-header  :tshow="tshow" @tView="tshow=false"/>
  <router-view 
    :pdata="pdata" 

  >
  </router-view>
</template>

<script>
import header from './components/header.vue'
import pdata from './pdata.js'

export default {
  name:'app',
  components:{
    'top-header':header,
  },
  data(){
    return{
      pdata:pdata,
      tshow:false,
    }
  }

}
</script>

<style>
  *{margin: 0;padding:0;}
  a:link,a:visited{
    text-decoration: none;color:#333;
  }
  li{list-style: none;}
  .clearfix:after{content:"";display: block;clear:both}


  h1{text-align: center;margin-bottom:10px;}
  .nav{
    border-top:1px solid #ddd;border-bottom:1px solid #ddd
    }
  .nav li{float:left;width:calc(100% / 3);text-align:center;line-height:40px;}
</style>