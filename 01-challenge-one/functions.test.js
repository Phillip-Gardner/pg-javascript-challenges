const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined

test('Should be null', () => {
  expect(functions.isNull()).toBeNull;
});

// toBeTruthy matches anything that an if statement treats as true
// toBeFalsey matches anything that an if statement treats as false

test('Should be falsey', () => {
  expect(functions.checkValue(null)).toBeFalsey;
});

test('Should be truthy', () => {
  expect(functions.checkValue(2)).toBeTruthy;
});

// toEqual for objects and more complex data types

test('User should be phillip gardner obj', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Phil',
    lastName: 'Gardner'
  });
});

// less than and greater than

test('Should be under 2000', () => {
  const load1 = 1000;
  const load2 = 200;
  expect(load1 + load2).toBeLessThanOrEqual(2000);
});

// Regex

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays

test('Admin should be in usernames', () => {
  username = ['john', 'karen', 'chloe', 'admin']
  expect(username).toContain('admin')
})

