/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

const PLACEHOLDER = "https://placehold.co/600x400?text=Delivering+to+storage";

const products = [
  {
    id: 1,
    img: "",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const listEl = document.querySelector(".products");

/**
 * Функції для створення розмітки
 */
function createListMarkup(data = []) {
  return data
    .map(({ id, img = PLACEHOLDER, name, price }) => {
      return `
      <li class="products-item js-item" id="${id}">
        <img class="products-img" src="${checkImage(img)}" alt="${name}" />
        <h3 class="products-title">${name}</h3>
        <p class="products-price">
          Ціна: <span class="products-price-value">${price}</span> грн
        </p>
      </li>`;
    })
    .join("");
}

function createCardMarkup({ img, name, price, description } = {}) {
  return `
      <div class="modal">
        <img class="products-img" src="${checkImage(img)}" alt="${name}" />
        <h2 class="products-title">${name}</h2>
        <h3 class="products-price">
          Ціна: <span class="products-price-value">${price}</span> грн
        </h3>
        <p class="products-price">${description}</p>
      </div>
  `;
}

function checkImage(imgURl) {
  return imgURl === "" ? PLACEHOLDER : imgURl;
}

/**
 * Вставка розмітки в HTML
 */
// listEl.innerHTML = createMarkup(products);
listEl.insertAdjacentHTML("beforeend", createListMarkup(products));

/**
 * Реалізуємо прийом делегування при кліку на карточки
 */
listEl.addEventListener("click", onCardClick);

function onCardClick(event) {
  const itemEl = event.target.closest(".js-item");
  if (itemEl === null) {
    // console.log("inside if");
    return;
  }

  console.log(itemEl.id);

  const itemData = products.find((item) => {
    // return item.id === Number(itemEl.id);
    return item.id === +itemEl.id;
  });

  const lightboxOptions = {
    className: "modal",
  };

  const instance = basicLightbox.create(createCardMarkup(itemData));
  instance.show();
}
