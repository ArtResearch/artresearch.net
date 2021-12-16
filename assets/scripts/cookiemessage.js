/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @michelakis
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
       <h4>Cookie Warning</h4>
            <p>
            This website stores data such as cookies to enable site functionality including analytics and personalization. By using this website, you automatically accept that we use cookies. 
            </p>
            <div class="CookieButtons">
                <button type="button" class="AcceptButton" id="btnAccept">
                    Got it!
                </button>
                
            </div>
    </div>
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

// function eraseCookie(name) {
//   document.cookie =
//     name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// }

function cookieConsent() {
   
  if (getCookie("RSCookies")==null) {
    //  console.log(getCookie("RSCookies"));
      $(".CookieMessageContainer").show();
      $(".Cookiemessage").show();
    // this._shadowRoot.querySelectorAll(".CookieMessageContainer");
    //  console.log(getCookie("RSCookies"));
    //  console.log("did not found");
  }else{
     console.log(getCookie("RSCookies"));
    $(".CookieMessageContainer").hide();
    $(".Cookiemessage").hide();
    // console.log("Found");
    // console.log(getCookie("RSCookies"));
  }
}


function AcceptCookie() {
  // console.log("ACCEPT");
  setCookie("RSCookies", "RStestcookie", 999);
  cookieConsent();
}

// load

  // cookieConsent();
// window.onload = function () {
// cookieConsent();
// };
  }
}
customElements.define("cookie-message", CookieMsg);
