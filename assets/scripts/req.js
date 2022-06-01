/**
 * Uploads image and get URL
 *
 * @class ReqSolr
 * @extends {HTMLElement}
 */
class ReqSolr extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    const endpoint = "https://api.imgur.com/3/image";
    const core = this.getAttribute("core");
    const keyword = this.getAttribute("keyword");
    const artworks = "http://213.171.209.34:8983/solr/artworks_v8/select?defType=dismax&q=mona%20lisa";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", artworks);

    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
  }
}

customElements.define("req-element", ReqSolr);
