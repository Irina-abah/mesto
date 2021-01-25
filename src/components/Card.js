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
            .querySelector(".button_type_delete")
            .addEventListener("click", this._handleClickDeleteCard);
        this._element
            .querySelector(".place__like")
            .addEventListener("click", this._handleClickLikeCard);
        this._element
            .querySelector(".place__image")
            .addEventListener("click", this._handleCardClick);
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    // getCardId() {
    //     return this._cardId;
    // }

    isLiked() {
        return this._element
        .querySelector(".place__like")
        .contains("place__like_active")
    }

    setCardLikes(likes) {
        const likeState = likes.some((user) => user._id === this._userId);

        if (likeState !== -1) {
            this._element.querySelector(".place__like").classList.add(".place__like_active")
        } else {
            this._element.querySelector(".place__like").classList.remove(".place__like_active")
        }
    }

    // _handleClickDeleteCard(evt) {
    //     const deletedElement = evt.target.closest(".place");
    //     deletedElement.remove();
    //     this._element = null;
    // }

    // _handleClickLikeCard(evt) {
    //     evt.target.classList.toggle("place__like_active");
    // }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        if (this._userId !== this._ownerId) {
            this._element.querySelector(".button_type_delete").remove();
          }

        this.setCardLikes(this._likes)
        // if (this._likes.some((like) => like._id === this._userId)) {
        //     this._element.querySelector(".place__like").classList.add(".place__like_active")
        // }

        return this._element;
    }

}