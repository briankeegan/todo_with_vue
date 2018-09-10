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
      this.todos.push(this.inputValue);
      this.inputValue = '';
    }
  }
});
