// import { test, expect } from 'jest';

import Card from './Card';

const title = 'Test title';
const description = 'Test description';
const faction = 'Test faction';

test('Happy path', () => {
  expect(new Card(title, description, faction))
    .toBeInstanceOf(Card);
});


/**
 * Cards can be created with only a title.
 */
test('Can be created with only a title.', () => {
  expect(new Card(title))
    .toBeInstanceOf(Card);
});


/**
 * Cards need a title.
 */
test('Throw a TypeError when a Card is created without a title.', () => {
  expect(() => new Card(null, description, faction))
    .toThrow(TypeError);
});


/**
 * Card parameters must be strings.
 */
test('Cannot be created with non-string or non-null parameters', () => {
  expect(() => new Card(123, {}, true))
    .toThrow(TypeError);
});
