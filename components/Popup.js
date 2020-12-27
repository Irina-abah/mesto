export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
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
        document.addEventListener("keydown", this._handleEscClose)
    }

    close = () => {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose)
    }
}






// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.