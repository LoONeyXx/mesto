export default class UserInfo {
    constructor(selectors) {
        this._about = document.querySelector(selectors['about'])
        this._name = document.querySelector(selectors['name'])
        this._avatar = document.querySelector(selectors['avatar'])
    }

    getUserInfo() {
        return {
            about: this._about.textContent,
            name: this._name.textContent,
            id: this._id,
            avatar: this._avatar.src
        }
    }

    setUserInfo(newInfo) {
        this._about.textContent = newInfo.about ? newInfo.about : this._about.textContent
        this._name.textContent = newInfo.name ? newInfo.name : this._name.textContent
        this._id = newInfo._id ? newInfo._id : this._id
        this._avatar.src = newInfo.avatar ? newInfo.avatar : this._avatar.src
    }
}