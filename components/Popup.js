import { ESCAPE_KEY } from "../utils/constants.js"

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose = (evt) => {
        if (evt.key === ESCAPE_KEY) {
            this.close();
        };
    }

    setEventListeners = () => {
        this._popup
            .querySelector(".button_type_close")
            .addEventListener("click", this.close);
    }

    open = () => {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close = () => {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
}