<template>
  <h1>MY CYCLE</h1>
  <ul class="nav clearfix">
      <li v-for="(item,i) in menu" :key="i">
          <router-link :to="menu[i].link">{{menu[i].menu}}</router-link>
      </li>
  </ul>
</template>

<script>
export default {
    name:'header',
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