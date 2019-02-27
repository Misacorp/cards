class Card {
  /**
   * Creates a new Card.
   *
   * @param {string} title        Card title
   * @param {string} description  Card description
   * @param {string} faction      Faction the card belongs to
   */
  constructor(title, description = null, faction = null) {
    // Using setters like this INSIDE THE CONSTRUCTOR doesn't actually call the setter.
    // Try to spot the difference when calling a setter externally.
    this.title = title;
    this.description = description;
    this.faction = faction;
  }


  static set title(newTitle) {
    if (typeof newTitle !== 'string' && newTitle.length < 1) {
      throw new TypeError('No title given to Card constructor.');
    }
    this.title = newTitle;
  }


  static set description(newDescription) {
    if (Card.isValid(newDescription)) {
      this.description = newDescription;
    }
  }


  static set faction(newFaction) {
    if (Card.isValid(newFaction)) {
      this.faction = newFaction;
    }
  }


  /**
   * Tests if an item is a valid parameter for the constructor.
   * @param {string} name Name of the item.
   * @param {object} item Item to test the validity of.
   */
  static isValid(item) {
    if (typeof item === 'string' || item === null) {
      return true;
    }
    console.log(`${{ item }} is not a string or null.`);
    throw new TypeError(`${{ item }} is not a string or null.`);
  }
}

export default Card;
