class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  
    getSuit() {
      return this.suit;
    }
  
    getRank() {
      return this.rank;
    }
  
    getValue() {
      switch (this.rank) {
        case 'B':
          return 16;
        case 'S':
          return 15;
        case 'A':
          return 14;
        case 'K':
          return 13;
        case 'Q':
          return 12;
        case 'J':
          return 11;
        default:
          return parseInt(this.rank);
      }
    }
  
    toString() {
      return this.rank + this.suit;
    }
    
    isSmaller(other){
        return this.getValue()<other.getValue();
    }
  }

  module.exports = Card