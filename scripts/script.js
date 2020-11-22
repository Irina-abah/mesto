// const popupEditButton = document.querySelector('.button_type_edit');
// const popupAddButton = document.querySelector('.button_type_add');

// const editFormElement = document.querySelector('.popup__input-container_type_edit');
// const addFormElement = document.querySelector('.popup__input-container_type_add');

// const profileName = document.querySelector('.profile__name');
// const profileTitle = document.querySelector('.profile__title');
// const inputName = document.querySelector('#profile-name');
// const inputTitle = document.querySelector('#profile-title');

// const editProfilePopup = document.querySelector('.popup_type_edit');
// const addCardPopup = document.querySelector('.popup_type_add');
// const previewPopup = document.querySelector('.popup_type_preview');

// const popupImage = document.querySelector('.popup__image');
// const popupImageTitle = document.querySelector('.popup__image-title');
// const cardTemplate = document.querySelector('.element-template').content;
// const cards = document.querySelector('.elements__list');

// const root = document.querySelector('.root');

// // редактирование профиля

// function openEditProfilePopup() {
//     editProfilePopup.classList.add('popup_opened');

//     inputName.value = profileName.textContent;
//     inputTitle.value = profileTitle.textContent;
//     }

// editFormElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
        
//         profileName.textContent = inputName.value;
//         profileTitle.textContent = inputTitle.value;
        
// });

// // закрыть любой попап при нажатии на крестик и при сабмите

// function setClosePopupListeners() {
   
//    const popupCloseButtons = document.querySelectorAll('.button_type_close');
//    const inputForms = root.querySelectorAll('.popup__input-container');
        
//    popupCloseButtons.forEach(function(btn) {
//             btn.addEventListener('click', function(evt) {
//                 evt.preventDefault();
//                 const popup = evt.target.closest('.popup');
//                 popup.classList.remove('popup_opened');
//         });
//     });

//     inputForms.forEach(function(btn) {
//         btn.addEventListener('submit', function(evt) {
//             evt.preventDefault();
//             const popup = evt.target.closest('.popup');
//             popup.classList.remove('popup_opened');
//     });
// });

// };
   
// setClosePopupListeners();

// // рендеринг карточек

// const initialCards = [
//     {
        
//         name: '12 Апостолов',
//         link: './images/grid-twelve-apostles-australia.jpg',
//         alt: 'Пляж Двенадцать Апостолов в Австралии'
//     },
//     {
//         name: 'Исландия',
//         link: './images/grid-seljalandsfoss-iceland.jpg',
//         alt: 'Вид на водопад Селйяландсфосс'
//     },
//     {
//         name: 'Котор',
//         link: './images/grid-kotor-montenegro.jpg',
//         alt: 'Вид сверху на бухту города Котор'
//     },
//     {
        
//         name: 'Шамони',
//         link: './images/grid-chamonix-france.jpg',
//         alt: 'Заснеженные горы в Шамони'
//     },
//     {
        
//         name: 'Будва',
//         link: './images/grid-budva-montenegro.jpg',
//         alt: 'Вид моря в Будве'
//     },
//     {
//         name: 'Корраловый Риф',
//         link: './images/grid-great-barrier-reef-australia.jpg',
//         alt: 'Большой Корраловый Риф'
//     }
// ]; 




// function deleteCard(evt) {
//     evt.preventDefault();
//     const deletedCard = evt.target.closest('.element');
//     deletedCard.remove();
// }

// function likeCard(evt) {
//     evt.target.classList.toggle('element__like_active');
// }

// function previewImage(evt) {
//     previewPopup.classList.add('popup_opened');
//     const openedElement = evt.target.closest('.element');

//     console.log(openedElement);
//     popupImage.src = openedElement.querySelector('.element__image').src;
//     popupImageTitle.innerHTML = openedElement.querySelector('.element__title').textContent;
// }


// function createCard(card) {
//     const cardElement = cardTemplate.cloneNode(true);
//     const cardDeleteButton = cardElement.querySelector('.button_type_delete');
//     const cardLikeButton = cardElement.querySelector('.element__like');
//     const templateCardName = cardElement.querySelector('.element__title');
//     const templateCardImage = cardElement.querySelector('.element__image');
//     templateCardImage.addEventListener('click', previewImage);
//     cardDeleteButton.addEventListener('click', deleteCard);
//     cardLikeButton.addEventListener('click', likeCard);
  
//     templateCardName.textContent = card.name;
//     templateCardImage.src = card.link;
//     templateCardImage.alt = card.alt;
    
//     cards.prepend(cardElement);
// }; 

// initialCards.forEach(createCard);

// // открытие попапа добавления карточки

// function openAddCardPopup() {
//     addCardPopup.classList.add('popup_opened');
// }

// // добавить карточку из попапа
// function addNewCard() {
//     const templateCardName = addFormElement.querySelector('.popup__input_type_element-title').value;
//     const templateCardImage = addFormElement.querySelector('.popup__input_type_element-image').value;

//     const newCard = createCard ({
//             name: templateCardName, 
//             link: templateCardImage
//         }); 
//         addFormElement.reset();
// }

// popupAddButton.addEventListener('click', openAddCardPopup);
// popupEditButton.addEventListener('click', openEditProfilePopup);
// addFormElement.addEventListener('submit', addNewCard);


const popupEditButton = document.querySelector('.button_type_edit');
const popupAddButton = document.querySelector('.button_type_add');

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
   
   const popupCloseButtons = document.querySelectorAll('.button_type_close');
   const inputForms = root.querySelectorAll('.popup__input-container');
        
   popupCloseButtons.forEach(function(btn) {
            btn.addEventListener('click', function(evt) {
                evt.preventDefault();
                const popup = evt.target.closest('.popup');
                closePopup(popup);
        });
    });

    inputForms.forEach(function(btn) {
        btn.addEventListener('submit', function(evt) {
            evt.preventDefault();
            const popup = evt.target.closest('.popup');
            closePopup(popup);
    });
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
    evt.preventDefault();
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


// добавить карточку из попапа
function addNewCard(cardElement) {
    openPopup(addPlacePopup);

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
        
}

popupAddButton.addEventListener('click', function () {
    addNewCard();
});

popupEditButton.addEventListener('click', function () {
    editProfile();
});

