import { openPopup, closePopup } from "./popup.js";
import { addFoodInLocalStorage, getFoodInLocalStorage } from "./localStorage.js";
import { updateFood } from "./food.js";

const popup = document.querySelector("#popup-new-food");
const form = document.forms.newFoodForm;

// обработчик клика на кнопку добавления нового блюда
const handleAddNewFood = (popupAddFood) => {
  closePopup(popupAddFood);

  openPopup(popup);
  form.reset();
};

// обработчик сабмита формы добавления нового блюда
const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const inputs = form.querySelectorAll(".popup__input");

  const formValues = {};
  inputs.forEach((input) => {
    formValues[input.name] = input.value;
  });

  addFoodInLocalStorage(formValues);

  const food = getFoodInLocalStorage();
  updateFood(food);

  closePopup(popup);
  openPopup(document.querySelector("#popup-add-food"));
};

form.addEventListener("submit", handleFormSubmit);

export { handleAddNewFood };
