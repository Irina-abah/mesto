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
        const popup = evt.target.closest('.popup');
        const submitButton = addFormElement.querySelector(validationConfig.submitButtonSelector);

        const newCard = createNewCard ({
            name: templateCardName, 
            link: templateCardImage
        }); 
        
        cards.prepend(newCard);
        toggleButtonState(submitButton, false, validationConfig);
        closePopup(popup);
        addFormElement.reset();
    })

