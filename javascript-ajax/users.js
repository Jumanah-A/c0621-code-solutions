var $ul = document.querySelector('#user-list');
console.log($ul);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var child = document.createElement('li');
    child.textContent = xhr.response[i].name;
    $ul.appendChild(child);
  }
});
xhr.send();
