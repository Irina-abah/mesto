import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector(".popup__image");
        this._popupImageTitle = this._popup.querySelector(".popup__image-title");
    }

    open = ({ image, name }) => {
        super.open();
        this._popupImage.src = image;
        this._popupImageTitle.textContent = name;
    }
}