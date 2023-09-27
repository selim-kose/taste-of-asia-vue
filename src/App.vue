<script >
import { RouterView } from 'vue-router'
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<template>
  <TheHeader />
  <RouterView class="main" />
  <TheFooter/>
</template>

<style>

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
   
  }



</style>
