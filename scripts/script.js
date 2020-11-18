// кнопки

const popupEditButton = document.querySelector('.button_type_edit');
const popupAddButton = document.querySelector('.button_type_add');

const editFormElement = document.querySelector('.popup__input-container_type_edit');
const addFormElement = document.querySelector('.popup__input-container_type_add');
const cardTitleInput = document.querySelector('.popup__input_type_element-title');
const cardImageInput = document.querySelector('.popup__input_type_element-image');
// const popapImage = document.querySelector('.popup__image');
// const popapImageTitle = document.querySelector('.popup__image-title');

const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');

const inputName = document.querySelector('#profile-name');
const inputTitle = document.querySelector('#profile-title');

const cards = document.querySelector('.elements__list');

const editProfilePopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add');
const previewPopap = document.querySelector('.popup_type_preview');
// const popupTitles = document.querySelectorAll('.popup__title');

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

popupEditButton.addEventListener('click', openEditProfilePopup);

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
        name: 'Корраловый Риф',
        link: './images/grid-great-barrier-reef-australia.jpg'
    },
    {
        name: 'Будва',
        link: './images/grid-budva-montenegro.jpg'
    },
    {
        name: 'Шамони',
        link: './images/grid-chamonix-france.jpg'
    },
    {
        name: 'Котор',
        link: './images/grid-kotor-montenegro.jpg'
    },
    {
        name: 'Исландия',
        link: './images/grid-seljalandsfoss-iceland.jpg'
    },
    {
        name: '12 Апостолов',
        link: './images/grid-twelve-apostles-australia.jpg'
    }
]; 

const addCards = (card) => {
    const cardElement = document.querySelector('.element-template').content.cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    const cardImage = cardElement.querySelector('.element__image');
    const cardDeleteButton = cardElement.querySelector('.button_type_delete');
    const cardLikeButton = cardElement.querySelector('.element__like');

    cardTitle.textContent = card.name;
    cardImage.src = card.link;

    cardDeleteButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        const deletedCard = evt.target.closest('.element');
        deletedCard.remove();
            });

    cardLikeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardImage.addEventListener('click', function (evt) {
        previewPopap.classList.add('popup_opened');
        const popapImage = document.querySelector('.popup__image');
        const popapImageTitle = document.querySelector('.popup__image-title');

        const previewImage = evt.target.closest('.element');
        
        popapImage.src = evt.target.src;
        popapImageTitle.textContent = card.name;

        
    })
    
    cards.prepend(cardElement);
};

// добавление новой карточки

function openAddCardPopup() {
    addCardPopup.classList.add('popup_opened');
    }
  
popupAddButton.addEventListener('click', openAddCardPopup);

addFormElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
                
                const newCard = addCards({
                    name: cardTitleInput.value, 
                    link: cardImageInput.value
                })
                addFormElement.reset();
    })
    

initialCards.forEach((card) => {
    addCards(card);
}
);
