console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [{ name: 'Jumanah', hand: [] },
  { name: 'Jack', hand: [], score: 0 },
  { name: 'Jane', hand: [], score: 0 },
  { name: 'John', hand: [], score: 0 }];
var suit = ['Club', 'Diamond', 'Heart', 'Spade'];
var rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cardsArray = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    cardsArray.push({ suit: suit[i], rank: rank[j] });
  }
}
var shuffledDeck = _.shuffle(cardsArray);
for (var k = 0; k < players.length; k++) {
  players[k].hand = shuffledDeck.splice(0, 2);

  // players[]
}
// console.log(shuffledDeck);
console.log(cardsArray);
console.log(players);

// legened:
// ace = 11
// queen=10
// jack=10
// king
