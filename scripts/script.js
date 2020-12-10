import { enableValidation, disableValidation } from "./FormValidator.js";
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
const previewPopup = document.querySelector(".popup_type_preview");

const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__image-title");
const cardTemplate = document.querySelector(".place-template").content;
const cards = document.querySelector(".places__list");
const ESCAPE_KEY = "Escape";

const root = document.querySelector(".root");
const inputForms = root.querySelectorAll(".popup__input-container");

const validationConfig = {
    formSelector: ".popup__input-container",
    inputSelector: ".popup__input",
    inputErrorClass: "popup__input_state_invalid",
    submitButtonSelector: ".button_type_submit",
    inactiveButtonClass: "button_type_submit-disabled",
    errorClass: ".input__error",
};

enableValidation(validationConfig);

// открытие и закрытие попапа

function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);

    const form = popup.querySelector(validationConfig.formSelector);

    disableValidation(form, validationConfig);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);
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

    toggleButtonState(submitButton, form.checkValidity(), validationConfig);
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

// function previewImage(card) {
//     openPopup(previewPopup);
//     popupImage.src = card.link;
//     popupImageTitle.textContent = card.name;
// }

// function createNewCard(card) {
//     const cardElement = cardTemplate.cloneNode(true);
//     const cardDeleteButton = cardElement.querySelector(".button_type_delete");
//     const cardLikeButton = cardElement.querySelector(".place__like");
//     const templateCardName = cardElement.querySelector(".place__title");
//     const templateCardImage = cardElement.querySelector(".place__image");
//     templateCardImage.addEventListener("click", () => previewImage(card));
//     cardDeleteButton.addEventListener("click", deleteCard);
//     cardLikeButton.addEventListener("click", likeCard);

//     templateCardName.textContent = card.name;
//     templateCardImage.src = card.link;
//     templateCardImage.alt = card.alt;

//     return cardElement;
// }

// addFormElement.addEventListener("submit", addCardFromPopup);

function createCard(name, image, alt) {
    const cardElement = new Card(image, name, alt).generateCard();

    return cardElement;
}

initialCards.forEach((card) => {
    cards.append(createCard(card.name, card.image, card.alt));
});

// function addCardFromPopup() {
//     document.querySelector(".place__title").textContent = placeInputTitle.value;
//     document.querySelector(".place__image").src = placeInputLink.value;

//     const submitButton = addFormElement.querySelector(
//         validationConfig.submitButtonSelector
//     );

//     // const newCard = generateCard({
//     //     name: templateCardName,
//     //     image: templateCardImage,
//     // });

//     const place = new Card(image, name, alt);
//     const cardElement = place.generateCard({
//         name: this._name,
//         image: this._image,
//     });

//     cards.prepend(cardElement);

// cards.prepend(newCard);
//     toggleButtonState(submitButton, false, validationConfig);
// }
