import './styles.css';
import menu from './menu.json';
import templates from './templates.hbs';
const body = document.querySelector('body');
const listRef = document.querySelector('.js-menu');
const checkBox = document.getElementById('theme-switch-toggle');
const markup = template(menu);
listRef.insertAdjacentHTML('afterbegin', markup);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('theme')) {
  body.classList.add(Theme.DARK);
  checkBox.checked = true;
}
checkBox.addEventListener('change', () => {
  if(checkBox.checked) {
  body.classList.add(Theme.DARK)
  body.classList.remove(Theme.LIGHT)
  localStorage.setItem('theme', "темная тема")
  } else{
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
    localStorage.removeItem('theme')
  }
});
