<template>
  <div class="todo">
    <h3>Todo List</h3>
    <div class="todo__form">
      <main-input
        placeholder="New Task"
        class="todo__form-input"
        v-model="newTaskText"
        maxlength="25"
      />
      <button
        class="todo__form-btn"
        @click="addTodo()"
        :disabled="!this.newTaskText.trim().length"
      >
        &#x2b;
      </button>
    </div>
    <todo-list :todos="TODOS" />
    <div class="todo__btns">
      <main-button @click="clearCompleted()">Clear Completed</main-button>
      <main-button @click="clearTodos()">Clear All</main-button>
    </div>
    <p class="todo__count">
      Pending Tasks:
      {{
        TODOS.reduce((acc, curr) => {
          if (curr.isDone) {
            return acc;
          }
          return ++acc;
        }, 0)
      }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { TodoList } from "@/components/index.js";
export default {
  components: { TodoList },
  data() {
    return {
      newTaskText: "",
    };
  },
  methods: {
    addTodo() {
      let todo = { id: Math.random(), text: this.newTaskText, isDone: false };
      this.$store.dispatch("SAVE_TODO", todo);
      this.newTaskText = "";
    },
    clearTodos() {
      this.$store.dispatch("CLEAR_TODOS");
    },
    clearCompleted() {
      this.$store.dispatch("CLEAR_COMPLETED");
    },
  },
  mounted() {
    this.$store.dispatch("GET_TODO");
  },
  computed: {
    ...mapGetters(["TODOS"]),
  },
};
</script>
<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  background-color: aliceblue;
  border-radius: 12px;
  padding: 20px;
  gap: 15px;

  &__form {
    width: 100%;
    position: relative;

    &-btn {
      position: absolute;
      top: auto;
      right: 0px;
      width: 40px;
      font-size: 30px;
      background: none;
      border: none;
      color: teal;
      cursor: pointer;

      &:disabled {
        cursor: default;
        opacity: 0.5;
      }
    }
  }

  &__btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__count {
    align-self: start;
  }
}
</style>
