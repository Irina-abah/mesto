
let popupEditButton = document.querySelector('.button_type_edit');
let popupCloseButton = document.querySelector('.button_type_close');
let popupAddButton = document.querySelector('.button_type_add');
let formElement = document.querySelector('.popup__input-container');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = document.querySelector('#profile-name');
let inputTitle = document.querySelector('#profile-title');
let elementTitle = document.querySelector('#element-title');
let elementImage = document.querySelector('#element-image');
let editProfilePopup = document.querySelector('.popup_type_edit');
let addCardPopup = document.querySelector('.popup_type_add');
let popup = document.querySelector('.popup');
let popupTitle = document.querySelectorAll('.popup__title');


// открытие и закрытие попапа

// function openPopup() {
//     popup.classList.add('popup_opened');
// }


function closePopup() {
    popup.classList.remove('popup_opened');
}

// редактирование профиля

function editProfile() {

    popupEditButton.addEventListener('click', () => {
        editProfilePopup.classList.add('popup_opened');
    });
    
        inputName.value = profileName.textContent;
        inputTitle.value = profileTitle.textContent;
     
}
editProfile();

// добавление картинки

function editProfile() {
        
    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
 
}
editProfile();


function formSubmit (evt) {
    evt.preventDefault();
    closePopup();

    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
}


// popupAddButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmit);