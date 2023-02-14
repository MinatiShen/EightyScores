const Card = require('./card');

describe('Card', () => {
  test('returns correct value for ace of spades', () => {
    let card = new Card('S', 'A');
    expect(card.getValue()).toBe(14);
  });

  test('returns correct value for queen of hearts', () => {
    let card = new Card('H', 'Q');
    expect(card.getValue()).toBe(12);
  });

  test('returns correct string representation', () => {
    let card = new Card('D', '9');
    expect(card.toString()).toBe('9D');
  });
});
