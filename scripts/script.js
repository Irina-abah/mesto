// // открытие и закрытие попапа
// let editPopup = document.querySelector('.popup_type_edit');
// let addPopup = document.querySelector('.popup_type_add');
// let popupOpened = document.querySelector('.popup_opened');
// let popupEditButton = document.querySelector('.button_type_edit');
// let popupCloseButton = document.querySelector('.button_type_close');
// let popupAddButton = document.querySelector('.button_type_add');
// let formElement = document.querySelector('.popup__input-container');
// let profileName = document.querySelector('.profile__name');
// let profileTitle = document.querySelector('.profile__title');
// let inputName = document.querySelector('#profile-name');
// let inputTitle = document.querySelector('#profile-title');
// let elementTitle = document.querySelector('#element-title');
// let elementImage = document.querySelector('#element-image');

// function openEditPopup() {
//     editPopup.classList.add('popup_opened');
//     inputName.value = profileName.textContent;
//     inputTitle.value = profileTitle.textContent;
// }

// function openAddPopup() {
//     addPopup.classList.add('popup_opened');
// }


// function closePopup() {
//     editPopup.classList.remove('popup_opened');
//     addPopup.classList.remove('popup_opened');
// }

// // редактирование формы

// function formSubmit (evt) {
//     evt.preventDefault();
//     closePopup();

//     profileName.textContent = inputName.value;
//     profileTitle.textContent = inputTitle.value;
// }

// popupEditButton.addEventListener('click', openEditPopup);
// popupAddButton.addEventListener('click', openAddPopup);
// popupCloseButton.addEventListener('click', closePopup);
// formElement.addEventListener('submit', formSubmit);

let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
const root = document.querySelector('.root');
let popupEditButton = document.querySelector('.button_type_edit');
let popupCloseButton = document.querySelector('.button_type_close');
let popupAddButton = document.querySelector('.button_type_add');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__input-container');


function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}



function editPopup () {

    const popapTemplate = document.querySelector('#popup').content;
    const popapElement = popapTemplate.cloneNode(true);

    popapElement.querySelector('.popup__title').textContent = 'Редактировать профиль';
    popapElement.querySelector('.popup__input').value = profileName.textContent;
    popapElement.querySelector('.popup__input').value = profileTitle.textContent;
    popapElement.querySelector('.button_type_submit').textContent = 'Сохранить';

    root.append(popapElement);
}


popupEditButton.addEventListener('click', editPopup);
// popupAddButton.addEventListener('click', openAddPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmit);

