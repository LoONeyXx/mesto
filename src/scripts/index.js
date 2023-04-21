import '../pages/index.css'
import { initialCards, popupInputDescription, popupInputName, infoSelectors, profileAddBtn, profileBtnEdit, config } from "./utils/constants.js";
import FormValidation from "./FormValidator.js";
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import Section from './Section.js'
import Card from "./Card.js";




const userInfo = new UserInfo(infoSelectors)

const popupWithImage = new PopupWithImage('.popup_type_image')
const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', () => {
  const infoValues = {
    description: popupInputDescription.value,
    name: popupInputName.value
  }
  userInfo.setUserInfo(infoValues)
  popupEditProfile.close()
})



function addedNewCards(cards) {
  const cardList = new Section({
    items: cards, renderer: (item) => {

      const card = new Card(item, '#template-card', () => {
        popupWithImage.open(item)
      })

      const cardElement = card.createCard()
      cardList.addItem(cardElement)
    }

  }, '.cards__container')
  cardList.renderItems()
}

addedNewCards(initialCards)

const popupAddCard = new PopupWithForm('.popup_type_add-card', (card) => {
  addedNewCards([card])
  popupAddCard.close()
})



// Функция для валидации всех форм на странице (все валидаторы в обьекте formValidators)

const formValidators = {}

function validationForms() {
  Array.from(document.forms).forEach(form => {
    const validate = new FormValidation(config, form)
    const formName = validate.formElement.getAttribute('name')
    formValidators[formName] = validate
    validate.enableValidation()
  })
}

validationForms()

function renderFormCard() {
  popupAddCard.open()
  formValidators['popup-form-cards'].renderForm()
}

function renderEditForm() {
  popupEditProfile.open()
  const infoValues = userInfo.getUserInfo()
  popupInputDescription.value = infoValues.description
  popupInputName.value = infoValues.name
  formValidators['popup-form-edit'].renderForm()

}


function setEventListenersForAll() {
  Array.from([popupEditProfile, popupWithImage, popupAddCard]).forEach(popup => popup.setEventListeners())
  profileAddBtn.addEventListener("click", renderFormCard)
  profileBtnEdit.addEventListener("click", renderEditForm)
}




setEventListenersForAll()
