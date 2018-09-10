const storeTodos = {
  key: 'Todo with Vue',
  get: () => {
    return JSON.parse(localStorage.getItem(storeTodos.key)) || [];
  },
  save: (todos) => {
    localStorage.setItem(storeTodos.key, JSON.stringify(todos));
  }
};

new Vue({
  el: '#app',
  data: {
    headerTitle: 'Todo App with Vue',
    inputPlaceholder: 'Write your todos',
    inputValue: '',
    todos: storeTodos.get(),
    curretFilter: 'ALL',
    filterTypes: ['ALL', 'ACTIVE', 'COMPLETED']
  },
  methods: {
    createTodo: function () {
      const text = this.inputValue.trim();
      if (text.length) {
        this.todos.push({ text, done: false });
        this.inputValue = '';
      }
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
    },
    toggleDone: function (index) {
      this.todos[index].done = !this.todos[index].done;
    },
    filter: function (type) {
      if (this.filterTypes.includes(type)) {
        this.curretFilter = type;
      } else {
        throw new Error(`Unknown type: ${type}`);
      }
    },
    isFilterType: function (type) {
      return this.curretFilter === type;
    },
    showItem: function (done) {
      if (this.curretFilter === 'ACTIVE') {
        return !done;
      } else if (this.curretFilter === 'COMPLETED') {
        return done;
      } else {
        return true;
      }
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        storeTodos.save(todos)
      },
      deep: true
    }
  },
});
