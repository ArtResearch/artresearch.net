/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @sophisid
 */

/**
 * Select an element by id and calls the click function
 * Requires targetId & keyboardKey attributes
 *
 * @class MyCopyright
 * @extends {HTMLElement}
 */
class MyCopyright extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML ='<p>© ' + new Date().getFullYear() + ' PHAROS the International Association of Photo Archives</p>';
 
  }
}
customElements.define("my-copyright", MyCopyright);

