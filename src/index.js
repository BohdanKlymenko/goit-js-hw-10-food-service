import './sass/main.scss';
import menu from './menu.json';
import menuCard from './template/menu-card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuList = document.querySelector('.js-menu');
function buildMenu(item) {
  return menuList.insertAdjacentHTML('beforeend', menuCard(item));
}
buildMenu(menu);

const checkBodyTheme = document.body.classList;
const input = document.querySelector('#theme-switch-toggle');
checkBodyTheme.add(
  localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
);
if (checkBodyTheme.value === Theme.DARK) {
  input.checked = true;
}

function changeTheme(e) {
  if (e.target.checked) {
    checkBodyTheme.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  checkBodyTheme.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}
input.addEventListener('change', changeTheme);