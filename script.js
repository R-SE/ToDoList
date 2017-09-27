// v7 improves user experience, adding buttons to the app instead of relying on user input into console, but outputs still to console

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
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i=0, l=totalTodos; i<l; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (totalTodos === completedTodos) {
      for (var i=0, l=totalTodos; i<l; i++) {
        this.todos[i].completed = false;
      }
    } else {
        for (var i=0, l=totalTodos; i<l; i++) {
          this.todos[i].completed = true;
        }
      }
    this.displayTodos();
  }
    //add new functions here
}

var displayTodosButton = document.getElementById('displayTodos');
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAll');
toggleAll.addEventListener('click', function() {
  todoList.toggleAll();
});
