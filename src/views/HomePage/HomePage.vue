<template>
  <div class="home container">
    <main-layer>
      <todo />
    </main-layer>
  </div>
</template>

<script>
import MainLayer from "@/components/Layers/MainLayer.vue";
import Todo from "@/components/Todo.vue";
// import { Todo } from "@/components/index.js";

export default {
  components: {
    MainLayer,
    Todo,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
