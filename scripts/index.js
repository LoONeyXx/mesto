
import { initialCards } from "./constants.js";
import { FormValidation } from "./validation.js";
import Card from "./card.js";
import { config } from "./constants.js";

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type_job");
const popupFormEdit = document.querySelector(".popup__form_type_edit")
const popupFormCards = document.querySelector(".popup__form_type_cards")
const popups = document.querySelectorAll('.popup');
const formList = document.querySelectorAll('.popup__form')
const submitButtonCard = document.querySelector('.popup__btn-save_type_cards')
const submitButtonEdit = document.querySelector('.popup__btn-save_type_edit-profile')
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");
const cardsContainer = document.querySelector(".cards__container");
const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
const cardsLinkInput = document.querySelector(".popup__input_type_card-link");
const closeBtns = document.querySelectorAll('.popup__btn-close');


/*       Функция добавления новых карточек     */

function addedNewCard() {
  const cardElement = new Card({ name: cardsTitleInput.value, link: cardsLinkInput.value }, '#template-card')
  cardsContainer.prepend(cardElement.createCard())
}

/*   Функция рендера Карточек        */

function renderCards() {
  const cardsArray = [];
  initialCards.forEach(card => {
    const cardElement = new Card(card, '#template-card')
    cardsArray.unshift(cardElement.createCard())
  }

  )
  cardsContainer.append(...cardsArray)

}

/*   Функция рендера кнопок при открытие формы        */
function renderButtons(button) {
  if (button.classList.contains('popup__btn-save_type_cards')) {
    button.classList.add(config.inactiveButtonClass)
    button.disabled = 'disabled'
  } else {
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = ''
  }
}
/*     Функция для рендера формы добавления карточек    */

function renderFormCard() {
  popupFormCards.reset()
  renderButtons(submitButtonCard)
}
/*     Функция для рендера формы профиля    */

function renderEditForm() {
  popupInputName.value = profileTitle.textContent.trim();
  popupInputJob.value = profileSubtitle.textContent.trim();
  renderButtons(submitButtonEdit)
}

/*   Функции для открытия Popup     */

function openPopup(popup) {
  popup.classList.add("popup_opened");
  addOverlayListeners()
}

function addOverlayListeners() {
  document.addEventListener('keydown', escapeFromPopup)
}

function removeOverlayListeners() {
  document.removeEventListener('keydown', escapeFromPopup)
}

/*   Функции для закрытия Popup  */

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  removeOverlayListeners(popup)
}

function escapeFromPopup(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened')
    closePopup(openPopup)
  }
}

function closeOnOverlayClick(evt) {
  closePopup(evt.target)
}

/*   Функция для открывания popup и поведение кнопки 'Сохранить'   */

function handleFormSubmitAddCard(evt) {
  evt.preventDefault()
  addedNewCard();
  closePopup(popupAddCards);
  evt.target.reset()
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputJob.value;
  closePopup(popupEditProfile);
}

/*  Обработчик для кнопок закрытия попапа */

closeBtns.forEach(button => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => {
    closePopup(popup)
  })
})

/*   Прослушка для кнопок отрытия popup    */

profileAddBtn.addEventListener("click", () => {
  openPopup(popupAddCards)
  renderFormCard()
});


profileBtnEdit.addEventListener("click", () => {
  openPopup(popupEditProfile)
  renderEditForm()
});


/*   Прослушка для кнопок submit  */

popups.forEach(popup => {
  popup.addEventListener('mousedown', closeOnOverlayClick)
})

popupFormEdit.addEventListener('submit', handleFormSubmitEdit)
popupFormCards.addEventListener('submit', handleFormSubmitAddCard)

formList.forEach(form => {
  const validationForm = new FormValidation(config, form)
  validationForm.enableValidation()
})


renderCards()
