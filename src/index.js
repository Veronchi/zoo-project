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

let logInMain = document.getElementById('log-in__main');

let newAccountMain = document.getElementById('popup__create-account-main');

let visibility = false;

function closePopup(status) {
  if(status === true) {
    newAccountMain.style.visibility = "visible";
  } else if(status === false) {
    newAccountMain.style.visibility = "hidden";
  }
};

logInMain.addEventListener('click', function(){
  visibility = true;

  closePopup(visibility);
});

mainBody.addEventListener('click', function(event){
  let target = event.target;

  if(target.closest('.auth__login')) return;

  if(!(target.closest('.popup'))) {
    visibility = false;
  }
  
  closePopup(visibility);
});
