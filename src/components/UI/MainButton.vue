<template>
  <button class="main-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "main-button",
};
</script>
<style lang="scss">
.main-button {
  background-color: teal;
  font-weight: 500;
  line-height: 16px;
  font-size: 13px;
  padding: 10px 15px;
  color: #fff;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
