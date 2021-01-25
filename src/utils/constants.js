// картинки
// const greatBarrier = new URL("../images/grid-great-barrier-reef-australia.jpg", import.meta.url);
// const budva = new URL("../images/grid-budva-montenegro.jpg", import.meta.url);
// const chamonix = new URL("../images/grid-chamonix-france.jpg", import.meta.url);
// const kotor = new URL("../images/grid-kotor-montenegro.jpg", import.meta.url);
// const seljalandsfoss = new URL("../images/grid-seljalandsfoss-iceland.jpg", import.meta.url);
// const twelveApostles = new URL("../images/grid-twelve-apostles-australia.jpg", import.meta.url);

// поля попапов
const editFormElement = document.querySelector(".popup__input-container_type_edit");
const addFormElement = document.querySelector(".popup__input-container_type_add");
const editAvatarElement = document.querySelector(".popup__input-container_type_avatar");
const confirmDeleteElement = document.querySelector(".popup__input-container_type_confirm");
const placeInputTitle = addFormElement.querySelector(".popup__input_type_place-title");
const placeInputLink = addFormElement.querySelector(".popup__input_type_place-image");

const inputName = document.querySelector("#profile-name");
const inputTitle = document.querySelector("#profile-title");

const cards = document.querySelector(".places__list");

const popupDeleteButton = document.querySelector(".button_type_delete");
const popupSaveProfileButton = editFormElement.querySelector(".button_type_submit");
const popupSaveCardButton = addFormElement.querySelector(".button_type_submit");
const popupSaveAvatarButton = editAvatarElement.querySelector(".button_type_submit");
const popupConfirmDeleteButton = confirmDeleteElement.querySelector(".button_type_submit");

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

export { editFormElement, addFormElement, editAvatarElement, placeInputTitle, placeInputLink, inputName, inputTitle, cards, ESCAPE_KEY, validationConfig, popupSaveProfileButton, popupSaveCardButton, popupSaveAvatarButton, confirmDeleteElement, popupConfirmDeleteButton }