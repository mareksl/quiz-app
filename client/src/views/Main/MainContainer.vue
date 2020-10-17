<template>
  <MainLayout>
    <template v-slot:header>
      HEADER CONTENT
    </template>

    <router-view></router-view>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout';

export default {
  name: 'MainContainer',
  components: { MainLayout },
};
</script>

<style scoped></style>
