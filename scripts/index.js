

/*  Popup перменные        */
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type_job");
const popupBtnCloseTypeEdit = document.querySelector(".popup__btn-close");
const popupImage = document.querySelector('.popup__image')
const popupImageText = document.querySelector('.popup__image-text')
const popupBtnCloseTypeAdd = document.querySelector(".popup__btn-close_type_add-cards");
const popupForm = document.querySelectorAll(".popup__form");
const popupTypeImage = document.querySelector(".popup_type_image");


/*   Перменные профиля           */
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");

//  Перменные карточек
const cardsContainer = document.querySelector(".cards__container");
const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
const cardsLinkInput = document.querySelector(".popup__input_type_card-link");
const cardsImage = document.querySelectorAll(".cards__image");
const templateCard = document.querySelector('.template-item')
// Обьект названия и ссылки карточек

let initialCards = [
  {
    name: "Екатеринбург",
    link: "./images/ekat.png",
  },
  {
    name: "Москва",
    link: "./images/moscow.png",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/peter.png",
  },
  {
    name: "Тула",
    link: "./images/tula.png",
  },
  {
    name: "Сочи",
    link: "./images/sochi.png",
  },
  {
    name: "Ярославль",
    link: "./images/yaroslavl.png",
  },
];

/*       Функция добавления новых карточек         */

function addedNewCard() {
  const newCard = createCard()
  const imgCard = newCard.querySelector(".cards__image");
  const titleCard = newCard.querySelector(".cards__title");
  const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
  const cardsLinkInput = document.querySelector(".popup__input_type_card-link");
  titleCard.textContent = cardsTitleInput.value;
  imgCard.src = cardsLinkInput.value;
  cardsContainer.prepend(newCard);
}
{
  function createCard() {
    const newCard = document.querySelector('.template-item').content.cloneNode(true)
    const imgCard = newCard.querySelector(".cards__image");
    const imgCardTitle = newCard.querySelector(".cards__title");
    const likeBtn = newCard.querySelector(".cards__like-btn");
    const elementBtnDelete = newCard.querySelector(".cards__delete-btn");
    const closeBtn = document.querySelector(".popup__btn-close_type_image");
    closeBtn.addEventListener('click', () => closePopup(popupTypeImage))
    elementBtnDelete.addEventListener("click", deletedCard);
    likeBtn.addEventListener("click", toogleLike);
    imgCard.addEventListener("click", () => {
      popupImage.src = imgCard.src
      popupImageText.textContent = imgCardTitle.textContent
      openPopup(popupTypeImage)
    })
    return newCard
  }
}


/*   Функция удаления карточки  и добавление в массив InitialCards     */
function deletedCard(evt) {
  const delBtn = evt.target;
  delBtn.parentElement.remove();
}

/*     Функция для рендера инпут полей     */

function renderInput(popup) {
  if (popup.classList.value.includes("popup_type_edit-profile")) {
    popupInputName.value = profileTitle.textContent.trim();
    popupInputJob.value = profileSubtitle.textContent.trim();
  } else {
    const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
    const cardsLinkInput = document.querySelector(".popup__input_type_card-link");
    cardsTitleInput.value = "".trim();
    cardsLinkInput.value = "".trim();
  }
}

/*     Функция переключение состояния кнопки Like, P.S Добавление транзишн через JS дает избавиться от бага который во время загрузки страницы делает попап видимым на некоторые время     */

function toogleLike(evt) {
  const el = evt.target;
  if (!el.classList.value.includes("cards__like-btn_active")) {
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.add("cards__like-btn_active");
    setTimeout(() => {
      el.style["-webkit-transform"] = "scale(1) translateZ(0)";
    }, 100);
  } else {
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.remove("cards__like-btn_active");
    setTimeout(() => {
      el.style.transform = "scale(1) translateZ(0)";
    }, 100);
  }
}
function renderPopupImage(item) {
  const image = document.querySelector(".popup__image");
  const imageText = document.querySelector(".popup__image-text");
}

/*    Функция открытия Popup             */

function openPopup(popup) {
  renderInput(popup);
  popup.classList.add("popup_opened");
}

/*   Функция закрытия Popup  */

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

/*   Функция рендера Карточек        */

function renderCards() {
  const cardsArray = [];
  for (let i = 0; i < initialCards.length; i++) {
    cardsArray[i] = createCard()
    const image = cardsArray[i].querySelector('.cards__image')
    const title = cardsArray[i].querySelector('.cards__title')
    image.src = initialCards[i].link
    title.textContent = initialCards[i].name

    cardsContainer.append(...cardsArray)
  }
}

/*     Функция для открывания popup и поведение кнопки 'Сохранить'     */

function handleFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  if (form.getAttribute("name") === "popup-form-edit") {
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputJob.value;
    closePopup(popupEditProfile);
  } else {
    addedNewCard();
    closePopup(popupAddCards);
  }
}

/*    Прослушка событий для кнопок close и edit add в профиле     */

popupBtnCloseTypeEdit.addEventListener('click', () => closePopup(popupEditProfile))
popupBtnCloseTypeAdd.addEventListener('click', () => closePopup(popupAddCards))
profileAddBtn.addEventListener("click", () => openPopup(popupAddCards));
profileBtnEdit.addEventListener("click", () => openPopup(popupEditProfile));
popupForm.forEach(el => el.addEventListener("submit", handleFormSubmit));


renderCards();
