(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();t.p,t.p,t.p;t.p,t.p,t.p;var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__btn-save",inactiveButtonClass:"popup__btn-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error",errorActiveClass:"popup__input-error_visible",fieldSetSelector:".popup__input-group"},n=document.querySelector(".profile__overlay"),r=document.querySelector(".profile__btn-edit"),o=document.querySelector(".profile__btn-add");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this.formElement=n,this.inputList=Array.from(this.formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this.formElement.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"renderForm",value:function(){var t=this;this._toggleButtonState(),this.inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this.formElement.addEventListener("submit",(function(t){t.preventDefault()})),this.inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._checkInputValidity(e)}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){var e=this.formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),e.classList.add(this._config.errorActiveClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this.formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorActiveClass),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(t){return!t.validity.valid}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__btn-close"),this._closeToEscape=this._handleEscClose.bind(this),this._clickToOverlay=this._handleClickOverlay.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeToEscape)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeToEscape)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickOverlay",value:function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__btn-close"))&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",this._clickToOverlay),this._closeButton.addEventListener("click",(function(){t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupText=e._popup.querySelector(".popup__image-text"),e}return e=u,(n=[{key:"open",value:function(t){y(d(u.prototype),"open",this).call(this),this._popupImage.src=t.link,this._popupImage.alt=t.name,this._popupText.textContent=t.name}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__btn-save"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._handleSubmitForm=function(){return e(n._getInputValues())},n}return e=u,n=[{key:"_getInputValues",value:function(){return this._inputList.reduce((function(t,e){return t[e.name]=e.value,t}),{})}},{key:"setInputValues",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._inputList.forEach((function(e){return t[e.getAttribute("name")]?e.value=t[e.getAttribute("name")].trim():e.value=""}))}},{key:"loadingStateButton",value:function(){this._submitButton.textContent="Cохраняется..."}},{key:"onloadStateButton",value:function(){this._submitButton.textContent="Cохранить"}},{key:"close",value:function(){_(k(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){_(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}}],n&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._about=document.querySelector(e.about),this._name=document.querySelector(e.name),this.avatar=document.querySelector(e.avatar)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{about:this._about.textContent,name:this._name.textContent,id:this._id,avatar:this.avatar.src}}},{key:"setUserInfo",value:function(t){this._about.textContent=t.about?t.about:this._about.textContent,this._name.textContent=t.name?t.name:this._name.textContent,this._id=t._id?t._id:this._id,this.avatar.src=t.avatar?t.avatar:this._avatar.src}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var C=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var B=function(){function t(e,n,r){var o=this,i=r.handleClickImage,u=r.handleClickDelete,c=r.isOwn,a=r.addLike,l=r.removeLike,s=r.isLiked;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this.id=e._id,this._ownerId=e.owner._id,this._likeList=e.likes,this._likeCount=e.likes.length,this._templateSelector=n,this._handleLikeClick=this._handleClickLike.bind(this),this._addLike=function(){return a(o.id)},this._removeLike=function(){return l(o.id)},this._isOwn=function(){return c(o._ownerId)},this._isLiked=function(){return o._likeList.some((function(t){var e=t._id;return s(e)}))},this._openPopup=function(){return i({name:o._name,link:o._link})},this._openDeletePopup=function(){return u(o)}}var e,n;return e=t,(n=[{key:"createCard",value:function(){this._element=document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0),this._element.id=this.id,this._likeCounter=this._element.querySelector(".cards__like-counter"),this._likeBtn=this._element.querySelector(".cards__like-btn");var t=this._element.querySelector(".cards__title");return this._imgCard=this._element.querySelector(".cards__image"),this._deleteButton=this._element.querySelector(".cards__delete-btn"),this._isOwn()||this._removeDeleteButton(),this._isLiked()&&this._toogleLike(),this._likeCounter.textContent=this._likeCount,t.textContent=this._name,this._imgCard.src=this._link,this._imgCard.alt=this._name,this._setEventListeners(),this._element}},{key:"_removeDeleteButton",value:function(){this._deleteButton.remove(),delete this._deleteButton}},{key:"_setEventListeners",value:function(){this._deleteButton&&this._deleteButton.addEventListener("click",this._openDeletePopup),this._likeBtn.addEventListener("click",this._handleLikeClick),this._imgCard.addEventListener("click",this._openPopup)}},{key:"_handleClickLike",value:function(){this._likeBtn.classList.toggle("cards__like-btn_active"),this._likeBtn.classList.contains("cards__like-btn_active")?this._addLike():this._removeLike()}},{key:"_toogleLike",value:function(){this._likeBtn.classList.toggle("cards__like-btn_active")}},{key:"renderLikes",value:function(t){this._likeCounter.textContent=t}},{key:"deleteCard",value:function(){this._element.remove()}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._handleSubmit=e,n}return e=u,(n=[{key:"open",value:function(t){q(A(u.prototype),"open",this).call(this),this._card=t}},{key:"setEventListeners",value:function(){var t=this;q(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._card)}))}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var F=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._token=e}var e,n;return e=t,(n=[{key:"getCardsInfo",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards",{headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}},{key:"getProfileInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-65/users/me",{headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}},{key:"setProfileInfo",value:function(t){return fetch("https://nomoreparties.co/v1/cohort-65/users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}},{key:"setProfileAvatar",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar ",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}},{key:"addNewCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards",{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}},{key:"deleteCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards/".concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t:Promise.reject(t)}))}},{key:"addLike",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards/".concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}},{key:"removeLike",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards/".concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject(t.error)}))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())("547b1838-f8d8-4d3c-9159-5143d62a0fab"),N=new E({about:".profile__subtitle",name:".profile__title",avatar:".profile__image"}),U=new S(".popup_type_avatar-profile",(function(t){U.loadingStateButton(),F.setProfileAvatar(t).then((function(){Q(),N.avatar.onload=function(){U.close(),U.onloadStateButton()}}))})),J=new m(".popup_type_image"),$=new S(".popup_type_edit-profile",(function(t){$.loadingStateButton(),F.setProfileInfo(t).then((function(){Q(),$.onloadStateButton(),$.close()})).catch((function(t){return console.log(t)}))})),H=new D(".popup_type_delete-card",(function(t){var e=t.id;F.deleteCard(e).then((function(){t.deleteCard(),H.close()})).catch((function(t){return console.log(t)}))})),M=new S(".popup_type_add-card",(function(t){M.loadingStateButton(),F.addNewCard(t).then((function(t){var e=G(t);M.onloadStateButton(),K.addItem(e),M.close()})).catch((function(t){return console.log(t)}))}));function G(t){var e=new B(t,"#template-card",{handleClickImage:function(t){J.open(t)},handleClickDelete:function(t){H.open(t)},isOwn:function(t){return t===N.getUserInfo().id},addLike:function(t){F.addLike(t).then((function(t){var n=t.likes.length;e.renderLikes(n)})).catch((function(t){return console.log(t)}))},removeLike:function(t){F.removeLike(t).then((function(t){var n=t.likes.length;e.renderLikes(n)})).catch((function(t){return console.log(t)}))},isLiked:function(t){return N.getUserInfo().id===t}});return e.createCard()}var K=new C({renderer:function(t){var e=G(t);K.addItem(e)}},".cards__container");function Q(){return F.getProfileInfo().then((function(t){return N.setUserInfo(t)})).catch((function(t){return console.log(t)}))}Q().then((function(){F.getCardsInfo().then((function(t){K.renderItems(t.reverse())})).catch((function(t){return console.log(t)}))}));var W={};Array.from(document.forms).forEach((function(t){var n=new c(e,t),r=n.formElement.getAttribute("name");W[r]=n,n.enableValidation()})),Array.from([$,J,M,H,U]).forEach((function(t){return t.setEventListeners()})),o.addEventListener("click",(function(){M.open(),W["popup-form-cards"].renderForm()})),r.addEventListener("click",(function(){$.open();var t=N.getUserInfo();$.setInputValues(t),W["popup-form-edit"].renderForm()})),n.addEventListener("click",(function(){W["avatar-profile"].renderForm(),U.setInputValues(),U.open()}))})();
//# sourceMappingURL=main.js.map