import Popup from "./Popup";

export default class PopupWithCofirmnation extends Popup {
    constructor(popupSelector,handleSubmit) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form')
        this._handleSubmit = handleSubmit
    }

    open(card) {
        super.open()
        this._card = card
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault()
            this._handleSubmit(this._card)
        })

    }
}