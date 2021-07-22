console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [{ name: 'Jumanah', hand: [] },
  { name: 'Jack', hand: [] },
  { name: 'Jane', hand: [] },
  { name: 'John', hand: [] }];
// var playerOne = {name:"Jumanah",hand:[]};
// var playerTwo = {name:"Jack",hand:[]};
// var playerThree = {name:"Jane",hand:[]};
// var playerFour = {name:"John", hand:[]};
var suit = ['Club', 'Diamond', 'Heart', 'Spade'];
var value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cardsArray = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < value.length; j++) {
    cardsArray.push({ suit: suit[i], value: value[j] });
  }
}
var shuffledDeck = _.shuffle(cardsArray);
for (var k = 0; k < players.length; k++) {
  // var x = shuffledDeck.splice(0, 2)
  players[k].hand = shuffledDeck.splice(0, 2);
}
// console.log(shuffledDeck);
// console.log(cardsArray);
// console.log(players);
