export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".place")
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._deteleButton.addEventListener("click", () => {
            this._deleteCard();
        });
        this._likeButton.addEventListener("click", () => {
            this._likeCard();
        });
        this._link.addEventListener("click", () => {
            this._previewImage(this._link);
        });
    }

    _likeCard() {
        this._element.classList.toggle("place__like_active");
    }

    _deleteCard() {
        this._deleteElement(this._element);
    }

    _deleteElement(element) {
        element.remove();
        element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".button_type_delete") = this._deteleButton;
        this._element.querySelector(".place__like").src = this._likeButton;
        this._element.querySelector(".place__image").src = this._link;
        this._element.querySelector(".place__image").alt = this._alt;
        this._element.querySelector(".place__title").textContent = this._name;

        return this._element;
    }
}
