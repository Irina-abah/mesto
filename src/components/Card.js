export class Card {
    constructor({ 
        link, 
        name,  
        likes, 
        cardId,
        userId,
        ownerId 
    }, 
    templateSelector, 
    handleCardClick, 
    handleLikeClick, 
    handleDeleteClick) {
        this._link = link;
        this._name = name;
        this._alt = name;
        this._likes = likes;
        this._cardId = cardId;
        this._userId = userId;
        this._ownerId = ownerId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
        this._element = this._getTemplate();    
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .cloneNode(true);

        cardElement.querySelector(".place__image").src = this._link;
        cardElement.querySelector(".place__title").textContent = this._name;
        cardElement.querySelector(".place__image").alt = this._alt;
        cardElement.querySelector(".place__like-count").textContent = `${this._likes.length}`;

        return cardElement;
    }

    _setEventListeners() {
        this._element
            .querySelector(".place__image")
            .addEventListener("click", this._handleCardClick.bind(this));
        this._element
            .querySelector(".place__like")
            .addEventListener("click", this._handleLikeClick.bind(this));
        this._element
            .querySelector(".button_type_delete")
            .addEventListener("click", this._handleDeleteClick.bind(this));
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }


    checkIsLiked() {
        return this._element
        .querySelector(".place__like")
        .classList
        .contains("place__like_active")
    }

    setCardLike() {
        const likeStatus = this._likes.some((item) => item._id === this._userId);
        
        if (likeStatus !== -1) {
            this._element.querySelector(".place__like").classList.add("place__like_active");
        } else {
            this._element.querySelector(".place__like").classList.remove("place__like_active");
        }
    }

    generateCard() {
        this._setEventListeners();
        this.setCardLike(this._likes);

        if (this._userId !== this._ownerId) {
            this._element.querySelector(".button_type_delete").remove();
          };

        return this._element;
    }

}