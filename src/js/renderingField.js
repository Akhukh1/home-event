import imgCursor from '../pic/hammer.png';

export default class RenderingField {
  constructor() {
    const fields = [];
    const gameField = document.querySelector('.game-field');
    gameField.addEventListener('mouseover', () => {
      gameField.style.cursor = 'url(' + imgCursor + ')';
    });
    for (let i = 0; i < 16; i += 1) {
      const field = document.createElement('div');
      fields[i] = gameField.appendChild(field);
      fields[i].classList.add('field');
    }
    this.fields = fields;
  }
}
