export class UserInfo {
    constructor({ profileNameSelector, profileTitleSelector, avatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileTitle = document.querySelector(profileTitleSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userData = {
            name: this._profileName.textContent,
            about: this._profileTitle.textContent
        };

        return userData;
    }

    setUserAvatar(userData) {
        this._avatar.src = userData.avatar;
    }

    setUserInfo({ name, title }) {
        this._profileName.textContent = name;
        this._profileTitle.textContent = about;
    }

}