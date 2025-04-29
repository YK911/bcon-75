/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: "Jacob Mercer",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Без деструктуризації
// function getUserName(params) {
//   // console.log(params);
//   const message = `Hello my name is ${params.username}, I know html - ${params.skills.html}, css - ${params.skills.css} and js -${params.skills.js}`
//   console.log(message);
// }


/**
 * З деструктуризацією
 * Деструктуризація параметрів в тілі функції
 */
function _getUserName(params) {
  // console.log(params);
  const { username, skills: {html, css, js} } = params;

  const message = `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`

  console.log(message);
}
// _getUserName(user);

/**
 * З деструктуризацією
 * Деструктуризація в параметрах функції
 */

const user = {
  username: "Jacob Mercer",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};


const player = {
  username: "Mango"
}


function getUserName({ username, skills: { html, css, js } }, { username: name }) {
  // this = undefined
  // const user = undefined
  // const player = undefined

  console.log(name);

  const message = `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`;

  console.log(message);

  // return undefined
}

getUserName(user, player);

// getUserName();
