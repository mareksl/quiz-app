<template>
  <button class="button" @click="$router.push(link)">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  height: 60px;
  width: 300px;
  border-radius: 8px;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  font-size: 16px;
  &:hover {
    background-color: #6ec071;
  }
  &:focus {
    outline: none;
    background-color: #6ec071;
  }
}
</style>
