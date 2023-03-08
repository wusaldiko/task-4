<template>
  <todo-item v-if="todos.length" v-for="todo of todos" :todo="todo" />
  <h4 v-else style="color: red">You don't have task</h4>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "todo-list",
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
};
</script>
<style lang="scss"></style>
