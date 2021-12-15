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
      <div class="toast bg-dark text-white w-100 mw-100" role="alert" data-autohide="false">
       <h4>Cookie Warning</h4>
            <p>
            This website stores data such as cookies to enable site functionality including analytics and personalization. By using this website, you automatically accept that we use cookies. 
            </p>
            <div class="ml-auto">
                <button type="button" class="btn btn-outline-light mr-3" id="btnDeny">
                    Deny
                </button>
                <button type="button" class="btn btn-light" id="btnAccept">
                    Accept
                </button>
                </div>
            </div>
    </div>
    `;
  Container = this._shadowRoot.querySelectorAll(".CookieMessageContainer");
  const btnACC= this._shadowRoot.getElementById("btnAccept");
 const btnDENY= this._shadowRoot.getElementById("btnDeny");


function cookieConsent() {
        Container.style.display = "block";
}

btnACC.onclick= function ToggleHide(){
  Container.remove();
   Container.style.display = 'none';
}
btnDENY.onclick = function ToggleHide() {
  Container.remove();
  Container.style.display = "none";
};

cookieConsent();

  }
}

customElements.define("cookie-message", CookieMsg);
