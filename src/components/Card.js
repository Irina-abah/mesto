export class Card {
    constructor({ link, name, likes, cardId, userId, ownerId }, templateSelector, handleCardClick, handleLikeClick, handleDeleteClick) {
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
        this._likeButton = this._element.querySelector(".place__like");
        this._likeCount = this._element.querySelector(".place__like-count");
        this._cardImage = this._element.querySelector(".place__image");
        this._cardTitle = this._element.querySelector(".place__title");
        this._cardAlt = this._element.querySelector(".place__image");
        this._cardElementId = this._element.querySelector(".place");
        this._deleteButton = this._element.querySelector(".button_type_delete");
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector(".place")
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._cardImage
            .addEventListener("click", this._handleCardClick);
        this._likeButton
            .addEventListener("click", this._handleLikeClick);
        this._deleteButton
            .addEventListener("click", this._handleDeleteClick);
    }

    removeCard() {
        this._element.remove();
        this._element = null;

    }


    checkIsLiked() {
        return this._likeButton
        .classList
        .contains("place__like_active")
    }

    setCardLike(likes) { 
        this._likes = likes;
        
        const likeStatus = likes.some((owner) => {
            return owner._id === this._userId
        });

        if (likeStatus !== -1) {
            this._likeButton.classList.toggle("place__like_active");
            this._likeCount.textContent = likes.length || "";
        }
        
    }

    _setLikeStatus(likes) {
        this._likes = likes;

        likes.forEach((like) => {
            if (like._id === this._userId) {
                this._likeButton.classList.add("place__like_active");
            }
        })
    }


    generateCard() {
        this._setEventListeners();
        this._setLikeStatus(this._likes)

        this._likeCount.textContent = this._likes.length;

        this._cardImage.src = this._link;
        this._cardTitle.textContent = this._name;
        this._cardAlt.alt = this._alt;

        if (this._userId !== this._ownerId) {
            this._element.querySelector(".button_type_delete").remove();
          };

        

        if (this._likes.length === 0) {
            this._likeCount.textContent = "";
        } 

        return this._element;
    }

}