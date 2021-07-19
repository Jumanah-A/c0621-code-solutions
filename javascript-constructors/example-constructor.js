function ExampleConstructor() {}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var exampleInstance = new ExampleConstructor();
console.log('value of ExampleConstructor instance:', ExampleConstructor);
var ifInstance = exampleInstance instanceof ExampleConstructor;
console.log('value of ifInstance:', ifInstance);
