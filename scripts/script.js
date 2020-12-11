import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

const initialCards = [
    {
        name: "Корраловый Риф",
        image: "./images/grid-great-barrier-reef-australia.jpg",
        alt: "Большой Корраловый Риф",
    },
    {
        name: "Будва",
        image: "./images/grid-budva-montenegro.jpg",
        alt: "Вид моря в Будве",
    },
    {
        name: "Шамони",
        image: "./images/grid-chamonix-france.jpg",
        alt: "Заснеженные горы в Шамони",
    },
    {
        name: "Котор",
        image: "./images/grid-kotor-montenegro.jpg",
        alt: "Вид сверху на бухту города Котор",
    },
    {
        name: "Исландия",
        image: "./images/grid-seljalandsfoss-iceland.jpg",
        alt: "Вид на водопад Селйяландсфосс",
    },
    {
        name: "12 Апостолов",
        image: "./images/grid-twelve-apostles-australia.jpg",
        alt: "Пляж Двенадцать Апостолов в Австралии",
    },
];

const popupEditButton = document.querySelector(".button_type_edit");
const popupAddButton = document.querySelector(".button_type_add");
const popupCloseButtons = document.querySelectorAll(".button_type_close");

const editFormElement = document.querySelector(
    ".popup__input-container_type_edit"
);
const addFormElement = document.querySelector(
    ".popup__input-container_type_add"
);
const placeInputTitle = addFormElement.querySelector(
    ".popup__input_type_place-title"
);
const placeInputLink = addFormElement.querySelector(
    ".popup__input_type_place-image"
);

const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const inputName = document.querySelector("#profile-name");
const inputTitle = document.querySelector("#profile-title");

const allPopups = document.querySelectorAll(".popup");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_add");
export const previewPopup = document.querySelector(".popup_type_preview");

export const popupImage = document.querySelector(".popup__image");
export const popupImageTitle = document.querySelector(".popup__image-title");
const cardTemplate = document.querySelector(".place-template").content;
const cards = document.querySelector(".places__list");
const ESCAPE_KEY = "Escape";

const root = document.querySelector(".root");
const inputForms = root.querySelectorAll(".popup__input-container");
const editProfileForm = document.querySelector(
    ".popup__input-container_type_edit"
);
const addCardForm = document.querySelector(".popup__input-container_type_add");

const validationConfig = {
    formSelector: ".popup__input-container",
    inputSelector: ".popup__input",
    inputErrorClass: "popup__input_state_invalid",
    submitButtonSelector: ".button_type_submit",
    inactiveButtonClass: "button_type_submit-disabled",
    errorClass: ".input__error",
};

// применение валидации к формам

function validationHandler(form) {
    const applyValidation = new FormValidator(
        validationConfig,
        form
    ).enableValidation();
}

inputForms.forEach((form) => {
    validationHandler(form);
});

// const editCardValidation = new FormValidator(validationConfig, editProfileForm);
// editCardValidation.enableValidation();

// const addCardValidation = new FormValidator(validationConfig, addCardForm);
// addCardValidation.enableValidation();

// открытие и закрытие попапа

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);

    // const form = popup.querySelector(validationConfig.formSelector);
    // form.reset();

    const errors = popup.querySelectorAll(validationConfig.errorClass);
    errors.forEach((error) => {
        error.textContent = "";
    });

    const inputs = popup.querySelectorAll(validationConfig.inputSelector);
    inputs.forEach((input) => {
        input.classList.remove(validationConfig.inputErrorClass);
    });
}

// редактирование профиля

function editProfile() {
    openPopup(editProfilePopup);

    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;

    const form = editProfilePopup.querySelector(validationConfig.formSelector);
    const submitButton = editProfilePopup.querySelector(
        validationConfig.submitButtonSelector
    );
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
}

editFormElement.addEventListener("submit", (evt) => {
    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
});

// закрыть по событиям: нажать на крестик, клавишу esc и клику вне области

function closeByEscape(evt) {
    const popupOpened = document.querySelector(".popup_opened");
    if (evt.key === ESCAPE_KEY) {
        closePopup(popupOpened);
    }
}

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
            }
        });
    });
})();

popupAddButton.addEventListener("click", function () {
    openPopup(addPlacePopup);
});

popupEditButton.addEventListener("click", function () {
    editProfile();
});

// создание элемента карточки

function createCard(name, image, alt) {
    const cardElement = new Card(image, name, alt).generateCard();

    return cardElement;
}
// рендеринт карточек из массива и создание карточки из попапа

initialCards.forEach((card) => {
    cards.append(createCard(card.name, card.image, card.alt));
});

addFormElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    cards.prepend(createCard(placeInputTitle.value, placeInputLink.value));
    addFormElement.reset();
});
