const timesTwo = require('./times-two');

test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});
