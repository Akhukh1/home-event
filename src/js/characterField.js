import img from '../pic/goblin.png';

export default function characterField(charField, character) {
  const appCharacter = charField.appendChild(character);
  appCharacter.src = img;
  appCharacter.classList.add('character');
}
