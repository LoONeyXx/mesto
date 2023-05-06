
export default class Card {
    constructor(data, templateSelector, { handleClickImage, handleClickDelete, isOwnId, addLike, removeLike }) {
        this._name = data.name;
        this._link = data.link
        this.id = data._id
        this._ownerId = data.owner._id
        this._likeList = data.likes
        this._likeCount = data.likes.length
        this._templateSelector = templateSelector
        this._handleLikeClick = this._clickLike.bind(this)
        this._isLiked = this._likeList.some(({ _id }) => isOwnId(_id))
        this._isOwn = isOwnId(this._ownerId)
        this._addLike = () => addLike(this)
        this._removeLike = () => removeLike(this)
        this._openPopup = () => handleClickImage({ name: this._name, link: this._link })
        this._openDeletePopup = () => handleClickDelete(this)

    }

    createCard() {
        this._element = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true)
        this._element.id = this.id
        this._likeCounter = this._element.querySelector('.cards__like-counter')
        this._likeBtn = this._element.querySelector('.cards__like-btn')
        const titleCard = this._element.querySelector('.cards__title')
        this._imgCard = this._element.querySelector('.cards__image')
        this._deleteButton = this._element.querySelector('.cards__delete-btn')
        if (!this._isOwn) {
            this._removeDeleteButton()
        }

        if (this._isLiked) {
            this.toogleLike()
        }
        this._likeCounter.textContent = this._likeCount
        titleCard.textContent = this._name
        this._imgCard.src = this._link
        this._imgCard.alt = this._name
        this._setEventListeners()
        return this._element
    }

    _removeDeleteButton() {
        this._deleteButton.remove()
        delete this._deleteButton
    }


    _setEventListeners() {
        if (this._deleteButton) {
            this._deleteButton.addEventListener('click', this._openDeletePopup)
        }
        this._likeBtn.addEventListener('click', this._handleLikeClick)
        this._imgCard.addEventListener('click', this._openPopup)
    }

    _clickLike() {
        if (this._likeBtn.classList.contains('cards__like-btn_active')) {
            this._removeLike()
        } else {
            this._addLike()
        }
    }

    toogleLike() {
        this._likeBtn.classList.toggle('cards__like-btn_active')
    }


    renderLikes({ likes }) {
        this._likeCounter.textContent = likes.length
    }

    deleteCard() {
        this._element.remove()
        this._element = null
    }

}
