const Calculator = require('../scripts/calculator');

const cal = new Calculator();

describe('calculator add', () => {
  it('should return 4', () => {
    expect(cal.add(2, 2)).toBe(4);
  });

  it('should return 100', () => {
    expect(cal.add(50, 50)).toBe(100);
  });

  it('should return 0', () => {
    expect(cal.add(1, -1)).toBe(0);
  });
});

describe('calculator subtract', () => {
  it('should return 0', () => {
    expect(cal.subtract(2, 2)).toBe(0);
  });

  it('should return -5', () => {
    expect(cal.subtract(-10, -5)).toBe(-5);
  });

  it('should return 0', () => {
    expect(cal.subtract(1, -1)).toBe(2);
  });
});
