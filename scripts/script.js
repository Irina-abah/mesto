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

const root = document.querySelector('.root');
const inputForms = root.querySelectorAll('.popup__input-container');

// открытие попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

// редактирование профиля

function editProfile() {
    openPopup(editProfilePopup);
    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
    }

editFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        profileName.textContent = inputName.value;
        profileTitle.textContent = inputTitle.value;
        
});

// закрыть любой попап при нажатии на крестик и при сабмите

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    
}

function setClosePopupListeners() {
       
    popupCloseButtons.forEach(function(form) {
            form.addEventListener('click', function(evt) {
                const popup = evt.target.closest('.popup');
                closePopup(popup);
        });
    });

     inputForms.forEach(function(form) {
        form.addEventListener('submit', function(evt) {
            evt.preventDefault();
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

    
    document.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape') {
            allPopups.forEach((popup) => {
                closePopup(popup);
            })
        };    
    });
 
};

   
setClosePopupListeners();