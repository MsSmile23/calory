import {
  getEating,
  removeAllEating,
  removeEatingFood,
} from "./localStorage.js";
import { renderDisplay } from "./display.js";
import { handleAddClick } from "./eatingForm.js";
import { renderStatistic } from "./statistics.js";

const resetButton = document.querySelector(".food__button");
const cards = document.querySelectorAll(".card");

// функция создания карточки продукта в контейнере соответсвующем приёму пищи
const createFoodCard = ({ name, calories, weight }, eatingName) => {
  const foodCard = document
    .querySelector("#food-card-template")
    .content.querySelector(".food-card")
    .cloneNode(true);

  foodCard.querySelector(".food-card__name").textContent = name;
  foodCard.querySelector(".food-card__calories").textContent = `${Math.ceil(
    (+calories * +weight) / 100
  )} ккал`;
  foodCard.querySelector(".food-card__weight").textContent = `${+weight} г`;

  foodCard.querySelector(".food-card__delite").addEventListener("click", () => {
    handleDeliteFood(eatingName, name);
  });

  return foodCard;
};

// функция добавления карточек еды
const addFoodCard = (food, container, eatingName) => {
  const foodCard = createFoodCard(food, eatingName);
  container.append(foodCard);
};

// функция очистки всух приёмов пищи
const handleResetEating = () => {
  removeAllEating();
  renderAllEating();
  renderDisplay();
};

// функция, которая навешивает слушатели на добавление новго блюда, открытия/закрытия акордиона, сброса всех приёмов пищи
const setEventListener = () => {
  resetButton.addEventListener("click", handleResetEating);

  cards.forEach((card) => {
    const eatingName = card.id.replace("#", "");

    const addButton = card.querySelector(".card__add-button");
    const cardButton = card.querySelector(".card__button");
    const cardFood = card.querySelector(".card__food");

    addButton.addEventListener("click", () => {
      handleAddClick(eatingName);
    });

    cardButton.addEventListener("click", () => {
      cardFood.classList.toggle("card__food_visible");
      cardButton.classList.toggle("card__button_active");
    });
  });
};

// функция отображающая приём пищи по id карточки
const renderEating = (card) => {
  const display = card.querySelector(".card__display");
  const cardFood = card.querySelector(".card__food");
  const cardButton = display.querySelector(".card__button");
  const eatingName = card.id.replace("#", "");
  const eatingFood = getEating(eatingName);

  cardFood.innerHTML = "";

  if (eatingFood.length > 0) {
    if (!display.classList.contains("card__display_visible")) {
      display.classList.add("card__display_visible");
    }

    const calories = Math.ceil(
      eatingFood.reduce(
        (prev, cur) => prev + (+cur.calories * +cur.weight) / 100,
        0
      )
    );

    card.querySelector(".card__calories").textContent = `${calories} ккал`;

    eatingFood.forEach((food) => addFoodCard(food, cardFood, eatingName));
  } else {
    if (display.classList.contains("card__display_visible")) {
      display.classList.remove("card__display_visible");
    }
    if (cardFood.classList.contains("card__food_visible")) {
      cardFood.classList.remove("card__food_visible");
      cardButton.classList.remove("card__button_active");
    }
  }
};

// функция, которая отрисовывает все приёмы пищи
const renderAllEating = () => {
  cards.forEach((card) => {
    renderEating(card);
  });

  renderStatistic();
};

// функция удаления блюда из контейнера приёма пищи
const handleDeliteFood = (eatingName, foodName) => {
  removeEatingFood(eatingName, foodName);
  renderAllEating();
  renderDisplay();
};

setEventListener();

export { renderAllEating };
