// открытие и закрытие попапа
const popup = document.querySelector('.popup');
const popupOpened = document.querySelector('.popup_opened');
const popupEditButton = document.querySelector('.button_type_edit');
const popupCloseButton = document.querySelector('.button_type_close');

popupEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

// редактирование формы

const formElement = document.querySelector('.popup__input-container');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = document.querySelector('#profile-name');
let inputTitle = document.querySelector('#profile-title');

inputName.value = profileName.textContent;
inputTitle.value = profileTitle.textContent;

function formSubmit (evt) {
    evt.preventDefault();
    closePopup();

    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
}

formElement.addEventListener('submit', formSubmit);

