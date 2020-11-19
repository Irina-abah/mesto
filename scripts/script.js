const popupEditButton = document.querySelector('.button_type_edit');
const popupAddButton = document.querySelector('.button_type_add');

const editFormElement = document.querySelector('.popup__input-container_type_edit');
const addFormElement = document.querySelector('.popup__input-container_type_add');

const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const inputName = document.querySelector('#profile-name');
const inputTitle = document.querySelector('#profile-title');

const editProfilePopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add');
const previewPopup = document.querySelector('.popup_type_preview');

const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const cardTemplate = document.querySelector('.element-template').content;
const cards = document.querySelector('.elements__list');

const root = document.querySelector('.root');

// редактирование профиля

function openEditProfilePopup() {
    editProfilePopup.classList.add('popup_opened');

    inputName.value = profileName.textContent;
    inputTitle.value = profileTitle.textContent;
    }

editFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        profileName.textContent = inputName.value;
        profileTitle.textContent = inputTitle.value;
        
});

// закрыть любой попап при нажатии на крестик и при сабмите

function closePopup() {
   
   const popupCloseButtons = document.querySelectorAll('.button_type_close');
   const inputForms = root.querySelectorAll('.popup__input-container');
        
   popupCloseButtons.forEach(function(btn) {
            btn.addEventListener('click', function(evt) {
                evt.preventDefault();
                const popup = evt.target.closest('.popup');
                popup.classList.remove('popup_opened');
        });
    });

    inputForms.forEach(function(btn) {
        btn.addEventListener('submit', function(evt) {
            evt.preventDefault();
            const popup = evt.target.closest('.popup');
            popup.classList.remove('popup_opened');
    });
});

};
   
closePopup();

// рендеринг карточек

const initialCards = [
    {
        
        name: '12 Апостолов',
        link: './images/grid-twelve-apostles-australia.jpg'
    },
    {
        name: 'Исландия',
        link: './images/grid-seljalandsfoss-iceland.jpg'
    },
    {
        name: 'Котор',
        link: './images/grid-kotor-montenegro.jpg'
    },
    {
        
        name: 'Шамони',
        link: './images/grid-chamonix-france.jpg'
    },
    {
        
        name: 'Будва',
        link: './images/grid-budva-montenegro.jpg'
    },
    {
        name: 'Корраловый Риф',
        link: './images/grid-great-barrier-reef-australia.jpg'
    }
]; 




function deleteCard(evt) {
    evt.preventDefault();
    const deletedCard = evt.target.closest('.element');
    deletedCard.remove();
}

function likeCard(evt) {
    evt.target.classList.toggle('element__like_active');
}

function previewImage(evt) {
    previewPopup.classList.add('popup_opened');
    const openedElement = evt.target.closest('.element');
    // return openedElement;

    console.log(openedElement);
    popupImage.src = openedElement.querySelector('.element__image').src;
    popupImageTitle.innerHTML = openedElement.querySelector('.element__title').textContent;
}


function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardDeleteButton = cardElement.querySelector('.button_type_delete');
    const cardLikeButton = cardElement.querySelector('.element__like');
    const templateCardName = cardElement.querySelector('.element__title');
    const templateCardImage = cardElement.querySelector('.element__image');
    templateCardImage.addEventListener('click', previewImage);
    cardDeleteButton.addEventListener('click', deleteCard);
    cardLikeButton.addEventListener('click', likeCard);
  
    templateCardName.textContent = card.name;
    templateCardImage.src = card.link;
    
    cards.prepend(cardElement);
}; 

initialCards.forEach(createCard);

// открытие попапа добавления карточки

function openAddCardPopup() {
    addCardPopup.classList.add('popup_opened');
}

// добавить карточку из попапа
function addNewCard() {
    const templateCardName = addFormElement.querySelector('.popup__input_type_element-title').value;
    const templateCardImage = addFormElement.querySelector('.popup__input_type_element-image').value;

    const newCard = createCard ({
            name: templateCardName, 
            link: templateCardImage
        }); 
        addFormElement.reset();
}

popupAddButton.addEventListener('click', openAddCardPopup);
popupEditButton.addEventListener('click', openEditProfilePopup);
addFormElement.addEventListener('submit', addNewCard);
