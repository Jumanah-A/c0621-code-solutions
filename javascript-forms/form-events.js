
var $form = document.querySelector('form');
var $elements = $form.elements;
var userName = $elements.name;
var userEmail = $elements.email;
var userMessage = $elements.message;
function handleFocus(event) {
  console.log("'Focus' event was just fired");
  console.log('event.target.name', event.target.name);
}
userName.addEventListener('focus', handleFocus);
userEmail.addEventListener('focus', handleFocus);
userMessage.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log("'Blur' event was just fired");
  console.log('event.target.name', event.target.name);
}
userName.addEventListener('blur', handleBlur);
userEmail.addEventListener('blur', handleBlur);
userMessage.addEventListener('blur', handleBlur);

function handleInput(event) {
  //  event.target.name = event.target.value;
  console.log('value of', event.target.name, event.target.value);
}
userName.addEventListener('input', handleInput);
userEmail.addEventListener('input', handleInput);
userMessage.addEventListener('input', handleInput);
