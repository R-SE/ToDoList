var todoList = {
  todos: [
      {todoText: "take out the trash", completed: false},
      {todoText: "wash the dishes", completed: false},
      {todoText: "make a list", completed: true}
    ],
  displayTodos: function() {
    // console.table(this.todos);
    this.todos.length === 0 ? console.log("Your todo list is empty!") :
      console.log("My Todos: ");
      for (var i=0; i < this.todos.length; i++) {
        // console.log(this.todos[i].todoText);
        this.todos[i].completed === true ? console.log('(x) ' + this.todos[i].todoText) :
        console.log('( ) ' + this.todos[i].todoText);
      }
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
