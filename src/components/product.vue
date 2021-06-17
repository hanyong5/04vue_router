<template>
  <h2>product</h2>
  <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3" v-for="(item,i) in pdata" :key="i">
            <img :src="pdata[i].image" alt="" class="w-100">
            {{pdata[i].title}}
        </div>
      </div>
  </div>  

</template>

<script>
export default {
    name:'product',
    props:['pdata']
}
</script>

<style>

</style>