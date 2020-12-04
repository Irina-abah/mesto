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

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".place")
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {}

    _setEventListeners() {
        this._element
            .querySelector(".button_type_delete")
            .addEventListener("click", () => {
                this._deleteCard();
            });
    }

    deleteCard(evt) {
        this.
    }

    templateCardImage.addEventListener("click", () => previewImage(card));
    cardDeleteButton.addEventListener("click", deleteCard);
    cardLikeButton.addEventListener("click", likeCard);

    _handleMessageClick() {
        this._element
            .querySelector(".card__text")
            .classList.toggle("card__text_is-active");
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".place__image").src = this._link;
        this._element.querySelector(".place__image").alt = this._alt;
        this._element.querySelector(".place__title").textContent = this._name;

        return this._element;
    }
}

initialCards.forEach((item) => {
    const card = new Card(item, ".place-template_type_default");
    const cardElement = card.generateCard();

    document.body.append(cardElement);
});
