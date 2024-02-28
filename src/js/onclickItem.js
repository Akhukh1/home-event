export default function onClickItem(element) {
  if (element.target.classList.contains('character')) {
    element.target.classList.remove('character');
    document.querySelector('.points');
    return 1;
  }
  return 0;
}
