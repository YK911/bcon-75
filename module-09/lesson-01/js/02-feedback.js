//* Form data constructor

const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

populateTextarea();

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

/**
 * - Скасовуємо стандартну поведінку (перезавантаження сторінки)
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  localStorage.removeItem(STORAGE_KEY);

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries())
  console.log(" onFormSubmit data:", data)

  form.reset()
}


/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function onTextareaInput(event) {
  const message =  event.currentTarget.value.trim();
  message !== "" ? localStorage.setItem(STORAGE_KEY, message) : null
}

/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateTextarea() {
  const lsData = localStorage.getItem(STORAGE_KEY);
  textarea.value = lsData ?? '';
}


// console.log("undefined ?? 'here': ", undefined ?? "here");
// console.log("here ?? '': ", "here" ?? "");
// console.log("null ?? 'test': ", null ?? "test");
// console.log("0 ?? null: ", 0 ?? null);


// null, undefined, false, 0, "", NaN
