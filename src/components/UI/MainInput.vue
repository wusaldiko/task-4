<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  name: "main-input",
  props: {
    modelValue: [String, Number],
    placeholder: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.input {
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 7px;
  outline: none;
  padding: 10px 15px;
}

.input::placeholder {
  color: #716f6f;
}
</style>
