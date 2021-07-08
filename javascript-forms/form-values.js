var $elements = document.getElementById('contact-form').elements;
var userName = $elements.name;
var userEmail = $elements.email;
var userMessage = $elements.message;

function handleInput(event) {
  var newObject = {};
  newObject[userName.name] = userName.value;
  newObject[userEmail.name] = userEmail.value;
  newObject[userMessage.name] = userMessage.value;
  console.log(newObject);
  event.preventDefault();
  resetForm(event);
}
document.getElementById('contact-form').addEventListener('submit', handleInput);
function resetForm(event) { document.getElementById('contact-form').reset(); }
