
export default class Card {
    constructor(data, templateSelector, { handleClickImage, handleClickDelete, isOwn, addLike, removeLike, isLiked }) {
        this._name = data.name;
        this._link = data.link
        this.id = data._id
        this._ownerId = data.owner._id
        this._likeList = data.likes
        this._likeCount = data.likes.length
        this._templateSelector = templateSelector
        this._handleLikeClick =  this._handleClickLike.bind(this)
        this._addLike = () => addLike(this.id)
        this._removeLike = () => removeLike(this.id)
        this._isOwn = () => isOwn(this._ownerId)
        this._isLiked = () => this._likeList.some(({ _id }) => isLiked(_id))
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
        if (!this._isOwn()) {
            this._removeDeleteButton()
        }

        if (this._isLiked()) {
            this._toogleLike()
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

    _handleClickLike() {
        this._likeBtn.classList.toggle('cards__like-btn_active')
        if (this._likeBtn.classList.contains('cards__like-btn_active')) {
            this._addLike()
        } else {
            this._removeLike()
        }
    }

    _toogleLike() {
        this._likeBtn.classList.toggle('cards__like-btn_active')
    }


    renderLikes(count) {
        this._likeCounter.textContent = count
    }

    deleteCard() {
        this._element.remove()
    }

}
