export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._button = this._form.querySelector(this._config.submitButtonSelector);
        this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    }

    _showInputError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    }

    _hideInputError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        input.classList.remove(this._config.inputErrorClass);
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    }

    _toggleButtonState(isActive) {
        if (!isActive) {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.disabled = false;
        }
    }

    resetForm() {
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        });
        this._toggleButtonState(this._form.checkValidity());
    };


    _setEventListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButtonState(this._form.checkValidity());
            });
        });
    }

    enableValidation() {
        this._setEventListeners();
        this._toggleButtonState(this._form.checkValidity());
    }
}
