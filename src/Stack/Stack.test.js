import Card from '../Card/Card';
import Stack from './Stack';

const title = 'Test title';
const description = 'Test description';
const faction = 'Test faction';
const testCards = [
  new Card('one'),
  new Card('two'),
  new Card('three'),
];


/**
 * Add a bunch of test cards to a stack
 * @param {Stack} stack Stack to add into
 * @param {Array[Card]} cards Cards to add
 */
function addCardsToStack(stack, cards = testCards) {
  for (let i = 0; i < cards.length; i += 1) {
    stack.push(testCards[i]);
  }
}


test('Adding a Card returns Stack size.', () => {
  const stack = new Stack();
  const card = new Card(title);
  expect(stack.push(card)).toBe(1);
});


test('Adding a non-Card to the Stack throws a TypeError', () => {
  const stack = new Stack();
  expect(() => stack.push('not a card object'))
    .toThrow(TypeError);
});


test('Stack size is a number', () => {
  const stack = new Stack();
  expect(stack.size).toBe(0);
});


test('Size does not change when shuffling', () => {
  const stack = new Stack();
  addCardsToStack(stack);
  const oldSize = stack.size;
  stack.shuffle();

  expect(stack.size).toBe(oldSize);
});


test('Drawing a single card returns a Card', () => {
  const stack = new Stack();
  const card = new Card(title, description, faction);
  stack.push(card);

  expect(stack.draw()).toBeInstanceOf(Card);
});


test('Drawing multiple cards returns an array', () => {
  const stack = new Stack();
  addCardsToStack(stack);

  expect(stack.draw(testCards.length)).toBeInstanceOf(Array);
});


test('Drawing more Cards than remain returns an array of only the remaining Cards', () => {
  const stack = new Stack();
  addCardsToStack(stack);

  expect(stack.draw(testCards.length + 4)).toEqual(expect.arrayContaining(testCards));
});


test('Drawing from an empty Stack returns an empty array', () => {
  const stack = new Stack();
  const drawnCards = stack.draw();

  expect(drawnCards.length).toBe(0);
});
