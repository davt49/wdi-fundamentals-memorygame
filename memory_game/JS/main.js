cards = ["queen","queen","king","king"]

cardsInPlay = []

var cardOne = cards[0]
var cardTwo = cards[2]

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

console.log("User flipped "+ cardOne);
console.log("User flipped "+ cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[2]){
	alert("You found a match!");
	
} else alert("Sorry, try again.")


// if (cardsInPlay[0]===cardsInPlay[2]){
// 	alert("You found a match!");
// } else alert("Sorry, try again.")

// console.log("Two cards")
// console.log("not enough cards in play")