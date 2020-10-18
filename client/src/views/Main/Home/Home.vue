<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png" />
    <HelloWorld msg="Welcome to Quiz App" />
    <HomeButton class="homeButton" link="/create-game">
      {{ $t('main.home.startGame') }}
    </HomeButton>
    <HomeButton link="/join-room"> {{ $t('main.home.joinGame') }} </HomeButton>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HomeButton from '@/views/Main/components/HomeButton.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeButton,
  },
};
</script>

<style scoped lang="scss">
.home {
  text-align: center;
}
.homeButton {
  margin-bottom: 10px;
}
</style>
