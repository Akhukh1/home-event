/**
 * @jest-environment jsdom
 */

import RenderingField from '../js/renderingField';

test('test RenderingField lenght array', () => {
  const fieldsTest = document.createElement('div');
  const fields = document.body.appendChild(fieldsTest);
  fields.classList.add('game-field');
  const gameFields = new RenderingField();
  const result = gameFields.fields.length;
  expect(result).toBe(16);
});

test('test RenderingField', () => {
  const fieldsTest = document.createElement('div');
  const fields = document.body.appendChild(fieldsTest);
  fields.classList.add('game-field');
  const gameFields = new RenderingField();
  let result = 0;
  for (const i in gameFields.fields) {
    if (gameFields.fields[i].classList.contains('field')) {
      result += +1;
    }
  }
  expect(result).toBe(16);
});
