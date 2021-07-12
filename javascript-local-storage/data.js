/* exported todos */

var todos = [];
var previousTodoJSON = localStorage.getItem('javascript-local-storage');

if (previousTodoJSON !== null) {
  todos = JSON.parse(previousTodoJSON);
}

window.addEventListener('beforeunload', beforeUnload);

function beforeUnload(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
