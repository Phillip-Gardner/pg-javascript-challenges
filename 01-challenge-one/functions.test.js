const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
})

test('Should be null', () => {
  expect(functions.isNull()).toBeNull;
})

test('Should be falsey', () => {
  expect(functions.checkValue(null)).toBeFalsey;
})

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsey matches anything that an if statement treats as false
