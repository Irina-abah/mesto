import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/initialCards.js";

// попапы
const allPopups = document.querySelectorAll(".popup");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_add");
export const previewPopup = document.querySelector(".popup_type_preview");

// кнопки попапов
const popupEditButton = document.querySelector(".button_type_edit");
const popupAddButton = document.querySelector(".button_type_add");
const popupCloseButtons = document.querySelectorAll(".button_type_close");

// поля попапов
const editFormElement = document.querySelector(".popup__input-container_type_edit");
const addFormElement = document.querySelector(".popup__input-container_type_add");
const placeInputTitle = addFormElement.querySelector(".popup__input_type_place-title");
const placeInputLink = addFormElement.querySelector(".popup__input_type_place-image");
export const popupImage = document.querySelector(".popup__image");
export const popupImageTitle = document.querySelector(".popup__image-title");

const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const inputName = document.querySelector("#profile-name");
const inputTitle = document.querySelector("#profile-title");

const cards = document.querySelector(".places__list");

const ESCAPE_KEY = "Escape";

// валидация
const validationConfig = {
    formSelector: ".popup__input-container",
    inputSelector: ".popup__input",
    inputErrorClass: "popup__input_state_invalid",
    submitButtonSelector: ".button_type_submit",
    inactiveButtonClass: "button_type_submit-disabled",
    errorClass: ".input__error",
};

const editCardValidation = new FormValidator(validationConfig, editFormElement);
const addCardValidation = new FormValidator(validationConfig, addFormElement);

// открытие и закрытие попапа

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
};

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);
};

function closeByEscape(evt) {
    const popupOpened = document.querySelector(".popup_opened");
    if (evt.key === ESCAPE_KEY) {
        closePopup(popupOpened)
    };
};

// редактирование профиля

function editProfile() {
    openPopup(editProfilePopup);
    editCardValidation.enableValidation();

    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
};

editFormElement.addEventListener("submit", (evt) => {
    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
});

// слушатели

(function () {
    popupCloseButtons.forEach(function (form) {
        form.addEventListener("click", function (evt) {
            const popup = evt.target.closest(".popup");
            closePopup(popup);
        });
    });

    allPopups.forEach(function (popup) {
        popup.addEventListener("mousedown", function (evt) {
            if (evt.target.classList.contains("popup")) {
                closePopup(popup);
            };
        });
    });
})();

popupAddButton.addEventListener("click", function () {
    openPopup(addPlacePopup);
    addCardValidation.enableValidation();
});

popupEditButton.addEventListener("click", function () {
    editProfile();
});

// создание элемента карточки

//function createCard(name, image, alt) {
//  const cardElement = new Card(image, name, alt).generateCard();

//  return cardElement;
//};

function createCard(card) {
    const cardElement = new Card(card, '.place-template').generateCard();

    return cardElement;
};
// рендеринг карточек из массива и создание карточки из попапа

//initialCards.forEach((card) => {
//    cards.append(createCard(card.name, card.image, card.alt));
// });

initialCards.forEach((card) => {
    cards.append(createCard(card, '.place-template'));
});

// addFormElement.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     cards.prepend(createCard(placeInputTitle.value, placeInputLink.value));
//     addFormElement.reset();
// });

addFormElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    cards.prepend(createCard(placeInputTitle.value, placeInputLink.value));
    addFormElement.reset();
});
