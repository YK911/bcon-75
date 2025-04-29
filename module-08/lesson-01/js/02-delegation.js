/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const containerEl = document.querySelector('.js-container');
// console.log([...containerEl.children]);

// [...containerEl.children].forEach((element, index, array) => {
//   element.addEventListener('click', (event) => {
//     const divEl = event.currentTarget

//     const dataAttrColor = divEl.dataset.color
//     console.log("dataAttrColor:", dataAttrColor)
//     })
// });

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
containerEl.addEventListener('click', handleContainerClick)

function handleContainerClick(event) {
  // console.log(event.target);
  // console.log(event.target.dataset.color);
  /**
   * Паттерн "Раннє повернення"
   * */
  // const hasBoxClass = event.target.classList.contains("box");
  // if (!hasBoxClass) {
  //   console.log("Inside if statement");
  //   return;
  // }
  // console.log(event.target.dataset.color);


  // const boxEl = event.target.closest(".box");
  // console.log(" handleContainerClick boxEl:", boxEl);
  // console.log(boxEl.dataset.color);


  // const box1El = event.target.closest(".box-1");
  // console.log(box1El);
}
