/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: "Kate",
  },
  {
    name: "Alex",
  },
  {
    name: "Mark",
  },
];

/**
 * Без деструктуризації
 */
const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
*/

for (const { name } of users) {
  names.push(name);
}

console.log(names);

const _newNames = users.map((elem, index, array) => {
  return elem.name
});
console.log(_newNames);

const newNames = users.map(({name}) => name);
console.log(newNames);
