import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

import './index.css';

import {
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

const popupAddButton = document.querySelector(".button_type_add");
const popupEditButton = document.querySelector(".button_type_edit");

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
        userInfo.setUserInfo({
            name: formData['profile-name'], 
            title: formData['profile-title']
        });
        profilePopup.close();
    }
});

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
        const cardElement = createCard({
            image: card['place-image'],
            name: card['place-title'],
            alt: card['place-image']
        });
        allCards.addNewItem(cardElement);
        submitCardPopup.close();
    }
});

submitCardPopup.setEventListeners();

// слушатели

popupAddButton.addEventListener("click", () => {

    submitCardPopup.open();
    editCardValidation.resetForm();
});

popupEditButton.addEventListener("click", () => {

    profilePopup.open();

    const userProfile = userInfo.getUserInfo();
    inputName.value = userProfile.name;
    inputTitle.value = userProfile.title;

    editCardValidation.resetForm();
});