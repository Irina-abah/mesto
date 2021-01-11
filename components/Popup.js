import { ESCAPE_KEY } from "../utils/constants.js"

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector(".button_type_close");
        this._handleEscClose = this._handleEscClose.bind(this);
        this.close = this.close.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === ESCAPE_KEY) {
            this.close();
        };
    }

    setEventListeners() {
        this._closeButton
            .addEventListener("click", () => {
                this.close();
            });

        this._popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup")) {
                this.close();
            }
        });
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
}