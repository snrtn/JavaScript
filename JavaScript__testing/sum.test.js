const sum = require('./sum');

describe('example tests', () => {
  it('', () => {
    const result = sum(2, 4);
    expect(result).toBe(6);
  });

  it('', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe('true ou false', () => {
  it('null', () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    // expect(n).toBeNull();
    // expect(n).not.toBeUndefined();
  });
});
