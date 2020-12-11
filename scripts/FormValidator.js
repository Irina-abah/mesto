import { closePopup } from "./script.js";

export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

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

    // _hasInvalidInput = (inputList) => {
    //     return inputList.some((input) => {
    //         return !input.validity.valid;
    //     });
    // };

    _toggleButtonState = (button, isActive) => {
        if (!isActive) {
            button.classList.add(this._config.inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._config.inactiveButtonClass);
            button.disabled = false;
        }
    };

    // _toggleButtonState = (button, inputList) => {
    //     if (this._hasInvalidInput(inputList)) {
    //         button.classList.add(this._config.inactiveButtonClass);
    //         button.disabled = true;
    //     } else {
    //         button.classList.remove(this._config.inactiveButtonClass);
    //         button.disabled = false;
    //     }
    // };

    _setEventListeners = () => {
        const submitButton = this._form.querySelector(
            this._config.submitButtonSelector
        );
        const inputList = this._form.querySelectorAll(
            this._config.inputSelector
        );
        inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButtonState(
                    submitButton,
                    this._form.checkValidity()
                );
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const popup = evt.target.closest(".popup");
            closePopup(popup);
            this._form.reset();
        });
        const submitButton = this._form.querySelector(
            this._config.submitButtonSelector
        );

        this._toggleButtonState(submitButton, this._form.checkValidity());
    };
}
