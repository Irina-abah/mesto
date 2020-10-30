// открытие и закрытие попапа
let popup = document.querySelector('.popup');
let popupOpened = document.querySelector('.popup_opened');
let popupEditButton = document.querySelector('.button_type_edit');
let popupCloseButton = document.querySelector('.button_type_close');
let formElement = document.querySelector('.popup__input-container');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = document.querySelector('#profile-name');
let inputTitle = document.querySelector('#profile-title');

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

// редактирование формы

function formSubmit (evt) {
    evt.preventDefault();
    closePopup();

    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
}

popupEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmit);

