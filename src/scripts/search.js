import { updateFood, food } from "./food.js";

let newFood;

// функция фильтрация массива блюд по поисоковой строке
const handleSearchInput = (searchInput) => {
  if (searchInput.value === "") {
    newFood = food;
  } else {
    newFood = food.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  }

  updateFood(newFood);
};

export { handleSearchInput };
