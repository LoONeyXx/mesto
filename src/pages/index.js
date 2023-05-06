import './index.css'
import { infoSelectors, profileAddBtn, profileBtnEdit, config, profileAvatarOverlay, apiOptions } from "../utils/constants.js";
import FormValidation from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js'
import Card from "../components/Card.js";
import PopupWithCofirmnation from '../components/PopupWithConfirmation';
import API from '../components/API';

// Kоллбеки для создания экземпляра класса Card

const callbacksForCard = {
  handleClickImage: (card) => {
    popupWithImage.open(card)
  },

  handleClickDelete: (card) => {
    popupDeleteCard.open(card)
  },

  isOwnId: (id) => {
    return id === userInfo.getUserInfo().id
  },

  addLike: (card) => {
    api.addLike(card.id)
      .then((cardInfo) => {
        card.toogleLike()
        card.renderLikes(cardInfo)
      })
      .catch(console.log)
  },

  removeLike: (card) => {
    api.removeLike(card.id)
      .then((cardInfo) => {
        card.toogleLike()
        card.renderLikes(cardInfo)
      })
      .catch(console.log)
  }
}

const api = new API(apiOptions)
const userInfo = new UserInfo(infoSelectors)

//   Экемляры Popup

const popupWithImage = new PopupWithImage('.popup_type_image')
const popupProfileAvatar = new PopupWithForm('.popup_type_avatar-profile', (info) => {
  popupProfileAvatar.changeSubmitButton('Сохранение...')
  api.setProfileAvatar(info)
    .then((info) => {
      userInfo.setUserInfo(info)
      popupProfileAvatar.close()
    })
    .catch(console.log)
    .finally(() => {
      popupProfileAvatar.changeSubmitButton('Сохранить')

    })
})

const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (info) => {
  popupEditProfile.changeSubmitButton('Сохранение...')
  api.setProfileInfo(info)
    .then((info) => {
      userInfo.setUserInfo(info)
      popupEditProfile.close()
    })
    .catch(console.log)
    .finally(() => {
      popupEditProfile.changeSubmitButton('Сохранить')
    })

})

const popupDeleteCard = new PopupWithCofirmnation('.popup_type_delete-card', (card) => {
  api.deleteCard(card.id)
    .then(() => {
      card.deleteCard()
      popupDeleteCard.close()
    })
    .catch(console.log)
})

const popupAddCard = new PopupWithForm('.popup_type_add-card', (card) => {
  popupAddCard.changeSubmitButton('Сохранение...')
  api.addNewCard(card)
    .then((cardInfo) => {
      addCard(cardInfo)
      popupAddCard.close()
    })
    .catch(console.log)
    .finally(() => {
      popupAddCard.changeSubmitButton('Создать')
    })
})

// Экземляр класса Section 

const cardList = new Section(addCard, '.cards__container')

function createCard(card) {
  const newCard = new Card(card, '#template-card', callbacksForCard)
  const newCardElement = newCard.createCard()
  return newCardElement
}

function addCard(card) {
  const newCard = createCard(card)
  cardList.addItem(newCard)
}


function renderAvatarProfileForm() {
  formValidators['avatar-profile'].renderForm()
  popupProfileAvatar.open()
}

function renderFormCard() {
  popupAddCard.open()
  formValidators['popup-form-cards'].renderForm()
}

function renderEditForm() {
  popupEditProfile.open()
  const infoValues = userInfo.getUserInfo()
  popupEditProfile.setInputValues(infoValues)
  formValidators['popup-form-edit'].renderForm()
}

function setEventListenersForAll() {
  Array.from([popupEditProfile, popupWithImage, popupAddCard, popupDeleteCard, popupProfileAvatar]).forEach(popup => popup.setEventListeners())
  profileAddBtn.addEventListener("click", renderFormCard)
  profileBtnEdit.addEventListener("click", renderEditForm)
  profileAvatarOverlay.addEventListener('click', renderAvatarProfileForm)
}

// Переменная для хранения экземляров класса FormValidation (ключом является атрибут 'name' формы)

const formValidators = {}

// Функция для валидации всех форм на странице (все валидаторы в обьекте formValidators)

function validationForms() {
  Array.from(document.forms).forEach(form => {
    const validate = new FormValidation(config, form)
    const formName = validate.formElement.getAttribute('name')
    formValidators[formName] = validate
    validate.enableValidation()
  })
}

Promise.all([api.getProfileInfo(), api.getCardsInfo()])
  .then(([profileInfo, cards]) => {
    userInfo.setUserInfo(profileInfo)
    cardList.renderItems(cards)
  })
  .catch(console.log)

validationForms()
setEventListenersForAll()

