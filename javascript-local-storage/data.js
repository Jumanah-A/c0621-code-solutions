/* exported todos */

var todos = [];
var previousTodoJSON = localStorage.getItem('javascript-local-storage');

if (previousTodoJSON !== null) {
  todos = JSON.parse(previousTodoJSON);
}
