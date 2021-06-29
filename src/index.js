import './css/fonts.css';
import './css/style.css';
import './css/mapp.css';
import './css/error-page.css';
import './css/zoo-page.css';
import './css/normalize.css';
import './css/media.css';
import './css/media-map.css';
import './css/media-error.css';
import './css/media-zoo.css';

"use strict";

let mainBody = document.querySelector('body');
let visibility = false;
let whatPopupOpen = null;
let header = document.querySelector('header');
let BlurDiv = document.querySelector('.blur-div');
let permanentAccMain = document.getElementById('popup__log-in-main');
let newAccountMain = document.getElementById('popup__create-account-main');

header.addEventListener('click', function (event) {
  let target = event.target;
  let popupBtn = target.closest('.popup__btn');

  if (!popupBtn) return;

  if (popupBtn.classList.contains('auth__login')) {
    whatPopupOpen = permanentAccMain;
    openPopup(whatPopupOpen);

  } else if (popupBtn.classList.contains('auth__signup')) {
    whatPopupOpen = newAccountMain;
    openPopup(whatPopupOpen);
  }
});

function openPopup(item) {
  item.style.visibility = "visible";
  visibility = true;
  blurBackground();
}

function closePopup(status) {
  if(status) {
    whatPopupOpen.style.visibility = "hidden";
    BlurDiv.style.visibility = 'hidden';
    visibility = false;
  }
};

function blurBackground() {
  BlurDiv.style.visibility = 'visible';
  mainBody.style.position = 'fixed';
}

mainBody.addEventListener('click', function (event) {
  let target = event.target;

  if (target.closest('.popup__btn')) return;
// debugger
  if (!(target.closest('.popup'))) {
    closePopup(visibility);
  } else if(target.closest('.popup__titles')) {
    togglePopup(target);
  }
});

function togglePopup(target) {
  if(target.closest('.popup__title-left')) {
    closePopup(visibility);
    openPopup(newAccountMain);
    whatPopupOpen = newAccountMain;
    visibility = true;
  } else if(target.closest('.popup__title-right')) {
    closePopup(visibility);
    openPopup(permanentAccMain);
    whatPopupOpen = permanentAccMain;
    visibility = true;
  }
}