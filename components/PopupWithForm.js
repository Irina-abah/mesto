import { Popup } from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector(".popup__input-container");
        this._inputList = this._form.querySelectorAll(".popup__input");
    }

    _getInputValues = () => {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners = () => {
        super.setEventListeners();

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this._close();
        })

    }

    close = () => {
        super.close();
        this._form.reset();
    }

}