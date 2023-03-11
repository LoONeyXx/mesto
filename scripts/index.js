/*  Popup перменные        */
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type_job");
const popupBtnCloseTypeEdit = document.querySelector(".popup__btn-close");
const popupImage = document.querySelector('.popup__image')
const popupImageText = document.querySelector('.popup__image-text')
const popupFormEdit = document.querySelector(".popup__form_type_edit");
const popupFormCards = document.querySelector(".popup__form_type_cards");
const popupTypeImage = document.querySelector(".popup_type_image");
const popups = document.querySelectorAll('.popup')

/*   Перменные профиля           */
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");

//  Перменные карточек
const cardsContainer = document.querySelector(".cards__container");
const card = document.querySelector('#template-card').cloneNode(true).content.querySelector('.cards__item')
const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
const cardsLinkInput = document.querySelector(".popup__input_type_card-link");
const closeBtns = document.querySelectorAll('.popup__btn-close')

// Создание новой карточки

function createCard(title, link) {
  const newCard = card.cloneNode(true)
  const titleCard = newCard.querySelector(".cards__title");
  const imgCard = newCard.querySelector('.cards__image');
  const imgCardTitle = newCard.querySelector('.cards__title');
  const likeBtn = newCard.querySelector('.cards__like-btn');
  const elementBtnDelete = newCard.querySelector('.cards__delete-btn');
  titleCard.textContent = title
  imgCard.src = link
  imgCard.alt = title
  elementBtnDelete.addEventListener('click', deletedCard);
  likeBtn.addEventListener("click", toogleLike);
  imgCard.addEventListener("click", () => {
    popupImage.src = imgCard.src
    popupImage.alt = imgCard.alt
    popupImageText.textContent = imgCardTitle.textContent
    openPopup(popupTypeImage)
  })

  return newCard
}

/*       Функция добавления новых карточек         */

function addedNewCard() {
  const cardTitle = cardsTitleInput.value
  const cardLink = cardsLinkInput.value
  const newCard = createCard(cardTitle, cardLink)
  cardsContainer.prepend(newCard);
}

/*   Функция рендера Карточек        */
function renderCards() {
  const cardsArray = [];
  initialCards.forEach(el =>
    cardsArray.unshift(createCard(el.name, el.link))
  )
  cardsContainer.append(...cardsArray)

}

/*   Функция удаления карточки  и добавление в массив InitialCards     */

function deletedCard(evt) {
  evt.target.closest('.cards__item').remove();
}
/*     Функция для рендера формы добавления карточек    */
function renderFormCard() {
  popupFormCards.reset()
  resetError(popupAddCards,config)
}

/*     Функция для рендера формы профиля    */

function renderEditForm() {
  popupInputName.value = profileTitle.textContent.trim();
  popupInputJob.value = profileSubtitle.textContent.trim();
  resetError(popupEditProfile,config)

}

/*     Функция переключение состояния кнопки Like,*/

function toogleLike(evt) {
  evt.target.classList.toggle('cards__like-btn_active')
}


/*    Функция открытия Popup             */

function openPopup(popup) {
  popup.classList.add("popup_opened");
  addOverlayListeners (popup)
}

/*   Функция закрытия Popup  */
function escapeFromPopup(event) {
  if (event.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened')
    closePopup(openPopup)
  }
}

function closeOnOverlayClick(evt) {
  closePopup(evt.target)
}

function addOverlayListeners (popup) {
  document.addEventListener('keydown', escapeFromPopup)
  popup.addEventListener('mousedown', closeOnOverlayClick)
}

function removeOverlayListeners (popup) {
  popup.removeEventListener('mousedown', closeOnOverlayClick)
  document.removeEventListener('keydown', escapeFromPopup)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  removeOverlayListeners(popup)
}

/*     Функция для открывания popup и поведение кнопки 'Сохранить'     */

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


closeBtns.forEach(button => {
  const popup = button.closest('.popup')

  button.addEventListener('click', () => {
    closePopup(popup)
  })

})

/*    Прослушка событий для кнопок close и edit add в профиле     */

profileAddBtn.addEventListener("click", () => {

  openPopup(popupAddCards)
  renderFormCard()
});


profileBtnEdit.addEventListener("click", () => {
  openPopup(popupEditProfile)
  renderEditForm()
});


popupFormEdit.addEventListener('submit', handleFormSubmitEdit)
popupFormCards.addEventListener('submit', handleFormSubmitAddCard)

renderCards()
