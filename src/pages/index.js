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






const api = new API('547b1838-f8d8-4d3c-9159-5143d62a0fab')
const userInfo = new UserInfo(infoSelectors)



const popupProfileAvatar = new PopupWithForm('.popup_type_avatar-profile', (info) => {
  popupProfileAvatar.loadingStateButton()
  api.setProfileAvatar(info)
    .then(() => {
      renderProfileInfo()
      userInfo.avatar.onload = () => {popupProfileAvatar.close(); popupProfileAvatar.onloadStateButton()}
    })
})

const popupWithImage = new PopupWithImage('.popup_type_image')

const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (info) => {
  popupEditProfile.loadingStateButton()
  api.setProfileInfo(info)
    .then(() => {
      renderProfileInfo()
      popupEditProfile.onloadStateButton()
      popupEditProfile.close()
    })
    .catch(error => console.log(error))

})

const popupDeleteCard = new PopupWithCofirmnation('.popup_type_delete-card', (card) => {
  const cardID = card.id
  api.deleteCard(cardID)
    .then(() => {
      card.deleteCard()
      popupDeleteCard.close()
    })
    .catch(error => console.log(error))
})

const popupAddCard = new PopupWithForm('.popup_type_add-card', (card) => {
  popupAddCard.loadingStateButton()
  api.addNewCard(card)
    .then(res => {
      const newCard = createCard(res)
      popupAddCard.onloadStateButton()
      cardList.addItem(newCard)
      popupAddCard.close()
    })
    .catch(error => console.log(error))
})



function createCard(card) {
  const newCard = new Card(card, '#template-card', {
    handleClickImage: (card) => {
      popupWithImage.open(card)
    },

    handleClickDelete: (card) => {
      popupDeleteCard.open(card)
    },

    isOwn: (id) => {
      return id === userInfo.getUserInfo().id
    },

    addLike: (id) => {
      api.addLike(id)
        .then(res => {
          const countLikes = res.likes.length
          newCard.renderLikes(countLikes)
        })
        .catch(error => console.log(error))
    },

    removeLike: (id) => {
      api.removeLike(id)
        .then(res => {
          const countLikes = res.likes.length
          newCard.renderLikes(countLikes)
        })
        .catch(error => console.log(error))
    },

    isLiked(id) {
      return userInfo.getUserInfo().id === id
    }


  })

  const newCardElement = newCard.createCard()
  return newCardElement
}

const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item)

    cardList.addItem(card)
  }

}, '.cards__container')



function renderProfileInfo() {
  return api.getProfileInfo()
    .then(info => userInfo.setUserInfo(info))
    .catch(info => console.log(info))
}


renderProfileInfo()
  .then(() => {
    renderCards()
  })



function renderCards() {
  return api.getCardsInfo()
    .then(cards => {
      cardList.renderItems(cards.reverse())
    })
    .catch(error => console.log(error))
}




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


setEventListenersForAll()





