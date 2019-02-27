import Card from './Card';
import CardStack from './CardStack';

// Create a card stack
const stack = new CardStack();

// Add some cards to it
const maxCards = 10;
for (let i = 0; i < maxCards; i += 1) {
  const newCard = new Card(`Number ${i + 1}`, `This is the number ${i + 1} card`, 'First card gang');
  stack.addCard(newCard);
}

// Do something with the stack
stack.shuffle();

for (card of stack) {
  console.log('Iterating through the stack');
  console.log(card);
  // console.log(card.getTitle());
}

// for (let i = 0; i < stack.size(); i += 1) {
//   const card = stack.draw();
//   console.log(card.getTitle());
// }
