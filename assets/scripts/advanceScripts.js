/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @michelakis
 */

/**
 * Select an element by id and calls the click function
 * Requires targetId & keyboardKey attributes
 *
 * @class ClickIt
 * @extends {HTMLElement}
 */
class ClickIt extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["keyboardKey", "targetId"];
  }
  connectedCallback() {
    this.addListener(
      this.getAttribute("keyboardKey"),
      this.getAttribute("targetId")
    );
  }

  addListener(keyboardKey, targetId) {
    window.addEventListener("keypress", function (event) {
      if (event.key === keyboardKey) {
        event.preventDefault();
        document.getElementById(targetId).click();
      }
    });
  }
}

customElements.define("click-element", ClickIt);

/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @michelakis
 */

/**
 * Select elements using querySelectorAll
 * Add window.scrollTo(top) on click
 *
 * @class ScrollToTop
 * @extends {HTMLElement}
 */
class ScrollToTop extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["querySelector"];
  }
  connectedCallback() {
    this.addListener(this.getAttribute("querySelector"));
  }

  addListener(querySelector) {
    let elements = document.querySelectorAll(querySelector);
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.addEventListener("click", function (event) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    }
  }
}
customElements.define("scroll-to-top", ScrollToTop);

/**
 * This is an indelectual property of AdvanceServices
 * Copying this software may result in legal implications.
 * Developed by @michelakis
 */

/**
 * Selects an element based on querySelector property
 * Adds print functionality on click
 *
 * @class PrinEntity
 * @extends {HTMLElement}
 */
class PrintEntity extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["querySelector"];
  }
  connectedCallback() {
    this.addListener(this.getAttribute("querySelector"));
  }

  addListener(querySelector) {
    let element = document.querySelector(querySelector);
    element.addEventListener("click", function (event) {
      var title = document.getElementById("printableTitle")
        ? document.getElementById("printableTitle").innerHTML
        : "";
      var images = document.getElementById("printableImages")
        ? document.getElementById("printableImages").innerHTML
        : "";
      var info = document.getElementById("printableInfo")
        ? document.getElementById("printableInfo").innerHTML
        : "";
      var printWindow = window.open("", "", "height=400,width=800");
      printWindow.document.write(
        "<html><head><title>" + window.document.URL + "</title>"
      );
      printWindow.document.write(`<style> .rs-page__summary-image{
      display:flex; flex-wrap:wrap; } .photographFieldView{ width:100%
      !important; }
      .imageSourceIcon,.multiValueTd,.rs-page__count--field-annotation,.rs-page__count--field-assertion,.sourceIcons{
      display:none !important; } </style>`);
      printWindow.document.write("</head><body>");
      printWindow.document.write("<h2>" + title + "</h2>");
      printWindow.document.write(info);
      printWindow.document.write(images);
      printWindow.document.write("</body>");
      printWindow.document.write("</html>");
      printWindow.document.close();
      printWindow.print();
    });
  }
}
customElements.define("open-print", PrintEntity);
