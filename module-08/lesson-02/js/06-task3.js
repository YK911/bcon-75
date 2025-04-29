/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({sideA, sideB, sideC, sideD} = {}) {
  return sideA + sideB + sideC + sideD;
}

const housePerimeter = { sideA: 10, sideB: 15, sideC:10, sideD:15 }

const perimeter = calculateHousePerimeter(housePerimeter);
console.log(`Периметр будинку: ${perimeter}`);
