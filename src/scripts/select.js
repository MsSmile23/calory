import { updateFood, food } from "./food.js";
import { sortByAlphabet, sortByNumber } from "./helper.js";

// функция вызвающая сортировку массива продуктов по определённому параметру при изменении значения селекта
const handleSelectChange = (select) => {
  let newFood;
  if (select.value === "name") {
    newFood = sortByAlphabet(food, "name");
  }

  if (select.value === "calories") {
    newFood = sortByNumber(food, "calories");
  }

  updateFood(newFood);
};

export { handleSelectChange };
