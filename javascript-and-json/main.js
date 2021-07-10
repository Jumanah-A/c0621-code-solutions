var booksArray = [
  {
    isbn: '978-1-60309-025-4',
    title: 'Alec: The Years Have Pants',
    author: 'Eddie Campbell'
  },
  {
    isbn: '978-1-60309-478-8',
    title: 'Bionic',
    author: 'Koren Shadmi'
  },
  {
    isbn: '978-1-60309-038-4',
    title: 'Essex County',
    author: 'Jeff Lemire'
  }];

console.log('BooksArray is:', booksArray);
console.log('typeof BooksArray is:', typeof booksArray);

console.log('result of JSON stringify:', JSON.stringify(booksArray));
console.log('value of typeof JSON stringify:', typeof JSON.stringify(booksArray));
var jsonString = '{"id":12345678, "name":"Jumanah"}';
console.log('JSON Sting is ' + jsonString, 'typeof JSONstring ' + typeof jsonString);
var jsonObj = JSON.parse(jsonString);
console.log('JSONObj is ' + jsonObj, 'typeof JSONObj ' + typeof jsonObj);
