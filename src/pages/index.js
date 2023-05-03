import './index.css'
import { infoSelectors, profileAddBtn, profileBtnEdit, config, profileAvatarOverlay } from "../utils/constants.js"
import FormValidation from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js'
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

  isOwn: (id) => {
    return id === userInfo.getUserInfo().id
  },

  addLike: (card) => {
    api.addLike(card.id)
      .then(res => {
        const countLikes = res.likes.length
        card.renderLikes(countLikes)
      })
      .catch(error => console.log(error))
  },

  removeLike: (card) => {
    api.removeLike(card.id)
      .then(res => {
        const countLikes = res.likes.length
        card.renderLikes(countLikes)
      })
      .catch(error => console.log(error))
  }

}




const api = new API('547b1838-f8d8-4d3c-9159-5143d62a0fab')
const userInfo = new UserInfo(infoSelectors)
//   Экемляры Popup
const popupWithImage = new PopupWithImage('.popup_type_image')
const popupProfileAvatar = new PopupWithForm('.popup_type_avatar-profile', (info) => {
  popupProfileAvatar.loadingStateButton()
  api.setProfileAvatar(info)
    .then(() => {
      renderProfileInfo()
    })
    .catch(error => console.log(error))
    .finally(() => {
      popupProfileAvatar.close();
      popupProfileAvatar.onloadStateButton()
    })
})

const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (info) => {
  popupEditProfile.loadingStateButton()
  api.setProfileInfo(info)
    .then(() => {
      renderProfileInfo()
    })
    .catch(error => console.log(error))
    .finally(() => {
      popupEditProfile.onloadStateButton()
      popupEditProfile.close()
    })

})

const popupDeleteCard = new PopupWithCofirmnation('.popup_type_delete-card', (card) => {
  api.deleteCard(card.id)
    .then(() => {
      card.deleteCard()
    })
    .catch(error => console.log(error))
    .finally(() => {
      popupDeleteCard.close()
    })
})

const popupAddCard = new PopupWithForm('.popup_type_add-card', (card) => {
  popupAddCard.loadingStateButton()
  api.addNewCard(card)
    .then(res => {
      const newCard = createCard(res)
      cardList.addItem(newCard)
    })
    .catch(error => console.log(error))
    .finally(() => {
      popupAddCard.onloadStateButton()
      popupAddCard.close()
    })
})
// Экземляр класса Section 
const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item)
    cardList.addItem(card)
  }

}, '.cards__container')


function createCard(card) {
  const newCard = new Card(card, '#template-card',callbacksForCard )
  const newCardElement = newCard.createCard()
  return newCardElement
}

function renderProfileInfo() {
  return api.getProfileInfo()
    .then(info => userInfo.setUserInfo(info))
    .catch(error => Promise.reject(error))
}

function renderCards() {
  return api.getCardsInfo()
    .then(cards => {
      cardList.renderItems(cards.reverse())
    })
    .catch(error => console.log(error))
}


// Функция для валидации всех форм на странице (все валидаторы в обьекте formValidators)


function renderAvatarProfileForm() {
  formValidators['avatar-profile'].renderForm()
  popupProfileAvatar.setInputValues()
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

function validationForms() {
  Array.from(document.forms).forEach(form => {
    const validate = new FormValidation(config, form)
    const formName = validate.formElement.getAttribute('name')
    formValidators[formName] = validate
    validate.enableValidation()
  })
}

renderProfileInfo()
.then(() => {
  renderCards()
})
.catch(error => console.log(error))

validationForms()
setEventListenersForAll()





