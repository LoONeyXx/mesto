/*            Popup перменные        */
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type_job");
const popupBtnsClose = document.querySelectorAll(".popup__btn-close");
const popupForm = document.querySelectorAll(".popup__form");
/*               Перменные профиля           */
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");
//  Перменные карточек
const elementItems = Array.from(document.querySelectorAll(".elements__item"));
const likeBtns = Array.from(document.querySelectorAll(".elements__like-btn"));
console.log(popupForm)
// Обьект названия и ссылки карточек

const initialCards = [
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
/*     Функция для рендера инпут полей     */

function renderInput(popup) {
  console.log(popup)
  console.log()
  if(popup.classList.value.includes('popup_type_edit-profile')) {
    popupInputName.value = profileTitle.textContent.trim(" ");
    popupInputJob.value = profileSubtitle.textContent.trim(" ");
  }


}
/*    Функция проверка элемента на наличие класса        */


/*            Функция переключение состояния кнопки Like             */

function toogleLike(evt) {
  const el = evt.target;
  const activeLike = `url('../../../images/like.svg')`;
  const disabledLike = `url('../../../images/like_active.svg')`;
  el.style.transition = "transform 0.1s linear";
  if (!el.classList.value.includes("elements__like-btn-active")) {

    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.add("elements__like-btn-active");
    setTimeout(() => {
      el.style["-webkit-transform"] = "scale(1) translateZ(0)";
    }, 100);
    setTimeout(() => {
      el.style.backgroundImage = disabledLike;
    }, 100);
  } else {
    console.log(el.classList[2]);
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.remove("elements__like-btn-active");
    setTimeout(() => {
      el.style.transform = "scale(1) translateZ(0)";
    }, 100);
    setTimeout(() => {
      el.style.backgroundImage = activeLike;
    }, 100);
  }
}

 /*        Функция добавления свойства Transition            */

function addTransition(el,value) {
  el.style.transition = value
}
/*             Функция открытия Popup             */

function openPopup(evt) {
  const popupBtn = evt.target;
  if (popupBtn.classList.value.includes('profile__btn-add')) {
    addTransition(popupAddCards, 'all 0.3s linear')
    popupAddCards.classList.add("popup_opened");

  } else {
  popupEditProfile.classList.add("popup_opened");
  addTransition(popupEditProfile, 'all 0.3s linear')
  renderInput(popupEditProfile);}

}
/*     Функция закрытия Popup  */

function closePopup(evt) {
  const popupElement = evt.target;

  if (popupElement.classList.value.includes('popup__close-btn_type_add-cards') || (popupElement.getAttribute('name') === 'popup-form-cards')) {
      popupAddCards.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.remove("popup_opened");

  }
}



/*          Функция рендера Карточек        */

function renderCards() {
  elementItems.map((el, i) => {
    const image = el.querySelector("img");
    const title = el.querySelector("h2");
    image.src = initialCards[i].link;
    title.textContent = initialCards[i].name;
    return el;
  });
}
/*     Функция для открывания popup и поведение кнопки 'Сохранить'     */

function handleFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.target
  if (form.getAttribute('name') === 'popup-form-edit') {
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputJob.value;
    closePopup(evt)
  } else
   closePopup(evt)
  }





/*     Прослушка событий для кнопок close и edit add в профиле     */

profileAddBtn.addEventListener("click", openPopup);

profileBtnEdit.addEventListener("click", openPopup);

popupBtnsClose.forEach((el) => {
  el.addEventListener("click", closePopup);
});

popupForm.forEach(el => el.addEventListener("submit", handleFormSubmit)
)

likeBtns.forEach((el) => {
  el.addEventListener("click", toogleLike);
});

renderCards();

/*.popup {
}
.popup__type_add-card {
}
.popup__container {
}
.button {
}
.popup__btn-close {
}
.opacity {
}
.popup__title {
}
.popup__form {
}
.popup__input-group {
}
.popup__input-group_type {
}
.popup__input {
}
.popup__input_type_card-title {
}
.popup__input_type_job {
}
.popup__btn-save {
} */
