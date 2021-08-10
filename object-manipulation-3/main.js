console.log('Lodash is loaded:', typeof _ !== 'undefined');

var suit = ['Club', 'Diamond', 'Heart', 'Spade'];
var rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cardsArray = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    cardsArray.push({ suit: suit[i], rank: rank[j] });
  }
}
var shuffledDeck = _.shuffle(cardsArray);

function createHand(players) {
  var playersHand = [];
  for (var i = 0; i < players.length; i++) {
    playersHand.push({ name: players[i], hand: [], score: 0 });
  }
  return playersHand;
}

function distributeCards(playersHand, noOfCards, shuffledDeck) {
  for (var k = 0; k < playersHand.length; k++) {
    playersHand[k].hand = shuffledDeck.splice(0, noOfCards);
    var playerScore = 0;
    for (var l = 0; l < noOfCards; l++) {
      if (playersHand[k].hand[l].rank === 'A') {
        playerScore += 11;
      } else if (['J', 'Q', 'K'].includes(playersHand[k].hand[l].rank)) {
        playerScore += 10;
      } else {
        playerScore += parseInt(playersHand[k].hand[l].rank);
      }
    }
    playersHand[k].score = playerScore;
  }
  return playersHand;
}

function determineWinner(max, players, noOfCards) {
  var winnersArray = [];
  for (var key in players) {
    if (players[key].score > max.score) {
      max.name = players[key].name;
      max.score = players[key].score;
      winnersArray = [];
      winnersArray.push(max.name);
    } else if (players[key].score === max.score) {
      winnersArray.push(max.name);
      winnersArray.push(players[key].name);
      max.name = players[key].name;
      max.score = players[key].score;
    }
  }
  var winnerSet = new Set(winnersArray);
  if (winnerSet.size > 1) {
    winnersArray = Array.from(winnerSet);
    console.log('There is a tie between ' + winnersArray[0] + ' and ' + winnersArray[1] + ' with a value of ' + max.score);
    console.log(players);
    console.log('Running the game again!!');
    runGame(winnersArray, noOfCards, shuffledDeck);
  } else {
    console.log('Winner is ' + max.name + ' with a score of ' + max.score + '!');
    return max;
  }
}
function runGame(players, noOfCards, shuffledDeck) {
  var playersHand = createHand(players);
  playersHand = distributeCards(playersHand, noOfCards, shuffledDeck);
  var max = { name: '', score: 0 };
  determineWinner(max, playersHand, noOfCards, shuffledDeck);
}
var players = ['Jumanah', 'Jack', 'Jane', 'John', 'Jill', 'Patrick', 'Bob'];
var noOfCards = 4;
runGame(players, noOfCards, shuffledDeck);
