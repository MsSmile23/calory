import { getFoodInLocalStorage } from "./localStorage.js";

const food = getFoodInLocalStorage();
const foodContainer = document.querySelector(".popup__radio-form");

// отрисовка карточек еды в попапе
const renderFood = () => {
  food.forEach((foodItem) => {
    addFoodCard(foodItem, foodContainer);
  });
};

// функция для обноления карточек блюд
const updateFood = (food) => {
  foodContainer.innerHTML = "";
  food.forEach((foodItem) => {
    addFoodCard(foodItem, foodContainer);
  });
};

// функция для создания карточки блюда
const createFoodCard = ({ name, calories, id }) => {
  const foodCard = document
    .querySelector("#food-template")
    .content.querySelector(".popup__label")
    .cloneNode(true);

  foodCard.querySelector(".popup__food").textContent = name;
  foodCard.querySelector(
    ".popup__calories"
  ).textContent = `${calories} ккал / 100 г`;

  foodCard.querySelector(".popup__radio").value = id;

  return foodCard;
};

// функция добавдения карточек еды в контейнер
const addFoodCard = (food, container) => {
  const foodCard = createFoodCard(food);
  container.append(foodCard);
};

export { renderFood, updateFood, food };
