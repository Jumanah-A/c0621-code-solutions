console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{ name: 'Jumanah', hand: [], score: 0 },
  { name: 'Jack', hand: [], score: 0 },
  { name: 'Jane', hand: [], score: 0 },
  { name: 'John', hand: [], score: 0 }];

// creating initial card deck
var suit = ['Club', 'Diamond', 'Heart', 'Spade'];
var rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cardsArray = [];
console.log('hi!');
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    cardsArray.push({ suit: suit[i], rank: rank[j] });
  }
}
console.log('hi!');

// shuffling cards and distributing cards
var shuffledDeck = _.shuffle(cardsArray);

function distributeCard() {
  // debugger;
  console.log('hi!');
  for (var k = 0; k < players.length; k++) {
    players[k].hand = shuffledDeck.splice(0, 2);
    var playerScore = 0;
    for (var l = 0; l < 2; l++) {
      if (players[k].hand[l].rank === 'A') {
        playerScore += 11;
      } else if (['J', 'Q', 'K'].includes(players[k].hand[l].rank)) {
        playerScore += 10;
      } else {
        playerScore += parseInt(players[k].hand[l].rank);
      }
    }
    players[k].score = playerScore;
  }
}

var max = { name: '', score: 0 };
function determineWinner() {
  for (var key in players) {
    if (players[key].score > max.score) {
      max.name = players[key].name;
      max.score = players[key].score;
    }
  }
}
function runningGame() {
  console.log('hi!');
  distributeCard();
  console.log(shuffledDeck);
  console.log(players);
  determineWinner();

}
runningGame();

console.log('Winner is ' + max.name + ' with a score of ' + max.score + '!');
