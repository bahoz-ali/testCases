const length = require('../scripts/stringLength');

describe('string length', () => {
  it('should return number of chars', () => {
    const result = length('bahoz');

    expect(result).toBe(5);
  });

  it('string should be at least one char', () => {
    expect(() => length('')).toThrow();

    expect(() => length()).toThrow();
  });

  it('string length should be less than 10', () => {
    expect(() => length('bahoz ali hassan')).toThrow();
  });
});
