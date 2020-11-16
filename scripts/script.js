// кнопки

const popupEditButton = document.querySelector('.button_type_edit');
const popupCloseButtons = document.querySelectorAll('.button_type_close');
const popupAddButton = document.querySelector('.button_type_add');

const editFormElement = document.querySelector('.popup__input-container_type_edit');
const addFormElement = document.querySelector('.popup__input-container_type_add');
const inputForms = document.querySelectorAll('.popup__input-container');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');

let inputName = document.querySelector('#profile-name');
let inputTitle = document.querySelector('#profile-title');
let elementTitle = document.querySelector('#element-title');
let elementImage = document.querySelector('#element-image');

const cards = document.querySelector('.elements__list');
const cardTitle = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image');

const editProfilePopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add');
let popupTitles = document.querySelectorAll('.popup__title');


// открытие попапа EditProfile

function openEditProfilePopup() {
    editProfilePopup.classList.add('popup_opened');

    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
    }

editFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        profileName.textContent = inputName.value;
        profileTitle.textContent = inputTitle.value;
        closePopup();
});

// открытие попапа addCard

function openAddCardPopup() {
    addCardPopup.classList.add('popup_opened');
    }

function addCard(cardTitle, cardImage) {
    const cardElement = document.querySelector('.element-template').content.cloneNode(true);
    cardElement.querySelector('.element__title').textContent = cardTitle;
    cardElement.querySelector('.element__image').src = cardImage;

    cards.prepend(cardElement);
}

addFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault();

    addCard(elementTitle.value, elementImage.value);

    addFormElement.reset();
    closePopup();
})

// function editFormSubmit (evt) {
//     evt.preventDefault();
    

//     profileName.textContent = inputName.value;
//     profileTitle.textContent = inputTitle.value;
//     closePopup();
// }


popupAddButton.addEventListener('click', openAddCardPopup);
popupEditButton.addEventListener('click', openEditProfilePopup);
// editFormElement.addEventListener('submit', editFormSubmit);

// function closePopup() {
//    popupCloseButtons.forEach(function(btn) {
//        btn.addEventListener('click', function(evt) {
//                evt.preventDefault();
              
//                const popup = evt.target.closest('.popup');
//                popup.classList.remove('popup_opened');
    
//        })
//    })
// }

function closePopup() {
    if (evt.target === popupCloseButtons) {
        popupCloseButtons.forEach(function(btn) {
            btn.addEventListener('click', function(evt) {
                    evt.preventDefault();
                    const popup = evt.target.closest('.popup');
                    popup.classList.remove('popup_opened');
    })    
    else {
        inputForms.forEach(function(btn) {
            btn.addEventListener('submit', function(evt) {
                    evt.preventDefault();
                    const popup = evt.target.closest('.popup');
                    popup.classList.remove('popup_opened');
    }
        })
    })
 }