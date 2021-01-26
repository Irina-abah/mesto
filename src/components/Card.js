export class Card {
    // constructor({ link, name, alt }, templateSelector, handleCardClick) {
    //     this._link = link;
    //     this._name = name;
    //     this._alt = alt;
    //     this._templateSelector = templateSelector;
    //     this._handleCardClick = handleCardClick;
    // }

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
            .addEventListener("click", this._handleCardClick);
        this._element
            .querySelector(".place__like")
            .addEventListener("click", () => this._handleLikeClick());
        this._element
            .querySelector(".button_type_delete")
            .addEventListener("click", () => this._handleDeleteClick(this));
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }

    getId() {
        return this._cardId;
    }

    checkIsLiked() {
        return this._element
        .querySelector(".place__like")
        .classList
        .contains("place__like_active")
    }

    // _setCardLikes(likes) {

    //   return likes.some((like) => {
    //         return like._id === this._userId.id 
    //     })
    // }

    // _toggleLike(data) {
    //     if (data === true) {
    //         this._element.querySelector(".place__like").classList.add(".place__like_active");
    //         this._isLiked = true;
    //     } else {
    //         this._element.querySelector(".place__like").classList.remove(".place__like_active");
    //         this._isLiked = false;
    //     }
    // }


    setLikeCount(likes) {
        this._element.querySelector(".place__like-count").textContent = likes.length;
        if (this.checkIsLiked()) {
            this._element.querySelector(".place__like").classList.remove(".place__like_active");
        } else {
            this._element.querySelector(".place__like").classList.add(".place__like_active");
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        if (this._userId !== this._ownerId) {
            this._element.querySelector(".button_type_delete").remove();
          };

        if (this._likes.some((like) => {
            like._id === this._userId
        })) {
            this._element.querySelector(".place__like").classList.add(".place__like_active");
        }

        return this._element;
    }

}