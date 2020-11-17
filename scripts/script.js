// кнопки

addconst popupEditButton = document.querySelector('.button_type_edit');
const popupAddButton = document.querySelector('.button_type_add');

const editFormElement = document.querySelector('.popup__input-container_type_edit');
const cardTitleInput = document.querySelector('.popup__input_type_element-title');
const cardImageInput = document.querySelector('.popup__input_type_element-image');

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

// закрыть попап при нажатии на крестик и при сабмите

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

// добавление карточки

function openAddCardPopup() {
    addCardPopup.classList.add('popup_opened');
    }
  
popupAddButton.addEventListener('click', openAddCardPopup);

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

const getCards = (card) => {
    const cardElement = document.querySelector('.element-template').content.cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title').textContent = card.name;
    const cardImage = cardElement.querySelector('.element__image').src = card.link;
    const cardDeleteButton = cardElement.querySelector('.button_type_delete');

    cardDeleteButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        const deletedCard = evt.target.closest('.element');
        deletedCard.remove();
            });

        cards.append(cardElement);
        };

const addFormElement = document.querySelector('.popup__input-container_type_add');

addFormElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
                
                const newCard = getCards({
                    name: cardTitleInput.value, 
                    link: cardImageInput.value
                })
                addFormElement.reset();
    })

// function addCard (card) {
//     const cardElement = document.querySelector('.element-template').content.cloneNode(true);
//     const cardTitle = cardElement.querySelector('.element__title').textContent = card.name;
//     const cardImage = cardElement.querySelector('.element__image').src = card.link;

//     cards.prepend(cardElement);
// }
//     addFormElement.addEventListener('submit', function (evt) {
//             evt.preventDefault();
//             const newCard = addCard({
//                 name: cardTitleInput.value, 
//                 link: cardImageInput.value
//             })
    
//             cards.prepend(newCard);
//             addFormElement.reset();
// })
    




// cardElement.querySelector('.button_type_delete').addEventListener('click', (evt) => {
//     evt.preventDefault;

//     const deletedCard = evt.target.closest('element');
//     deleteCard(deletedCard);

initialCards.forEach((card) => {
    getCards(card);
}
);



