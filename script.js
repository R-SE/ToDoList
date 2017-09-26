// v4: var todoList now stores objects, not simple text items; updated methods accordingly; added toggleCompleted

var todoList = {
  todos: [
      {todoText: "take out the trash", completed: false},
      {todoText: "wash the dishes", completed: false},
      {todoText: "make a list", completed: true}
    ],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todoTextValue) {
    this.todos.push({
      todoText: todoTextValue,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(index, newTodoText) {
    this.todos[index-1].todoText = newTodoText;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index-1, 1);
    this.displayTodos();
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index-1];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
}
