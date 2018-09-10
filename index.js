const app = new Vue({
  el: '#app',
  data: {
    headerTitle: 'Todo App with Vue',
    inputPlaceholder: 'Write your todos',
    inputValue: '',
    todos: []
  },
  methods: {
    createTodo: function () {
      this.todos.push({ text: this.inputValue, done: false });
      this.inputValue = '';
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
    },
    toggleDone: function (index) {
      this.todos[index].done = !this.todos[index].done;
    }
  }
});
