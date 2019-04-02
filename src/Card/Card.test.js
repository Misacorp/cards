import Card from './Card';

const title = 'Test title';
const description = 'Test description';
const faction = 'Test faction';

test('Happy path', () => {
  expect(new Card(title, description, faction))
    .toBeInstanceOf(Card);
});


test('Can be created with only a title.', () => {
  expect(new Card(title))
    .toBeInstanceOf(Card);
});


test('Throw a TypeError when created without a title.', () => {
  expect(() => new Card(undefined, description, faction))
    .toThrow(TypeError);
});


test('Throw a TypeError when created with non-string or non-null parameters', () => {
  expect(() => new Card(123, {}, true))
    .toThrow(TypeError);
});


test('Can set title', () => {
  const card = new Card('old title');
  card.title = 'new title';
  expect(card.title)
    .toBe('new title');
});


test('Can get title', () => {
  const card = new Card('my title');
  expect(card.title)
    .toBe('my title');
});


test('Can set description', () => {
  const card = new Card(title, 'old description');
  card.description = 'new description';
  expect(card.description)
    .toBe('new description');
});


test('Can get description', () => {
  const card = new Card(title, 'my description');
  expect(card.description)
    .toBe('my description');
});


test('Can set faction', () => {
  const card = new Card(title, description, 'old faction');
  card.faction = 'new faction';
  expect(card.faction)
    .toBe('new faction');
});


test('Can get faction', () => {
  const card = new Card(title, description, 'my faction');
  expect(card.faction)
    .toBe('my faction');
});


test('Getting undefined property returns null', () => {
  const card = new Card(title);
  expect(card.description === null && card.faction === null)
    .toBeTruthy();
});
