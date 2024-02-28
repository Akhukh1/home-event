import generatNuberField from '../js/generatNuberField';

test('test generatNuberField ">0"', () => {
  const result = generatNuberField(16);
  expect(result).toBeGreaterThanOrEqual(0);
});
test('test generatNuberField "16<"', () => {
  const result = generatNuberField(16);
  expect(result).toBeLessThanOrEqual(15);
});
