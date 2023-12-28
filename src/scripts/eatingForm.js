import { openPopup, closePopup } from "./popup.js";
import { getFoodInLocalStorage, addEating } from "./localStorage.js";
import { renderAllEating } from "./eating.js";
import { renderDisplay } from "./display.js";
import { handleAddNewFood } from "./newFoodForm.js";
import { getAllCalories } from "./helper.js";
import { getNormCalories } from "./display.js";

const form = document.forms.addForm;
const popup = document.querySelector("#popup-add-food");
const addNewFoodButton = document.querySelector(".popup__new-food");
const alert = document.querySelector("#alert");

let eating;

// обработчик нажатия кнопки добавления нового блюда
const handleAddClick = (eatingName) => {
  openPopup(popup);
  eating = eatingName;
  form.reset();
};

// обработчик сабмита формы добавление нового блда в контенйер приёма пищи
const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const foodId = form.elements["food"].value;

  const food = getFoodInLocalStorage();
  const eatingFood = food.find((item) => item.id === +foodId);

  const weight = +form.querySelector("#weight-input").value;

  addEating(eating, { ...eatingFood, weight: weight });
  renderAllEating();
  renderDisplay();

  closePopup(popup);

  const calories = getAllCalories();
  const norm = getNormCalories();

  if (calories > norm) {
    openPopup(alert);
  }
};

// навешиваем слушатели на форму и кнопку добавления нового блда
form.addEventListener("submit", handleFormSubmit);
addNewFoodButton.addEventListener("click", () => {
  handleAddNewFood(popup);
});

export { handleAddClick };
