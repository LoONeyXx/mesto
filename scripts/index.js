// Обьявление переменных

const popup = document.querySelector(".popup");
const popupInputName = popup.querySelector(".popup__input_type_name");
const popupInputJob = popup.querySelector(".popup__input_type_job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const popupBtnClose = popup.querySelector(".popup__btn-close");
const popupForm = popup.querySelector(".popup__form");

//Функция для рендера инпут полей

function renderInput() {
	if (popupInputName) {
		popupInputName.value = profileTitle.textContent.trim(" ");
	}

	if (popupInputJob) {
		popupInputJob.value = profileSubtitle.textContent.trim(" ");
	}
}

//Функция для открытия попапа

function openPopup() {
	renderInput();
	popup.classList.add("popup_opened");
}

//Функция для закрытия попапа

function closePopup() {
	popup.classList.remove("popup_opened");
}

//Функция для открывания popup и поведение кнопки 'Сохранить'

function handleFormSubmit(evt) {
	evt.preventDefault();
	if (popupInputName) {
		profileTitle.textContent = popupInputName.value;
		closePopup();
	}
	if (popupInputJob) {
		profileSubtitle.textContent = popupInputJob.value;
		closePopup();
	}
}

//Функция для открытия попапа

function openPopup() {
	renderInput();
	popup.classList.add("popup_opened");
}

//Функция для закрытия попапа

function closePopup() {
	popup.classList.remove("popup_opened");
}

//Прослушка событий для кнопок close и edit в профиле

profileBtnEdit.addEventListener("click", openPopup);

popupBtnClose.addEventListener("click", closePopup);

popupForm.addEventListener("submit", handleFormSubmit);

// Активация смены состояния like на карточке при нажатии на нее

// elementsItems.forEach((el) => {
// 	const likeBtn = el.querySelector(".elements__like-btn");
// 	likeBtn.addEventListener("click", () => {
// 		const activeLike = el.querySelector(".elements__like_active");
// 		const disabledLike = el.querySelector(".elements__like_disabled");
// 		if (likeBtn.classList[2] !== "elements__like-btn-active") {
// 			likeBtn.style["-webkit-transform"] = "scale(0) translateZ(0)";
// 			likeBtn.classList.toggle("elements__like-btn-active");
// 			console.log(el)
// 			setTimeout(() => {
// 				likeBtn.style.transform = "scale(1) translateZ(0)";
// 			}, 075);
// 			setTimeout(() => {
// 				disabledLike.style.display = "none";
// 				activeLike.style.display = "block";
// 			}, 075);
// 		} else {
// 			likeBtn.style["-webkit-transform"] = "scale(0) translateZ(0)";
// 			likeBtn.classList.toggle("elements__like-btn-active");
// 			setTimeout(() => {
// 				likeBtn.style["-webkit-transform"] = "scale(1) translateZ(0)";
// 			}, 075);
// 			setTimeout(() => {
// 				disabledLike.style.display = "block";
// 				activeLike.style.display = "none";
// 			}, 075);
// 		}
// 	});
// });
//Render при загрузке страницы что бы в поля инпута попали данные из профиля
