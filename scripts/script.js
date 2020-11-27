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
    validateOpenedPopup(popup);
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

// рендеринг карточек

const initialCards = [
    {
        
        name: 'Корраловый Риф',
        link: './images/grid-great-barrier-reef-australia.jpg',
        alt: 'Большой Корраловый Риф'
    },
    {
        name: 'Будва',
        link: './images/grid-budva-montenegro.jpg',
        alt: 'Вид моря в Будве'
    },
    {
        name: 'Шамони',
        link: './images/grid-chamonix-france.jpg',
        alt: 'Заснеженные горы в Шамони'
    },
    {
        name: 'Котор',
        link: './images/grid-kotor-montenegro.jpg',
        alt: 'Вид сверху на бухту города Котор'
    },
    {
        
        name: 'Исландия',
        link: './images/grid-seljalandsfoss-iceland.jpg',
        alt: 'Вид на водопад Селйяландсфосс'
    },
    {
        name: '12 Апостолов',
        link: './images/grid-twelve-apostles-australia.jpg',
        alt: 'Пляж Двенадцать Апостолов в Австралии'
    }
]; 


function deleteCard(evt) {
    const deletedCard = evt.target.closest('.place');
    deletedCard.remove();
}

function likeCard(evt) {
    evt.target.classList.toggle('place__like_active');
}

function previewImage(card) {
    openPopup(previewPopup);
    popupImage.src = card.link;
    popupImageTitle.textContent = card.name;
}

function createNewCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardDeleteButton = cardElement.querySelector('.button_type_delete');
    const cardLikeButton = cardElement.querySelector('.place__like');
    const templateCardName = cardElement.querySelector('.place__title');
    const templateCardImage = cardElement.querySelector('.place__image');
    templateCardImage.addEventListener('click', () => 
    previewImage(card));
    cardDeleteButton.addEventListener('click', deleteCard);
    cardLikeButton.addEventListener('click', likeCard);
  
    templateCardName.textContent = card.name;
    templateCardImage.src = card.link;
    templateCardImage.alt = card.alt;
    
    return cardElement;
}; 

initialCards.forEach((item) => {
    const newCard = createNewCard(item)
    cards.append(newCard);
});

addFormElement.addEventListener('submit', function(evt) {
        
        const templateCardName = placeInputTitle.value;
        const templateCardImage = placeInputLink.value;

        const newCard = createNewCard ({
            name: templateCardName, 
            link: templateCardImage
        }); 
        
        cards.prepend(newCard);
        addFormElement.reset();
    })

popupAddButton.addEventListener('click', function () {
    openPopup(addPlacePopup);
});

popupEditButton.addEventListener('click', function () {
    editProfile();
});

// validation

// function validateOpenedPopup(popup) {
//     const allInputs = popup.querySelectorAll('.popup__input');

//     allInputs.forEach((input) => {
//         if(input.validity.valid) {
//             input.classList.remove('popup__input_state_invalid');
//             const error = popup.querySelector(`#${input.id}-error`);
//             error.classList.remove('input-error_active');
//             error.textContent = '';

//         }
//     })
// }

// function showInputError(form, input, errorMessage) {
//    const error = form.querySelector(`#${input.id}-error`);
//    error.textContent = input.validationMessage;
//    error.classList.add('input-error_active');
//    input.classList.add('popup__input_state_invalid');
// }

// function hideInputError(form, input) {
//    const error = form.querySelector(`#${input.id}-error`);
//    error.textContent = '';
//    error.classList.remove('input-error_active');
//    input.classList.remove('popup__input_state_invalid');
// }

// function checkInputValidity(form, input) {
//     if (!input.validity.valid) {
//         showInputError(form, input, input.validationMessage);
//     } else {
//         hideInputError(form, input);
//     }
// }

// function isInvalidInput(inputList) {
//     return inputList.some((input) => {
//         return !input.validity.valid;
//     })
// }

// function toggleButtonState(inputList, button) {
//      if(isInvalidInput(inputList)) {
//          button.classList.add('button_disabled');
//      } else {
//         button.classList.remove('button_disabled');
//      }
// }


// function setEventListeners(form) {
//     const inputList = Array.from(form.querySelectorAll('.popup__input'));
//     const button = form.querySelector('.button_type_submit');

//     toggleButtonState(inputList, button);

//     inputList.forEach((input) => {
//         input.addEventListener('input', () => {
//             checkInputValidity(form, input);
//             toggleButtonState(inputList, button);
//         })
//     })
        
//     };

// function enableValidation() {
//     Array.from(inputForms).forEach((form) => {
//         setEventListeners(form);

//         form.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//         });

//         // const submitButton = document.querySelectorAll(config.submitButtonSelector);
//         // setButtonState(submitButton, form.checkInputValidity(), config)
//    });
// }

// enableValidation();

// // function validateOnSubmit() {

// // }

// // const validationConfig = {
// //     formSelector: '.popup__input-container',
// //     inputSelector: '.popup__input',
// //     submitButtonSelector: '.button_type_submit',
// //     inactiveButtonClass: 'button_disabled',
// //     inputErrorClass: 'popup__input_state_invalid',
// //     errorClass: 'input__error_visible'
// //   };
 
  




function validateOpenedPopup(popup) {
    const allInputs = popup.querySelectorAll('.popup__input');

    allInputs.forEach((input) => {
        if(input.validity.valid) {
            input.classList.remove('popup__input_state_invalid');
            const error = popup.querySelector(`#${input.id}-error`);
            error.classList.remove('input-error_active');
            error.textContent = '';

        }
    })
}



function showInputError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    // error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
}

function hideInputError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    // error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
}

function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showInputError(form, input, config);
    } else {
        hideInputError(form, input, config);
    }
}

function toggleButtonState(button, isActive, config) {
     if(!isActive) {
         button.classList.add(config.inactiveButtonClass);
         button.disabled = true;
     } else {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
     }
}

function setEventListeners(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    Array.from(inputList).forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            toggleButtonState(submitButton, form.checkValidity(), config);
        })
    })
        
};

function enableValidation(config) {
    const allInputForms = document.querySelectorAll(config.formSelector);
    Array.from(allInputForms).forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            form.reset();
        });

        const submitButton = form.querySelectorAll(config.submitButtonSelector);
        toggleButtonState(submitButton, form.checkValidity(), config)
    });
}

// function validateOnSubmit() {

// }

const validationConfig = {
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_state_invalid',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_disabled',
    errorClass: 'input__error_active'
  };

  enableValidation(validationConfig);