const capitalize = require('../scripts/capitalize');

it('should make the string capitalize.', () => {
  const result = capitalize('foo');

  expect(result).toBe('Foo');
  expect(capitalize()).toBe('');
});


it('should make the first char capitalize and others should in lowercase', () => {
  const result = capitalize('aBCD');

  expect(result).toBe('Abcd');
});


it('should remove all the special chars from the string then capitalize it', () =>{
  expect(capitalize("b**aHo))z----")).toBe('Bahoz')
  expect(capitalize("+++=k&&uRdi*^ST&#@an")).toBe('Kurdistan')
})