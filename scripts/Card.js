import {
    openPopup,
    previewPopup,
    popupImage,
    popupImageTitle,
} from "./script.js";

export class Card {
    /**
     * 
     * @param {string} image
     * @param {string} name
     * @param {string} alt
     */
    constructor(image, name, alt) {
        this._name = name;
        this._image = image;
        this._alt = alt;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(".place-template")
            .content.querySelector(".place")
            .cloneNode(true);

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
            .addEventListener("click", this._handleClickPreviewImage);
    };

    _handleClickDeleteCard = (evt) => {
        const deletedElement = evt.target.closest(".place");
        deletedElement.remove();
        this._element = null;
    };

    _handleClickLikeCard = (evt) => {
        evt.target.classList.toggle("place__like_active");
    };

    _handleClickPreviewImage = () => {
        openPopup(previewPopup);
        popupImage.src = this._image;
        popupImageTitle.textContent = this._name;
    };

    /**
     * @return {null|Node}
     */
    generateCard = () => {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".place__image").src = this._image;
        this._element.querySelector(".place__image").alt = this._alt;
        this._element.querySelector(".place__title").textContent = this._name;

        return this._element;
    };
};
