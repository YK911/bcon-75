//* Name import with rename
import { LS_KEY as key } from "./config.js";
//* Name import
import { saveToLS, loadFromLS } from "./localStorageAPI.js";
//* Default import
import sayHello from "./greeting.js";
//* Namespace import
import * as refs from "./refs.js";

//* Dynamic import by condition
if (true) {
  const configModule = await import("./config.js");
  console.log(" configModule:", configModule);
}

// console.log("refs -> ",refs);

sayHello("Mango", ".js-title");

const LS_KEY = '';

populateInput();

refs.inputEl.addEventListener('change', (event) => {
  const inputValue = event.target.value.trim();

  if (!inputValue) {
    console.log("Please, add email");
    return
  }

  saveToLS(key, inputValue);
})

function populateInput() {
  refs.inputEl.value = loadFromLS(key) ?? "";
}
