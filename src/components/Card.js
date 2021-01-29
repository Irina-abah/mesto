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

        // let elem = this._element;
        // if (this._element.childNodes.length === 0) {
        //     elem = document.getElementById(this._cardId);
        // }
        this._likeCount.textContent = likes.length;

        if (likes.length === 0) {
            this._likeCount.textContent = ""
        }  
        
        const likeStatus = this._likes.findIndex((owner) => owner._id === this._userId);

        if (likeStatus !== -1) {
            this._likeButton.classList.toggle("place__like_active");
            // this._likeCount.textContent = this._likes.length;
        }
    }

    generateCard() {
        
        this._setEventListeners();
        this.setCardLike(this._likes);

        this._cardImage.src = this._link;
        this._cardTitle.textContent = this._name;
        this._cardAlt.alt = this._alt;

        if (this._userId !== this._ownerId) {
            this._element.querySelector(".button_type_delete").remove();
          };

        return this._element;
    }

}

// капитанский код

// export class Card {
//     constructor({
//                     link,
//                     name,
//                     likes,
//                     cardId,
//                     userId,
//                     ownerId
//                 },
//                 templateSelector,
//                 handleCardClick,
//                 handleLikeClick,
//                 handleDeleteClick) {
//         this._link = link;
//         this._name = name;
//         this._alt = name;
//         this._likes = likes;
//         this._cardId = cardId;
//         this._userId = userId;
//         this._ownerId = ownerId;
//         this._templateSelector = templateSelector;
//         this._handleCardClick = handleCardClick;
//         this._handleLikeClick = handleLikeClick;
//         this._handleDeleteClick = handleDeleteClick;
//         this._nodeElem = this._createTemplate();
//         this._setEventListeners();
//         this.setCardLike(this._likes);

//         if (this._userId !== this._ownerId) {
//             this._nodeElem.querySelector(".button_type_delete").remove();
//         }
//     }

//     /**
//      * @return {string}
//      */
//     getCardId() {
//         return this._cardId;
//     }

//     _createTemplate() {
//         const cardElement = document
//             .querySelector(this._templateSelector)
//             .content
//             .cloneNode(true);
//         cardElement.querySelector(".place").id = this._cardId;
//         cardElement.querySelector(".place__image").src = this._link;
//         cardElement.querySelector(".place__title").textContent = this._name;
//         cardElement.querySelector(".place__image").alt = this._alt;
//         cardElement.querySelector(".place__like-count").textContent = `${this._likes.length}`;

//         return cardElement;
//     }

//     _setEventListeners() {
//         this._nodeElem
//             .querySelector(".place__image")
//             .addEventListener("click", this._handleCardClick);
//         this._nodeElem
//             .querySelector(".place__like")
//             .addEventListener("click", () => this._handleLikeClick(this));
//         this._nodeElem
//             .querySelector(".button_type_delete")
//             .addEventListener("click", this._handleDeleteClick);
//     }

//     removeCard() {
//         this._nodeElem.remove();
//         this._nodeElem = null;
//     }


//     checkIsLiked() {
//         return document.getElementById(this._cardId)
//             .querySelector(".place__like")
//             .classList
//             .contains("place__like_active")
//     }


//     setCardLike(likes) {
//         let elem = this._nodeElem;
//         if (this._nodeElem.childNodes.length === 0) {
//             elem = document.getElementById(this._cardId);
//         }
//         elem.querySelector(".place__like-count").textContent = likes.length;

//         const likeStatus = likes.findIndex((owner) => owner._id === this._userId);

//         if (likeStatus !== -1) {
//             elem.querySelector(".place__like").classList.add(".place__like_active");
//         } else {
//             elem.querySelector(".place__like").classList.remove(".place__like_active");
//         }

//         if (likes.length === 0) {
//             this._nodeElem.querySelector(".place__like-count").textContent = ""
//                     } 
//     }
    

//     getElemCard() {
//         return this._nodeElem;
//     }

// }
