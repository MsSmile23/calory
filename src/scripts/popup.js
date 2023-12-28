//функции открытия и закрытия попапа

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.querySelector(".popup__close-button").addEventListener("click", () => {
    closePopup(popup);
  });
});

export { openPopup, closePopup };
