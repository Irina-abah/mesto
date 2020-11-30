const popupEditButton = document.querySelector('.button_type_edit');
const popupAddButton = document.querySelector('.button_type_add');
const popupCloseButtons = document.querySelectorAll('.button_type_close');

const editFormElement = document.querySelector('.popup__input-container_type_edit');
const addFormElement = document.querySelector('.popup__input-container_type_add');
const placeInputTitle = addFormElement.querySelector('.popup__input_type_place-title');
const placeInputLink = addFormElement.querySelector('.popup__input_type_place-image');

const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const inputName = document.querySelector('#profile-name');
const inputTitle = document.querySelector('#profile-title');

const allPopups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup_type_edit');
const addPlacePopup = document.querySelector('.popup_type_add');
const previewPopup = document.querySelector('.popup_type_preview');

const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const cardTemplate = document.querySelector('.place-template').content;
const cards = document.querySelector('.places__list');
const ESCAPE_KEY = 'Escape';

const root = document.querySelector('.root');
const inputForms = root.querySelectorAll('.popup__input-container');


// открытие и закрытие попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);

    const form = popup.querySelector(validationConfig.formSelector);

    disableValidation(form, validationConfig);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

// редактирование профиля

function editProfile(popup) {
    openPopup(editProfilePopup);

    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;

    const form = editProfilePopup.querySelector(validationConfig.formSelector);

    const submitButton = editProfilePopup.querySelector(validationConfig.submitButtonSelector);
   
    toggleButtonState(submitButton, form.checkValidity(), validationConfig);
}

editFormElement.addEventListener('submit', (evt) => {
        
        profileName.textContent = inputName.value;
        profileTitle.textContent = inputTitle.value;
        
});

// закрыть по событиям: нажать на крестик, клавишу esc и клику вне области

function closeByEscape(evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.key === ESCAPE_KEY) {  
        closePopup(popupOpened);
        
    }
}

function setClosePopupListeners() {
       
    popupCloseButtons.forEach(function(form) {
            form.addEventListener('click', function(evt) {
                const popup = evt.target.closest('.popup');
                closePopup(popup);
        });
    });

    allPopups.forEach(function(popup) {
        popup.addEventListener('mousedown', function(evt) {
            if (evt.target.classList.contains('popup')) {
                closePopup(popup); 
                
            };   
        });
    });
 
};
  
setClosePopupListeners();

popupAddButton.addEventListener('click', function () {
    openPopup(addPlacePopup);
});

popupEditButton.addEventListener('click', function () {
    editProfile();
});

