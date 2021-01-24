export class Api {
    constructor({address, headers}) {
        this._address = address;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Error ${res.status}`)
    }

    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: this._headers
        })
        .then(res => {
            return this._checkResponse(res)
        })
    }

    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            return this._checkResponse(res)
        })
    }

    changeUserInfo(formData) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                about: formData.about
            })
        })
        .then(res => {
            return this._checkResponse(res)
        })
    }

    addCard() {

    }

    likeCard() {

    }

    editAvatar() {

    }

    deleteCard() {

    }

    
}