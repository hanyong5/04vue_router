<template>
<router-link to="/" class="navbar-brand d-none d-md-block text-center">GOGO</router-link>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand d-block d-md-none">GOGO</router-link>
      
  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="$emit('tView',)">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav justify-content-md-between w-100"  >
      <li class="nav-item text-center" v-for="(item,i) in menu" :key="i" style="flex:1;">
        <router-link :to="menu[i].link" class="nav-link">{{menu[i].menu}}</router-link>
      </li>
     
    </ul>
  </div>
</nav>


</template>

<script>
export default {
    name:'header',
    props:['tshow'],
    data(){
        return{
            menu:[
                {menu:'HOME',link:'/'},
                {menu:'PRODUCT',link:'/product'},
                {menu:'BOARD',link:'/board'},
            ]
        }
    }

}
</script>

<style>

</style>