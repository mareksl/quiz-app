<template>
  <div class="content">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style scoped lang="scss">
.content {
  max-width: 500px;
  margin: auto;
}
</style>
