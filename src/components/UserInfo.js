export class UserInfo {
    constructor({ profileNameSelector, profileTitleSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileTitle = document.querySelector(profileTitleSelector);
    };

    getUserInfo() {
        const userData = {
            name: this._profileName.textContent,
            title: this._profileTitle.textContent
        };

        return userData;
    };

    setUserInfo({ name, title }) {
        this._profileName.textContent = name;
        this._profileTitle.textContent = title;
    };

};