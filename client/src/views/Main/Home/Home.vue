<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="/about">To about page</router-link>
    <p>{{ $t('message') }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
