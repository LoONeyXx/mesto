export default class API {
    constructor(token) {
        this._token = token
    }
    getCardsInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }

    getProfileInfo() {
        return fetch('https://nomoreparties.co/v1/cohort-65/users/me', {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))

            ;
    }

    setProfileInfo(info) {
        return fetch('https://nomoreparties.co/v1/cohort-65/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                about: info.about
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }

    setProfileAvatar(info) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar ', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: info.avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }

    addNewCard(info) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                link: info.link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }

    deleteCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }


    addLike(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }
    removeLike(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }
}