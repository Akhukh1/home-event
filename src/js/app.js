import RenderingField from './renderingField';
import RgeneratNuberField from './generatNuberField';
import characterField from './characterField';
import onClickItem from './onclickItem';

document.addEventListener('DOMContentLoaded', () => {
  let countPoints = 0;
  let point = 0;
  let checkPoint = -1;
  const pointsClick = document.querySelector('.points_click');
  const pointsCount = document.querySelector('.points_count');
  const gameFields = new RenderingField();
  const gameFieldClick = document.querySelector('.game-field');
  gameFieldClick.addEventListener('click', (e) => {
    point = onClickItem(e);
    countPoints += point;
    pointsClick.textContent = `Колличество промахов: ${countPoints}`;
  });
  const character = document.createElement('img');
  const timerId = setInterval(() => {
    const randomUndex = RgeneratNuberField(gameFields.fields.length - 1);
    characterField(gameFields.fields[randomUndex], character);
    checkPoint += 1;
    if (point === 1) {
      checkPoint -= 1;
      point = 0;
    }
    pointsCount.textContent = `Количесиво баллов: ${checkPoint}`;
    if (checkPoint > 5) {
      alert(`Игра окончена! Набранно ${countPoints} баллов`);
      clearTimeout(timerId);
    }
  }, 1000);
});
