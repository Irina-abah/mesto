// кнопки

const popupEditButton = document.querySelector('.button_type_edit');
const popupCloseButtons = document.querySelectorAll('.button_type_close');
const popupAddButton = document.querySelector('.button_type_add');

const formElement = document.querySelector('.popup__input-container');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');

let inputName = document.querySelector('#profile-name');
let inputTitle = document.querySelector('#profile-title');
let elementTitle = document.querySelector('#element-title');
let elementImage = document.querySelector('#element-image');

const editProfilePopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add');
let popupTitles = document.querySelectorAll('.popup__title');


// открытие попапа EditProfile

function openEditProfilePopup() {
    editProfilePopup.classList.add('popup_opened');
    }

// открытие попапа addCard

function openAddCardPopup() {
    addCardPopup.classList.add('popup_opened');
    }


// редактирование профиля

function editProfile() {
        
    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
 
}
editProfile();

function formSubmit (evt) {
    evt.preventDefault();
    

    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
    closePopup();
}


popupAddButton.addEventListener('click', openAddCardPopup);
popupEditButton.addEventListener('click', openEditProfilePopup);
// popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmit);

// popupCloseButtons.addEventListener('click', evt => {

//     popupCloseButtons.Array.classList.remove('popup_opened');

//     else
// });

//     popupCloseButtons.forEach(function(btn) {
//         btn.addEventListener('click', function(evt) {
//             if (evt.target.classList.contains('popup_opened')) {
//                     .classList.remove('popup_opened');
//             }
//         })
//     })
// }
// closePopup();

function closePopup() {
   popupCloseButtons.forEach(function(btn) {
       btn.addEventListener('click', function(evt) {
               evt.preventDefault();
              
               const popup = evt.target.closest('.popup');
               popup.classList.remove('popup_opened');
    
       })
   })
}

closePopup();