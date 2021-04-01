/**
 * This is an indelectual property of SmartUp Data Solutions
 * Copying this software may result in legal implications.
 * Developed by @michelakis
 */

class InsertUrlParam extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["key", "value"];
  }
  attributeChangedCallback(key, value, oldValue, newValue) {}
  connectedCallback() {
    let key = this.getAttribute("key");
    let value = this.getAttribute("value");
    this.setParam(key, value);
  }

  setParam(key, value) {
    var new_url = "/" + window.location.search;
    console.log(key)
    
    console.log(value)
    var search_params = new URLSearchParams(window.location.search); 
    // new value of "id" is set to "101"
    search_params.set(key, value);
    var newParams = search_params.toString();

    console.log(newParams)
    let finalurl =
      window.location.pathname + '?'+
      newParams
      console.log(finalurl)
    history.pushState({}, null, finalurl);
  }
}

customElements.define("insert-url-param", InsertUrlParam);
