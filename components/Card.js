export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._image = data.image;
        this._name = data.name;
        this._alt = data.alt;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .cloneNode(true);

        cardElement.querySelector(".place__image").src = this._image;
        cardElement.querySelector(".place__title").textContent = this._name;
        cardElement.querySelector(".place__image").alt = this._alt;

        return cardElement;
    };

    _setEventListeners() {
        this._element
            .querySelector(".button_type_delete")
            .addEventListener("click", this._handleClickDeleteCard);
        this._element
            .querySelector(".place__like")
            .addEventListener("click", this._handleClickLikeCard);
        this._element
            .querySelector(".place__image")
            .addEventListener("click", this._handleCardClick());
    };

    _handleClickDeleteCard = (evt) => {
        const deletedElement = evt.target.closest(".place");
        deletedElement.remove();
        this._element = null;
    };

    _handleClickLikeCard = (evt) => {
        evt.target.classList.toggle("place__like_active");
    };

    generateCard = () => {
        this._element = this._getTemplate();
        this._setEventListeners();

        return this._element;
    };
};