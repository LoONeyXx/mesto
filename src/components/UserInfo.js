export default class UserInfo {
    constructor(selectors) {
        this._about = document.querySelector(selectors['about'])
        this._name = document.querySelector(selectors['name'])
        this._avatar = document.querySelector(selectors['avatar'])
    }

    getUserInfo() {
        return {
            about:this._about.textContent,
            name:this._name.textContent,
            id:this._id,
            avatar: this._avatar.src
        }
    }

    setUserInfo(newInfo) {
        this._about.textContent = newInfo.about
        this._name.textContent = newInfo.name
        this._id = newInfo._id
        this._avatar.src = newInfo.avatar
    }
}