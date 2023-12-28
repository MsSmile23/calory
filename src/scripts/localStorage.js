// функции добавления, обновление и удаления из localStorage массива блюд, масивов разных приёмов пищи, нормы калорийности

const getFoodInLocalStorage = () => {
  let food;
  if (localStorage.getItem("food")) {
    food = JSON.parse(localStorage.getItem("food"));
  } else {
    food = [];
  }
  return food;
};

const addFoodInLocalStorage = (product) => {
  const food = getFoodInLocalStorage();
  food.push({ ...product, id: food.length });

  localStorage.setItem("food", JSON.stringify(food));
};

const getEating = (eatingName) => {
  let eating;
  if (localStorage.getItem(eatingName)) {
    eating = JSON.parse(localStorage.getItem(eatingName));
  } else {
    eating = [];
  }
  return eating;
};

const addEating = (eatingName, eatingFood) => {
  const eating = getEating(eatingName);

  eating.push(eatingFood);

  localStorage.setItem(eatingName, JSON.stringify(eating));
};

const removeEatingFood = (eatingName, eatingFood) => {
  let eating = getEating(eatingName);

  eating = eating.filter((food) => {
    food.name !== eatingFood.name;
  });

  localStorage.setItem(eatingName, JSON.stringify(eating));
};

const removeEating = (eatingName) => {
  if (localStorage.getItem(eatingName)) {
    localStorage.removeItem(eatingName);
  }
};

const getCaloriesNormFromLocalStorage = () => {
  return localStorage.getItem("norm") ? localStorage.getItem("norm") : 2200;
};

const changeCaloriesNormInLocalStorage = (newNorm) => {
  localStorage.setItem("norm", newNorm);
};

const removeAllEating = () => {
  removeEating("breakfast");
  removeEating("lunch");
  removeEating("dinner");
  removeEating("nosh");
};

export {
  getFoodInLocalStorage,
  addFoodInLocalStorage,
  getEating,
  addEating,
  removeAllEating,
  removeEatingFood,
  getCaloriesNormFromLocalStorage,
  changeCaloriesNormInLocalStorage,
};
