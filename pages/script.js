import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

import { allPopups, editProfilePopup, addPlacePopup, previewPopup, popupEditButton, popupAddButton, popupCloseButtons, editFormElement, addFormElement, placeInputTitle, placeInputLink, popupImage, popupImageTitle, profileName, profileTitle, inputName, inputTitle, cards, ESCAPE_KEY, validationConfig, initialCards } from "../utils/constants.js";

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
            name: formData.name,
            title: formData.title
        })
    }
})

profilePopup.setEventListeners();

// карточки - рендеринг и добавление новой

const allCards = new Section({
    data: initialCards,
    renderer: (card) => {
        const cardElement = createCard(card);
        allCards.addItem(cardElement);
    }
}, cards);

allCards.renderItems();

const submitCardPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    handleSubmitForm: (card) => {
        const cardElement = createCard(card);
        allCards.addItem(cardElement);
    }
})

submitCardPopup.setEventListeners();

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

    // console.log(card)

    return cardElement;
};

// слушатели

popupAddButton.addEventListener("click", () => {
    addCardValidation.enableValidation();
    submitCardPopup.open();
});

popupEditButton.addEventListener("click", () => {
    editCardValidation.enableValidation();

    const userProfile = userInfo.getUserInfo();
    inputName.value = userProfile.name;
    inputTitle.value = userProfile.title;

    profilePopup.open();
});


// function editProfile() {
//     openPopup(editProfilePopup);
//     editCardValidation.enableValidation();

//     inputName.value = profileName.textContent;
//     inputTitle.value = profileTitle.textContent;
// };

// editFormElement.addEventListener("submit", (evt) => {
//     profileName.textContent = inputName.value;
//     profileTitle.textContent = inputTitle.value;
// });