import { Theme, STORAGE_THEME_KEY, refs } from './constans';
const { $body, $themeTooglebtn } = refs;

$themeTooglebtn.addEventListener('change', handelChangeTheme);
function handelChangeTheme({ target }) {
  const { checked } = target;

  checked
    ? $body.classList.replace(Theme.LIGTH, Theme.DARK)
    : $body.classList.replace(Theme.DARK, Theme.LIGTH);

  const theme = checked ? Theme.DARK : Theme.LIGTH;
  localStorage.setItem(STORAGE_THEME_KEY, theme);
}

function getCurrentTheme() {
  const selectedTheme = localStorage.getItem(STORAGE_THEME_KEY);
  if (selectedTheme) {
    $themeTooglebtn.checked = selectedTheme === Theme.DARK;
  }
  return selectedTheme ? selectedTheme : Theme.LIGTH;
}

function initTheme() {
  const theme = getCurrentTheme();
  $body.classList.add(theme);
}

initTheme();
