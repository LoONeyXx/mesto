import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form')
        this._handleSubmitForm = () => handleSubmitForm(this._getInputValues())
    }
    _getInputValues() {
        const inputList = Array.from(this._form.querySelectorAll('.popup__input'))
        const values = inputList.reduce((obj, curr) => {
            obj[curr.name] = curr.value
            return obj
        }, {})
        return values
    }
    
     close() {
        super.close()
        this._form.reset()
     }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit',this._handleSubmitForm)

    }
}