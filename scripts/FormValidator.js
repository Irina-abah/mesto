// function showInputError(form, input, config) {
//     const error = form.querySelector(`#${input.id}-error`);
//     error.textContent = input.validationMessage;
//     input.classList.add(config.inputErrorClass);
// }

// function hideInputError(form, input, config) {
//     const error = form.querySelector(`#${input.id}-error`);
//     error.textContent = "";
//     input.classList.remove(config.inputErrorClass);
// }

// function checkInputValidity(form, input, config) {
//     if (!input.validity.valid) {
//         showInputError(form, input, config);
//     } else {
//         hideInputError(form, input, config);
//     }
// }

// function toggleButtonState(button, isActive, config) {
//     if (!isActive) {
//         button.classList.add(config.inactiveButtonClass);
//         button.disabled = true;
//     } else {
//         button.classList.remove(config.inactiveButtonClass);
//         button.disabled = false;
//     }
// }

// function setEventListeners(form, config) {
//     const inputList = form.querySelectorAll(config.inputSelector);
//     const submitButton = form.querySelector(config.submitButtonSelector);

//     inputList.forEach((input) => {
//         input.addEventListener("input", () => {
//             checkInputValidity(form, input, config);
//             toggleButtonState(submitButton, form.checkValidity(), config);
//         });
//     });
// }

// function enableValidation(config) {
//     const allInputForms = document.querySelectorAll(config.formSelector);
//     allInputForms.forEach((form) => {
//         setEventListeners(form, config);

//         form.addEventListener("submit", (evt) => {
//             evt.preventDefault();
//             const popup = evt.target.closest(".popup");
//             closePopup(popup);
//         });

//         const submitButton = form.querySelector(config.submitButtonSelector);
//         toggleButtonState(submitButton, form.checkValidity(), config);
//     });
// }

// function disableValidation(form, config) {
//     if (form) {
//         form.reset();
//         const inputList = form.querySelectorAll(config.inputSelector);
//         inputList.forEach((input) => {
//             hideInputError(form, input, config);
//         });
//     }
// }

// export { enableValidation, disableValidation };

export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._submitButton = form.querySelector(config.submitButtonSelector);
        this._inputList = form.querySelectorAll(config.inputSelector);
        // this._allInputForms = config.formSelector;
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
    };

    _setEventListeners = () => {
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButtonState(
                    this._submitButton,
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
        });

        this._toggleButtonState(this._submitButton, this._form.checkValidity());
    };

    disableValidation = (form) => {
        if (form) {
            this._form.reset();
            this._inputList.forEach((input) => {
                this._hideInputError(input);
            });
        }
    };
}
