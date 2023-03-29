export class FormValidation {
  constructor(config, formElement) {
    this._config = config
    this._formElement = formElement
  }


  enableValidation() {
    this._setEventListeners();
  };

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState()
        this._checkInputValidity(inputElement)
      })
    })
  }

  _toggleButtonState() {
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector)
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._config.inactiveButtonClass)
      buttonElement.setAttribute('disabled', 'disabled')
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass)
      buttonElement.removeAttribute('disabled')
    }
  }

  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      } 

  };

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorActiveClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorActiveClass);
    errorElement.textContent = '';

  };

  _hasInvalidInput() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}

