import Card from '../Card/Card';

class Stack {
  /**
   * Creates a stack of cards.
   */
  constructor() {
    this.stack = [];
  }

  /**
   * Add a Card to the stack.
   * @param {Card} card Card to add
   */
  addCard(card) {
    if (card instanceof Card) {
      this.stack.push(card);
      return this.stack.length;
    }
    throw new TypeError('Tried to add non-card object into card stack.');
  }


  /**
   * Get number remaining cards in the array.
   * @returns {number} Number of cards left.
   */
  size() {
    return this.stack.length;
  }


  /**
   * Draw a specific number of cards.
   * @param {number} amount Number of cards to draw. Defaults to 1.
   * @returns {Card|array[Card]} Single card or array of cards.
   */
  draw(amount = 1) {
    // If only one card is being drawn, return a Card object
    if (amount === 1 && this.stack.length > 0) {
      return this.stack.pop();
    }

    // Multiple drawn cards are returned in an array.
    const drawnCards = [];

    // Draw the amount of cards we wanted.
    for (let i = 0; i < amount; i += 1) {
      // Stop drawing if the stack is empty.
      if (this.stack.length < 1) {
        break;
      }
      const card = this.stack.pop();
      drawnCards.push(card);
    }

    return drawnCards;
  }

  /**
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   */
  shuffle() {
    const { stack } = this;
    for (let i = this.stack.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [stack[i], stack[j]] = [stack[j], stack[i]];
    }
    return stack;
  }


  [Symbol.iterator]() {
    return {
      next: () => ({
        value: this.draw(1),
        done: this.stack.length > 0,
      }),
    };
  }
}

export default Stack;
