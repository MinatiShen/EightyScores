const Card = require('./card');

describe('Card', () => {
  test('returns correct value for ace of spades', () => {
    let card = new Card('S', 'A');
    expect(card.getRankValue()).toBe(14);
  });

  test('returns correct value for queen of hearts', () => {
    let card = new Card('H', 'Q');
    expect(card.getRankValue()).toBe(12);
  });

  test('returns correct string representation', () => {
    let card = new Card('D', '9');
    expect(card.toString()).toBe('9D');
  });

  test('returns correct sort value',()=>{
    let club9 = new Card('C', 9);
    let spade3 = new Card('S',3);
    expect(club9.getSortValue()).toBe(29);
    expect(spade3.getSortValue()).toBe(63);
  })
});
