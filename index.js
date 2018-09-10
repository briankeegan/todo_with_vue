const app = new Vue({
  el: '#app',
  data: {
    headerTitle: 'Todo App with Vue',
    inputPlaceholder: 'Write your todos',
    inputValue: '',
    todos: ['asdf']
  },
  methods: {
    createTodo: function () {
      this.todos.push(this.inputValue);
      this.inputValue = '';
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
});
