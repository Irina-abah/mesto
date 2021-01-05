import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Popup } from "../components/Popup.js";

import { allPopups, editProfilePopup, addPlacePopup, previewPopup, popupEditButton, popupAddButton, popupCloseButtons, editFormElement, addFormElement, placeInputTitle, placeInputLink, popupImage, popupImageTitle, profileName, profileTitle, inputName, inputTitle, cards, ESCAPE_KEY, validationConfig, initialCards } from "../utils/constants.js"

// валидация

const editCardValidation = new FormValidator(validationConfig, editFormElement);
const addCardValidation = new FormValidator(validationConfig, addFormElement);

editCardValidation.enableValidation();
addCardValidation.enableValidation();

// попап с картинкой

const imagePreviewPopup = new PopupWithImage(".popup_type_preview");

const userInfo = new UserInfo({
    profileNameSelector: ".profile__name",
    profileTitleSelector: ".profile__title"
});

const profilePopup = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    handleSubmitForm: (formData) => {
        userInfo.getUserInfo({
            name: formData.name,
            title: formData.title
        })
    }
})

const submitCardPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    handleSubmitForm: (item) => {
        const card = createCard(item);
        allCards.addItem(card);
    }
})

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

// рендеринг всех картинок 

const allCards = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        allCards.addItem(card);
    }
}, cards);

allCards.renderItems();

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

// открытие и закрытие попапа

// export function openPopup(popup) {
//     popup.classList.add("popup_opened");
//     document.addEventListener("keydown", closeByEscape);
// };

// export function closePopup(popup) {
//     popup.classList.remove("popup_opened");
//     document.removeEventListener("keydown", closeByEscape);
// };

// function closeByEscape(evt) {
//     const popupOpened = document.querySelector(".popup_opened");
//     if (evt.key === ESCAPE_KEY) {
//         closePopup(popupOpened)
//     };
// };

// слушатели

// (function () {
//     popupCloseButtons.forEach(function (form) {
//         form.addEventListener("click", function (evt) {
//             const popup = evt.target.closest(".popup");
//             closePopup(popup);
//         });
//     });

//     allPopups.forEach(function (popup) {
//         popup.addEventListener("mousedown", function (evt) {
//             if (evt.target.classList.contains("popup")) {
//                 closePopup(popup);
//             };
//         });
//     });
// })();

// popupEditButton.addEventListener("click", function () {
//     editProfile();
// });

// рендеринг карточек из массива и создание карточки из попапа

//initialCards.forEach((card) => {
//    cards.append(createCard(card.name, card.image, card.alt));
// });

// initialCards.forEach((card) => {
//     cards.append(createCard(card, '.place-template'));
// });

// addFormElement.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     cards.prepend(createCard(placeInputTitle.value, placeInputLink.value));
//     addFormElement.reset();
// });
