/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

// console.dir(parent)

parent.addEventListener("click", (event) => {
  // console.log("Event currentTarget", event.currentTarget);
  // console.log("Event target", event.target);
  console.log("Worked");
}, {capture: true, once: true})

// child.addEventListener("click", callback)

// function callback(event) {
//   console.log("Event currentTarget", event.currentTarget);
//   console.log("Event target", event.target);
// }

const handleElementClick = (event) => {
  console.log("Event currentTarget", event.currentTarget);
  console.log("Event target", event.target);
  // event.stopPropagation();
  // event.stopImmediatePropagation();
}

innerChild.addEventListener("click", handleElementClick);


