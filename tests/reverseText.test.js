const reverseText = require("../scripts/reverseText");

it('should reverse the text', () =>{

  const result = reverseText("Hello")

  expect(result).toBe('olleH')
})