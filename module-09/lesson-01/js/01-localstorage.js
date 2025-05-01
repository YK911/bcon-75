const userProfile = {
  name: 'Mango',
  age: 24,
  password: undefined,
  hobbies: ['tennis', 'football', 'swimming'],
  isHappy: true,
  hasFriends: null,

  updatePassword(newPassword) {
      if (newPassword !== this.password) {
        this.password = newPassword
      } else {
        comsole.warn('⚠️ Dublicate password')
      }
  }
}

const userProfileToJSON = JSON.stringify(userProfile);
// console.log(" userProfileToJSON:", userProfileToJSON);

const result = JSON.parse(userProfileToJSON);
// console.log(" result:", result);


const hotelRoom = {
  number: 10,
  isAvailable: false
}

const guest = {
  name: "Poly",
  status: "Luxary"
}

hotelRoom.occupiedBy = guest;
guest.place = hotelRoom;

// // console.log(" hotelRoom:", hotelRoom)
// // console.log(" guest:", guest)


// const hotelRoomToJSON = JSON.stringify(hotelRoom, (key, value) => {
//   return key === "occupiedBy" ? undefined : value;
// });
const hotelRoomToJSON = JSON.stringify(hotelRoom, ["number", "isAvailable"]);

// console.log(" hotelRoomToJSON hotelRoomToJSON:", hotelRoomToJSON)

/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

localStorage.setItem("theme", "light");
localStorage.setItem("cart", '["apples", "grapes", "oranges"]')
localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

const lsData = localStorage.getItem("cart");

const cart = JSON.parse(lsData)
console.log(" cart:", cart)

const namesFromLS = localStorage.getItem(LS_KEY);
const arrNames = JSON.parse(namesFromLS);
console.log(" arrNames:", arrNames);

/**
 * Видалення
 */

// setTimeout(() => {
//   localStorage.removeItem("theme");
//   localStorage.removeItem(LS_KEY);
// }, 3000);

// setTimeout(() => {
//   localStorage.clear();
// }, 3000);


/**
 * LocalStorage не може зберігати функції
 */

function add(a,b) {
  return a + b;
}

localStorage.setItem("my super function", add);
const res = localStorage.getItem("my super function")
// console.log(" res:", res)

const url = 'https://newsapi.org/v2/everything?q=apple&pageSize=8&page=1';

fetch(url, {
  headers: {
    "X-API-Key": "f937548ce92c4cccab3e47b760e40b34"
  }
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
