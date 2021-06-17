<template>
  

  <transition name="view">
  <ppop :pView="pView" :pNum="pNum" :pdata="pdata" @pClose="pView=false"/>
  </transition>

  <top-header  :tshow="tshow" />
  <router-view 
    :pdata="pdata" 
    :pView="pView"
    @pOpen="pView=true;pNum=$event"

  >
  </router-view>
</template>

<script>
import header from './components/header.vue'
import pdata from './pdata.js'
import ppop from './components/ppop.vue'

export default {
  name:'app',
  components:{
    'top-header':header,
    ppop:ppop,
  },
  data(){
    return{
      pdata:pdata,
      pNum:0,
      pView:false,
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
  .pView{background:#fff;width:70%;position: fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:10;box-shadow:0 0 10px rgba(0,0,0,0.5);padding:20px;border-radius:10px
  }
  .view-enter-from{opacity:0}
  .view-enter-active{transition:0.3s}
  .view-enter-to{opacity:1}
  @media screen and (min-width:1000px){
    .pView{width: 500px;}
  }
</style>