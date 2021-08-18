const takeAChance = require('./take-a-chance');
const promiseObject = takeAChance('Jumanah');

promiseObject.then(value => {
  console.log("Hooray! You're so lucky!");
}, reason => {
  var e = new Error("It's just bad luck!");
  console.log(e.message);
});
