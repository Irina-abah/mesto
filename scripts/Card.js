const initialCards = [
    {
        name: "Корраловый Риф",
        link: "./images/grid-great-barrier-reef-australia.jpg",
        alt: "Большой Корраловый Риф",
    },
    {
        name: "Будва",
        link: "./images/grid-budva-montenegro.jpg",
        alt: "Вид моря в Будве",
    },
    {
        name: "Шамони",
        link: "./images/grid-chamonix-france.jpg",
        alt: "Заснеженные горы в Шамони",
    },
    {
        name: "Котор",
        link: "./images/grid-kotor-montenegro.jpg",
        alt: "Вид сверху на бухту города Котор",
    },
    {
        name: "Исландия",
        link: "./images/grid-seljalandsfoss-iceland.jpg",
        alt: "Вид на водопад Селйяландсфосс",
    },
    {
        name: "12 Апостолов",
        link: "./images/grid-twelve-apostles-australia.jpg",
        alt: "Пляж Двенадцать Апостолов в Австралии",
    },
];

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".place")
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._deteleButton.addEventListener("click", () => {
            this._handleClickDeleteCard();
        });
        this._likeButton.addEventListener("click", () => {
            this._handleClickLikeCard();
        });
        this._link.addEventListener("click", () => {
            this._handleClickPreviewImage();
        });
    }

    _handleClickDeleteCard = () => {
        this._deleteElement(this._element);
    };

    _deleteElement(element) {
        element.remove();
        element = null;
    }

    _handleClickLikeCard = () => {
        this._element.classList.toggle("place__like_active");
    };

    _handleClickPreviewImage = () => {
        openPopup(previewPopup);
        popupImage.src = this._link;
        popupImageTitle.textContent = this._name;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".button_type_delete") = this._deteleButton;
        this._element.querySelector(".place__like").src = this._likeButton;
        this._element.querySelector(".place__image").src = this._link;
        this._element.querySelector(".place__image").alt = this._alt;
        this._element.querySelector(".place__title").textContent = this._name;

        return this._element;
    }
}
