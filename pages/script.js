import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

import {
    popupEditButton,
    popupAddButton,
    editFormElement,
    addFormElement,
    placeInputTitle,
    placeInputLink,
    inputName,
    inputTitle,
    cards,
    validationConfig,
    initialCards
} from "../utils/constants.js";

// валидация

const editCardValidation = new FormValidator(validationConfig, editFormElement);
const addCardValidation = new FormValidator(validationConfig, addFormElement);

editCardValidation.enableValidation();
addCardValidation.enableValidation();

// попап с картинкой

const imagePreviewPopup = new PopupWithImage(".popup_type_preview");
imagePreviewPopup.setEventListeners();

// пользователь

const userInfo = new UserInfo({
    profileNameSelector: ".profile__name",
    profileTitleSelector: ".profile__title"
});

const profilePopup = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    handleSubmitForm: (formData) => {
        formData.name = inputName.value;
        formData.title = inputTitle.value;
        userInfo.setUserInfo(formData);
    }
})

profilePopup.setEventListeners();

// карточки - рендеринг и добавление новой

function createCard(card) {
    const cardElement = new Card({
        image: card.image,
        name: card.name,
        alt: card.alt
    },
        '.place-template',
        () => {
            imagePreviewPopup.open(card)
        }).generateCard();

    return cardElement;
};

const allCards = new Section({
    data: initialCards,
    renderer: (card) => {
        const cardElement = createCard(card);
        allCards.renderItem(cardElement);
    }
}, cards);

allCards.renderItems();

const submitCardPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    handleSubmitForm: (card) => {
        card.image = placeInputLink.value;
        card.name = placeInputTitle.value;
        card.alt = placeInputTitle.value;
        const cardElement = createCard(card);
        allCards.addNewItem(cardElement);
    }
});

submitCardPopup.setEventListeners();

// слушатели

popupAddButton.addEventListener("click", () => {

    submitCardPopup.open();
});

popupEditButton.addEventListener("click", () => {

    profilePopup.open();

    const userProfile = userInfo.getUserInfo();
    inputName.value = userProfile.name;
    inputTitle.value = userProfile.title;

    editCardValidation.resetForm();
});