const takeAChance = require('./take-a-chance');
const promiseObject = takeAChance('Jumanah');

promiseObject.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
