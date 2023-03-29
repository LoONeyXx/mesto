export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link
        this._templateSelector = templateSelector
    }

    createCard() {
        this._element = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true)
        const titleCard = this._element.querySelector('.cards__title')
        const imgCard = this._element.querySelector('.cards__image')
        titleCard.textContent = this._name
        imgCard.src = this._link
        imgCard.alt = this._name
        this._setEventListeners()
        return this._element
    }

    _setEventListeners() {
        const imgCard = this._element.querySelector('.cards__image')
        const deleteButton = this._element.querySelector('.cards__delete-btn')
        const likeBtn = this._element.querySelector('.cards__like-btn')
        likeBtn.addEventListener('click', () => {
            this._toogleLike()
        })
        deleteButton.addEventListener('click', () => {
            this._deleteCard()
        })
        imgCard.addEventListener('click', () => {
            this._openImage()
        })
    }


    _toogleLike() {
        const likeBtn = this._element.querySelector('.cards__like-btn')
        likeBtn.classList.toggle('cards__like-btn_active')
    }

    _deleteCard() {
        this._element.remove()
    }

    _openImage() {
        const popup = document.querySelector('.popup_type_image')
        const popupImage = popup.querySelector('.popup__image')
        const popupImageText = popup.querySelector('.popup__image-text')
        popupImage.src = this._link
        popupImage.alt = this._name
        popupImageText.textContent = this._name
        popup.classList.add('popup_opened')
    }
}
