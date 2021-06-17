<template>
  <div class="pView" v-if="pView==true">
    <div class="text-center">
      <div><img :src="pdata[pNum].image" alt="" class="w-100"></div>
      <p>{{pdata[pNum].title}}</p>
      <button class="btn btn-primary" @click="$emit('pClose')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['pView','pNum','pdata']

}
</script>

<style>

</style>