function showInputError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
};

function hideInputError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
};

function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showInputError(form, input, config);
    } else {
        hideInputError(form, input, config);
    };
};

function toggleButtonState(button, isActive, config) {
     if(!isActive) {
         button.classList.add(config.inactiveButtonClass);
         button.disabled = true;
     } else {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
     };
};

function setEventListeners(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            toggleButtonState(submitButton, form.checkValidity(), config);
        });
    });
        
};

function enableValidation(config) {
    const allInputForms = document.querySelectorAll(config.formSelector);   
    allInputForms.forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const popup = evt.target.closest('.popup');
            closePopup(popup);
            
        });

        const submitButton = form.querySelector(config.submitButtonSelector);
        toggleButtonState(submitButton, form.checkValidity(), config);
    });
}

function disableValidation(form, config) {
    form.reset();
    const inputList = form.querySelectorAll(config.inputSelector);
    inputList.forEach((input) => {
        hideInputError(form, input, config);
    }); 

};

const validationConfig = {
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_state_invalid',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_type_submit-disabled',
    errorClass: '.input__error'
  };

  enableValidation(validationConfig);