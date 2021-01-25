import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
    constructor({ popupSelector, handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector(".popup__input-container");
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    open ({card, cardId}) {
        super.open();
        this._card = card;
        this._cardId = cardId;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit({
                card: this._card,
                cardId: this._cardId
            })
        })
    }
    
}