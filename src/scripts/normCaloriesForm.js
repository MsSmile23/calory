import { openPopup, closePopup } from "./popup.js";
import { changeNorm } from "./display.js";

const popup = document.querySelector("#popup-new-norm");
const form = document.forms.changeNormForm;

// обработчик клика на кнопку изменить
const handleChangeNorm = () => {
  form.reset();
  openPopup(popup);
};

// обработчик сабмита формы изменения калорийности
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  changeNorm(form.querySelector(".popup__input").value);
  closePopup(popup);
};

form.addEventListener("submit", handleFormSubmit);

export { handleChangeNorm };
