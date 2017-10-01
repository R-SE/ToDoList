// v12

// MAIN TODO OBJECT
var todoList = {
  todos: [
      {todoText: "take out the trash", completed: false},
      {todoText: "wash the dishes", completed: false},
      {todoText: "make a list", completed: true}
    ],
  addTodo: function(todoTextValue) {
    this.todos.push({
      todoText: todoTextValue,
      completed: false,
    });
  },
  changeTodo: function(index, newTodoText) {
    this.todos[index].todoText = newTodoText;
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      todo.completed = completedTodos === totalTodos ? false : true
    })

  }
}

// uses getElementById and addEventListener calls; longer but may be more flexible in some cases
// var displayTodosButton = document.getElementById('displayTodos');
// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();
// });
// var toggleAllButton = document.getElementById('toggleAll');
// toggleAll.addEventListener('click',function() {
//   todoList.toggleAll();
// });

// HANDLER FUNCTIONS
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoIndexInput = document.getElementById('changeTodoIndexInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoIndexInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
  //add new functions here
}

// VIEWPORT FOR APP
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      todoLi.id = position;
      todoLi.textContent = todo.completed === true ? '✔️ ' + todo.todoText : '☐ ' + todo.todoText;
      todoLi.appendChild(this.createDeleteButton());
      todoLi.appendChild(this.createToggleButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  createToggleButton: function() {
      var toggleButton = document.createElement('button');
      toggleButton.textContent = 'Mark';
      toggleButton.className = 'toggleButton'
      return toggleButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      } else if (elementClicked.className === 'toggleButton') {
        handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
      }
    });
  },
  // enterToSubmit: function() {
  //   var inputSubmit = document.getElementById(addTodoTextInput);
  //   inputSubmit.addEventListener("keyup", function(event) {
  //     event.preventDefault();
  //     if (event.keyCode == 13) {
  //       document.getElementById(addTodoButton).click();
  //     }
  //   })
  // }
}

view.setUpEventListeners();
view.displayTodos();
// view.enterToSubmit(); TRYING TO WRITE A FUNCTION TO EXECUTE addTodo(); upon hitting enter
