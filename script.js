var todoList = {
  todos: ['task1', 'task2', 'task3', 'task4'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(index, newValue) {
    this.todos[index-1] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index-1, 1);
    this.displayTodos();
  }
}
