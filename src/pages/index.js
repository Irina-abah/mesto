import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

import './index.css';

import {
    editFormElement,
    addFormElement,
    editAvatarElement,
    inputName,
    inputTitle,
    cards,
    validationConfig,
    popupSaveProfileButton, 
    popupSaveCardButton, 
    popupSaveAvatarButton,
    confirmDeleteElement, 
    popupConfirmDeleteButton
} from "../utils/constants.js";

const popupAddButton = document.querySelector(".button_type_add");
const popupEditButton = document.querySelector(".button_type_edit");
const popupEditAvatarButton = document.querySelector(".button_type_avatar-edit");

const api = new Api({
    address: "https://mesto.nomoreparties.co/v1/cohort-19",
    headers: {
      authorization: "56edb7fc-fa8b-4fc3-a429-04b774323c5f",
      "Content-Type": "application/json"
    }
  });

// валидация

const editCardValidation = new FormValidator(validationConfig, editFormElement);
const addCardValidation = new FormValidator(validationConfig, addFormElement);
const editAvatarValidation = new FormValidator(validationConfig, editAvatarElement)

editCardValidation.enableValidation();
addCardValidation.enableValidation();
editAvatarValidation.enableValidation();

// попап с картинкой

const imagePreviewPopup = new PopupWithImage(".popup_type_preview");
imagePreviewPopup.setEventListeners();

// пользователь

const userInfo = new UserInfo({
    profileNameSelector: ".profile__name",
    profileTitleSelector: ".profile__title",
    avatarSelector: ".profile__avatar"
});

let userId = "";

// рендеринг карточек и данных пользователя

Promise.all([
    api.getUserData(),
    api.getInitialCards()
])
.then((res) => {    
    userId = res[0]._id;
    userInfo.setUserInfo({
        name: res[0].name,
        about: res[0].about
    });
    userInfo.setUserAvatar(res[0].avatar);
    allCards.renderItems(res[1]);
})
.catch(err => console.log(err));

const profilePopup = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    handleSubmitForm: (data) => {
        popupSaveProfileButton.textContent = "Сохранение..."
        api.changeUserData(data)
        .then((res) => {
            userInfo.setUserInfo({
                name: res.name, 
                about: res.about
            });
            profilePopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupSaveProfileButton.textContent = "Сохранить"   
        })
    }
});

const editAvatarPopup = new PopupWithForm({
    popupSelector: ".popup_type_avatar",
    handleSubmitForm: (formData) => {
        popupSaveAvatarButton.textContent = "Сохранение..."
        api.editAvatar(formData)
        .then((res)=> {
            userInfo.setUserAvatar({
                avatar: res.avatar
            });
            editAvatarPopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupSaveAvatarButton.textContent = "Сохранение..."
        })
    }
})

// карточки - рендеринг и добавление новой

function createCard(card) {
    const cardElement = new Card({
        link: card.link,
        name: card.name,
        likes: card.likes,
        cardId: card._id,
        userId,
        ownerId: card.owner._id
    },
        '.place-template',
        () => {
            imagePreviewPopup.open(card)
        },
        () => {
            // я знаю, что здесь проблема с лайками - они сейчас все закрашены и не обновляется их число. Но на сервер данные передаются. К сожалению, я пока не нашла способ это исправить, а работу отдаю на проверку из-за дедлайна. Извините за недоделанную до конца задачу. Такая же проблема есть с удалением карточки.
            if (card.checkIsLiked) {
                api.removeLikeCard(card)
                .then(() =>  {
                    card.setCardLike 
                })
                .catch((err) => {
                    console.log(err);
                })

            } else {
                api.addLikeCard(card)
                .then(() =>  { 
                    card.setCardLike          
                })
                .catch((err) => {
                    console.log(err);
                    })
            }
        },
        () => {
            confirmDeletePopup.card = card;
            confirmDeletePopup.open(card);
        }).generateCard();

    return cardElement;
};

const allCards = new Section({
    renderer: (card) => {
        const cardElement = createCard(card);
        allCards.renderItem(cardElement);
    }
}, cards);

const submitCardPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    handleSubmitForm: (card) => {
        popupSaveCardButton.textContent = "Идет создание...";
        api.addCard(card)
        .then((res) => {
            const cardElement = createCard(res);
            allCards.addNewItem(cardElement);
            submitCardPopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupSaveCardButton.textContent = "Создать"
        })  
    }
});

// удаление карточки попап

    const confirmDeletePopup = new PopupWithForm({
        popupSelector: ".popup_type_confirm",
        handleSubmitForm: () => {
            popupConfirmDeleteButton.textContent = "Удаление...";
            api.deleteCard(confirmDeletePopup.card)
            .then(() => {
                confirmDeletePopup.card.removeCard();
                confirmDeletePopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
            popupConfirmDeleteButton.textContent = "Да"
            })  
        }

    }) 

// слушатели

popupAddButton.addEventListener("click", () => {

    submitCardPopup.open();
    addCardValidation.resetForm();
});

popupEditButton.addEventListener("click", () => {

    profilePopup.open();

    const userProfile = userInfo.getUserInfo();
    inputName.value = userProfile.name;
    inputTitle.value = userProfile.about;

    editCardValidation.resetForm();
});

popupEditAvatarButton.addEventListener("click", () => {
    editAvatarPopup.open();

    editAvatarValidation.resetForm();
})