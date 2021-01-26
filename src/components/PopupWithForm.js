import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector(".popup__input-container");
        this._setEventListeners();
    }

    _getInputValues() {
        this._formValues = {};
        const inputs = this._form.querySelectorAll(".popup__input");
        inputs.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    _setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        })

    }

    close() {
        super.close();
        this._form.reset();
    }

}