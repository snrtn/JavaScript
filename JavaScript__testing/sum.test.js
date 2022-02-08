const sum = require('./sum');

let arr = [130, 135, 148, 140, 145, 150, 150, 153];

describe('example tests', () => {
  it('', () => {
    const result = sum(arr);
    expect(result).toBe(5);
  });
});
