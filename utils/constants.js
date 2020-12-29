export { allPopups, editProfilePopup, addPlacePopup, previewPopup, popupEditButton, popupAddButton, popupCloseButtons, editFormElement, addFormElement, placeInputTitle, placeInputLink, popupImage, popupImageTitle, profileName, profileTitle, inputName, inputTitle, cards, ESCAPE_KEY, validationConfig, initialCards }

// попапы
const allPopups = document.querySelectorAll(".popup");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_add");
const previewPopup = document.querySelector(".popup_type_preview");

// кнопки попапов
const popupEditButton = document.querySelector(".button_type_edit");
const popupAddButton = document.querySelector(".button_type_add");
const popupCloseButtons = document.querySelectorAll(".button_type_close");

// поля попапов
const editFormElement = document.querySelector(".popup__input-container_type_edit");
const addFormElement = document.querySelector(".popup__input-container_type_add");
const placeInputTitle = addFormElement.querySelector(".popup__input_type_place-title");
const placeInputLink = addFormElement.querySelector(".popup__input_type_place-image");
const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__image-title");

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

// карточки
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