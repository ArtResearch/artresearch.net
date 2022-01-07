/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @sophisid
 */

/**
 * Select an element by id and calls the click function
 * Requires targetId & keyboardKey attributes
 *
 * @class CookieMsg
 * @extends {HTMLElement}
 */
class CookieMsg extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `
    <div class ="CookieMessageContainer">
       <h4 style="font-size: 24px !important;
                  margin-top: 10px !important;
                  margin-bottom: 10px !important;">Cookie Warning</h4>
            <p>
            This website stores data such as cookies to enable site functionality including analytics and personalization. By using this website, you automatically accept that we use cookies. 
            </p>
            <div class="CookieButtons">
                <button type="button" class="AcceptButton button-75 " id="btnAccept">
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
  const Container = this._shadowRoot.querySelectorAll(".CookieMessageContainer");
   const btnACC = this._shadowRoot.querySelectorAll(".AcceptButton");
  // const btnDENY = this._shadowRoot.querySelectorAll(".DenyButton");
  document.cookie = "name=RSCookies; SameSite=None; Secure";
  btnACC[0].addEventListener("click", AcceptCookie);
  $(".CookieMessageContainer").hide();
  $(".Cookiemessage").hide();
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
   
  if (getCookie("RSCookies")==null) {
      $(".CookieMessageContainer").show();
      $(".Cookiemessage").show();
  
  }else{
     console.log(getCookie("RSCookies"));
    $(".CookieMessageContainer").hide();
    $(".Cookiemessage").hide();
  }
}


function AcceptCookie() {

  setCookie("RSCookies", "RStestcookie", 999);
  cookieConsent();
}

// load
$(document).ready(function () {
   cookieConsent();
});

  }
}
customElements.define("cookie-message", CookieMsg);
