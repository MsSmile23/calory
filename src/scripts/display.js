import {
  getAllCalories,
  getAllProteins,
  getAllHydrocarbons,
  getAllFats,
} from "./helper.js";

import {
  changeCaloriesNormInLocalStorage,
  getCaloriesNormFromLocalStorage,
} from "./localStorage.js";
import { handleChangeNorm } from "./normCaloriesForm.js";

const calories = document.querySelector("#callories");
const hydrocarbons = document.querySelector("#hydrocarbons");
const proteins = document.querySelector("#proteins");
const fats = document.querySelector("#fats");
const norm = document.querySelector("#norm");
const changeNormButton = document.querySelector(".info__change-norm");
let normCalories = getCaloriesNormFromLocalStorage();

// функция отображающая норму калорий в дисплее
const renderNorm = () => {
  norm.textContent = `${normCalories} ккал`;
};

// функция для изменения нормы калорийности
const changeNorm = (newNorm) => {
  normCalories = newNorm;
  changeCaloriesNormInLocalStorage(newNorm);
  renderNorm();
};

// функция для получения значения нормы калорий
const getNormCalories = () => {
  return normCalories;
};

// функция для отрисовки дисплея (калорий и бжу)
const renderDisplay = () => {
  calories.textContent = getAllCalories();
  proteins.textContent = getAllProteins();
  hydrocarbons.textContent = getAllHydrocarbons();
  fats.textContent = getAllFats();
};

renderNorm();

// на кнопку изменить навешиваем слушатель, при срабатывании которого откроется попап редактирование нормв
changeNormButton.addEventListener("click", handleChangeNorm);

export { renderDisplay, changeNorm, getNormCalories };
