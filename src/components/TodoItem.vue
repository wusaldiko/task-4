<template>
  <div class="todo__item">
    <div class="item__content">
      <input
        type="checkbox"
        name="done"
        :checked="todo.isDone"
        @click="this.$store.dispatch('SET_TODO_DONE', todo.id)"
      />
      <p
        :class="{
          'text-line-through': todo.isDone,
        }"
      >
        {{ todo.text }}
      </p>
    </div>
    <button
      class="item__btn"
      @click="this.$store.dispatch('REMOVE_TODO', todo.id)"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARdJREFUSEvtln0NwkAMxX9zgAOQAAoABYACcAY4AAWAApAADpBAHlnINm7XXrZkkKz/LOm1ff14611GR5J1hIsXeAAsgJGR6BPYA/pGxQt8B4ZWsPz8BkwsWw/wGLhagSrnAlYCteIBngGnPMIcONdE89q93X8GWORZVyqSbpPrdoDmHRLLTqT7+FYrLrYrcaymeWlMPwNcTFskmgIXQJ1IEdM3Ri7TOZKJ6ZsKLJJpkTwAEU0S0rUOHAro1ZUalFqxF6Sv+IuHfautBdKTSx3ydqHRf6wtpetP11txc1V1rf/H3oviv4G9VYbsjsAydBBbIJrntgkqsAIOqcCy19M2mLEjIc257kXqemU6MNJNPM/b9KgOjxfTSocfMilmtwAAAABJRU5ErkJggg=="
      />
    </button>
  </div>
</template>
<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.todo__item {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .item__content {
    display: flex;
    align-items: center;

    input {
      cursor: pointer;
      margin-right: 10px;
      margin-top: 2px;
    }

    p.text-line-through {
      text-decoration: line-through;
    }
  }

  .item__btn {
    cursor: pointer;
    img {
      width: 15px;
    }
  }
}

</style>
