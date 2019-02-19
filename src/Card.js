class Card {
  /**
   * Creates a new Card.
   *
   * @param {string} title        Card title
   * @param {string} description  Card description
   * @param {string} faction      Faction the card belongs to
   */
  constructor(title, description, faction) {
    this.title = title;
    this.description = description;
    this.faction = faction;
  }

  getTitle() {
    return this.title;
  }
}

export default Card;
