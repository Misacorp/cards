/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

class Card {
  /**
   * Creates a new Card.
   *
   * @param {string} title        Card title
   * @param {string} description  Card description
   * @param {string} faction      Faction the card belongs to
   */
  constructor(title, description = null, faction = null) {
    this.title = title;
    this.description = description;
    this.faction = faction;
  }


  /* Getters */

  get title() {
    return this._title;
  }


  get description() {
    return this._description;
  }


  get faction() {
    return this._faction;
  }


  /* Setters */

  set title(title) {
    if (Card.isValidTitle(title)) {
      this._title = title;
    }
  }


  set description(description) {
    if (Card.isValid(description)) {
      this._description = description;
    }
  }


  set faction(faction) {
    if (Card.isValid(faction)) {
      this._faction = faction;
    }
  }


  toString() {
    return {
      title: this._title,
      description: this._description,
      faction: this._faction,
    };
  }


  /**
   * Tests if a title is valid ie. a non-empty string.
   * @param {string} title Title to test.
   * @returns {boolean} Is the title valid
   */
  static isValidTitle(title) {
    if (typeof title === 'string' && title.length > 0) {
      return true;
    }
    throw new TypeError('No title given to Card constructor.');
  }


  /**
   * Tests if a description or faction is valid ie. a string or null.
   * @param {string} name Name of the item.
   * @returns {boolean} Is the item valid.
   */
  static isValid(item) {
    if (typeof item === 'string' || item === null) {
      return true;
    }
    throw new TypeError(`${{ item }} is not a string or null.`);
  }
}

export default Card;
