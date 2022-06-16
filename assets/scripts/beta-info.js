/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @sophisid
 */

/**
 * Displays the beta information, the message appears every 24hours
 * 
 * @class InfoBeta
 * @extends {HTMLElement}
 */
class InfoBeta extends HTMLElement {
  constructor() {
    super();
    // the only way to implement js in RS
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `
    <div class ="info-beta-container">
       <h4 style="font-size: 24px !important;
                  margin-top: 10px !important;
                  margin-bottom: 10px !important;">Note !</h4>
            <p>ArtResearch.net provides access to images and data from multiple sources in different languages and formats.</p>
            <p>Curators of partner institutions are currently aligning artists, repositories, photographers, techniques and other data to improve search results.</p>
            <p>Contextual search and facet functionalities are <span style="text-color: rgb(220, 54, 54);">in progress</span></p>
            <div class="info-beta-buttons">
                <button type="button" class="accept-btn button-75 " id="accept-btn">
                    Got it!
                </button>
                
            </div>
    </div>
    <style>
    .button-75 {
            box-shadow: rgb(0 0 0 / 15%) 0px 0px 15px;
            align-items: center;
            background-image: linear-gradient(135deg, #083e59 45%, #528daf);
            border: 0;
            border-radius: 10px;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            font-family: "Codec cold",sans-serif;
            font-size: 16px;
            font-weight: 700;
            height: 54px;
            justify-content: center;
            letter-spacing: .4px;
            line-height: 1;
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 3px;
            text-decoration: none;
            text-transform: uppercase;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
}

.button-75:active {
  outline: 0;
}

.button-75:hover {
  outline: 0;
}

.button-75 span {
  transition: all 200ms;
}

.button-75:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 991px) {
  .button-75 {
    font-size: 15px;
    height: 50px;
  }

  .button-75 span {
    line-height: 50px;
  }
}
    </style>
    `;
  const Container2 = this._shadowRoot.querySelectorAll(".info-beta-container");
    const newLocal = "#accept-btn";
   const btnACC = this._shadowRoot.querySelectorAll(newLocal);
  // const btnDENY = this._shadowRoot.querySelectorAll(".DenyButton");
  document.cookie = "name=InfoBetaCookie; SameSite=None; Secure";
  btnACC[0].addEventListener("click", AcceptCookie);
  $(".info-beta-container").hide();
  $(".info-beta-message").hide();
  // btnDENY[0].addEventListener("click", DenyCookie);


function setCookie(name, value, days) {
  var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  
 document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
    // let decodedCookie = decodeURIComponent(document.cookie);
  var ca = document.cookie.split(";"); 
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(nameEQ) == 0)  return c.substring(nameEQ.length, c.length);
  }
  return null;
}



function cookieConsent() {
   
  if (getCookie("InfoBetaCookie")==null) {
      $(".info-beta-container").show();
      $(".info-beta-message").show();
      
  
  }else{
     console.log(getCookie("InfoBetaCookie"));
    $(".info-beta-container").hide();
    $(".info-beta-message").hide();
  }
}


function AcceptCookie() {

  setCookie("InfoBetaCookie", "RSinfocookie", 1);
  cookieConsent();
}

// load
$(document).ready(function () {
   cookieConsent();
});

  }
}
customElements.define("beta-info", InfoBeta);

