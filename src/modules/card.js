/*
This is card class for the game. A card has two attributes.
Suite: ['S', 'H', 'C', 'D', 'N']. They correspond to spade, heart, club, diamond, neutral respectively. Neurtral is only applicable to Jokers.
Rank: ['2','3','4','5','6','7','8','9','10','J','Q','K','A','S','B']. 'S' and 'B' are small/big Jokers.
*/
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

  getRankValue() {
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

  getSuiteValue(){
    switch(this.suit){
      case 'D':
        return 0;
      case 'C':
        return 1;
      case 'H':
        return 2;
      case 'S':
        return 3;
      case 'N':
        return 10;
      default:
        return -1;
    }
  }

  getSortValue(){
    return this.getSuiteValue()*20 + this.getRankValue()
  }

  toString() {
    return this.rank + this.suit;
  }

}

module.exports = Card