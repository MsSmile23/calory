import "./assets/styles/styles.css";
import { renderFood } from "./scripts/food.js";
import { renderAllEating } from "./scripts/eating.js";
import { renderDisplay } from "./scripts/display.js";
import { handleSearchInput } from "./scripts/search.js";
import { renderStatistic } from "./scripts/statistics.js";
import { handleSelectChange } from "./scripts/select.js";

const searchInput = document.querySelector(".popup__search");
const select = document.querySelector(".popup__select");

// отрисовываем карточки прордуктов в попапе, отрисовываем карточки завтрак, обед, ужин, перекус с  содержимым, отрисовываем дисплей, отрисовываем статистику
renderFood();
renderAllEating();
renderDisplay();
renderStatistic();

// навешмваем слушатель событий на поисковую строку и селект
searchInput.addEventListener("input", () => {
  handleSearchInput(searchInput);
});
select.addEventListener("change", () => {
  handleSelectChange(select);
});
