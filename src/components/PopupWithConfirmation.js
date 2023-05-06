import Popup from "./Popup";

export default class PopupWithCofirmnation extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector)
        this._confirmButton = this._popup.querySelector('.popup__btn-save_type_delete-card')
        this._handleSubmit = () => handleSubmit(this._card)
    }

    open(card) {
        super.open()
        this._card = card
    }

    setEventListeners() {
        super.setEventListeners()
        this._confirmButton.addEventListener('click', this._handleSubmit)
    }
}