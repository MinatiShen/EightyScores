/*
This is the player class.
*/
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  getName() {
    return this.name;
  }

  getHand() {
    return this.hand;
  }

  addCard(card) {
    this.hand.push(card);
  }

  removeCard(index) {
    return this.hand.splice(index, 1)[0];
  }

  sortHand() {
    this.hand.sort((a, b) => a.getSortValue() - b.getSortValue());
  }

  toString() {
    return this.name;
  }
}
