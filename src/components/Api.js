export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(`${this._address}`, {
            headers: {
                authorization: this._token
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }

            return Promise.reject(`Error ${res}`)
        })
    }

    addCard() {

    }

    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }

            return Promise.reject(`Error ${res.status}`)
        })
    }
}