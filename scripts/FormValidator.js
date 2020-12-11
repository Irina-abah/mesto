import { closePopup } from "./script.js";

// export class FormValidator {
//     constructor(config, form) {
//         this._config = config;
//         this._form = form;
//         this._inputList = this._form.querySelectorAll(this._config.inputSelector);
//         this._submitButton = this._form.querySelectorAll(this._config.submitButtonSelector);
//     }

//     _showInputError = (input, error) => {
//         const errorElement = this._form.querySelector(`#${input.id}-error`);
//         errorElement.textContent = error;
//         input.classList.add(this._config.inputErrorClass);
//         errorElement.classList.add(this._config.errorClass);
//     };

//     _hideInputError = (input) => {
//         const errorElement = this._form.querySelector(`#${input.id}-error`);
//         errorElement.textContent = "";
//         input.classList.remove(this._config.inputErrorClass);
//         errorElement.classList.remove(this._config.errorClass);
//     };

//     _checkInputValidity = (input) => {
//         if (!input.validity.valid) {
//             this._showInputError(input, input.validationMessage);
//         } else {
//             this._hideInputError(input);
//         }
//     };

//     _hasInvalidInput = () => {
//         return this._inputList.some((input) => {
//             return !input.validity.valid;
//         });
//     };
//     debugger;

//     _toggleButtonState = () => {
//         if (this._hasInvalidInput(this._inputList)) {
//             this._submitButton.classList.add(this._config.inactiveButtonClass);
//             this._submitButton.disabled = true;
//         } else {
//             this._submitButton.classList.remove(this._config.inactiveButtonClass);
//             this._submitButton.disabled = false;
//         }
//     };

//     _setEventListeners = () => {
//         this._inputList.forEach(input => {
//             input.addEventListener("input", () => {
//                 this._checkInputValidity(input);
//                 this._toggleButtonState(this._submitButton);
//             });
//         });
//     };

//     enableValidation = () => {
//         this._setEventListeners();

//         this._form.addEventListener("submit", (evt) => {
//             evt.preventDefault();
//             const popup = evt.target.closest(".popup");
//             closePopup(popup);
//         });

//     };
// }

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

    _toggleButtonState = (button, isActive) => {
        if (!isActive) {
            button.classList.add(this._config.inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._config.inactiveButtonClass);
            button.disabled = false;
        }
    }

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
                this._toggleButtonState(submitButton, this._form.checkValidity());
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const popup = evt.target.closest(".popup");
            closePopup(popup);
        });
        const submitButton = this._form.querySelector(
            this._config.submitButtonSelector
        );

        this._toggleButtonState(submitButton, this._form.checkValidity());
    };
}
