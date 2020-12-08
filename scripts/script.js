import { Card } from "./Card.js";

const initialCards = [
    {
        name: "Корраловый Риф",
        link: "./images/grid-great-barrier-reef-australia.jpg",
        alt: "Большой Корраловый Риф",
    },
    {
        name: "Будва",
        link: "./images/grid-budva-montenegro.jpg",
        alt: "Вид моря в Будве",
    },
    {
        name: "Шамони",
        link: "./images/grid-chamonix-france.jpg",
        alt: "Заснеженные горы в Шамони",
    },
    {
        name: "Котор",
        link: "./images/grid-kotor-montenegro.jpg",
        alt: "Вид сверху на бухту города Котор",
    },
    {
        name: "Исландия",
        link: "./images/grid-seljalandsfoss-iceland.jpg",
        alt: "Вид на водопад Селйяландсфосс",
    },
    {
        name: "12 Апостолов",
        link: "./images/grid-twelve-apostles-australia.jpg",
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

// открытие и закрытие попапа

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);

    const form = popup.querySelector(validationConfig.formSelector);

    disableValidation(form, validationConfig);
}

export function closePopup(popup) {
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

function setClosePopupListeners() {
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
}

setClosePopupListeners();

popupAddButton.addEventListener("click", function () {
    openPopup(addPlacePopup);
});

popupEditButton.addEventListener("click", function () {
    editProfile();
});

// const initialCards = [
//     {
//         name: "Корраловый Риф",
//         link: "./images/grid-great-barrier-reef-australia.jpg",
//         alt: "Большой Корраловый Риф",
//     },
//     {
//         name: "Будва",
//         link: "./images/grid-budva-montenegro.jpg",
//         alt: "Вид моря в Будве",
//     },
//     {
//         name: "Шамони",
//         link: "./images/grid-chamonix-france.jpg",
//         alt: "Заснеженные горы в Шамони",
//     },
//     {
//         name: "Котор",
//         link: "./images/grid-kotor-montenegro.jpg",
//         alt: "Вид сверху на бухту города Котор",
//     },
//     {
//         name: "Исландия",
//         link: "./images/grid-seljalandsfoss-iceland.jpg",
//         alt: "Вид на водопад Селйяландсфосс",
//     },
//     {
//         name: "12 Апостолов",
//         link: "./images/grid-twelve-apostles-australia.jpg",
//         alt: "Пляж Двенадцать Апостолов в Австралии",
//     },
// ];

// function deleteCard(evt) {
//     const deletedCard = evt.target.closest(".place");
//     deletedCard.remove();
// }

// function likeCard(evt) {
//     evt.target.classList.toggle("place__like_active");
// }

function previewImage(card) {
    openPopup(previewPopup);
    popupImage.src = card.link;
    popupImageTitle.textContent = card.name;
}

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

// initialCards.forEach((item) => {
//     const newCard = createNewCard(item);
//     cards.append(newCard);
// });

addFormElement.addEventListener("submit", function (evt) {
    const templateCardName = placeInputTitle.value;
    const templateCardImage = placeInputLink.value;
    const popup = evt.target.closest(".popup");
    const submitButton = addFormElement.querySelector(
        validationConfig.submitButtonSelector
    );

    const newCard = createNewCard({
        name: templateCardName,
        link: templateCardImage,
    });

    cards.prepend(newCard);
    toggleButtonState(submitButton, false, validationConfig);
});

initialCards.forEach((item) => {
    const place = new Card(item, ".place-template_type_default");
    const cardElement = place.generateCard();

    cards.append(cardElement);
});
