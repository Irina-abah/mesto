export default class UserInfo {
    constructor({ profileNameSelector, profileTitleSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileTitle = document.querySelector(profileTitleSelector);
    }

    getUserInfo = () => {

    }

    setUserInfo = () => {

    }
}



// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.