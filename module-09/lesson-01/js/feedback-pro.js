// const form = document.querySelector('');
const LS_KEY = "feedback-form";
const USER_THEME = "theme-key";
const LIGHT_THEME = './css/light-theme.css';
const DARK_THEME = './css/dark-theme.css';

const { feedbackForm } = document.forms;

const togglerEl = document.querySelector('.js-toggler')

document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem(USER_THEME) ?? LIGHT_THEME;
  togglerEl.checked = currentTheme === LIGHT_THEME ? false : true

  // const currentTheme = togglerEl.checked ? DARK_THEME : LIGHT_THEME;
  const linkEl = document.createElement('link')
  linkEl.setAttribute("rel", "stylesheet");
  linkEl.setAttribute("href", currentTheme);

  const head = document.querySelector('head');
  head.append(linkEl);
});


// const form = document.forms.feedbackForm
// console.log(feedbackForm);

feedbackForm.addEventListener("blur", onFormBlur, true);
// feedbackForm.addEventListener("focusout", onFormBlur);
feedbackForm.addEventListener("submit", onFormSubmit);
togglerEl.addEventListener('change', onToggleChange)

populateForm();


function onFormBlur(event) {
  const form = event.currentTarget;

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries())
  // console.log(userData);

  localStorage.setItem(LS_KEY, JSON.stringify(userData));
}

function populateForm() {
  const userData = localStorage.getItem(LS_KEY);
  if (userData === null) {
    console.warn("User data missing");
    return;
  }

  try {
    // const data = JSON.parse("userData");


    // TODO: Помилку можна згенерувати самостійно. Нижче приклад
    // const randomValue = Math.random()
    // console.log("randomValue:", randomValue)

    // if (randomValue < 0.4) {
    //   throw new Error("❌ message from error class");
    // }

    const data = JSON.parse(userData);
    // console.log("Data from LS", data);

    for (const key in data) {
      // console.log(key);
      // data[key]
      // console.log(feedbackForm.elements[key]);
      feedbackForm.elements[key].value = data[key];
    }

  } catch (error) {
    console.log(error.message);
  } finally {
    // alert("Always work");
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(LS_KEY);
  feedbackForm.reset()
}

function onToggleChange() {
  const themeLinkEl = document.querySelector("[href*='-theme.css']");
  const isLightTheme = themeLinkEl.getAttribute('href').includes('light');
  const theme = isLightTheme ? DARK_THEME : LIGHT_THEME;
  localStorage.setItem(USER_THEME, theme)
  themeLinkEl.setAttribute('href', theme);
}
