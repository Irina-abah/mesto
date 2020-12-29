export class FormValidator {
    constructor(config, form, close) {
        this._config = config;
        this._form = form;
        this._close = close;
    };

    _showInputError = (input) => {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    };

    _hideInputError = (input) => {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        input.classList.remove(this._config.inputErrorClass);
    };

    _checkInputValidity = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    };

    _toggleButtonState = (isActive) => {
        if (!isActive) {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.disabled = false;
        }
    };

    _disableValidation = () => {
        const inputList = this._form.querySelectorAll(this._config.inputSelector);
        inputList.forEach((input) => {
            this._hideInputError(input);
        });
    };


    _setEventListeners = () => {
        const inputList = this._form.querySelectorAll(this._config.inputSelector);
        inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButtonState(this._form.checkValidity());
            });
        });
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const popup = evt.target.closest(".popup");
            this._close(popup);
        });
    };

    enableValidation = () => {
        this._button = this._form.querySelector(this._config.submitButtonSelector);
        this._setEventListeners();
        this._disableValidation();
        this._toggleButtonState(this._form.checkValidity());
    };
};
