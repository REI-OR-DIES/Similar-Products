var testFn = () => {return 1;};
test('1 equals 1', () => {
  expect(testFn()).toBe(1);
});